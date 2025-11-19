import React, { useState, useEffect } from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import "../styles/newtask.scss";
import { toast } from "react-toastify";

export default function NewTask() {
  const [task, setTask] = useState({
    category: "",
    date: "",
    text: "",
  });

  const [list, setList] = useState([]);

  // Load previous tasks once
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("list")) || [];
    setList(saved);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!task.category || !task.date || !task.text) {
      toast.error("Please fill all fields");
      return;
    }

    // create new list without mutating state
    const updatedList = [...list, task];

    setList(updatedList);

    // save to local storage
    localStorage.setItem("list", JSON.stringify(updatedList));

    toast.success("New Task Added");

    // reset form
    setTask({
      category: "",
      date: "",
      text: "",
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

        <div className="input-fields">
          <input
            type="text"
            placeholder="write task here..."
            name="text"
            value={task.text}
            onChange={handleChange}
          />

          <button type="submit">
            <CiLocationArrow1 className="icons" />
          </button>
        </div>
      </form>
    </>
  );
}
