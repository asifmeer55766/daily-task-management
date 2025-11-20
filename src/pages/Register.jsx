import React from "react";
import "../styles/register.scss";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
import Loader from "../components/Loader";
export default function Register() {
  return (
    <>
      <div className="register-container">
        <h1>create an account</h1>
        <form action="">
          <div className="input-fields">
            <label htmlFor="username">User name </label>
            <input
              type="text"
              name="username"
              id=""
              placeholder="e.g. Asif Hussasin"
            />
          </div>
          <div className="input-fields">
            <label htmlFor="email">Email </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="input-fields">
            <label htmlFor="password">Password </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <button className="signup">Sign Up</button>
          <div className="auth-using-another">
            <p>Or sign in with </p>
            <button>
              <FcGoogle className="icons" /> Sign in with Google
            </button>
            <button>
              <IoLogoGithub className="icons" /> Sign in using Github
            </button>
            <p>
              You already have an account? <Link to="/login">login</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
