import React from "react";
import './login.scss';
import video from '../../LoginAssets/video.mp4';
import image from '../../LoginAssets/plant.jpg';
import { Link } from "react-router-dom";
import { FaUserShield } from 'react-icons/fa/';
import { BsShieldLockFill } from 'react-icons/bs/';
import { AiOutlineSwapRight } from 'react-icons/ai/'
import '../../App.scss'

const Login = () => {
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
                        <Link to={'/register'}>
                            <button className="btn">Sign Up</button>
                        </Link>
                    </div>

                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={image} alt="plant"/>
                        <h3>Welcome Back!</h3>
                    </div>

                    <form action="" className="form grid">
                        <span className="showMessage">Login Status will go here</span>

                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className="input flex">
                                <FaUserShield className="icon"/>
                                <input type="text" id="username" placeholder="Enter Username" />
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <BsShieldLockFill className="icon"/>
                                <input type="password" id="password" placeholder="Enter Password" />
                            </div>
                        </div>

                        <Link to={'/dashboard'}>
                            <button type="submit" className="btn flex">
                                <span>Login</span>
                                <AiOutlineSwapRight className="icon"></AiOutlineSwapRight>
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
    )
}

export default Login;