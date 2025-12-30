import React from "react";
import { ShopContext } from "../../Components/ShopContext/ShopContext";
import { FiTrash2 } from "react-icons/fi";
import CartDetails from "./CartDetails";
import "./cart.css";
import { useContext } from "react";

const Cart = () => {
  const { cart, total, clearCart, quantity } = useContext(ShopContext);
  return (
    <div>
      <div className="cart-container">
        <div className="cart-left">
          <div className="cart-header">
            <h1>Shopping Cart</h1>
            <h1>Items: {quantity}</h1>
            <FiTrash2 onClick={clearCart} className="delete-cart" />
          </div>
          <div className="cart-header">
            <span>Product Description </span>
            <span>Quantity</span>
            <span>Price</span>
            <span>Total</span>
          </div>
          <div className="cart-details">
            {cart.length > 0 ? (
              cart.map((item) => <cartDetails item={item} key={item} />)
            ) : (
              <p> Your Cart is Empty </p>
            )}
          </div>
        </div>
        <div className="cart-right">
          <h2>Cart Summary </h2>
          <div className="summary-item">
            <span>items:</span>
            <span>{quantity}</span>
          </div>
          <div className="summary-item">
            <span>Subtotal</span>
            <span>$ {total}</span>
          </div>
          <div className="summary-item">
            <span>Shipping fees</span>
            <span>Free</span>
          </div>
          <div className="summary-item total-cost">
            <span>Total Cost </span>
            <span>${total}</span>
          </div>
          <button className="checkout">CHECK OUT</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
