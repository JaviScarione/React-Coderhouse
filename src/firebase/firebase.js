import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, getDoc, getDocs, deleteDoc, updateDoc, collection, doc } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "carritoapp-react.firebaseapp.com",
  projectId: "carritoapp-react",
  storageBucket: "carritoapp-react.appspot.com",
  messagingSenderId: "206750502635",
  appId: "1:206750502635:web:2f2a0bb0bcdd0d0468f8ae"
};

// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

const bdd = getFirestore()


export const createProducts = async () => {
    const promise = await fetch('./json/productos.json')
    const products = await promise.json()
    products.forEach(async (prod) => {
        await addDoc(collection(bdd, "products"), {
            categoria: prod.categoria,
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            descripcion: prod.descripcion,
            precio: prod.precio,
            stock: prod.stock,
            img: prod.img
        })
    })

}

export const getProducts = async () => {
    const products = await getDocs(collection(bdd, "products"))
    const newProducts = products.docs.map(prod => {
        return { ...prod.data(), id: prod.id }
    })
    return newProducts
}

export const getProduct = async (id) => {
    const product = await getDoc(doc(bdd, "products", id))
    const filterProduct = { ...product.data(), id: product.id }
    return filterProduct
}

export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd, "products", id), info)
}

export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd, "products", id))
}


export const createBuyOrder = async (client, totalPrice, cart, date) => {
    const buyOrder = await addDoc(collection(bdd, "buyOrders"), {
        client: client,
        items: cart,
        totalPrice: totalPrice,
        date: date
    })
    return buyOrder
}

export const getBuyOrder = async (id) => {
    const buyOrder = await getDoc(doc(bdd, "buyOrders", id))
    const item = { ...buyOrder.data(), id: buyOrder.id }
    return item
}

export const deleteBuyOrder = async (id) => {
    await deleteDoc(doc(bdd, "buyOrders", id))
}