import React from 'react'

const QuantityControl = ({quantity}) => {
  return (
    <div className='flex flex-row h-full w-full border-2 border-[rgba(113,63,18,0.2)] font-medium rounded-md z-20'>
        <div className='flex justify-center items-center h-full w-1/3 text-center text-2xl text-[rgba(66,32,6,0.8)]'>-</div>
        <div className='flex justify-center items-center h-full w-1/3 text-center text-[rgba(66,32,6,1)]'>{quantity}</div>
        <div className='flex justify-center items-center h-full w-1/3 text-center text-2xl text-[rgba(66,32,6,0.8)]'>+</div>
    </div>
  )
}

export default QuantityControl