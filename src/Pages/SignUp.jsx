import React from "react";
import "./SignUp.scss";
import logo from "../Assets/Logo.svg";
import { Link } from "react-router-dom";
import user from "../Assets/User Testimonial.svg";

function SignUp() {
  return (
    <div className="signup">
      <div className="signup__empty"></div>
      <div className="signup__navbar">
        <img src={logo} alt="logo" />
        <Link className="signup__backto-link" to={"/campgrounds"}>
          {" "}
          <p>Back to campgrounds</p>
        </Link>
      </div>
      <div className="signup__left">
        <b>Start exploring camps from all around the world</b>
        <form action="">
          <label htmlFor="">Username</label>
          <input type="text" placeholder="Choose Username" />
          <label htmlFor="">Password</label>
          <input type="text" placeholder="Choose Password" />
        </form>
        <button>Create an account</button>
        <div>
          <span>Already a user?</span>
          <Link to={"/login"}>
            {" "}
            <span className="signup__signin-span">Sign in</span>
          </Link>
        </div>
      </div>
      <div className="signup__empty"></div>
      <div className="signup__right">
        <div></div>
        <div>
          <b className="citation">
            "YelpCamp has honestly saved me hours of research time, and the
            camps on here are definitely well picked and added."
          </b>
          <div>
            <div className="signup__username">
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

export default SignUp;
