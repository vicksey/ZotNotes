from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from openai import OpenAI
from zilliz_search import get_search_results

app = FastAPI(root_path="/api")

# Your OpenAI API key
OPENAI_API_KEY = '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'
client = OpenAI(api_key=OPENAI_API_KEY)

class QuizRequest(BaseModel):
    question_type: str
    question_number: int
    textbook_text: str

class QuizResponse(BaseModel):
    created_quiz: str


@app.post("/generate_quiz")
def generate_quiz(quiz_request: QuizRequest):
    conversation = [
        {"role": "system", "content": f"Create a {quiz_request.question_number} question {quiz_request.question_type} quiz for a student preparing for an assessment. Only provide the questions."},
        # {"role": "system", "content": f"The quiz is about {quiz_request.topic}"}
        {"role": "user", "content": f"The quiz should be soley based on the following text : {quiz_request.textbook_text}"}
    ]

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=conversation
    )

    created_quiz = response.choices[0].message.content
    app.state.created_quiz = created_quiz
    return {"created_quiz": created_quiz}



@app.post("/generate_quiz_from_text/")
def generate_textbook_quiz(number_questions: int):
    quiz_request = QuizRequest(question_type='multiple choice',question_number=number_questions, textbook_text=get_search_results())
    conversation = [
        {"role": "system", "content": f"Create a {quiz_request.question_number} question {quiz_request.question_type} quiz for a student preparing for an assessment. Only provide the questions."},
        # {"role": "system", "content": f"The quiz is about {quiz_request.topic}"}
        {"role": "user", "content": f"The quiz should be soley based on the following text from the textbook: {get_search_results()}"}
    ]

    response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=conversation
    )

    created_quiz = response.choices[0].message.content
    app.state.created_quiz = created_quiz
    return {"created_quiz": created_quiz}



class UserAnswersRequest(BaseModel):
    user_answers: list

@app.post("/evaluate_answers")
def evaluate_answers(user_answers_request: UserAnswersRequest):
    conversation = [
        {"role": "assistant", "content": app.state.created_quiz},
    ]

    # Add user answers to the conversation
    for i, answer in enumerate(user_answers_request.user_answers):
        conversation.append({"role": "user", "content": f"Answer for question {i + 1}: {answer}"})
    conversation.append({"role": "user", "content": "Please grade and provide a score. Only explain the answers I got wrong in order. Offer a very short complement or encouragement! Do not end with a question."})

    correct_answers_response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=conversation
    )

    
    new_response = correct_answers_response.choices[0].message.content
    conversation.append({"role": "assistant", "content" : new_response})
    app.state.last_conversation = conversation
    correct_answers = correct_answers_response.choices[0].message.content
    return {"correct_answers": correct_answers}

class UserQuestionRequest(BaseModel):
    user_question: str

@app.post("/additional_questions")
def additional_questions(user_question: UserQuestionRequest):
    app.state.last_conversation.append(({"role": "user", "content" : user_question}))
    new_response = client.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=app.state.last_conversation
    )
    app.state.last_conversation.append(({"role": "assistant", "content" : new_response.choices[0].message.content}))
    return{"response": new_response}
