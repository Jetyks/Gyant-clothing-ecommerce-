import React, { useState } from 'react'
import Button from './Button'

const SizeList = () => {
    const sizes = ["S", "M", "L", "XL", "XXL"];
    const [selectedSize, setSelectedSize] = useState(null);
    const handleSizeSelect = (size) => {
        setSelectedSize(size);
      }
  return (
    <>
      {sizes.map((size) => (
        <Button
         key={size}
         title={size}
         onClick={() => handleSizeSelect(size)}
         isSelected={selectedSize === size}
         />
      ))}
    </>
  )
}

export default SizeList