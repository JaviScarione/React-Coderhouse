import { Item } from "../Item/Item"
export const ItemList = ({ productos }) => {
    return (
        <div className="row justify-content-center">
            {productos.map(producto => <Item key={producto.id} item={producto} />)}
        </div>
    )
}