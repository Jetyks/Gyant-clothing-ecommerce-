import Link from 'next/link';

const ProductCard = ({ productId, productNumber, productImage, productTitle, productPrice}) => {
  const productTitleCard = `${productNumber} - ${productTitle}`
  return (
    <Link href={`/product/${productId}`}>
        <article className="border-none cursor-pointer group">
            <img 
            src={productImage} 
            alt={productTitle} 
            className="w-full h-auto object-cover "
            />
            <div className='flex content-center items-center flex-col py-3.5 '>
                <h2 className="text-sm font-normal group-hover:text-yellow-900">{productTitleCard}</h2>
                <p className="text-sm font-normal text-neutral-500 group-hover:text-yellow-800 opacity-70">${productPrice || "99"}</p>
            </div>
        </article>
    </Link>
  )
}

export default ProductCard