import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";

const CartWidget = ({ cartItems }) => {
  return (
    <div className="container-icon">
      <button className="btn"><FontAwesomeIcon className="cart_icon" icon={faCartShopping} size="xl" /></button>
      <p className="count-products">{cartItems}</p>
    </div>
  );
};

export default CartWidget;
