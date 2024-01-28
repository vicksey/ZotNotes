//import logo from "./logo.svg";
import "./style.css";
import "./App.css";
import { useEffect, useState } from "react";
import * as React from "react";
import "./index.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Projects } from "./Projects";
import { Messages } from "./Messages";
import { Sidebar } from "./Sidebar.jsx";

import { Notepage } from "./Notepage.jsx";

import { Profile } from "./Profile.jsx";

import { Navbar } from "./Navbar.jsx";

function App() {
  return (
    <>
      <div className={"app-container"}>
        <Navbar />
        <div className="app-content">
          <Sidebar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Projects />
                  <Messages />
                </>
              }
            ></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/notepage" element={<Notepage />}></Route>
          </Routes>
        </div>
      </div>
      {/* <script src="./script.js"></script> */}
    </>
  );
}

export default App;
