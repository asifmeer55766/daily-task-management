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
                <div className="status">
                  <span>
                    <strong> Date</strong> {task.date}
                  </span>
                  <span>
                    <strong>Category</strong> {task.category}
                  </span>
                  <span>
                    <strong>Status</strong> Pending
                  </span>
                </div>
              </div>

              {showBtn == key && (
                <div className="status btn-group">
                  <span className=""> completed</span>
                  <span className="">delete</span>
                  <span className="">edit task </span>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
}
