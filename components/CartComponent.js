import { useCart } from '../context/CartContext';
import { useEffect, useState } from 'react';
import CartProductCard from './CartProductCard';
import CartListCard from './CartListCard';

const CartComponent = () => {
  const { cart } = useCart();
  

  const groupedCartItems = cart.reduce((acc, product) => {
    const existingProduct = acc.find(item => item.product_id === product.product_id && item.size === product.size);
    
    if (existingProduct) {
      // Incrementa la cantidad en función del producto existente
      existingProduct.quantity += product.quantity || 1; // Usa product.quantity si existe
    } else {
      // Agrega un nuevo producto respetando su quantity original
      acc.push({ ...product, quantity: product.quantity || 1 });
    }
    return acc;
  }, []);

 

  return (
    <div className='flex flex-row bg-white h-auto px-20 mt-8'>
      <div className='h-full w-8/12 '>
        <CartListCard>
          {groupedCartItems.map((product) => {
            const productNumber = product.product_id + 500;
            console.log(groupedCartItems)
            return (
              <CartProductCard
                key={product.product_id}
                productId={product.product_id}
                productNumber={productNumber}
                productQuantity={product.quantity}
                productImage={product.main_image_url}
                productTitle={product.product_name}
                productPrice={product.variants[0].price}
              />
            );
          })}
        </CartListCard>
      </div>
      <div className='bg-white w-3/12 h-full border-2 border-[rgba(113,63,18,0.2)] rounded-md ml-7'>
        <h3 className='text-2xl text-yellow-950 pl-5'>Resumen del pedido</h3>
      </div>
    </div>
  );
}

export default CartComponent;