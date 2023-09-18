import React, { useEffect, useState } from "react";
import "./login.scss";
import video from "../../LoginAssets/video.mp4";
import image from "../../LoginAssets/plant.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FaUserShield } from "react-icons/fa/";
import { BsShieldLockFill } from "react-icons/bs/";
import { AiOutlineSwapRight } from "react-icons/ai/";
import "../../App.scss";
import Axios from "axios";

const Login = () => {
  const [loginuserName, setLoginUserName] = useState("");
  const [loginpassword, setLoginPassword] = useState("");
  const navigateTo = useNavigate();

  //Showing message to user
  const [loginStatus, setLoginStatus] = useState("");
  const [statusHolder, setStatusHolder] = useState("message");

  const loginUser = (e) => {
    //Prevent Submitting
    e.preventDefault();
    Axios.post("http://localhost:3002/login", {
      LoginUserName: loginuserName,
      LoginPassword: loginpassword,
    }).then((response) => {
      console.log(response.data.message);
      //Catch Error
      if (response.data.message || loginuserName == "" || loginpassword == "") {
        navigateTo("/"); // so we shall navigate to login page
        setLoginStatus(`Credentials Don't Exist!`);
      } else {
        navigateTo("/dashboard");
      }
    });
  };

  useEffect(() => {
    if (loginStatus !== "") {
      setStatusHolder("showMessage");
      setTimeout(() => {
        setStatusHolder("message");
      }, 4000);
    }
  }, [loginStatus]);

  // Clear form on submit
  const onSubmit = () => {
    setLoginPassword("");
    setLoginUserName("");
  };

  return (
    <div className="loginPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Create and Sell ExtraOrdinary Products</h2>
            <p>Adopt the peace of nature!</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Dont have an Account?</span>
            <Link to={"/register"}>
              <button className="btn">Sign Up</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={image} alt="plant" />
            <h3>Welcome Back!</h3>
          </div>

          <form action="" className="form grid" onSubmit={onSubmit}>
            <span className="showMessage">Login Status will go here</span>
            <span className={statusHolder}>{loginStatus}</span>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  onChange={(event) => setLoginUserName(event.target.value)}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  onChange={(event) => setLoginPassword(event.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn flex" onClick={loginUser}>
              <span>Login</span>
              <AiOutlineSwapRight className="icon"></AiOutlineSwapRight>
            </button>

            <Link to={"/dashboard"}>
              <button className="btn flex">
                <span>Dashboard</span>
              </button>
            </Link>

            <span className="forgotPassword">
              Forgot your Password?
              <a href=""> Click here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
