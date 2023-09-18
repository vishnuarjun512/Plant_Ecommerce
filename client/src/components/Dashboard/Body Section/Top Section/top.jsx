import React from "react";
import "./top.scss";

import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircleCode } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsArrowRightShort, BsQuestionCircleFill } from "react-icons/bs";

// Images Import
import img from "../../../../Assets/man.png";
import img2 from "../../../../Assets/plant2.jpeg";

import vid from "../../../../LoginAssets/video.mp4";

const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome to Planti</h1>
          <p>Hello Vishnu, Welcome back!</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="Search Dashboard" />
          <BiSearchAlt className="icon"></BiSearchAlt>
        </div>

        <div className="adminDiv flex">
          <TbMessageCircleCode className="icon" />
          <IoNotificationsOutline className="icon" />
          <div className="adminImage">
            <img src={img} alt="Admin Image" />
          </div>
        </div>
      </div>

      <div className="cardSection flex">
        <div className="rightCard flex">
          <h1>Create and Sell ExtraOrdinary Products</h1>
          <p>
            The World's fastest growing industry today are natural made
            products!
          </p>

          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video src={vid} autoPlay muted loop></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                <span>
                  Today <br /> <small>4 Orders</small>
                </span>
                <span>
                  This Month <br /> <small>127 Orders</small>
                </span>
              </div>

              <span className="flex link">
                Go to my Orders{" "}
                <BsArrowRightShort className="icon"></BsArrowRightShort>
              </span>
            </div>

            <div className="imgDiv">
              <img src={img2} alt="Image name" />
            </div>

            <div className="sideBarCard">
              <BsQuestionCircleFill className="icon" />
              <div className="cardContent">
                <div className="circle1"></div>
                <div className="circle2"></div>
                <h3>Help Center</h3>
                <p>
                  Having trouble in Planti , plese contact us for more questions
                </p>
                <button className="btn">Go to help center</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
