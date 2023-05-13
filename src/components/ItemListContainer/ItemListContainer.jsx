import {useState, useEffect} from 'react';
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from '../../firebase/firebase';


export const ItemListContainer = () => {

  const [products, setProductos] = useState([])
  const { id } = useParams()

  useEffect(() => {

    if (id) { 
      getProducts()
      .then(products => {
        const filterProducts = products.filter(prod => prod.stock > 0).filter(prod => prod.categoria === id)
        setProductos(filterProducts)
      })
    } else {
      getProducts()
      .then(productos => {
        const filterProducts = productos.filter(prod => prod.stock > 0)
        setProductos(filterProducts)
      })
    }

  }, [id])

  return (
    <div className="container my-3">
      {<ItemList products={products} />}
    </div>
  )
}