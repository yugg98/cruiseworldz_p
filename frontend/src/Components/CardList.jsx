import React, { useEffect, useState } from "react";
import img from "../assets/logo2.png";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { LoadingOutlined } from "@ant-design/icons";
const parse = require('html-react-parser');

const CardList = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (data) => {
    dispatch({ type: "card", payload: data });
    Navigate("/detail/"+data?._id);
  };

  const fetchCard = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "/cruise/get2"
      );
      setData(res.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCard();
  }, []);

  return (
    <section className="cards" id="service">
      <div className="wrap">
        <div className="top">
          <h2>Available Listings</h2>
          <hr></hr>
          <p>
            Travel content strives to produce consistent communication materials
            (blog posts, images, videos, etc ) that customers will find helpful
            while crawling through the web.
          </p>
        </div>
        <div className="collect">
          {loading ? (
            <div
              className="col text-center p-5"
              style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img
                src={img}
                alt="img"
                className="anim"
                style={{ width: "200px", height: "200px" }}
              />
              <div>
                <b>
                  Welcome to <LoadingOutlined /> Cruise World
                </b>
              </div>
            </div>
          ) : (
            data?.map((data, index) => (
              <motion.div
                initial={{ x: 0, y: -50, opacity: 0 }}
                whileInView={{ x: 0, y: 0, opacity: 1 }}
                viewport={{ once: false }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                className="card"
                key={index}
                onClick={() => handleSubmit(data)}
              >
                <div className="img">
                  <img src={data?.SomeMoreImages[0]} alt="img" />
                </div>
                <h4>
                  {data?.name.substring(20, [0])}...
                  <span>
                    4.5 <i class="bx bxs-star"></i>
                  </span>
                </h4>
                <p>you are going to get best vacation experience here at {data.name}....</p>
                <div className="avr">
                  <i class="bx bx-comment-dots"></i>
                  <p className="sp">
                    +1 Reviews{" "}
                    <a href="https://wa.me/9442038894">
                      <i class="bx bxl-whatsapp"></i>
                    </a>
                  </p>
                </div>
              </motion.div>
            ))
          )}
        </div>
        <center>
          <Link
            to="/view"
            style={{ textDecoration: "none", cursor: "pointer" }}
          >
            <button className="vm" style={{ cursor: "pointer" }}>
              ViewMore <i class="bx bx-chevrons-right"></i>
            </button>
          </Link>
        </center>
      </div>
    </section>
  );
};

export default CardList;
