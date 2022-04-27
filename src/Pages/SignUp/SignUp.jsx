import React, { useState, useEffect } from "react";
import "./SignUp.scss";
import logo from "../../Assets/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import user from "../../Assets/User Testimonial.svg";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";

function SignUp() {
  const [mailReg, setMailReg] = useState();
  const [passwordReg, setPasswordReg] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isInvalid, setInvalid] = useState(false);
  const [pwdLength, setPwdLength] = useState(false);

  useEffect(() => {
    setInvalid(false);

    setPwdLength(false);
  }, [mailReg, passwordReg]);

  async function handleRegister(e, mail, password) {
    e.preventDefault();
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, mail, password).then(({ user }) => {
        dispatch(
          setUser({
            mail: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/campgrounds");
      });
    } catch {
      setInvalid(true);
    }
    if (passwordReg.length < 6) {
      setPwdLength(true);
    }
  }

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
          <label htmlFor="">Usermail</label>
          <input
            className={`${isInvalid ? "fail" : null}`}
            value={mailReg}
            onChange={(e) => setMailReg(e.target.value)}
            type="text"
            placeholder="Choose Usermail"
          />
          <div>
            <label htmlFor="">Password</label>
            <p
              className={`password-warning ${
                pwdLength ? "password-fail" : null
              }`}
            >
              should be at least 6 characters
            </p>
          </div>
          <input
            className={`${isInvalid ? "fail" : null}`}
            value={passwordReg}
            onChange={(e) => setPasswordReg(e.target.value)}
            type="text"
            placeholder="Choose Password"
          />
          <button onClick={(e) => handleRegister(e, mailReg, passwordReg)}>
            Create an account
          </button>
        </form>

        <div>
          <span>Already a user?</span>
          <Link to={"/login"}>
            {" "}
            <span className="signup__signin-span ">Sign in</span>
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
