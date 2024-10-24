import { data } from '../services/products'

const Home = (props) => {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover mb-4"
            />
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="text-gray-900 font-semibold mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
    </>
    
  )
}

export default Home