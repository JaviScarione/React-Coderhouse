import { useEffect, useState } from "react"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        fetch('../json/productos.json')
            .then(response => response.json())
            .then(productos => {
                const product = productos.find(prod => prod.id === parseInt(id))
                setItem(product)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="mt-3 container itemDetail">
            <div className="itemDetail card">
                <ItemDetail item={item} />
            </div>
        </div>
    )
}