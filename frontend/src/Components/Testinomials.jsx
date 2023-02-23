import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import img1 from "../assets/c1.jpg";
import img2 from "../assets/c2.jpg";
import img3 from "../assets/c3.jpg";
import img4 from "../assets/c4.jpg";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Testinomials = () => {
  return (
    <section className="testinomial">
      <motion.h2
        initial={{ x: 0, opacity: 0, scale: 0.5 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.8 }}
      >
        What Our Client's Say
      </motion.h2>
      <p className="h2p">
        We have prove we are provide the best facillity among the customers. We
        have prove we are <br></br>provide the best facillity among the
        customers
      </p>
      <motion.div
        className="trap"
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
      >
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
          autoplay={true}
        >
          <SwiperSlide className="card">
            <div className="left">
              <img src={img1} alt="img" />
            </div>
            <div className="right">
              <h4>jay uso</h4>
              <p>
                +5{" "}
                <span>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                </span>
              </p>
              <p className="p">
                I recently used this travel website to book a trip to Paris, and
                I was extremely impressed with the selection of hotels and
                flights available.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card">
            {" "}
            <div className="left">
              <img src={img2} alt="img" />
            </div>
            <div className="right">
              <h4>Gaurav Bajpai</h4>
              <p>
                +5{" "}
                <span>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                </span>
              </p>
              <p className="p">
                I have been using this travel website for years now, and it has
                consistently provided me with great deals and excellent service.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card">
            <div className="left">
              <img src={img3} alt="img" />
            </div>
            <div className="right">
              <h4>Rahul singh</h4>
              <p>
                +4{" "}
                <span>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                </span>
              </p>
              <p className="p">
                I have. I highly recommend this website to anyone looking for
                affordable and hassle-free travel options
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="card">
            {" "}
            <div className="left">
              <img src={img4} alt="img" />
            </div>
            <div className="right">
              <h4>Maya </h4>
              <p>
                +4{" "}
                <span>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                </span>
              </p>
              <p className="p">
                The website is user-friendly and easy to navigate, and the
                customer support team is always available to answer any
                questions I have.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="card"></div>
      </motion.div>
    </section>
  );
};

export default Testinomials;
