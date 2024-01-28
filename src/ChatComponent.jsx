import React, { useState } from "react";

export function ChatComponent() {
  const [message, setMessage] = useState("");
  const [savedMessages, setSavedMessages] = useState([]);

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && message) {
      setSavedMessages([...savedMessages, message]);
      setMessage(""); // Clear the input box after saving
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "80vw",
          height: "60vh",
          backgroundColor: "#f0f0f0",
          borderRadius: "15px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Chat box content here */}
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Type a message..."
          style={{
            width: "90%",
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <div
        style={{
          marginLeft: "20px",
          width: "20vw",
          height: "60vh",
          overflowY: "auto",
        }}
      >
        {savedMessages.map((msg, index) => (
          <div
            key={index}
            style={{ padding: "10px", borderBottom: "1px solid #ddd" }}
          >
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
}
