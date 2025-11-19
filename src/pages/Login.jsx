import React from "react";
import "../styles/register.scss";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";
export default function Login() {
  return (
    <>
      <div className="register-container">
        <h1>Welcome back</h1>
        <form action="">
          <div className="input-fields">
            <label for="email">Email </label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="example@gmail.com"
            />
          </div>
          <div className="input-fields">
            <label for="password">Password </label>
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
            />
          </div>
          <button className="signup">Login</button>
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
