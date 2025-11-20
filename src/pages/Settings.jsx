import React from "react";
import packag from "../../package.json";
import { CiLogout } from "react-icons/ci";
import ThemeToggle from "../components/ThemeToggle";
import "../styles/settings.scss";
export default function Settings({ onLogout }) {
  return (
    <>
      <div className="settings-container">
        <h1>Settings</h1>
        <div className="settings-sections">
          <span>Dark and Light mode</span>
          <ThemeToggle />
        </div>
        <div className="settings-sections">
          <span>Logout from your accout</span>
          <CiLogout className="icons" onClick={onLogout} />
        </div>
        <div className="settings-sections">
          <span>Current Version</span>
          <i>{packag.version}</i>
        </div>
      </div>
    </>
  );
}
