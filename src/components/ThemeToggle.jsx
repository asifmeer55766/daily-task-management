import React from "react";
import { CiLight } from "react-icons/ci";
import "../styles/themetoggle.scss";
export default function ThemeToggle() {
  return (
    <>
      <div className="theme-toggle">
        <CiLight className="light" />
      </div>
    </>
  );
}
