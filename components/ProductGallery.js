import React, { useState } from 'react'
import Thumbnail from './Thumbnail'
import MainImage from './MainImage';

const ProductGallery = ({product}) => {
  console.log("Hola soy el producto ", product.images)
    const [selectedImage, setSelectedImage] = useState(product.main_image_url);
    const handleImageClick = (image) => {
        setSelectedImage(image);
      };

 // Definimos todas las imágenes en una constante
 const allImages = [
  { imageUrl: product.main_image_url, color: 'Main' }, // Imagen principal
  ...product.images.map((variant) => ({
    imageUrl: variant.image_url // propiedad que identifica a la variante
  })),
];
/* console.log("Hola soy todas las imagenes",allImages) */

return (
  <div className='flex flex-row justify-center gap-4 px-4 h-full w-full'>
    <div className='flex flex-col items-center space-y-2 mr-3'>
      {allImages.map((variant, index) => (
        <Thumbnail
          key={index}
          /* alt={variant.name} */
          image={variant.imageUrl}  // Usamos imageUrl directamente de allImages
          onClick={() => handleImageClick(variant.imageUrl)}
          isSelected={selectedImage === variant.imageUrl}
        />
      ))}
    </div>
    <MainImage image={selectedImage} />
  </div>
);
}

export default ProductGallery