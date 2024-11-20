import { useState, useEffect } from 'react';
import Icon from './Icon';
import bagIcon from '../assets/images/bag-img.png';
import { useCart } from '../context/CartContext';
import Link from 'next/link';

const BagIcon = () => {
  const { cart } = useCart();
  const [isMounted, setIsMounted] = useState(false);
  const [productsNumber, setProductsNumber] = useState(0)
 /*  console.log(cart) */

  useEffect(() => {
    const totalItems = cart.reduce((total, product) => total + product.quantity, 0);
    setProductsNumber(totalItems);
  }, [cart]);


  // Usamos useEffect para asegurarnos de que el componente solo se renderice en el cliente
  useEffect(() => {
    setIsMounted(true); // Establece el estado de montaje a true cuando el componente se monta
  }, []);

  if (!isMounted) return null; // Evita el renderizado en el servidor

  return (
    <Link href="/cart">
      {cart.length > 0 && (
        <div className="flex items-center justify-center absolute right-0 h-4 w-4 rounded-full bg-red-600 text-white text-xs">
          {productsNumber}
        </div>
      )}
      <Icon alt="Bag Icon" icon={bagIcon} altText="User Icon" />
    </Link>
  );
};

export default BagIcon;
