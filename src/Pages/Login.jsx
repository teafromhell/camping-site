import React from "react";
import "./Login.scss";
import logo from "../Assets/Logo.svg";
import { Link } from "react-router-dom";
import user from "../Assets/User Testimonial.svg";

function Login() {
  return (
    <div className="login">
      <div className="login__empty"></div>
      <div className="login__navbar">
        <img src={logo} alt="logo" />
        <Link className="login__backto-link" to={"/campgrounds"}>
          {" "}
          <p>Back to campgrounds</p>
        </Link>
      </div>
      <div className="login__left">
        <b>Start exploring camps from all around the world</b>
        <form action="">
          <label htmlFor="">Username</label>
          <input type="text" placeholder="Enter Your Username" />
          <label htmlFor="">Password</label>
          <input type="text" placeholder="Enter Your Password" />
        </form>
        <button>Login</button>
        <div>
          <span>Not a user yet?</span>
          <Link to="/signup">
            {" "}
            <span className="login__signin-span">Create an account</span>
          </Link>
        </div>
      </div>
      <div className="login__empty"></div>
      <div className="login__right">
        <div></div>
        <div>
          <b className="citation">
            "YelpCamp has honestly saved me hours of research time, and the
            camps on here are definitely well picked and added."
          </b>
          <div>
            <div className="login__username">
              <img src={user} alt="user" />
              <div>
                <b>May Andrews</b>
                <p>Professional Hiker</p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Login;
