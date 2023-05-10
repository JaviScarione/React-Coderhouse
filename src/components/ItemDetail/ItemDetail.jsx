import { ItemCount } from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext.js";

export const ItemDetail = ({ item }) => {
    const { addItem } = useCartContext()
    
    const onAdd = (contador) => {
        addItem(item, contador)
    }

    return (
        <div className="row text-start">
            <div className="col-md-6">
                <img src={item.img} alt={`Imagen de ${item.nombre}`} className="img-fluid rounded-start" />
            </div>
            <div className="col-md-6">
                <div className="card-body tex-start">
                    <h4 className="card-title">{item.nombre}</h4>
                    <h6 className="card-text">Modelo: {item.modelo}</h6>
                    <p className="card-text">Marca: {item.marca}</p>
                    <p className="card-text">Precio: ${item.precio}</p>
                    <p className="card-text">Stock: {item.stock}</p>
                    <div>
                        <ItemCount ValInicial={1} min={1} max={item.stock} onAdd={onAdd} />
                    </div>
                </div>
            </div>
        </div>
    )
}