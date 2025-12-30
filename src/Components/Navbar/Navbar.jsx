import React, { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../ShopContext/ShopContext";

const Navbar = () => {
  const { quantity } = useContext(ShopContext);
  return (
    <div>
      <div className="navbar">
        <div className="link">
          <ul>
            <li>HOME</li>
            <li>CLOTHES</li>
          </ul>
        </div>
        <div className="logo">
          <h2>LUXURY COLLECTION</h2>
        </div>
        <Link to="/cart">
          <div className="nav_icon_wrapper">
            <BsCart3 className="nav_icon" />
            <p className="nav_qty">{quantity}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
