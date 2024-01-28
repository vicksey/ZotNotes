import React, { useState } from "react";

export function Notepad({setOutputCallback}) {
  const [note, setNote] = useState("");
  const [output, setOutput] = useState("");
  const [questionNumber, setQuestionNumber] = useState(2); // Initialize with default value

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  const handleQuestionNumberChange = (e) => {
    setQuestionNumber(parseInt(e.target.value, 10)); // Parse input as an integer
  };

  function sendReq() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      textbook_text: note,
      question_type: "multiple choice",
      question_number: questionNumber,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/api/generate_quiz", requestOptions)
      .then((response) => response.json())
      .then((result) => {setOutput(result.created_quiz);setOutputCallback(result.created_quiz);})
      .catch((error) => console.log("error", error));
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column", // Stacking elements vertically
        alignItems: "center",
        justifyContent: "start",
        height: "100vh",
      }}
    >
      <textarea
        value={note}
        onChange={handleChange}
        wrap="soft"
        placeholder="Start typing your note here..."
        style={{
          width: "35vw",
          height: "60vh",
          padding: "10px",
          borderRadius: "35px",
          border: "1px solid #ccc",
          fontSize: "16px",
          resize: "none",
          overflow: "auto",
          backgroundColor: "rgba(0, 0, 0, 0)",
          color: "black", // Text color
          // Placeholder styles
          "::placeholder": {
            color: "black", // Placeholder text color
            paddingLeft: "5%", // Slight alignment to the right
          },
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center", // Centers the buttons horizontally
          alignItems: "center", // Centers the buttons vertically
          gap: "20px", // Space between buttons
          marginTop: "20px",
        }}
      >
        <input
          type="number"
          value={questionNumber}
          onChange={handleQuestionNumberChange}
          style={{
            width: "60px",
            padding: "8px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "16px",
          }}
        />

        <button
          style={{
            padding: "10px 15px",
            borderRadius: "15px",
            backgroundColor: "#4a4ae6",
            color: "white",
            cursor: "pointer",
            border: "none",
          }}
          onClick={sendReq}
        >
          Make Quiz
        </button>

        <button
          style={{
            padding: "10px 15px",
            borderRadius: "15px",
            backgroundColor: "#4a4ae6",
            color: "white",
            cursor: "pointer",
            border: "none",
          }}
        >
          Upload File
        </button>
          
        <p>{output}</p>
      </div>
    </div>
  );
}







// import React, { useState } from "react";

// export function Notepad() {
//   const [note, setNote] = useState("");
//   const [output, setOutput] = useState("");

//   const handleChange = (e) => {
//     setNote(e.target.value);
//   };

//   function sendReq() {
//     var myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//   // parameters
//     var raw = JSON.stringify({
//       textbook_text: note,
//       question_type: "multiple choice",
//       question_number: 2,
//     });

//     var requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow",
//     };

//     fetch("/api/generate_quiz", requestOptions)
//       .then((response) => response.json())
//       //.then(result => console.log(result))
//       .then((result) => setOutput(result.created_quiz))
//       .catch((error) => console.log("error", error));
//   }

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column", // Stacking elements vertically
//         alignItems: "center",
//         justifyContent: "start",
//         height: "100vh",
//       }}
//     >
//       <textarea
//         value={note}
//         onChange={handleChange}
//         wrap="soft"
//         placeholder="Start typing your note here..."
//         style={{
//           width: "35vw",
//           height: "60vh",
//           padding: "10px",
//           borderRadius: "35px",
//           border: "1px solid #ccc",
//           fontSize: "16px",
//           resize: "none",
//           overflow: "auto",
//           backgroundColor: "rgba(0, 0, 0, 0)",
//           color: "black", // Text color
//           // Placeholder styles
//           "::placeholder": {
//             color: "black", // Placeholder text color
//             paddingLeft: "5%", // Slight alignment to the right
//           },
//         }}
//       />

//       <div
//         style={{
//           display: "flex",
//           justifyContent: "center", // Centers the buttons horizontally
//           alignItems: "center", // Centers the buttons vertically
//           gap: "20px", // Space between buttons
//           marginTop: "20px",
//         }}
//       >
//         <button
//           style={{
//             padding: "10px 15px",
//             borderRadius: "15px",
//             backgroundColor: "#4a4ae6",
//             color: "white",
//             cursor: "pointer",
//             border: "none",
//           }}
//           onClick={sendReq}
//         >
//           Make Quiz
//         </button>

//         <button
//           style={{
//             padding: "10px 15px",
//             borderRadius: "15px",
//             backgroundColor: "#4a4ae6",
//             color: "white",
//             cursor: "pointer",
//             border: "none",
//           }}
//         >
//           Upload File
//         </button>
          
//         <p>{ output}</p>
//       </div>
//     </div>
//   );
// }
