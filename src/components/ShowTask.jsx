import React, { useEffect, useState } from "react";
import "../styles/showtask.scss";
import { useFilter } from "../context/FilterContext";
import { useNavigate } from "react-router-dom";
export default function ShowTask() {
  const { filteredTasks } = useFilter();
  const [highlight, setHighlight] = useState(null);
  const [showBtn, setShowBtn] = useState(null);
  const today = new Date();
  // const [tasklist, setTaskList] = useState([]);
  const handleHighLighted = (key) => {
    setHighlight(key);
    setShowBtn(key);
  };

  const deleteTask = (key) => {
    const warning = confirm("Delete Task ?");
    if (!warning) {
      return;
    }
    const tasks = JSON.parse(localStorage.getItem("list")) || [];
    const updatedTasks = tasks.filter((item, index) => index !== key);
    localStorage.setItem("list", JSON.stringify(updatedTasks));
    window.location.reload();
  };

  const completedTask = (key) => {
    const tasks = JSON.parse(localStorage.getItem("list")) || [];
    tasks[key] = {
      ...tasks[key],
      status: "completed",
    };
    localStorage.setItem("list", JSON.stringify(tasks));
  };

  const editTask = (key) => {
    navigate("/new", { state: { key } });
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
                  <span
                    className={`${
                      task.status === "completed"
                        ? "success"
                        : task.status === "pending"
                        ? "warning"
                        : "red"
                    }`}
                  >
                    <strong>Status</strong> {task.status}
                  </span>
                </div>
              </div>

              {showBtn == key && (
                <div className="status btn-group">
                  <span className="" onClick={() => completedTask(key)}>
                    {" "}
                    completed
                  </span>
                  <span className="" onClick={() => deleteTask(key)}>
                    delete
                  </span>
                  <span onClick={() => editTask(key)}>edit task</span>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </>
  );
}
