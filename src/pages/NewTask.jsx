import React, { useState, useEffect } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import "../styles/newtask.scss";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { useFilter } from "../context/FilterContext";

export default function NewTask() {
  const location = useLocation();
  const editKey = location.state?.key;

  const { setData } = useFilter();

  const [task, setTask] = useState({
    category: "",
    date: "",
    text: "",
    status: "pending",
  });

  const [list, setList] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("list")) || [];
    setList(saved);

    if (editKey !== undefined) {
      setTask(saved[editKey]);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));

    const textarea = e.target;

    textarea.style.height = "auto";

    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!task.category || !task.date || !task.text) {
      toast.error("Please fill all fields");
      return;
    }

    let updatedList = [...list];

    if (editKey !== undefined) {
      updatedList[editKey] = task;
      toast.success("Task Updated");
    } else {
      updatedList.push(task);
      toast.success("New Task Added");
    }

    setList(updatedList);
    localStorage.setItem("list", JSON.stringify(updatedList));

    setData(updatedList);

    // Reset fields
    setTask({
      category: "",
      date: "",
      text: "",
      status: "pending",
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="add-new-task">
          <div className="sections">
            <h1>Add New Task</h1>

            <div className="sec">
              <p>Category</p>
              <select
                name="category"
                value={task.category}
                onChange={handleChange}
              >
                <option value="">Select Category</option>
                <option value="office">Office</option>
                <option value="personal">Personal</option>
                <option value="study">Study</option>
                <option value="important">Important</option>
              </select>
            </div>

            <div className="sec">
              <p>Pick a Deadline</p>
              <input
                type="datetime-local"
                name="date"
                value={task.date}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="input-field">
          <textarea
            type="text"
            placeholder="Start typing...."
            name="text"
            value={task.text}
            onChange={handleChange}
            autoComplete="off"
          ></textarea>

          <button type="submit">
            <CiLocationArrow1 className="icons" />
          </button>
        </div>
      </form>
    </>
  );
}
