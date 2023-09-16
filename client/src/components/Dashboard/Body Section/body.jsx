import React from "react";
import Activity from "./Activity Section/activity";
import Listing from "./Listing Section/listing";
import Top from "./Top Section/top";
import './body.scss'

const Body = () => {
    return (
        <div className="mainContent">
            <Top></Top>
            <div className="bottom flex">
                <Listing/>
                <Activity/>
            </div> 
        </div>
    )
}

export default Body;