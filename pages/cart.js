import React from 'react';
import CartComponent from '../components/CartComponent';
import Head from 'next/head';


const CartPage = () => {
  return (
   <>
     <Head>
        <title>Gyant Bag</title>
    </Head>
    <CartComponent />
   </>
  );
};

export default CartPage;