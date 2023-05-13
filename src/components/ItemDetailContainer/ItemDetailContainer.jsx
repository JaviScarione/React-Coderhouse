import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail.jsx";
import { useParams } from "react-router-dom";
import { getProduct } from "../../firebase/firebase.js";
import "./ItemDetailContainer.css";



export const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getProduct(id).then(product => setItem(product))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="my-3 container itemDetail">
            <div className="itemDetail card">
                <ItemDetail item={item} />
            </div>
        </div>
    )
}