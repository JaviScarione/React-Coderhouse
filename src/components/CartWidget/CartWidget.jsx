import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";

const CartWidget = ({ cartItems }) => {
  return (
    <div className="container-icon">
      <a href="/">
        <span className="count-products">{cartItems}</span>
        <FontAwesomeIcon
          className="cart_icon"
          icon={faCartShopping}
          size="xl"
        />
      </a>
    </div>
  );
};

export default CartWidget;
