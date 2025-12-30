import React from "react";
import { ShopContext } from "../../Components/ShopContext/ShopContext.jsx";
import { productsData } from "../../assets/data.jsx";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useContext } from "react";

const ProductDetails = () => {
  const { addToCart, products } = useContext(ShopContext);

  const { id } = useParams();
  const product = products.find((item) => item.id == id);
  return (
    <div>
      <div className="product-detail">
        <div className="details-left">
          <img src={product.image} alt="" />
        </div>
        <div className="details-right">
          <h3>{product.name}</h3>
          <p className="p-price"> ${product.price}</p>
          <p className="p-description">{product.description}</p>
          <button onClick={() => addToCart(product, id)}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
