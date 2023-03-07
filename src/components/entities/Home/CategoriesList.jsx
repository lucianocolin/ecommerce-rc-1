import React, { useContext } from "react";
import AdminProductsContext from "../../../context/admin/products/AdminProductsContext";
import ProductsCard from "../../common/ProductsCard";
import '../../../css/Home/CategoriesList.css';

const CategoriesList = () => {

  const { products } = useContext(AdminProductsContext);

  return (
    <>
      <h2>Zapatillas</h2>
      <div className="home-products-individual-section">
        {products
          .filter((product) => product.category === "Zapatillas")
          .map((product, index) => (
            <ProductsCard
              key={index}
              title={product.name}
              price={product.price}
              offerPrice={product.offerPrice}
            />
          ))}
      </div>

      <h2>Ojotas</h2>
      <div className="home-products-individual-section">
        {products
          .filter((product) => product.category === "Ojotas")
          .map((product, index) => (
            <ProductsCard
              key={index}
              title={product.name}
              price={product.price}
              offerPrice={product.offerPrice}
            />
          ))}
      </div>

      <h2>Botines</h2>
      <div className="home-products-individual-section">
        {products
          .filter((product) => product.category === "Botines")
          .map((product, index) => (
            <ProductsCard
              key={index}
              title={product.name}
              price={product.price}
              offerPrice={product.offerPrice}
            />
          ))}
      </div>

      <h2>Remeras</h2>
      <div className="home-products-individual-section">
        {products
          .filter((product) => product.category === "Remeras")
          .map((product, index) => (
            <ProductsCard
              key={index}
              title={product.name}
              price={product.price}
              offerPrice={product.offerPrice}
            />
          ))}
      </div>

      <h2>Camisetas</h2>
      <div className="home-products-individual-section">
        {products
          .filter((product) => product.category === "Camisetas")
          .map((product, index) => (
            <ProductsCard
              key={index}
              title={product.name}
              price={product.price}
              offerPrice={product.offerPrice}
            />
          ))}
      </div>

      <h2>Shorts</h2>
      <div className="home-products-individual-section">
        {products
          .filter((product) => product.category === "Shorts")
          .map((product, index) => (
            <ProductsCard
              key={index}
              title={product.name}
              price={product.price}
              offerPrice={product.offerPrice}
            />
          ))}
      </div>

      <h2>Pantalones</h2>
      <div className="home-products-individual-section">
        {products
          .filter((product) => product.category === "Pantalones")
          .map((product, index) => (
            <ProductsCard
              key={index}
              title={product.name}
              price={product.price}
              offerPrice={product.offerPrice}
            />
          ))}
      </div>

      <h2>Buzos y Camperas</h2>
      <div className="home-products-individual-section">
        {products
          .filter((product) => product.category === "Buzos y Camperas")
          .map((product, index) => (
            <ProductsCard
              key={index}
              title={product.name}
              price={product.price}
              offerPrice={product.offerPrice}
            />
          ))}
      </div>
    </>
  );
};

export default CategoriesList;
