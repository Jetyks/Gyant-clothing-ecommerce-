import React, { useState } from 'react'
import Button from './Button'

const SizeList = ({sizes, onSizeSelect, selectedSize}) => {
    const allSizes = ["S", "M", "L", "XL", "XXL"];
    const productSizes = sizes

  return (
    <>
      {allSizes.map((size) => {
            const isAvailable = productSizes.includes(size); // Verifica si la talla está disponible
            return (
                <Button
                    key={size}
                    title={size}
                    onClick={() => onSizeSelect(size)}
                    isAvailable={isAvailable}
                    isSelected={selectedSize === size}
                    hoverBorderColor={'yellow-950'}
                    
                />
            );
          })}
    </>
  )
}

export default SizeList