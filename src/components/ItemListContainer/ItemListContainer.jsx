import {useState, useEffect} from 'react';
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getProducts } from '../../firebase/firebase';


export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const { id } = useParams()

  useEffect(() => {

    if (id) { 
      getProducts()
      .then(productos => {
        const productosFiltrados = productos.filter(prod => prod.stock > 0).filter(prod => prod.categoria === id)
        setProductos(productosFiltrados)
      })
    } else {
      getProducts()
      .then(productos => {
        const productosFiltrados = productos.filter(prod => prod.stock > 0)
        setProductos(productosFiltrados)
      })
    }

  }, [id])

  return (
    <div className="container my-3">
      {<ItemList productos={productos} />}
    </div>
  )
}