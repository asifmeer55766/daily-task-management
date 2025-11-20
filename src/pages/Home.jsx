import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import "../styles/home.scss";
import ShowTask from "../components/ShowTask";
import { useFilter } from "../context/FilterContext";

export default function Home() {
  const { setSelectedCategory } = useFilter();
  const user = JSON.parse(localStorage.getItem("loggedInUser")).email;
  const name = user.split("@")[0];
  return (
    <div className="home-container">
      <h1>Hello, {name} </h1>

      {/* SEARCH BOX (sending setSearchText to Search component) */}
      <Search />

      <section className="sub-home-section">
        <div className="activity">
          {" "}
          <p>all activity</p>
          <div className="filter-activity">
            <span onClick={() => setSelectedCategory("all")}>All</span>
            <span onClick={() => setSelectedCategory("personal")}>
              Personal
            </span>
            <span onClick={() => setSelectedCategory("study")}>Study</span>
            <span onClick={() => setSelectedCategory("important")}>
              Important
            </span>
            <span onClick={() => setSelectedCategory("office task")}>
              Office Task
            </span>
          </div>
        </div>

        {/* Passing filtered and searched data */}
        <div className="show-all-task">
          <ShowTask />
        </div>
      </section>
    </div>
  );
}
