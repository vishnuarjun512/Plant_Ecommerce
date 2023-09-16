import React from "react";
import "./dashboard.scss";
import { Link } from "react-router-dom";
// import '../../App.scss'
import { AiOutlineSwapLeft } from "react-icons/ai/";
import Body from "./Body Section/body";
import Sidebar from "./Sidebar Section/sidebar";

const Dashboard = () => {
  return (
    <div className="container">
      <Sidebar></Sidebar>
      <Body></Body>
      <Link to={"/"}>
        <button className="btn flex">
          <span>Login</span>
          <AiOutlineSwapLeft className="icon"></AiOutlineSwapLeft>
        </button>
      </Link>
    </div>
  );
};

export default Dashboard;
