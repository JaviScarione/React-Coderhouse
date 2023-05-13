import { useRef, useState } from "react"
import { useCartContext } from "../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import { createBuyOrder, getProduct, updateProduct } from "../../firebase/firebase"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { toast } from "react-toastify"
import "./Checkout.css";


export const Checkout = () => {

    const MySwal = withReactContent(Swal)

    const form = useRef()
    const { cart, totalPrice, emptyCart } = useCartContext()
    const [emailsMatch, setEmailsMatch] = useState(true)

    let navigate = useNavigate()
    const submitForm = (e) => {
        e.preventDefault()

        const formData = new FormData(form.current)
        const client = Object.fromEntries(formData)



    if (client.email === client.email2) {
        setEmailsMatch(true)
        const aux = [...cart]

        aux.forEach(prodCart => {
            getProduct(prodCart.id).then(prodDB => {
                if (prodDB.stock >= prodCart.quantity) { 
                    prodDB.stock -= prodCart.quantity
                    updateProduct(prodDB.id, prodDB)
                } else {
                    toast.error('La cantidad pedida supera el stock disponible', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }
            })
        })
        const aux2 = aux.map(prod => ({ id: prod.id, quantity: prod.quantity, precio: prod.precio }));

        createBuyOrder(client, totalPrice(), aux2, new Date().toLocaleString('es-AR', { timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone }))
            .then(buyOrder => {
                MySwal.fire({
                    icon: 'success',
                    title: 'Muchas gracias por su compra!',
                    text: `Su código de compra es ${buyOrder.id}, por un total de $${totalPrice().toLocaleString('es-ES', { useGrouping: true})}`,
                  })
                emptyCart()
                e.target.reset()
                navigate("/")
            })
            .catch(error => {
                console.error(error)
            })

    }else {
        MySwal.fire({
            icon: 'error',
            title: 'los emails deben ser iguales.',
            text: 'Por favor revise los datos ingresados.',
        }).then(() => {
            setEmailsMatch(false)
        })
    }
}
return (
    <>
        {
            cart.length === 0 ?
                <>
                    <div className="flex-column error">
                        <h1 className="text-center mt-5">Para finalizar compra debe tener productos en el carrito.</h1>
                        <Link className="nav-link" to={"/"}><button className="btn btn-dark mt-2 back">Continuar comprando</button></Link>
                    </div>
                </>
                :
                <div className="container formContainer mt-4" >
                    <h2>Complete sus datos:</h2>
                    <form className="form mb-3" onSubmit={submitForm} ref={form}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label ms-3">Nombre y Apellido:</label>
                            <input type="text" className="form-control" name="name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label ms-3">Email:</label>
                            <input  type="email" className={`form-control ${emailsMatch ? "" : "emailError"}`} name="email" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email2" className="form-label ms-3">Repetir Email:</label>
                            <input  type="email" className={`form-control ${emailsMatch ? "" : "emailError"}`} name="email2" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="dni" className="form-label ms-3">DNI:</label>
                            <input type="number" className="form-control no-buttons" name="dni" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="telefono" className="form-label ms-3">Teléfono:</label>
                            <input type="number" className="form-control no-buttons" name="telefono" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="direccion" className="form-label ms-3">Direccion:</label>
                            <input type="text" className="form-control" name="direccion" required/>
                        </div>
                        <div className="text-end">
                            <button type="submit" className="btn finish mt-4">Finalizar Compra</button>
                        </div>
                    </form>
                </div>

        }

    </>

)
}