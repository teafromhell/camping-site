import React from "react";
import "./Cards.scss";

import logo from "../Assets/Logo.svg";
import { Link } from "react-router-dom";



function Cards({ searchCamping, cards }) {
  return (
    <div className="cards">
      {cards
        .filter(
          (item) =>
            item.name.toLowerCase().includes(searchCamping) ||
            item.detail.toLowerCase().includes(searchCamping)
        )
        .map((item) => {
          return (
            <div key={item.id} className="cards__single-card">
              <Link className="cards__link-image" to={`/campgrounds/${item.name}`}>
                <div>
                  <img src={item.imageGrid} alt="card img" />
                </div>
              </Link>
              <b>{item.name}</b>
              <p>{item.detail}</p>
              <div className="cards__link-div">
              <Link className="cards__link-block"  to={`/campgrounds/${item.name}`}>
              
              
                {" "}
                <button>View Campground</button>
                
              </Link>
              </div>
              
            </div>
          );
        })}
      <img className="cards__logo" src={logo} alt="logo" />
    </div>
  );
}

export default Cards;
