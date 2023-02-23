import React from "react";
import CardList from "./CardList";
import { motion } from "framer-motion";
const Youtube = () => {
  return (
    <>
      <section className="youtube">
        <div className="wrap">
          <motion.div
            className="left"
            initial={{ x: 0, opacity: 0, scale: 0.5 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
          >
            <h2>
              Get Our Monthly<br></br>Newsletter
            </h2>
            <p>
              {" "}
              Travel content strives to produce consistent communication
              materials helpful while crawling through the web.
            </p>
            <div className="ib">
              <input placeholder="Enter your email" />
              <button className="ibtn">Subscribe</button>
            </div>
          </motion.div>
          <motion.div
            className="right"
            initial={{ x: 0, opacity: 0, scale: 0.5 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
          >
            <div className="video">
              <div className="loader">
                <i className="bx bx-play"></i>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Youtube;
