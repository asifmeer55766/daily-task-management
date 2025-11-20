import React, { useEffect, useState } from "react";
import "../styles/showtask.scss";
import { useFilter } from "../context/FilterContext";
export default function ShowTask() {
  const { filteredTasks } = useFilter();
  const [highlight, setHighlight] = useState(null);
  const [showBtn, setShowBtn] = useState(null);
  const handleHighLighted = (key) => {
    setHighlight(key);
    setShowBtn(key);
  };
  return (
    <>
      <div className="get-task-container">
        {filteredTasks.length === 0 ? (
          <p>No Task Found </p>
        ) : (
          filteredTasks.map((task, key) => (
            <div
              className={`task-box ${highlight === key ? "selectedbox" : ""}`}
              key={key}
              onClick={() => handleHighLighted(key)}
            >
              <div className="task-title">
                <h2>{task.text}</h2>
                <span>{task.category}</span>
              </div>
              <div className="status">
                <span
                  className={
                    task.status === "overdue"
                      ? "red"
                      : task.status === "pending"
                      ? "warning"
                      : "success"
                  }
                >
                  {task.status ? task.status : "pending"}
                </span>

                <span>Date {task.date}</span>
              </div>
              {showBtn == key && (
                <div className="status btn-group">
                  <span className="success">mark completed</span>
                  <span className="red">delete</span>
                  <span className="warning">edit task </span>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
}
