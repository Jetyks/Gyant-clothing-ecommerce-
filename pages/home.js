import { productsForMen } from '../services/products'

const Home = (props) => {
  return (
    <>
    <section>
      <div className='flex justify-center items-center gap-7 h-24 border border-black'>
        <button className='h-auto text-xl border border-black text-yellow-950'>FOR HIM</button>
        <button className='h-auto text-xl border border-black text-yellow-950'>FOR HER</button>
      </div>
        <div className="grid grid-cols-4 gap-5 px-8">
        {productsForMen.map((product) => (
          <article key={product.id} className="border-none cursor-pointer group">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-auto object-cover " 
            />
            <div className='flex content-center items-center flex-col py-3.5 '>
              <h2 className="text-sm font-normal group-hover:text-yellow-900">{product.title}</h2>
              <p className="text-sm font-normal text-neutral-500 group-hover:text-yellow-800 opacity-70">${product.price.toFixed(2)}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
    </>
    
  )
}

export default Home