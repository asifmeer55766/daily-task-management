import React, { useState } from "react";
import Search from "../components/Search";
import "../styles/home.scss";
import ShowTask from "../components/ShowTask";
export default function Home() {
  const [name, setName] = useState("Asif Hussain");
  return (
    <>
      <div className="home-container">
        <h1>Hello, {name} </h1>
        <Search />
        <section className="sub-home-section">
          <div className="task-of-day"></div>
          <div className="activity">
            <p>all activity</p>
          </div>
          <div className="filter-activity">
            <span>All</span>
            <span>personal</span>
            <span>study</span>
            <span>important</span>
            <span>office task</span>
          </div>
          <div className="show-all-task">
            <ShowTask />
          </div>
        </section>
      </div>
    </>
  );
}
