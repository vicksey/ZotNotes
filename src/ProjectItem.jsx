import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export function ProjectItem({
  date,
  courseName,
  task,
  progress = 100,
  daysLeft,
}) {
  return (
    <Link to={`/course/${courseName}`} className="project-box-wrapper">
      <div >
        <div className="project-box" style={{ backgroundColor: "#e9e7fd" }}>
          <div className="project-box-header">
            <span>{date}</span>
            <div className="more-wrapper">
              <button className="project-btn-more">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-more-vertical"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </button>
            </div>
          </div>
          <div className="project-box-content-header">
            <p className="box-content-header">{courseName}</p>
            <p className="box-content-subheader">Read!</p>
          </div>
          <div className="box-progress-wrapper">
            <p className="box-progress-header">Progress</p>
            <div className="box-progress-bar">
              <span
                className="box-progress"
                style={{ width: progress + "%", backgroundColor: "#4f3ff0" }}
              ></span>
            </div>
            <p className="box-progress-percentage">{progress}%</p>
          </div>
          <div className="project-box-footer">
            <div className="participants">
              <img
                src="https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1215&q=80"
                alt="participant"
              />
              <img
                src="https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2555&q=80"
                alt="participant"
              />
              <button className="add-participant" style={{ color: "#4f3ff0" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-plus"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
            </div>
            <div className="days-left" style={{ color: "#4f3ff0" }}>
              24 Days Left
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
