import { Route, Routes } from "react-router-dom";
import "./App.scss";
import CardDetail from "./Pages/CardDetail/CardDetail";
import CampgroundsList from "./Pages/CampgroundsList/CampgroundsList";
import WelcomePage from "./Pages/WelcomePage/WelcomePage";
import AddCamp from "./Pages/AddCamp/AddCamp";

import one from "./Assets/CampImages/HighQualityImages/Mount Ulap.png";
import two from "./Assets/CampImages/HighQualityImages/Calagus Islands.jpg";
import three from "./Assets/CampImages/HighQualityImages/Onay Beach.jpg";
import four from "./Assets/CampImages/HighQualityImages/Seven Sisters Waterfall.jpg";
import five from "./Assets/CampImages/HighQualityImages/Latik Riverside.jpg";
import six from "./Assets/CampImages/HighQualityImages/Buloy Springs.jpg";

import oneSmall from "./Assets/CampImages/CompressedImages/Mount Ulap.jpg";
import twoSmall from "./Assets/CampImages/CompressedImages/Calaguas Island.jpg";
import threeSmall from "./Assets/CampImages/CompressedImages/Onay Beach.jpg";
import fourSmall from "./Assets/CampImages/CompressedImages/Seven Sisters Waterfall.jpg";
import fiveSmall from "./Assets/CampImages/CompressedImages/Latik Riverside.jpg";
import sixSmall from "./Assets/CampImages/CompressedImages/Buloy Springs.jpg";

import SignUp from "./Pages/SignUp/SignUp";
import Login from "./Pages/Login/Login";
import AddComment from "./Pages/AddComment/AddComment";
import ScrollToTop from "./components/ScrollToTop";
import { useState } from "react";

const mock = [
  {
    id: 1,
    name: "Mount Ulap",
    imageGrid: oneSmall,
    imageDetail: one,
    detail: "One of the most famous hikes in Benguest is Mt Ulap in Itogon.",
    price: "$104.99/night",
  },
  {
    id: 2,
    name: "Calaguas Islands",
    imageGrid: twoSmall,
    imageDetail: two,
    detail:
      "A paradise of islands that can rival the white sand beauty of Boracay.",
    price: "$104.99/night",
  },
  {
    id: 3,
    name: "Onay Beach",
    imageGrid: threeSmall,
    imageDetail: three,
    detail:
      "This is one of the best beach camping sites, beautiful and pristine.",
    price: "$305.99/night",
  },
  {
    id: 4,
    name: "Seven Sisters Waterfall",
    imageGrid: fourSmall,
    imageDetail: four,
    detail: "The Seven Sisters is the 39th tallest waterfall in Norway.",
    price: "$177.99/night",
  },
  {
    id: 5,
    name: "Latik Riverside",
    imageGrid: fiveSmall,
    imageDetail: five,
    detail: "Philippines is one the most dazzling countries in all of Asia.",
    price: "$100.99/night",
  },
  {
    id: 6,
    name: "Buloy Springs",
    imageGrid: sixSmall,
    imageDetail: six,
    detail:
      "This is one of the best beach camping sites, beautiful and pristine.",
    price: "$204.99/night",
  },
];

function App() {
  const [cards, setCards] = useState(mock)
  return (
    <div className="App">
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/campgrounds"
          element={<CampgroundsList cards={cards} />}
        />

        <Route
          path="/campgrounds/:name"
          element={<CardDetail cards={cards} />}
        />
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/addcampground" element={<AddCamp />}></Route>
        <Route path='campgrounds/:name/newcomment/:name' element={<AddComment cards={cards} setCards={setCards}/>}></Route>
      </Routes>
      </ScrollToTop>
    </div>
  );
}

export default App;
