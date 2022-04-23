import React from "react";
import "./WelcomePage.scss";
import logo from "../Assets/Logo.svg";
import checkmark from "../Assets/Checkmark.svg";
import airbnb from "../Assets/Airbnb.svg";
import booking from "../Assets/Booking.svg";
import plum from "../Assets/Plum Guide.svg";
import ResponsiveImage from "../components/ResponsiveImage";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();
  const campgroundsPage = () => {
    navigate("/campgrounds");
  };
  return (
    <div className="main">
      <div className="main__empty"></div>
      <div className="main__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="main__left">
        <div className="main__text">
          <b>Explore the best camps on Earth.</b>
          <p>
            YelpCamps is a curated list of the best camping spots on Earth.
            Unfiltered and unbiased reviews.
          </p>
          <div className="main__list">
            <img src={checkmark} alt="checkmark" />
            <span> Add your own camp suggestions.</span>
          </div>
          <div className="main__list">
            <img src={checkmark} alt="checkmark" />
            <span>Leave review and experiences.</span>
          </div>
          <div className="main__list">
            <img src={checkmark} alt="checkmark" />
            <span>See locations for all camps.</span>
          </div>
          <button className="main__view-btn" onClick={campgroundsPage}>
            View Campgrounds
          </button>

          <div className="main__partners">
            <div>Partnered with:</div>
            <img src={airbnb} alt="airbnb" />
            <img src={booking} alt="booking" />
            <img src={plum} alt="plum" />
          </div>
        </div>
      </div>
      <div className="main__empty"></div>
      <div className="main__right">
        <ResponsiveImage />
      </div>
    </div>
  );
}

export default WelcomePage;
