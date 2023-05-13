import { useState, createContext, useContext } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext) 

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some(product => product.id === id)
    }

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

    const removeItem = (id) => {
        setCart(cart.filter(prod => prod.id !== id))
    }

    const emptyCart = () => {
        setCart([])
    }

    const getItemQuantity = () => {
        return cart.reduce((acum, prod) => acum += prod.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acum, prod) => acum += (prod.quantity * prod.precio), 0)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, emptyCart, totalPrice, getItemQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;