import React from 'react'
import CartItem from './CartItem'
import { useGlobalContext } from './context'

const CartContainer = () => {
  const { cart } = useGlobalContext()
  
  
  return (
    <section className='cart'>
    <h1>Cart</h1>
    </section>
  )
}

export default CartContainer
