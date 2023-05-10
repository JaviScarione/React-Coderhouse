import {useState, useEffect} from 'react';
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"


export const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const { id } = useParams()

  useEffect(() => {

    if (id) { 
      fetch('../json/productos.json')
        .then(response => response.json())
        .then(productos => {
          const productosFiltrados = productos.filter(prod => prod.stock > 0).filter(prod => prod.categoria === id)
          setProductos(productosFiltrados)
        })
    } else {
      fetch('./json/productos.json')
        .then(response => response.json())
        .then(productos => {
          const productosFiltrados = productos.filter(prod => prod.stock > 0)
          setProductos(productosFiltrados)
        })
    }

  }, [id])

  return (
    <div className="container mt-3">
      {<ItemList productos={productos} />}
    </div>
  )
}