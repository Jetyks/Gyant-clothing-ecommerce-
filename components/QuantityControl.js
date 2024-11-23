import React from 'react'
import { useCart } from '../context/CartContext'

const QuantityControl = ({quantity, productId, product}) => {
    const {removeOneFromCart, addToCart} = useCart()
    const handleRemoveFromCart = () => {
        removeOneFromCart(productId)
    }
    const handleAddToCart = () => {
        addToCart({ product_id: productId, quantity: 1 });  // Pasamos el productId y la cantidad
    }
  return (
    <div className='flex flex-row h-full w-full border border-[rgba(113,63,18,0.2)] font-medium rounded-md z-20'>
        <button onClick={handleRemoveFromCart} className='flex justify-center items-center h-full w-1/3 text-center text-2xl text-[rgba(66,32,6,0.8)]'>-</button>
        <div className='flex justify-center items-center h-full w-1/3 text-center text-[rgba(66,32,6,1)]'>{quantity}</div>
        <button onClick={handleAddToCart} className='flex justify-center items-center h-full w-1/3 text-center text-2xl text-[rgba(66,32,6,0.8)]'>+</button>
    </div>
  )
}

export default QuantityControl