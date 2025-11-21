import React, { useState } from "react";
import "../styles/register.scss";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import { useNavigate } from "react-router-dom";
export default function Login({ onLogin }) {
  const [login, setLoggin] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoggin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const LoginAsGuest = (e) => {
    e.preventDefault();
    const data = { email: "Guest@gmail.com", password: "1234" };
    setLoggin(data);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!login) {
      navigate("/login");
    }
    onLogin(login);
  };
  return (
    <>
      <div className="register-container">
        <h1>Welcome back</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="input-fields">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              onChange={handleChange}
              value={login.email}
              required
            />
          </div>
          <div className="input-fields">
            <label htmlFor="password">Password </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              value={login.password}
              required
            />
          </div>
          <button className="signup" type="submit">
            Login
          </button>
          <div className="auth-using-another">
            <p>------- Or sign in with -------</p>
            <button onClick={LoginAsGuest}>
              <FcGoogle className="icons" /> Sign in with Google
            </button>
            <button onClick={LoginAsGuest}>
              <IoLogoGithub className="icons" /> Sign in using Github
            </button>
            <p>
              Do not have an account? <Link to="/register">Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
