import { productsForMen } from '../services/products'

const Home = (props) => {
  return (
    <>
    <section>
      <div className='flex justify-center items-center gap-7 h-24 border border-black'>
        <button className='h-auto text-lg border border-black'>FOR HIM</button>
        <button className='h-auto text-lg border border-black'>FOR HER</button>
      </div>
        <div className="grid grid-cols-4 gap-5 px-8">
        {productsForMen.map((product) => (
          <article key={product.id} className="border-none">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-auto object-cover " 
            />
            <div className='flex content-center items-center flex-col py-3.5'>
              <h2 className="text-sm font-normal ">{product.title}</h2>
              <p className="text-sm font-normal">${product.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
    </>
    
  )
}

export default Home