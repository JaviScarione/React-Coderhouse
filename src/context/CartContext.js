import { useState, createContext, useContext } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext) 

export const CartProvider = (props) => {

    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const addItem = (item, quantity) => {
        alert("entro")
        if (isInCart(item.id)) {
            const index = cart.findIndex(prod => prod.id === item.id)
            const aux = [...cart]
            aux[index].quantity = quantity
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

    console.log(cart);

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
            {props.children}
        </CartContext.Provider>
    )
}