import { useState, createContext, useContext } from "react";

// Contexto para el carrito de compras
const CartContext = createContext()

// Exportación del carrito para ser consultado
export const useCartContext = () => useContext(CartContext) 

// Definición del proveedor para el carrito y sus propiedades
const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    // Funcion para verificar si el producto existe en el carrito
    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

    // Verificamos si el producto existe en el carrito, modificamos la cantidad pedida. Sino lo agregamos 
    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            const indice = cart.findIndex(prod => prod.id === item.id)
            const aux = [...cart]
            aux[indice].quantity = quantity
            setCart(aux)
    
        } else {
            const newItem = {
                ...item,
                quantity: quantity 
            }
            setCart([...cart, newItem])
        }
    }


    // Eliminamos un producto del carrito utilizando la inversa de filter.
    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

    // Vaciamos el carrito
    const emptyCart = () => {
        setCart([])
    }


    //Consultamos la cantidad total de productos en el carrito
    const getItemQuantity = () => {
        return cart.reduce((acum, prod) => acum += prod.quantity, 0)
    }

    // Obtenemos el total de la compra
    const totalPrice = () => {
        return cart.reduce((acum, prod) => acum += (prod.quantity * prod.precio), 0)
    }

    return ( // Exportamos el carrito y sus funciones
        <CartContext.Provider value={{ cart, addItem, removeItem, emptyCart, totalPrice, getItemQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;