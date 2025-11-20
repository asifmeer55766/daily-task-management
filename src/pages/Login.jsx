import React, { useState } from "react";
import "../styles/register.scss";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
export default function Login({ onLogin }) {
  const [login, setLoggin] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoggin((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(login);
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
            />
          </div>
          <button className="signup" type="submit">
            Login
          </button>
          <div className="auth-using-another">
            <p>------- Or sign in with -------</p>
            <button>
              <FcGoogle className="icons" /> Sign in with Google
            </button>
            <button>
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
