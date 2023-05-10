import { useCartContext } from "../../context/CartContext.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CartWidget.css";

export const CartWidget = () => {
  const { getItemQuantity } = useCartContext()
  return (
    <div className="container-icon">
      <button className="btn">
      <Link to={"/cart"} className="nav-link">
        <FontAwesomeIcon className="cart_icon" icon={faCartShopping} size="xl" />
        {getItemQuantity() > 0 && <span className="count-products">{getItemQuantity()}</span>}
      </Link>
      </button>
    </div>
  );
};