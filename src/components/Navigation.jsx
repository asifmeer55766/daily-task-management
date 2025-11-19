import React from "react";
import "../styles/navigation.scss";
import { CiHome, CiMail, CiSettings, CiViewList } from "react-icons/ci";
import { IoAddSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
export default function Navigation() {
  const navigate = useNavigate();

  const navigatePage = (url) => {
    if (url === "home") {
      navigate("/");
    } else if (url === "settings") {
      navigate("/settings");
    } else if (url === "inbox") {
      navigate("/inbox");
    } else if (url === "new") {
      navigate("/new");
    } else if (url === "upcoming") {
      navigate("/upcoming");
    }
  };
  return (
    <>
      <div className="navigation-bar">
        <div className="nav-item" onClick={() => navigatePage("home")}>
          <CiHome className="nav-icons" />
          <span>Home</span>
        </div>
        <div className="nav-item" onClick={() => navigatePage("upcoming")}>
          <CiViewList className="nav-icons" />
          <span>Upcoming</span>
        </div>
        <div className="nav-item" onClick={() => navigatePage("new")}>
          <IoAddSharp className="nav-icons circlePlus" />
        </div>
        <div className="nav-item" onClick={() => navigatePage("inbox")}>
          <CiMail className="nav-icons" />
          <span>Inbox</span>
        </div>
        <div className="nav-item" onClick={() => navigatePage("settings")}>
          <CiSettings className="nav-icons" />
          <span>Settings</span>
        </div>
      </div>
    </>
  );
}
