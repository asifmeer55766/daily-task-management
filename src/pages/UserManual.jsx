import React from "react";
import { Link } from "react-router-dom";
import "../styles/userManual.scss";
export default function UserManual() {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" }); // 'smooth' for animation, 'start' to align top
    }
  };
  return (
    <>
      <div className="user-manual-container">
        <h1>Welcome to user manual</h1>
        <section className="user-manual-outline">
          <span onClick={() => scrollToElement("introduction")}>
            introduction
          </span>
          <span onClick={() => scrollToElement("use")}>how to use</span>
          <span onClick={() => scrollToElement("storage")}>storage</span>
          <span onClick={() => scrollToElement("terms")}>
            terms and conditions
          </span>
          <span onClick={() => scrollToElement("developer")}>
            Developer Contact
          </span>
        </section>
        <section className="user-manual-sections">
          <div id="introduction">
            <h2>Introduction </h2>
            <p>
              We Welcome you on daily task management app that helps users stay
              on top of their work and personal routines. With clean design and
              easy controls, the app makes it simple to add tasks, mark them as
              completed, organize them by category, and manage your entire day
              with clarity.
            </p>
          </div>
          <div id="use">
            <h2>How to use the app</h2>
            <p>
              <span>Sign in</span> Open the app and click Login / Sign in. Enter
              any valid email (no complicated setup required) and submit. After
              signing in you’ll land on your dashboard where your tasks are
              shown. <span>Add a new task</span> Click the Add Task (or “+”)
              button. Enter the task title and optional description. Choose a
              category (e.g., Personal, Study, Work, Important) so you can
              organize tasks later. Optionally set a priority (Low / Medium /
              High), due date, and reminder. Save the task — it appears in your
              task list immediately. <span>Edit a task</span> Find the task in
              the list and click Edit (pencil icon). Update title, description,
              category, priority, due date, or reminder. Save changes — the task
              updates in real time. <span> Mark complete / Undo</span> Tick the
              checkbox or click the Complete button to mark a task done. To
              revert, open the task and click Undo or uncheck it — it goes back
              to active. <span>Delete a task</span> Click the trash icon on the
              task or open task options → Delete. Confirm deletion if prompted.
              (Deleted tasks may go to a trash/scheduled delete depending on app
              settings.) <span> Manage tasks by category</span> Use the
              Categories filter (left menu or top filter bar) to show only tasks
              from a chosen category. Create new categories from the Categories
              screen (if available) to match how you work.{" "}
              <span>Filter, sort, and search</span> Filter: show All / Active /
              Completed / Overdue tasks. Sort: order by due date, priority, or
              creation time. Search: type keywords in the search box to quickly
              find tasks. <span>Daily planning</span> Each morning, open Today
              or My Day view to see tasks due today. Pick top 3 priorities and
              start working — mark them complete as you go.
              <span> Settings & personalization</span> Open Settings to: Toggle
              Dark / Light theme (changes persist across refreshes). Manage
              notification preferences. Edit your profile (display name, email).
              Backup/export tasks (if available).
            </p>
          </div>
          <div id="storage">
            <h2>App storage</h2>
            <p>
              Your tasks and settings are saved directly in your browser using
              localStorage. This means the data belongs to you, and only you can
              access it from the same device and browser. To keep your
              information safe, follow these tips:{" "}
              <span>Use the same browser and device</span> Your task data is
              stored locally. If you switch to another device or browser, your
              tasks will not appear unless you manually export or transfer them.
              <span> Don’t clear browser data</span> Avoid clearing: Site Data
              Cached Data, Local Storage, Cookies (if used for login) Clearing
              these will delete all saved tasks permanently.{" "}
              <span>Use a private device </span>Avoid using the app on shared or
              public computers—anyone using the same browser can view your
              tasks. <span>Enable browser sync (optional)</span> If your browser
              supports sync (e.g., Chrome Sync), turn it on. This helps keep
              your local data backed up with your browser account. Create
              backups Export your tasks regularly (if your app allows). Save the
              backup file or copy somewhere safe so you can restore your data
              anytime. <span> Avoid Incognito Mode</span> Browsers in
              incognito/private mode do not keep localStorage after the window
              closes. Always use normal mode to avoid data loss.{" "}
              <span>Update your browser </span>A secure and up-to-date browser
              helps protect your local data from bugs or unexpected storage
              issues. <span>Don’t use aggressive “cleaner” tools</span> Some
              PC/mobile cleaners or antivirus apps remove browser storage
              automatically. Exclude your browser or this specific site from
              cleanup if possible.
            </p>
          </div>
          <div id="terms">
            <h2>terms and conditions</h2>
            <p>
              This app is completely free for all users, and anyone can use it
              without restrictions. We do not collect, store, or share any
              personal information. All your tasks and settings are saved only
              in your own browser’s local storage.
            </p>
          </div>
          <div id="developer">
            <h2>Developer Contact Details</h2>

            <p>
              <span>For any enquairy</span>
              Please reach out me at{" "}
              <Link to={"https://asifh.netlify.app"}>asifh.netlify.app</Link>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
