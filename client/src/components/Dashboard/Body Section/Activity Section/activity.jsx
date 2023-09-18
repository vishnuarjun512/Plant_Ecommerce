import React from "react";
import "./activity.scss";

import { BsArrowRightShort } from "react-icons/bs";

import img1 from "../../../../Assets/hoodie.jpg";

const Activity = () => {
  return (
    <div className="activitySection">
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className="btn flex">
          See All
          <BsArrowRightShort className="icon" />
        </button>
      </div>
      <div className="setContainer grid">
        <div className="singleCustomer flex">
          <img src={img1} alt="Customer" />
          <div className="customerDetails">
            <span className="name">John Doe</span>
            <small>Ordered a new plant</small>
          </div>

          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={img1} alt="Customer" />
          <div className="customerDetails">
            <span className="name">John Doe</span>
            <small>Ordered a new plant</small>
          </div>

          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={img1} alt="Customer" />
          <div className="customerDetails">
            <span className="name">John Doe</span>
            <small>Ordered a new plant</small>
          </div>

          <div className="duration">2 min ago</div>
        </div>
        <div className="singleCustomer flex">
          <img src={img1} alt="Customer" />
          <div className="customerDetails">
            <span className="name">John Doe</span>
            <small>Ordered a new plant</small>
          </div>

          <div className="duration">2 min ago</div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
