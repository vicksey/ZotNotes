import React, { useState } from "react";

export function Notepad() {
  const [note, setNote] = useState("");

  const handleChange = (e) => {
    setNote(e.target.value);
  };

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
      </div>
    </div>
  );
}
