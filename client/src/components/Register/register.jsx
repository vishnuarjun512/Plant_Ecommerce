import React, { useState } from "react";
import "./register.scss";
import video from "../../LoginAssets/video.mp4";
import image from "../../LoginAssets/plant.jpg";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsShieldLockFill } from "react-icons/bs/";
import { AiOutlineSwapRight } from "react-icons/ai/";
import "../../App.scss";
import Axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  const createUser = (e) => {
    e.preventDefault();

    // Require Axious to create an API that connects to the server
    Axios.post("http://localhost:3002/register", {
      // Creating variables to send to the server through route
      Email: email,
      UserName: userName,
      Password: password,
    }).then(() => {
      console.log("User has been created");
      navigateTo("/");

      //Clearing the Fields
      setEmail("");
      setUserName("");
      setPassword("");
    });
  };

  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Create and Sell ExtraOrdinary Products</h2>
            <p>Adopt the peace of nature!</p>
          </div>

          <div className="footerDiv flex">
            <span className="text">Already have an Account?</span>
            <Link to={"/"}>
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={image} alt="plant" />
            <h3>Let Us Know You!</h3>
          </div>

          <form action="" className="form grid">
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <HiOutlineMailOpen className="icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <BsShieldLockFill className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  onChange={(event) => setUserName(event.target.value)}
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
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>

            <button type="submit" className="btn flex" onClick={createUser}>
              <span>Register</span>
              <AiOutlineSwapRight className="icon"></AiOutlineSwapRight>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
