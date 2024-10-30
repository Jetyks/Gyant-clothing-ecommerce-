import { useRouter } from 'next/router'
import { useProducts } from '../../context/ProductsContext'
import Head from 'next/head'
import SizeList from '../../components/SizeList'
import { useEffect, useState } from 'react'
import Button from '../../components/Button'

const ProductDetails= () => {
    const router = useRouter()
    const {id} = router.query
    const {productsForHim} = useProducts()
    /* const product = productsForHim.find((product) => product.id === parseInt(id)) */
    const [product, setProduct] = useState(null);

    useEffect(() => {
      console.log('Products:', productsForHim); 
      if (id) {
          const productId = parseInt(id);
          const foundProduct = productsForHim.find((product) => product.id === productId);
          setProduct(foundProduct);
      }
  }, [id, productsForHim]);

    if (!id) return <div> Cargando...</div>;
    if (!product) return <div>Producto no encontrado.</div>
  return (
    <>
      <Head>
        <title>GYANT</title>
      </Head>
      <div className='mt-10 flex flex-row h-auto px-24 border-2 border-black'>
        <div className='flex flex-row justify-center gap-4 px-4 h-[540px] w-auto bg-slate-500'>
          <div className='w-20 border-2 border-blue-800'> f</div>
          <img className='h-full w-auto' src={product.image} alt={product.title}/>
        </div>
        <div className='ml-10 w-5/12 '>
            <div className='relative mt-2 pb-4'>
                <h3 className='text-2xl font-normal text-yellow-950'>{product.title}</h3>
                <p className='text-xl font-normal text-yellow-800'>${product.price}</p>
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
                  {/* <button className='bg-yellow-950 text-white hover:bg-gray-50'>Hola</button> */}
                  <Button title='Add to cart' color='yellow-950' hoverBgColor='gray-50' borderColor='yellow-900' />
              </div>
              <div className='mt-6 flex flex-col gap-3'>
                <p><span className='font-medium'>MATERIAL:</span>{product.material}</p>
                <p><span className='font-medium'>FIT:</span>{product.fit}</p>
                <p><span className='font-medium'>DESIGN:</span>{product.design}</p>
              </div>
            </div>
        </div>
     </div>
    </>
    
  )
}

export default ProductDetails