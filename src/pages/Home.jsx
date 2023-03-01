

import React, { useContext, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import selesion1 from "../imgs/selesion1.jpg";
import "../css/Home.css";
import AdminProductsContext from "../context/admin/products/AdminProductsContext";
import ProductsCard from "../components/common/ProductsCard";
import HighlitedProducts from "../components/entities/HighlitedProducts";

const Home = () => {

  const { products, getProducts } = useContext(AdminProductsContext)

  useEffect(()=>{
    getProducts()
  }, []);

  const numberToPercentage = (num1, num2) =>{
    const perc = num1 / num2 * 100;
    const finalPerc = perc - 100;
    return finalPerc.toFixed(0) + '%OFF' 
  }

  return (
    <>
      <div className="home-slider-section">
        <h1 className="home-offer-title">OFERTAS</h1>
        <Carousel className="home-offers-slider">

          {
            products.filter(product => product.isInOffer === true)
              .map((product, index)=>(
              <Carousel.Item key={index} className="home-offers-slider-item">
                <div className="home-offers-slider-img">
                  <p className="home-offers-slider-perc">{numberToPercentage(product.price, product.offerPrice)}</p>
                  <img
                    src={selesion1}
                    alt="First slide 1"
                  />
                  <p className="home-offers-slider-description">{product.name}</p>
                  <p className="home-offers-slider-previous-price">{'$' + product.price}</p>
                  <p className="home-offers-slider-price">{'$' + product.offerPrice}</p>
                </div>
                </Carousel.Item>
            ))
          }
          </Carousel>

      </div>

      <div className="home-products-section">
        <HighlitedProducts />
        <h2>Indumentaria</h2>
          <div className="home-products-individual-section">
            {
              products.filter(product => product.category === 'Indumentaria')
                .map((product, index)=>(
                  <ProductsCard 
                  key={index}
                  title={product.name}
                  price={product.price}
                  offerPrice={product.offerPrice} />
                ))
            }
          </div>

        <h2>Calzado</h2>
          <div className="home-products-individual-section">
            {
              products.filter(product => product.category === 'Calzado')
                .map((product, index)=>(
                  <ProductsCard 
                  key={index}
                  title={product.name}
                  price={product.price}
                  offerPrice={product.offerPrice} />
                ))
            }
          </div>
      </div>
    </>
  );
};

export default Home;
