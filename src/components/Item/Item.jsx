import { Link } from 'react-router-dom'
import "./Item.css";


export const Item = ({ item }) => {
    return (        
        <div className="card cardItem" style={{ width: '18rem' }}>
            <Link className='nav-link link' to={`/item/${item.id}`}>
                <img src={item.img} className="card-img-top itemImg" alt={`Imagen de ${item.nombre} ${item.marca} ${item.descripcion}`} />
                <div className="card-body">
                    <h5 className="card-title">{item.nombre} {item.marca} {item.modelo}</h5>
                    <p className="card-text">{item.descripcion}</p>
                    <h5 className="card-text">${item.precio.toLocaleString('es-ES', { useGrouping: true})}</h5>
                    <p className="card-text">Stock: {item.stock}</p>
                </div>
            </Link>
        </div>

    )
}