import { Route, Routes } from "react-router-dom";
import "./App.scss";
import CardDetail from "./Pages/CardDetail";
import CampgroundsList from "./Pages/CampgroundsList";
import WelcomePage from "./Pages/WelcomePage";

import one from "./Assets/CampImages/HighQualityImages/Mount Ulap.png";
import two from "./Assets/CampImages/HighQualityImages/Calagus Islands.jpg";
import three from "./Assets/CampImages/HighQualityImages/Onay Beach.jpg";
import four from "./Assets/CampImages/HighQualityImages/Seven Sisters Waterfall.jpg";
import five from "./Assets/CampImages/HighQualityImages/Latik Riverside.jpg";
import six from "./Assets/CampImages/HighQualityImages/Buloy Springs.jpg";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";

const cards = [
  {
    id: 1,
    name: "Mount Ulap",
    image: one,
    detail: "One of the most famous hikes in Benguest is Mt Ulap in Itogon.",
    price: "$104.99/night",
  },
  {
    id: 2,
    name: "Calaguas Islands",
    image: two,
    detail:
      "A paradise of islands that can rival the white sand beauty of Boracay.",
    price: "$104.99/night",
  },
  {
    id: 3,
    name: "Onay Beach",
    image: three,
    detail:
      "This is one of the best beach camping sites, beautiful and pristine.",
    price: "$305.99/night",
  },
  {
    id: 4,
    name: "Seven Sisters Waterfall",
    image: four,
    detail: "The Seven Sisters is the 39th tallest waterfall in Norway.",
    price: "$177.99/night",
  },
  {
    id: 5,
    name: "Latik Riverside",
    image: five,
    detail: "Philippines is one the most dazzling countries in all of Asia.",
    price: "$100.99/night",
  },
  {
    id: 6,
    name: "Buloy Springs",
    image: six,
    detail:
      "This is one of the best beach camping sites, beautiful and pristine.",
    price: "$204.99/night",
  },
];

function App() {
  return (
    <div className="App">
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
      </Routes>
    </div>
  );
}

export default App;
