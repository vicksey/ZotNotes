//import logo from "./logo.svg";
import "./style.css";
import "./App.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (darkModeEnabled) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkModeEnabled]);

  function clicked() {
    setDarkModeEnabled(!darkModeEnabled);
    console.log("clicked");
  }

  return (
    <>
      <div className="app-header">
        <div className="app-header-left">
          <span className="app-icon"></span>
          <p className="app-name">Zotnotes</p>
          <div className="search-wrapper">
            <input className="search-input" type="text" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="feather feather-search"
              viewBox="0 0 24 24"
            >
              <defs></defs>
              <circle cx="11" cy="11" r="8"></circle>
              <path d="M21 21l-4.35-4.35"></path>
            </svg>
          </div>
        </div>
        <div className="app-header-right">
          <button
            className="mode-switch"
            title="Switch Theme"
            onClick={clicked}
          >
            {darkModeEnabled + " "}
            <svg
              className="moon"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <defs></defs>
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
          </button>

          <button className="profile-btn" onClick={() => navigate("/profile")}>
            <img
              src="https://assets.codepen.io/3306515/IMG_2025.jpg"
              alt="Description"
            />
            <span>Petr</span>
          </button>
        </div>
      </div>
    </>
  );
}
