import React, { Component } from "react";
import "./sidebar.scss";
import logo from "../../../Assets/logo.jpeg";
import "../dashboard.scss";

import { IoMdSpeedometer } from "react-icons/io";
import {
  MdDeliveryDining,
  MdOutlineExplore,
  MdOutlinePermContactCalendar,
} from "react-icons/md";
import {
  BsTrophy,
  BsCreditCard2FrontFill,
  BsQuestionCircleFill,
} from "react-icons/bs";
import { AiOutlinePieChart, AiOutlineSwapLeft } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  document.addEventListener("DOMContentLoaded", () => {
    const logoutButton = document.getElementById("logoutButton");

    logoutButton.addEventListener("click", () => {
      // Make a GET request to the /dashboard route when the user logs out
      fetch("/dashboard", {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the server if needed
          console.log(data + "Exited");
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    });
  });

  return (
    <div className="sideBar grid">
      <div className="logoDiv flex">
        <img src={logo} alt="Image Name" className="logo" />
        <h2>Planti</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">QUICK MENU</h3>

        <ul className="menuLists grid">
          <li className="listItem">
            <a href="" className="menuLink flex">
              <IoMdSpeedometer className="icon" />
              <span className="smallText">Dashboard</span>
            </a>
          </li>

          <li className="listItem">
            <a href="" className="menuLink flex">
              <MdDeliveryDining className="icon" />
              <span className="smallText">My Orders</span>
            </a>
          </li>

          <li className="listItem">
            <a href="" className="menuLink flex">
              <MdOutlineExplore className="icon" />
              <span className="smallText">Explore</span>
            </a>
          </li>

          <li className="listItem">
            <a href="" className="menuLink flex">
              <BsTrophy className="icon" />
              <span className="smallText">Products</span>
            </a>
          </li>
        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">SETTINGS</h3>

        <ul className="menuLists grid">
          <li className="listItem">
            <a href="" className="menuLink flex">
              <AiOutlinePieChart className="icon" />
              <span className="smallText">Charts</span>
            </a>
          </li>

          <li className="listItem">
            <a href="" className="menuLink flex">
              <BiTrendingUp className="icon" />
              <span className="smallText">Trending</span>
            </a>
          </li>

          <li className="listItem">
            <a href="" className="menuLink flex">
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">Contacts</span>
            </a>
          </li>

          <li className="listItem">
            <a href="" className="menuLink flex">
              <BsCreditCard2FrontFill className="icon" />
              <span className="smallText">Billing</span>
            </a>
          </li>
        </ul>
      </div>

      <Link to={"/"}>
        <button id="logoutButton" className="logout">
          <AiOutlineSwapLeft className="icon"></AiOutlineSwapLeft>
          <span>Logout</span>
        </button>
      </Link>

      <div className="sideBarCard">
        <BsQuestionCircleFill className="icon" />
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <h3>Help Center</h3>
          <p>Having trouble in Planti , plese contact us for more questions</p>
          <button className="btn">Go to help center</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
