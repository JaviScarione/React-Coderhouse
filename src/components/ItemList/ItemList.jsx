import { Item } from "../Item/Item"
import { ItemCart } from "../ItamCart/ItemCart"
export const ItemList = ({ products, template }) => {
    return (
        <>
            { //Rendering condicional para el listado de productos siempre que el stock sea mayor que 0, o el listado de productos en el carrito
                template === "ItemCart" ?
                <div className="row justify-content-center">
                    {products.map(product => <ItemCart key={product.id} item={product} />)}
                </div>
                :
                <div className="row col justify-content-center">
                    {products.map(product => product.stock > 0 && <Item key={product.id} item={product} />)}
                </div>
            }   
        </>
    )
}