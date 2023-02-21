import React, { useContext, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import selesion1 from "../imgs/selesion1.jpg";
import "../css/Home.css";
import AdminProductsContext from "../context/admin/products/AdminProductsContext";

const Home = () => {

  const { products, getProducts } = useContext(AdminProductsContext)

  useEffect(()=>{
    getProducts()
  }, []);

  return (
    <>
      <div className="home-slider-section">
        <h1 className="home-offer-title">OFERTAS</h1>
        <Carousel className="home-offers-slider">
          {
            products.map((product, index)=>(
              <Carousel.Item className="home-offers-slider-item">
                <div className="home-offers-slider-img">
                  <p className="home-offers-slider-perc">20% OFF</p>
                  <img
                    src={selesion1}
                    alt="First slide 1"
                  />
                  <p className="home-offers-slider-description">{product.name}</p>
                  <p className="home-offers-slider-price">{'$' + product.price}</p>
                </div>
                </Carousel.Item>
            ))
          }
            {/* <div className="home-offers-slider-img">
              <p className="home-offers-slider-perc">20% OFF</p>
              <img
              src={selesion2}
              alt="First slide 2"
              />
              <p className="home-offers-slider-description">Campera aa aa aaa </p>
              <p className="home-offers-slider-price">$2000</p>
              </div>
              <div className="home-offers-slider-img">
              <p className="home-offers-slider-perc">20% OFF</p>
              <img
              src={selesion3}
              alt="First slide 3"
              />
              <p className="home-offers-slider-description">Campera aa aa aaa </p>
              <p className="home-offers-slider-price">$2000</p>
            </div> */}
          </Carousel>
      </div>
    </>
  );
};

export default Home;
