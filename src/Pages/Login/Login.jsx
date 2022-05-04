import React, { useEffect, useState } from "react";
import "./Login.scss";
import logo from "../../Assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import user from "../../Assets/User Testimonial.svg";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/slices/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isInvalid, setInvalid] = useState(false);

  useEffect(() => {
    setInvalid(false);
  }, [mail, password]);

  async function handleSubmit(e, mail, password) {
    e.preventDefault();
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, mail, password).then(
        ({ user }) => {
          dispatch(
            setUser({
              mail: user.email,
              id: user.uid,
              token: user.accessToken,
            })
          );

          navigate("/campgrounds");
        }
      );
    } catch {
      setInvalid(true);
    }
  }
  return (
    <div className="login">
      <div className="login__empty"></div>
      <div className="login__navbar">
        <img src={logo} alt="logo" />
        <Link className="login__backto-link" to={"/campgrounds"}>
          {" "}
          <p>Back to Camps</p>
        </Link>
      </div>
      <div className="login__left">
        <b>Start exploring camps from all around the world</b>
        <form action="">
          <label htmlFor="">Mail</label>

          <input
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            type="text"
            placeholder="Enter Your Mail"
            className={`${isInvalid ? "fail" : null}`}
          />
          <label htmlFor="">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Your Password"
            className={`${isInvalid ? "fail" : null}`}
          />
          <button onClick={(e) => handleSubmit(e, mail, password)}>
            Login
          </button>
        </form>

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
