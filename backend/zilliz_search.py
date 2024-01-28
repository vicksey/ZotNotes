from fastapi import FastAPI
from pymilvus import MilvusClient
from langchain_openai import OpenAIEmbeddings

app = FastAPI()

CLUSTER_ENDPOINT = "https://in03-3e5c99cbd542d30.api.gcp-us-west1.zillizcloud.com"  # Set your cluster endpoint
TOKEN = "2e5dfdc1bb80f259073e38449ec71f5bfb5e71eb07f3d8aa9e72ab6d4e717872573720eb43c9c0836b498544d94a8e1feab0280d"  # Set your token
COLLECTION_NAME = "IrvineHacks2024"
OPENAI_API_KEY = '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'


@app.post("/textbook_sentences/")
async def get_search_results(query: str, COLLECTION_NAME = "IrvineHacks2024"):
    client = MilvusClient(
        uri=CLUSTER_ENDPOINT,
        token=TOKEN
    )

    embedding = OpenAIEmbeddings(openai_api_key=OPENAI_API_KEY)
    query_embedding = embedding.embed_query(query)
    data = {"sentence": query, "sentence_vector": query_embedding}

    amount = 50
    res = client.search(
        collection_name=COLLECTION_NAME,
        data=[data["sentence_vector"]],
        output_fields=["sentence"],
        limit=amount
    )

    search_results = ''
    for i in res[0]:
        search_results += i["entity"]['sentence'] + '\n'

    return {"search_results": search_results}