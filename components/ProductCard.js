import Link from 'next/link';

const ProductCard = ({ productId, productImage, productTitle, productPrice}) => {
  return (
    <Link href={`/product/${productId}`}>
        <article className="border-none cursor-pointer group">
            <img 
            src={productImage} 
            alt={productTitle} 
            className="w-full h-auto object-cover "
            />
            <div className='flex content-center items-center flex-col py-3.5 '>
                <h2 className="text-sm font-normal group-hover:text-yellow-900">{productTitle}</h2>
                <p className="text-sm font-normal text-neutral-500 group-hover:text-yellow-800 opacity-70">${productPrice.toFixed(2)}</p>
            </div>
        </article>
    </Link>
  )
}

export default ProductCard