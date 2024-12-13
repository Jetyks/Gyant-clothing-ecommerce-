import React, { useEffect, useState } from 'react'
import Button from './Button'
const OrderSummary = ({totalCartPrice}) => {
  const [shippingCost, setShippingCost] = useState(null);
  const [totalOrderPrice, setTotalOrderPrice] = useState(null);

  // Llamar a la API para calcular el precio del pedido
  useEffect(() => {
    const calculateOrder = async () => {
      try {
        const response = await fetch("/api/order/calculate-price", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cartPrice: totalCartPrice }),
        });

        const data = await response.json();
        setShippingCost(data.shippingCost);
        setTotalOrderPrice(data.totalOrderPrice);
      } catch (error) {
        console.error("Error al calcular el pedido:", error);
      }
    };

    calculateOrder();
  }, [totalCartPrice]);

  //funcion para agregar 2 decimales y un simbolo de dolar al precio (no tiene utilidad, solo es estetico)
  const formatPrice = (price) => (price ? `$${price.toFixed(2)}` : "$0");

  return (
    <div className=' h-auto w-auto px-2 text-yellow-950'>
        <h3 className='text-2xl pb-3 font-medium'>Order Summary</h3>
        <div className='pb-2'>
            <div className='flex justify-between py-2 text-lg'><p className=''>Subtotal</p><p>{formatPrice(totalCartPrice)}</p></div>
            <div className='flex justify-between py-2 text-lg'><p className=''>Shipping costs</p><p>{formatPrice(shippingCost)}</p></div>
            <div className='flex justify-between py-2 text-lg'><p className=''>Discount</p><p>$0</p></div>
        </div>
        <div className='flex items-center justify-between h-14 w-full text-lg border-y border-[rgba(113,63,18,0.2)] mb-6'>
            <p>Total</p><p>{formatPrice(totalOrderPrice)}</p>
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