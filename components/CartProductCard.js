import Link from 'next/link';
import QuantityControl from './QuantityControl';

const CartProductCard = ({ productId, productNumber, productQuantity, productImage, productTitle, productPrice}) => {
  const productTitleCard = `${productTitle}`
  const totalProductPrice = productPrice*productQuantity;
  return (
      <div className="flex flex-row h-44 w-full group py-5 border-t-2 border-[rgba(113,63,18,0.2)]">
                <div className='h-auto w-30 cursor-pointer'>
                    <Link href={`/product/${productId}`}>
                        <img 
                        src={productImage} 
                        alt={productTitle} 
                        className="object-cover h-full w-full rounded-md"
                        />
                    </Link>
                </div>
            <div className='flex content-center items-center flex-grow h-full '>
                <div className=' h-full w-6/12 px-4 '>
                    <Link href={`/product/${productId}`}>
                        <h3 className="text-xl font-medium text-yellow-950">{productTitleCard}</h3>
                    </Link>
                    <div className='flex flex-row '>
                        <p className="pr-2 border-r border-yellow-900 text-normal font-normal text-yellow-950 opacity-90">{"Black"}</p>
                        <p className="pl-2 text-normal font-normal text-yellow-950 opacity-90">{"S"}</p>
                    </div>
                </div>
                <div className='h-10 w-3/12 px-7 '>
                    <QuantityControl productId={productId} quantity={productQuantity}/>
                </div>
                <div className='h-full w-3/12 '>
                    <h3 className="text-lg font-medium text-yellow-950 text-center">${totalProductPrice}</h3>
                </div>
            </div>
        </div>
  )
}

export default CartProductCard