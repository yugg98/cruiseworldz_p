import React, { useState,useEffect } from "react";
import { Image } from "antd";
import Footer from "../Components/Footer";
import Testinomials from '../Components/Testinomials'
import axios from "axios";
import { useParams } from "react-router-dom";
const parse = require('html-react-parser')
const CardDetailPage = ({}) => {
  const [card,setCard] = useState({})
  const params = useParams()

  useEffect(() => {
    axios.post('/cruise/getd',{
      slug:params.slug
    }).then(res=>setCard(res.data))
  }, [])
  
  return (
    <>
    <div className="cardDetail">
      <div className="banner">
        <img src={card?.BannerLink} alt="" />
      </div>
      <div style={{padding:'10px 50px'}}>
      <h2>{card?.name}</h2>
      <div >{parse(card?.description)}</div>
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
