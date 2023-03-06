import React, { useContext, useEffect } from "react";
import AdminProductsContext from "../../../context/admin/products/AdminProductsContext";
import "../../../css/Home/HighlitedProducts.css";
import ProductsCard from "../../common/ProductsCard";

const HighlitedProducts = () => {
  const { products, getProducts } = useContext(AdminProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="highlited-products-section">
        <h2 className="highlited-products-title">PRODUCTOS DESTACADOS</h2>
        <div className="highlited-products-cards-container">
          {products
            .filter((product) => product.isHighligted === true)
            .map((product, index) => (
              <ProductsCard
                key={index}
                title={product.name}
                price={product.price}
                offerPrice={product.offerPrice}
                isHighligted={product.isHighligted}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default HighlitedProducts;
