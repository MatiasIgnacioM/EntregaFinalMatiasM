import React, { useContext } from 'react'
import Cart from './Cart'
import { CartContext } from '../../context/CartContext'
import Swal from "sweetalert2"
import { useNavigate } from 'react-router-dom'

 

const CartContainer = () => {
  const {cart , clearCart,  deleteProductById, getTotalPrice } = useContext(CartContext)  

  let total = getTotalPrice()
    const navigate = useNavigate()

  const clearCartAlert = ()=> {
    Swal.fire({
      title: 'seguro que quieres vaciar carrito?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Vaciar',
      denyButtonText: `No vaciar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        clearCart()
        Swal.fire('Se ha vaciado el carrito', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('No se ha modificado el carrito', '', 'info')
      }
    })

  }

  return (
    <div>
        <Cart navigate={navigate} total={total} cart={cart} clearCartAlert={clearCartAlert}  deleteProductById={deleteProductById}/>
    </div>

  )

}

 

export default CartContainer