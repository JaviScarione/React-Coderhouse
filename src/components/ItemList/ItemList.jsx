import { Item } from "../Item/Item"
import { ItemCart } from "../ItamCart/ItemCart"
export const ItemList = ({ productos, template }) => {
    return (
        <>
            {
                template === "ItemCart" ?
                <div className="row justify-content-center">
                    {productos.map(producto => producto.stock > 0 && <ItemCart key={producto.id} item={producto} />)}
                </div>
                :
                <div className="row col justify-content-center">
                    {productos.map(producto => <Item key={producto.id} item={producto} />)}
                </div>
            }   
        </>
    )
}