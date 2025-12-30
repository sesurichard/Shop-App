import React from "react";
import Hero from "../../Components/Hero/Hero.jsx";
import ProductList from "../../Components/ProductList/ProductList.jsx";
import { ShopContext } from "../../Components/ShopContext/ShopContext.jsx";
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
