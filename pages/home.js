import ProductCard from "../components/ProductCard"
import { useProducts } from "../context/ProductsContext"


const Home = () => {
  const { loading, productsForHim } = useProducts(); ////mover a otro componente
  return (
    <>
    <section>
      <div className='flex justify-center items-center gap-7 h-24 bg-gray-100 border border-black '>
        <button className='h-auto text-xl border border-black text-yellow-950'>FOR HIM</button>
        <button className='h-auto text-xl border border-black text-yellow-950'>FOR HER</button>
      </div>
        <div className="grid grid-cols-4 gap-5 px-8">
        {productsForHim.map((product) => (
          <ProductCard 
          key={product.id}
          productId = {product.id}
          productImage = {product.mainImage}
          productTitle = {product.productName}
          productPrice = {product.price}
          />
        ))}
      </div>
    </section>
    </>
    
  )
}

export default Home