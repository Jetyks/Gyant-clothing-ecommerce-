import React from 'react'
import Button from './Button'
const OrderSummary = () => {
  return (
    <div className=' h-auto w-auto px-2 text-yellow-950'>
        <h3 className='text-2xl pb-3 font-medium'>Order Summary</h3>
        <div className='pb-2'>
            <div className='flex justify-between py-2 text-lg'><p className=''>Subtotal</p><p>$99</p></div>
            <div className='flex justify-between py-2 text-lg'><p className=''>Shipping costs</p><p>$99</p></div>
            <div className='flex justify-between py-2 text-lg'><p className=''>Discount</p><p>$99</p></div>
        </div>
        <div className='flex items-center justify-between h-14 w-full text-lg border-y border-[rgba(113,63,18,0.2)] mb-6'>
            <p>Total</p><p>$999</p>
        </div>
        <div className='h-16 mb-5'>
            <Button 
                title='Checkout'
                color='white'
                hoverBgColor='yellow-900'
                backgroundColor='yellow-950'
                borderColor='none'
                borderRadius='md'
                textSize='lg'
            />
        </div>
    </div>
  )
}

export default OrderSummary