import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Navbar(props) {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [output, setOutput] = useState("");

  useEffect(() => {
    if (darkModeEnabled) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkModeEnabled]);

  const navigate = useNavigate();

  function clicked() {
    setDarkModeEnabled(!darkModeEnabled);
    console.log("clicked");
  }

  function handleSearch() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      searchBar: searchQuery,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch("/search", requestOptions)
      .then((response) => response.json())
      .then((result) => setOutput(result))
      .catch((error) => console.log("error", error));
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="app-header">
      <div className="app-header-left">
        {/* ... Other elements in the left section of your Navbar */}
        <div className="search-wrapper">
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          {/* ... Search icon or button */}
        </div>
      </div>
      <div className="app-header-right">
        {/* ... Other elements in the right section of your Navbar */}
        <button className="mode-switch" title="Switch Theme" onClick={clicked}>
          {darkModeEnabled + " "}
          <svg
            className="moon"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <defs></defs>
            <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
          </svg>
        </button>

        <button className="profile-btn" onClick={() => navigate("/profile")}>
          <img src={props.photo} alt="Description" />
          <span>{props.name}</span>
        </button>
      </div>
      <button className="messages-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-message-circle"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </button>
    </div>
  );
}
