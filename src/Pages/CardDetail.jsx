import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./CardDetail.scss";
import { Link } from "react-router-dom";
import logo from "../Assets/Logo.svg";
import map from "../Assets/Map.png";
import bubble from "../Assets/Chat Bubble.svg";

function CardDetail({ cards }) {
  const { name } = useParams();
  const navigate = useNavigate();

  const signupPage = () => {
    navigate("/signup");
  };
  return (
    <div className="card">
      <div className="card__empty-left"></div>
      <div className="card__navbar">
        <div className="card__navbar-left">
          <div className="card__logo">
            <Link to="/">
              {" "}
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <Link className="card__link-home" to={"/"}>
            {" "}
            Home{" "}
          </Link>
          <Link className="card__link-camps" to={"/campgrounds"}>
            Campgrounds
          </Link>
        </div>
        <div className="card__navbar-right">
          <Link to="/login" className="card__link-login">
            Login
          </Link>
          <button onClick={signupPage} className="card__create-btn">
            Create an account
          </button>
        </div>
      </div>
      <div className="card__map">
        <img src={map} alt="map" />
      </div>

      {cards
        .filter((item) => item.name === name)
        .map((item) => {
          return (
            <div className="card__more-details">
              <div className="card__image">
                <img src={item.image} alt="" />
              </div>
              <div className="card__name-price">
                <b>{item.name}</b>
                <p className="price">{item.price}</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                labore eaque sequi, esse illo quae dolor quaerat corporis in sit
                quo mollitia, error iusto iure a laudantium magnam, iste
                repudiandae. Accusantium beatae quas, laudantium esse quam
                dignissimos ea molestias explicabo?
              </p>
              <p className="card__submit-p">Submitted by Andrew Mike</p>
            </div>
          );
        })}
      <div className="card__comments">
        <div className="card__single-comment">
          <div className="comment-header">
            <b>Adam Jones</b>
            <p>13h ago</p>
          </div>
          <p>
            Honestly one of the best experiences ever, took us a while to figure
            out how to get there but it was amazing!
          </p>
          <div className="breaker-line"></div>
        </div>
        <div className="card__single-comment">
          <div className="comment-header">
            <b>Isaac Dylan</b>
            <p>1 day ago</p>
          </div>
          <p>
            Traveling changes you as a person, you gain more perspective, this
            is the perfect spot to do that.
          </p>
          <div className="breaker-line"></div>
        </div>
        <div className="card__btn-block">
          <img src={bubble} alt="bubble" />
          <button className="card__review-btn">Leave a Review</button>
        </div>
      </div>
      <div className="card__empty-right"></div>
      <div className="card__logo-footer">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default CardDetail;
