import { useCart } from '../context/CartContext';
import { useEffect, useState } from 'react';
import CartProductCard from './CartProductCard';
import CartListCard from './CartListCard';
import OrderSummary from './OrderSummary'

const CartComponent = () => {
  const { cart } = useCart();
  const [isMounted, setIsMounted] = useState(false); // Para evitar el desajuste de HTML

  // Este effect se ejecuta una vez que el componente se ha montado en el cliente
  useEffect(() => {
    setIsMounted(true);
  }, []);

   // Evitar renderizar nada antes de que el componente se haya montado
   if (!isMounted) {
    return null;
  }
  
   // Agrupar los productos por ID y tamaño
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
           /*  console.log(groupedCartItems) */
            return (
              <CartProductCard
                key={product.product_id}
                productId={product.product_id}
                productNumber={productNumber}
                productQuantity={product.quantity}
                /* completeProduct={product} */
                productImage={product.main_image_url}
                productTitle={product.product_name}
                productPrice={product.variants[0].price}
              />
            );
          })}
        </CartListCard>
      </div>
      <div className='bg-white w-4/12 h-full ml-7'>
        <OrderSummary/>
      </div>
    </div>
  );
}

export default CartComponent;