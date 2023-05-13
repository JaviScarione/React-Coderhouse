import { ItemCount } from "../ItemQuantitySelector/ItemQuantitySelector.jsx";
import { useCartContext } from "../../context/CartContext.js";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "./ItemDetail.css";


export const ItemDetail = ({ item }) => {
    const { addItem } = useCartContext()
    let navigate = useNavigate()
    
    const onAdd = (contador) => {
        addItem(item, contador)
        toast.success('Producto agregado al 🛒', {
            position: "top-right",
            destination: "/cart",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            })
            navigate("/")
    }

    return (
        <div className="row text-start">
            <div className="col-md-6">
                <Link to="/" className="text-muted"><FontAwesomeIcon icon={faXmark} className="arrow" /></Link>
                <img src={item.img} alt={`Imagen de ${item.nombre} ${item.marca} ${item.descripcion}`} className="detailImg" />
            </div>
            <div className="col-md-6 detail">
                <div className="tex-start m-3">
                    <h4 className="card-title">{item.nombre}</h4>
                    <h6 className="card-text">Modelo: {item.modelo}</h6>
                    <p className="card-text">Marca: {item.marca}</p>
                    <p className="card-text">Precio: ${item.precio}</p>
                    <p className="card-text">Stock: {item.stock}</p>
                    <div className="count">
                        <ItemCount ValInicial={1} min={1} max={item.stock} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    )
}