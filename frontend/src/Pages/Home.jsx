import React, { useEffect, useState } from "react";
import v2 from "../assets/vid1.mp4";
import logo from "../assets/logo2.png";
import ReactTypingEffect from "react-typing-effect";
import { Link } from "react-router-dom";
import { Button, Modal } from "antd";
import Contact2 from "../Components/Contact2";
import { motion } from "framer-motion";
import { Navbar } from "../Components/Navbar";
const Home = () => {
  const [state, setState] = useState(false);

  const handlenav = () => {
    setState(!state);
    console.log(state);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      showModal();
    }, 50000);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <>
      <section className="home" id="home">
        <div className="bannerVideo">
          <video src={v2} autoPlay className="active" muted loop></video>
        </div>
        <Modal
          title="Welcome To Cruise World"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          style={{
            background: "rgba(255,255,255,0.5) !important",
          }}
        >
          <Contact2 close={handleCancel} />
        </Modal>
        <div className="container">
          <Navbar/>
          <div className="content">
            <motion.div
              initial={{ x: -100, scale: 0 }}
              whileInView={{ x: 0, scale: 1 }}
              viewport={{ once: false, amount: 0 }}
              transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
              className="bannerText"
            >
              <div className="active">
                <h2>
                  {" "}
                  Cruise <span>Worldz</span>
                </h2>
                <h4>
                  {" "}
                  <ReactTypingEffect
                    text={[
                      "Welcome to the Cruise Worldz",
                      " Travel content strives to produce consistent communication materials",
                    ]}
                  />
                </h4>
                <p>
                  Travel content strives to produce consistent communication
                  materials (blog posts, images, videos, etc ) that customers
                  will find helpful while crawling through the web. Travel
                  content does not promote a brand like traditional advertising
                </p>
                <button>
                  Visit <i class="bx bx-right-arrow-circle"></i>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
