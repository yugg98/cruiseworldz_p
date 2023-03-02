import React, { useState,useEffect, useLayoutEffect } from "react";
import { Image } from "antd";
import Footer from "../Components/Footer";
import Testinomials from '../Components/Testinomials'
import axios from "axios";
import { useParams } from "react-router-dom";
const parse = require('html-react-parser')
const CardDetailPage = ({}) => {
  const [card,setCard] = useState({
    startLocation:"Hello",
    endLocation:"Hello",
    BannerLink:"Hell",
    SomeMoreImages:[]

  })
  const params = useParams()
  console.log("Card1",params.slug)
  useLayoutEffect(() => {
    console.log("Card",params.id)
    axios.post('/cruise/getd',{
      slug:params.slug
    }).then(res=>{
      setCard(res.data[0])
      console.log(card,res.data)
    })
    .catch(err => console.log("Error"))
  }, [])
  
  return (
    <>
    <div className="cardDetail">
      <div className="banner">
        <img src={card?.BannerLink} alt="" />
      </div>
      <div className="descc">
      <h2>{card?.name}</h2>
      <div >{card?.description ? parse(card?.description) : ""}</div>
      <h4>
        <i className="bx bx-map"></i>
        Start Location:- <span>{card?.startLocation}</span>
      </h4>
      <h4>
        <i className="bx bx-map"></i>
        End Location:- <span>{card?.endLocation}</span>
      </h4>
      <h5>Images of the Cruise</h5>
      <div className="mw">
        {card?.SomeMoreImages.map((d, index) => (
          <Image width={100} height={100} src={d} key={index} />
        ))}
      </div>
      </div>
    </div>
    <Testinomials/>
    <Footer/>
    </>
  );
};

export default CardDetailPage;
