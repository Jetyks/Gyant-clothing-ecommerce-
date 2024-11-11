import { useRouter } from 'next/router'
import { useProducts } from '../../context/ProductsContext'
import Head from 'next/head'
import SizeList from '../../components/SizeList'
import { useEffect, useState } from 'react'
import Button from '../../components/Button'

import ProductGallery from '../../components/ProductGallery'

const ProductDetails= () => {
    const router = useRouter()
    const {id} = router.query
    const {allProducts} = useProducts()
    
    const [product, setProduct] = useState(null);
    


    useEffect(() => {
      /* console.log('Products:', productsForHim);  */
      if (id) {
          const productId = parseInt(id);
          const foundProduct = allProducts.find((product) => product.product_id === productId);
          setProduct(foundProduct);
      }
  }, [id, allProducts]);

    if (!id) return <div> Cargando...</div>;
    if (!product) return <div>Producto no encontrado.</div>
  return (
    <>
      <Head>
        <title>GYANT</title>
      </Head>
      <div className='mt-10 flex flex-row h-auto px-24 '>
        <div className='h-[540px] w-auto'>
          <ProductGallery product={product}/>
        </div>
        <div className='ml-10 w-5/12 '>
            <div className='relative mt-2 pb-4'>
                <h3 className='text-2xl font-normal text-yellow-950'>{product.product_name}</h3>
                <p className='mt-1 text-xl font-normal text-yellow-800'>${product.variants[0].price}</p>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-yellow-900 bg-opacity-40"></div>
            </div>
            <div>
              <div className='mt-5 flex justify-between text-yellow-950'>
                <h4 className='text-base'>Size:</h4>
                <h4 className='text-base'>Size guide</h4>
              </div>
              <div className='mt-2 flex flex-row gap-2 h-10 w-full'>
                <SizeList/>
              </div>
              <div className='mt-5 flex flex-col gap-2 h-28 w-full'>
                  <Button title='Buy now' color='white' hoverBgColor='yellow-900' borderColor='none' backgroundColor='yellow-950'/>
                  <Button title='Add to cart' color='yellow-950' hoverBgColor='gray-50' borderColor='yellow-900' />
              </div>
              <div className='mt-6 flex flex-col gap-3'>
                <p><span className='font-medium'>MATERIAL:</span>{product.material}</p>
                <p><span className='font-medium'>FIT:</span>{product.fit}</p>
                <p><span className='font-medium'>DESIGN:</span>{product.description}</p>
              </div>
            </div>
        </div>
     </div>
    </>
    
  )
}

export default ProductDetails