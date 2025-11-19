import React, { useEffect, useState } from "react";
import "../styles/showtask.scss";
export default function ShowTask() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const storedData = localStorage.getItem("list");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      setData([]);
    }
  }, []);

  useEffect(() => {}, [data]);

  const now = new Date();
  const date = now.toLocaleString();

  return (
    <>
      <div className="get-task-container">
        {data.map((task, key) => (
          <div className="task-box" key={key}>
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
              <span>Date {date}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
