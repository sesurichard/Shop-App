import React, { useContext } from "react";
import { ShopContext } from "../ShopContext/ShopContext";
import "./ProductList.css";

const ProductList = () => {
  const { products } = useContext(ShopContext);
  return (
    <div>
      <div className="product-list">
        <h2>Our Unique Collections</h2>
        <div className="product-display">
          {products.map((product) => {
            const { id, image, name, price } = product;
            return (
              <div className="product-card" key={id}>
                <img src={image} alt="" className="product-img" />
                <div className="product-info">
                  <h4>{name}</h4>
                  <p>${price}</p>
                </div>
                <button className="cta">Add To Cart</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
