import { useCartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "./Cart.css";

export const Cart = () => {
    const { cart, totalPrice, emptyCart, getItemQuantity } = useCartContext()
    const MySwal = withReactContent(Swal)
    const navigate = useNavigate()


    const clearCart = () => {
        MySwal.fire({
            title: 'Seguro deseas vaciar el carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: 'green',
            cancelButtonColor: 'firebrick',
            confirmButtonText: 'Si, vaciar el carrito!'
          }).then((result) => {
            if (result.isConfirmed) {        
                emptyCart();
              MySwal.fire({
                title: 'Carrito vaciado!',
                text: "Serás redirigido a la página de inicio.",
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: 'green',
                confirmButtonText: 'Ok'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/")
                }
              })
            }
          })
    }

    return (
        <>
            {cart.length === 0 ?
            <div className="flex-column empty">
                <h1 className="text-center mt-5">No hay productos en el carrito.</h1>
                <Link className="nav-link" to={"/"}><button className="btn btn-dark mt-2 back">Continuar comprando</button></Link>
            </div>
            :
            <div className="container my-3 card cardCart">
                <div className="g-2 m-2">
                    <div className="items">
                        <div>
                        {<ItemList productos={cart} template={"ItemCart"} />}
                        </div>
                    </div>
                </div>
                <div className="total">
                    <div className="totalContainer">
                        <Link className="nav-link" to={"/"}><button className="btn continue">Continuar Comprando</button></Link>
                        <button className="btn clearCart" onClick={clearCart}>Vaciar Carrito</button>
                    </div>
                    <h4>Total({getItemQuantity()} item/s): ${totalPrice().toLocaleString('es-ES', { useGrouping: true})}</h4>
                </div>                
                <Link className="nav-link my-3 ms-md-auto" to={"/checkout"}><button className="btn finish">Finalizar Compra</button></Link>
            </div>
            }
        </>

        
    );
}