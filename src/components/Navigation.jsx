import React, { useState } from "react";
import "../styles/navigation.scss";
import {
  CiHome,
  CiBellOn,
  CiSettings,
  CiViewList,
  CiBellOff,
} from "react-icons/ci";
import { IoAddSharp } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const pathMap = {
    home: "/",
    settings: "/settings",
    reminder: "/reminder",
    new: "/new",
    upcoming: "/upcoming",
  };

  const navigatePage = (url) => {
    const path = pathMap[url];

    if (path) {
      // ⭐️ Only navigate, no state toggling needed.
      navigate(path);
    }
  };
  return (
    <>
      <div className="navigation-bar">
        <div
          className={`nav-item ${location.pathname === "/" ? "active" : ""}`}
          onClick={() => navigatePage("home")}
        >
          <CiHome className="nav-icons" />
          <span disabled>Home</span>
        </div>
        <div
          className={`nav-item ${
            location.pathname === "/upcoming" ? "active" : ""
          }`}
          onClick={() => navigatePage("upcoming")}
        >
          <CiViewList className="nav-icons" />
          <span>Upcoming</span>
        </div>
        <div
          className={`nav-item ${location.pathname === "/new" ? "active" : ""}`}
          onClick={() => navigatePage("new")}
        >
          <IoAddSharp className="nav-icons circlePlus" />
        </div>
        <div
          className={`nav-item ${
            location.pathname === "/reminder" ? "active" : ""
          }`}
          onClick={() => navigatePage("reminder")}
        >
          <CiBellOn className="nav-icons" />
          <span>Reminder</span>
        </div>
        <div
          className={`nav-item ${
            location.pathname === "/settings" ? "active" : ""
          }`}
          onClick={() => navigatePage("settings")}
        >
          <CiSettings className="nav-icons" />
          <span>Settings</span>
        </div>
      </div>
    </>
  );
}
