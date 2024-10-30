import React, { useState } from 'react'
import Thumbnail from './Thumbnail'
import MainImage from './MainImage';

const ProductGallery = ({product}) => {
    const [selectedImage, setSelectedImage] = useState(product.mainImage);
    const handleImageClick = (image) => {
        setSelectedImage(image);
      };

  return (
    <div className='flex flex-row justify-center gap-4 px-4 h-full w-full'>
        <div className='flex flex-col items-center space-y-2 mr-3'>
        {[{ imageUrl: product.mainImage, color: 'Main' }, ...product.variants].map((variant, index) => (
                    <Thumbnail 
                        key={index}
                        image={variant.imageUrl}
                        onClick={() => handleImageClick(variant.imageUrl)}
                        isSelected={selectedImage === variant.imageUrl}
                    />
                ))}
        </div>
        <MainImage image={selectedImage}/>
        {/* <img className='h-full w-auto' src={selectedImage} alt='Main product'/> */}
    </div>
  )
}

export default ProductGallery