import { useCartContext } from '../../context/CartContext.js';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import "./ItemCart.css";


export const ItemCart = ({ item }) => {
    const { removeItem } = useCartContext()
    return (
        <>
            <div className="row border-top border-bottom pt-3">
                <div className="col-1 d-flex justify-content-center align-items-center">
                    <button className="btn remove" onClick={() => removeItem(item.id)}>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </div>               
                <div className="col-2 d-flex justify-content-center align-items-center">
                    <Link className='nav-link' to={`/item/${item.id}`}>
                        <img src={item.img} className="card-img cartImg" alt={`Imagen de ${item.nombre} ${item.marca} ${item.descripcion}`} />
                    </Link>
                </div>
                <div className="col-7 col-md-6 description">                       
                    <h6>{item.nombre} {item.marca} {item.modelo} {item.descripcion}</h6>            
                    <p>{item.quantity} Unidades. </p>            
                    <p>${item.precio.toLocaleString('es-ES', { useGrouping: true})}</p>            
                </div>
                <div className="col-2 col-md-offset-1 d-flex align-items-center justify-content-end pe-3">
                    <h5>${(item.quantity * item.precio).toLocaleString('es-ES', { useGrouping: true})}</h5>
                </div>
            </div>           
        </>
    )
}