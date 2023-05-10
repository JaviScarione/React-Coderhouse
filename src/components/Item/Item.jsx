import { Link } from 'react-router-dom'
import "./Item.css";


//Recibir un objeto y devolverlo en forma de componente con esta plantilla
export const Item = ({ item }) => {
    return (
        
        <div className="card" style={{ width: '18rem' }}>
            <Link className='nav-link' to={`/item/${item.id}`}>
                <img src={item.img} className="card-img-top img" alt={`Imagen de ${item.nombre}`} />
                <div className="card-body">
                    <h5 className="card-title">{item.nombre} {item.marca} {item.modelo}</h5>
                    <p className="card-text">{item.descripcion}</p>
                    <h5 className="card-text">${item.precio}</h5>
                    <p className="card-text">Stock: {item.stock}</p>
                </div>
            </Link>
        </div>

    )
}