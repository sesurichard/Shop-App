import React from "react";
import Hero from "../../Components/Hero/Hero";
import ProductList from "../../Components/ProductList/ProductList";
import { ShopContext } from "../../Components/ShopContext/ShopContext";
// import { productsData } from "../../assets/data";
const Homepage = () => {
  return (
    <div>
      <Hero />
      <ProductList />
    </div>
  );
};

export default Homepage;
