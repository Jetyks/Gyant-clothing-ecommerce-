import React, { useState } from 'react'

const Button = ({title, onClick, isSelected }) => {
  return (
    <div className='w-full h-full'>
        <button onClick={onClick} className={`w-full h-full border ${isSelected ? 'border-yellow-950 text-yellow-950 opacity-100' : 'border-yellow-900 opacity-65'} text-yellow-900`}>{title}</button>
    </div>
    
  )
}

export default Button