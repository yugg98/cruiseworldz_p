import React, { useEffect, useState } from "react";
import v2 from "../assets/vid1.mp4";
import logo from "../assets/logo2.png";
import ReactTypingEffect from "react-typing-effect";
import { Link } from "react-router-dom";
import { Button, Modal } from "antd";
import Contact2 from "../Components/Contact2";
import { motion } from "framer-motion";
export const Navbar = () => {
    const [state, setState] = useState(false);

    const handlenav = () => {
        setState(!state);
        console.log(state);
    };
    return (
        <div className="hello">
            <header id="navbar">
                <img src={logo} alt="logo" className="logo" style={{width:'12rem',height:'12rem'}} />

                <ul>
                    <li>
                        <a href="#home" className="active">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#service">Services</a>
                    </li>
                    <li>
                        <a href="#about">About us</a>
                    </li>
                    <li>
                        <a href="#contact">Contact Us</a>
                    </li>
                </ul>
                <div className={` ${state ? "none" : "sidenav"}`}>
                    <div className="top">
                        <p>Cruise world</p>
                        {/* <i class="bx bx-menu-alt-right" onClick={handlenav}></i> */}
                    </div>
                    <div className="links">
                        <Link className="link" to="/">
                            Home
                        </Link>
                        <Link className="link" to="/">
                            About
                        </Link>
                        <Link className="link" to="/">
                            Contact Us
                        </Link>
                        <Link className="link" to="/">
                            Youtube
                        </Link>
                    </div>
                </div>

            </header>

        </div>
    )
}
