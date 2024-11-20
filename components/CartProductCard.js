import Link from 'next/link';
import QuantityControl from './QuantityControl';

const CartProductCard = ({ productId, productNumber, productQuantity, productImage, productTitle, productPrice}) => {
  const productTitleCard = `${productTitle}`
  return (
    <Link href={`/product/${productId}`}>
        <div className="flex flex-row h-44 w-full cursor-pointer group py-5 border-t-2 border-[rgba(113,63,18,0.2)]">
            <div className='h-auto w-30'>
                <img 
                src={productImage} 
                alt={productTitle} 
                className="object-cover h-full w-full rounded-md"
                />
            </div>
            <div className='flex content-center items-center flex-grow h-full '>
                <div className=' h-full w-6/12 px-4 '>
                    <h3 className="text-xl font-medium text-yellow-950">{productTitleCard}</h3>
                    <div className='flex flex-row '>
                        <p className="pr-2 border-r border-yellow-900 text-normal font-normal text-yellow-950 opacity-90">{"Black"}</p>
                        <p className="pl-2 text-normal font-normal text-yellow-950 opacity-90">{"S"}</p>
                    </div>
                </div>
                <div className='h-10 w-3/12 px-7 '>
                    <QuantityControl quantity={productQuantity}/>
                </div>
                <div className='h-full w-3/12 '>
                    <h3 className="text-lg font-medium text-yellow-950 text-center">${productPrice || "99"}</h3>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default CartProductCard