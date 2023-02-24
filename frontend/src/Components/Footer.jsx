import React from "react";
import img from "../assets/logo2.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      {/* <div className="icons">
        <ul>
          <a href="#">
            <li className="facebook">
              {" "}
              <i className="bx bxl-whatsapp"></i>
            </li>
          </a>
          <a href="#">
            <li className="twitter">
              {" "}
              <i className="bx bxl-instagram"></i>
            </li>
          </a>
          <a href="#">
            <li className="youtube1">
              {" "}
              <i className="bx bxl-facebook"></i>
            </li>
          </a>
          <a href="#">
            <li className="linkedin">
              {" "}
              <i className="bx bxl-youtube"></i>
            </li>
          </a>
        </ul>
      </div> */}

      <div className="footer">
        <div className="wrap">
          <div className="left">
            <div className="l1">
              <img src={img} alt="img" />
              <p>
                {" "}
                we are passionate about providing unforgettable cruise
                experiences for our guests.
              </p>
              <div className="social">
                <i class="bx bxl-whatsapp"></i>
                <i class="bx bxl-instagram"></i>
                <i class="bx bxl-facebook"></i>
                <i class="bx bxl-youtube"></i>
              </div>
            </div>
            <div className="l2">
              <h4>Services</h4>
              <a href="#">Tour & Travel</a>
              <a href="#">Online Ticket</a>
              <a href="#about">About Us</a>
              <a href="#">FAQ</a>
            </div>
          </div>
          <div className="right">
            <div className="r1">
              <h4>HelpFull links</h4>
              <a href="#about">About</a>
              <a href="#contact">Contact Us</a>
              <a href="#">FAQ</a>
              {/* <Link to="/login">Login to Panel</Link> */}
            </div>
            <div className="r2">
              <h4>Our Location</h4>
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    width="100%"
                    height="100%"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q= World of Cruises 120 Alagar Kovali Road Tallakulam (Near
                    AmmaMess) Madurai 625002&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                  ></iframe>
                  <a href="https://2yu.co">2yu</a>
                  <br />
                  <a href="https://embedgooglemap.2yu.co/">
                    html embed google map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>
          <center>Develop by @Startshorts</center>
        </p>
      </div>
    </>
  );
};

export default Footer;
