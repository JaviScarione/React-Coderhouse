import { Item } from "../Item/Item"
import { ItemCart } from "../ItamCart/ItemCart"
export const ItemList = ({ products, template }) => {
    return (
        <>
            {
                template === "ItemCart" ?
                <div className="row justify-content-center">
                    {products.map(product => product.stock > 0 && <ItemCart key={product.id} item={product} />)}
                </div>
                :
                <div className="row col justify-content-center">
                    {products.map(product => <Item key={product.id} item={product} />)}
                </div>
            }   
        </>
    )
}