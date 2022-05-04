import React, { useState } from "react";
import "./AddComment.scss";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks/use-auth";
import { commentsUser, removeUser } from "../../store/slices/userSlice";
import { Link, useNavigate, useParams } from "react-router-dom";
import logo from "../../Assets/Logo.svg";

function AddComment({ cards, setCards }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [comment, setComment] = useState("");
  const { name } = useParams();

  const submitComment = (e) => {
    e.preventDefault();

    if (comment.length !== 0) {
      dispatch(
        commentsUser([
          ...comments,
          { login: login, name: name, comment: comment },
        ])
      );
      navigate(-1);
    }
  };

  const { login, comments } = useAuth();
  return (
    <div className="comment">
      <div className="comment__empty-left"></div>
      <div className="comment__navbar">
        <div className="comment__navbar-left">
          <div className="comment__logo">
            <Link to="/">
              {" "}
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <Link className="comment__link-home" to={"/"}>
            {" "}
            Home{" "}
          </Link>
        </div>
        <div className="comment__navbar-right">
          <p>{login}</p>
          <Link className="comment__link-login" to={"/campgrounds"}>
            <div onClick={() => dispatch(removeUser())}>Logout</div>
          </Link>
        </div>
      </div>
      <div className="comment__wrapper-body">
        <div className="comment__body">
          <b>Add New Comment</b>
          <form className="comment__body-form" action="">
            <label htmlFor="">Description</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              name=""
              id=""
              cols="55"
              rows="15"
            ></textarea>
            <button onClick={submitComment} className="comment__post-btn">
              Post comment
            </button>
          </form>
        </div>
      </div>
      <img className="comment__logo" src={logo} alt="logo" />
      <div className="comment__empty-right"></div>
    </div>
  );
}

export default AddComment;
