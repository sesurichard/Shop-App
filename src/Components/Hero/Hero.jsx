import React from "react";
import hero_img from "../../assets/hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero_container">
      <div className="hero-content">
        <h1 className="logotext">LUXURY STYLE</h1>
        <img src={hero_img} alt="" className="hero-img" />
      </div>
    </div>
  );
};

export default Hero;
