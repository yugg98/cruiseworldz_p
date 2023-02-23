import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { motion } from "framer-motion";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = async () => {
    try {
      const data = await axios.post(
        "/user/create",
        {
          name,
          email,
          msg,
        }
      );
      if (data.data) {
        toast.success(
          "Your Data Saved Successfully we will contact very shortly !!!!!"
        );
        setName("");
        setEmail("");
        setMsg("");
      }
    } catch (error) {
      toast.error("something went wrorng");
    }
  };

  return (
    <div className="contact" id="contact">
      <h2>Contact us</h2>
      <div className="wrap">
        <motion.div
          className="right"
          initial={{ x: -150, opacity: 0, scale: 0.5 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
        >
          <div className="box">
            <div className="c">
              <i class="bx bx-envelope"></i>
            </div>
            <div className="data">
              <h5>Email :-</h5>
              <p>cruiseworldz@gmail.com</p>
            </div>
          </div>
          <div className="box">
            <div className="c">
              <i class="bx bx-phone"></i>
            </div>
            <div className="data">
              <h5>Contact No:-</h5>
              <p>+91 98842 96297</p>
            </div>
          </div>
          <div className="box">
            <div className="c">
              <i className="bx bx-home-alt"></i>
            </div>
            <div className="data">
              <h5>Address:-</h5>
              <p>
                120,Alagar Kovali main RD, Mellur, Tallakulam,Tamil Nadu 625002
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="left"
          initial={{ x: 0, opacity: 0, scale: 0.5 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
        >
          <div className="form">
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="form">
            <label>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="form">
            <label>Message</label>
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              type="text"
              placeholder="Enter Your Message"
            />
          </div>
          <button className="fbtn" onClick={handleSubmit}>
            Submit
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
