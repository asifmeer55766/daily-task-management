import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useState, useEffect } from "react";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import NewTask from "./pages/NewTask";
import Settings from "./pages/Settings";
import Upcomming from "./pages/Upcomming";
import NotFound from "./components/NotFound";
import ProtectedRoute from "./components/ProtectedRoutes";
import UserManual from "./pages/UserManual";
import Reminder from "./pages/Reminder";

function App() {
  const [loggedin, setLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("loggedInUser");
    if (user) setLoggedIn(true);
  }, []);

  const handleLogin = (data) => {
    setLoggedIn(true);
    localStorage.setItem("loggedInUser", JSON.stringify(data));
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem("loggedInUser");
  };

  return (
    <>
      <BrowserRouter>
        {/* Show navigation only when logged in */}
        {<Navigation />}

        <Routes>
          {/* Public routes */}
          <Route
            path="/login"
            element={
              !loggedin ? (
                <Login onLogin={handleLogin} />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/register"
            element={!loggedin ? <Register /> : <Navigate to="/" replace />}
          />

          {/* Protected routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute isLoggedIn={loggedin}>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/new"
            element={
              <ProtectedRoute isLoggedIn={loggedin}>
                <NewTask />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings/*"
            element={
              <ProtectedRoute isLoggedIn={loggedin}>
                {loggedin && <Settings onLogout={handleLogout} />}
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="user-manual"
            element={
              <ProtectedRoute isLoggedIn={loggedin}>
                <UserManual />
              </ProtectedRoute>
            }
          />
          <Route
            path="/upcoming"
            element={
              <ProtectedRoute isLoggedIn={loggedin}>
                <Upcomming />
              </ProtectedRoute>
            }
          />
          <Route
            path="/reminder"
            element={
              <ProtectedRoute isLoggedIn={loggedin}>
                <Reminder />
              </ProtectedRoute>
            }
          />

          {/* Catch all unmatched routes */}
          <Route
            path="*"
            element={<Navigate to={loggedin ? "/" : "/login"} replace />}
          />
        </Routes>
      </BrowserRouter>

      <ToastContainer position="top-center" autoClose={1000} />
    </>
  );
}

export default App;
