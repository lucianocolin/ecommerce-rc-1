import React from "react";
import { Carousel } from "react-bootstrap";
import selesion1 from "../imgs/selesion1.jpg";
import selesion2 from "../imgs/selesion2.jpg";
import selesion3 from "../imgs/selesion3.jpg";
import "../css/Home.css";

const Home = () => {
  return (
    <>
      <div className="home-slider-section">
        <h1 className="home-offer-title">OFERTAS</h1>
        <Carousel className="home-offers-slider">
          <Carousel.Item className="home-offers-slider-item">
            <img
              className="home-offers-slider-img"
              src={selesion1}
              alt="First slide"
            />
            <img
              className="home-offers-slider-img"
              src={selesion2}
              alt="Second slide"
            />
            <img
              className="home-offers-slider-img"
              src={selesion3}
              alt="Third slide"
            />
          </Carousel.Item>
          {/* <Carousel.Item className="home-offers-slider-item">
          </Carousel.Item>
          <Carousel.Item className="home-offers-slider-item">
          </Carousel.Item> */}
        </Carousel>
      </div>
    </>
  );
};

export default Home;
