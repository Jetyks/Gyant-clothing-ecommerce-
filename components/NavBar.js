import Head from 'next/head'; // Import correcto para Next.js
import React from 'react';
import SearchInput from './SearchInput';
import Icon from './Icon';
import UserIcon from './UserIcon';
import BagIcon from './BagIcon';

const NavBar = () => {
  return (
    <>
     <Head>
        <title>My E-commerce</title>
      </Head>
      <nav className="relative flex justify-end items-center h-16 bg-white border-none px-4 py-2.5" >
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Logo */}
          <a href="/" className="text-3xl font-bold text-yellow-950 col-start-5 col-span-4">
            {/* Y O U N G L A */}
            G Y A N T
            {/* V A R A D O */}
          </a>
        </div>
        <div className='relative h-4/5 w-36 flex justify-center items-center z-50 mr-3'>
          <SearchInput/>
        </div>
        <div className='relative h-4/5 w-20 flex justify-evenly items-center z-50 '>
          <div className='h-9 w-9 '>
            <UserIcon/>
          </div>
          <div className='h-9 w-9 '>
            <BagIcon/>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;