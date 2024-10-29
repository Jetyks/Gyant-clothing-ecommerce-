import { createContext, useContext, useEffect, useState } from 'react'
import { productsForMen } from '../services/products'
import { useRouter } from 'next/router';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [productsForHim, setProductsForHim] = useState([])
    const router = useRouter();

    useEffect(() => {
        if(router.pathname){
          console.log(router.pathname)
            setProductsForHim(productsForMen)
            setLoading(false)
        }
        else{
            console.log("Hubo un error al setear los productos")
        }
       
        /* const fetchProducts = async () => {
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
        } */
      }, [router.pathname])
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