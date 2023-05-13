import { useCartContext } from "../../context/CartContext.js";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify"

import "./CartWidget.css";

export const CartWidget = () => {

  const { getItemQuantity } = useCartContext()

  const showAlert = () =>{
    toast.info('Aun no tienes productos en el 🛒', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }

  return (
    <div className="container-icon">
      <button className="btn">
      {getItemQuantity() > 0 ? (
        <Link to="/cart" className="nav-link">
          <FontAwesomeIcon className="cart_icon" icon={faCartShopping} size="xl" />
          {getItemQuantity() > 0 && <p className="count-products">{getItemQuantity()}</p>}
        </Link>
        ): (
        <Link className="nav-link">
          <FontAwesomeIcon className="cart_icon" icon={faCartShopping} size="xl" onClick={showAlert}/>
        </Link>
        )
      }       
      </button>
    </div>
  );
};