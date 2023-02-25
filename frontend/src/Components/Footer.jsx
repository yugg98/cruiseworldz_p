import React from "react";
import img from "../assets/logo2.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
    

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
                <a href="https://wa.me/9442038894"><i class="bx bxl-whatsapp"></i></a>
                <a href="https://www.instagram.com/cruiseworldz/"><i class="bx bxl-instagram"></i></a>
                <a href="https://www.facebook.com/profile.php?id=100089809549769"><i class="bx bxl-facebook"></i></a>
                <a href="https://www.linkedin.com/company/cruise-worldz/"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>
            <div className="l2">
              <h4>Services</h4>
              <Link href="/privacy-policy">Privacy Policy</Link>
              <a href="#service">Our Cruises</a>
              <a href="#service">Our Services</a>
            </div>
          </div>
          <div className="right">
            <div className="r1">
              <h4>HelpFull links</h4>
              <a href="#about">About</a>
              <a href="#contact">Contact Us</a>
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
      </div>
    </>
  );
};

export default Footer;
