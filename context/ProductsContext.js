import { createContext, useContext, useEffect, useState } from 'react'
import { getAllProducts } from '../services/productsService'
/* import { fetchProducts } from '../services/productsService' */
import { useRouter } from 'next/router';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [productsForHim, setProductsForHim] = useState([])
    const router = useRouter();

    
    useEffect(() => {
      const fetchProducts = async () => {
        if (router.pathname === '/') {
          try {
            console.log('Cargando productos...');
            const productsData = await getAllProducts();
            setProductsForHim(productsData);
            setLoading(false);  // Indica que ya no está cargando
          } catch (error) {
            console.log('Error al cargar los productos:', error);
            setLoading(false);  // Asegúrate de desactivar el loading si hay error
          }
        } else {
          console.log('Hubo un error al setear los productos');
        }
      };
    
      fetchProducts();  // Llama la función inmediatamente después de declararla
    
    }, [router.pathname]);


   /*  useEffect(() => {
        if(router.pathname=== '/'){
          console.log(router.pathname)
            setProductsForHim(productsForMen)
            setLoading(false)
        }
        else{
            console.log("Hubo un error al setear los productos")
        }
       
        const fetchProducts = async () => {
          try {
            const productsData = await getHomeProducts()
            setProducts(productsData)
            setLoading(false)
          } catch (error) {
            console.log('Error fetching books: ', error)
          }
        }
    
        if (location.pathname === '/') {
          fetchProducts()
        }
      }, [router.pathname]) */
  return (
    <ProductsContext.Provider value={{
        loading,
        productsForHim,
        }}>
        {children}
    </ProductsContext.Provider>
  )
}

const useProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error('useProducts must be used within a ProductsProvider');
    }
    return context;
};

export { ProductsProvider, useProducts }