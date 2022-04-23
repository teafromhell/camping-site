import React from "react";
import "./Cards.scss";

import logo from "../Assets/Logo.svg";
//import ResponsiveCardImages from "./ResponsiveCardImages";
import one from "../Assets/CampImages/HighQualityImages/Mount Ulap.png";
//import { useParams } from "react-router-dom";

const cards = [
  {
    id: 1,
    name: "Mount Ulap",
    image: one,
    detail: "One of the most famous hikes in Benguest is Mt Ulap in Itogon.",
  },
  {
    id: 2,
    name: "Calaguas Islands",
    image: one,
    detail:
      "A paradise of islands that can rival the white sand beauty of Boracay.",
  },
  {
    id: 3,
    name: "Onay Beach",
    image: one,
    detail:
      "This is one of the best beach camping sites, beautiful and pristine.",
  },
  {
    id: 4,
    name: "Seven Sisters Waterfall",
    image: one,
    detail: "The Seven Sisters is the 39th tallest waterfall in Norway.",
  },
  {
    id: 5,
    name: "Latik Riverside",
    image: one,
    detail: "Philippines is one the most dazzling countries in all of Asia.",
  },
  {
    id: 6,
    name: "Buloy Springs",
    image: one,
    detail:
      "This is one of the best beach camping sites, beautiful and pristine.",
  },
];

function Cards({ searchCamping }) {
    

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
              <div><img src={item.image} alt="card img" /></div>
              <b>{item.name}</b>
              <p>{item.detail}</p>
              <button >View Campground</button>
            </div>
          );
        })}
      <img className="cards__logo" src={logo} alt="logo" />
    </div>
  );
}

export default Cards;
