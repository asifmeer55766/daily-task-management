import React, { useState } from "react";
import { CiLight } from "react-icons/ci";
import "../styles/themetoggle.scss";
import "../App.css";
import { useTheme } from "../context/ThemeContext";
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div className="theme-toggle ">
        <CiLight className="light" onClick={toggleTheme} />
      </div>
    </>
  );
}
