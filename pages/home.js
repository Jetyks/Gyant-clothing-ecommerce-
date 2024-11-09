import ProductCard from "../components/ProductCard"
import { useProducts } from "../context/ProductsContext"


const Home = () => {
  const { loading, productsForHim } = useProducts();
  /* console.log("Soy el console home", productsForHim[0].variants[0])  */
  if (loading) {
    return <div>Cargando productos...</div>;  // Muestra un mensaje mientras carga
  }

  else if (loading === false){
    return (
      <>
      <section>
        <div className='flex justify-center items-center gap-7 h-24 bg-gray-100 border border-black '>
          <button className='h-auto text-xl border-b border-black text-yellow-950'>FOR HIM</button>
          <button className='h-auto text-xl border-b border-black text-yellow-950'>FOR HER</button>
        </div>
          <div className="grid grid-cols-4 gap-5 px-8">
          {productsForHim.map((product) => {
              const productNumber = product.product_id + 500;
              const productPrice = product.variants?.[0]?.price || "Precio no disponible";  // Validación para el precio  // Realizar la suma aquí
             /*  console.log("SOY un console en .map",product.variants) */
              return (
                <ProductCard 
                  key={product.product_id}
                  productId={product.product_id}
                  productNumber={productNumber}
                  productImage={product.main_image_url}
                  productTitle={product.product_name}
                  productPrice={productPrice}
                />
              );
            })}
        </div>
      </section>
      </>
      
    )
  }
  }
  

export default Home