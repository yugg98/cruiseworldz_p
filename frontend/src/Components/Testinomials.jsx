import React, { useState,useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import img1 from "../assets/c1.jpg";
import img2 from "../assets/c2.jpg";
import img3 from "../assets/c3.jpg";
import img4 from "../assets/c4.jpg";
import { useLocation } from 'react-router-dom'
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const Testinomials = ({own}) => {
  const location = useLocation();
  console.log(location.pathname);
  var parts = location.pathname.split("/");
  console.log(parts)
 

  const [testimonials,setTestimonials] = useState([])
  useEffect(() => {
     if(parts[1]=="details"){
    axios.post('/review/getcruise',{
      cruiseSlug:parts[2],
    }).then((response) => {
      setTestimonials(response.data)
      console.log(response.data)
    });
  }
  else{
    axios.post('/review/get').then((response) => {
      setTestimonials(response.data)
      console.log(response.data)
    });
  }
  }, [])
  
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
          {testimonials?.map(e=>(
          <SwiperSlide className="card">
            <div className="left">
              <img src={e.imageLink} alt="img" />
            </div>
            <div className="right">
              <h4>{e.name}</h4>
              <p>
                +{e.star}{" "}
                <span>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>
                <i class="bx bxs-star"></i>

                </span>
              </p>
              <p className="p">
               {e.review}
              </p>
            </div>
          </SwiperSlide>
          ))}
         
        </Swiper>
        <div className="card"></div>
      </motion.div>
    </section>
  );
};

export default Testinomials;
