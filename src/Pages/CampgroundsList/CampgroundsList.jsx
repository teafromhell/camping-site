import React, { useState } from "react";
import "./CampgroundsList.scss";
import logo from "../../Assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import search from "../../Assets/SearchIcon.svg";
import Cards from "../../components/Cards";
import { useAuth } from "../../hooks/use-auth";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/slices/userSlice";

function CampgroundsList({ cards }) {
  const [searchCamping, setSearchCamping] = useState("");
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signupPage = () => {
    navigate("/signup");
  };
  
  const { isAuth, login} = useAuth();
 


  return (
    <div className="list">
      <div className="list__empty-left"></div>
      <div className="list__navbar">
        <div className="list__navbar-left">
          <div className="list__logo">
            <Link to="/">
              {" "}
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <Link className="list__link-home" to={"/"}>
            {" "}
            Home {" "}
          </Link>
        </div>
        <div className="list__navbar-right">
          {isAuth ? (
            <>
              <p>{login}</p>
              <div
                className="list__link-login"
                onClick={() => dispatch(removeUser())}
              >
                Logout
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="list__link-login">
                Login
              </Link>
              <button onClick={signupPage} className="list__create-btn">
                Create an account
              </button>
            </>
          )}
        </div>
      </div>

      <div className="list__header">
        <b>Welcome to YelpCamp!</b>
        <p>
          View our hand-picked campgrounds from all over the world, or add your
          own.
        </p>
        <form action="">
          <img src={search} alt="search" />
          <input
            value={searchCamping}
            onChange={(e) => setSearchCamping(e.target.value)}
            type="text"
            placeholder="Search for camps"
          />
          <button
            onClick={(e) => e.preventDefault()}
            className="list__search-btn"
          >
            Search
          </button>
        </form>
        <div className="list__add">
          {isAuth ? (
            <Link className="add-link" to="/addcampground">
              Or add your own campground
            </Link>
          ) : (
            <Link className="add-link" to="/signup">
              Or add your own campground
            </Link>
          )}
        </div>
      </div>
      <Cards searchCamping={searchCamping} cards={cards} />

      <div className="list__empty-right"></div>
    </div>
  );
}

export default CampgroundsList;
