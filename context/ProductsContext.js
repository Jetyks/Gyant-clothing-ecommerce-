import { createContext, useContext, useEffect, useState } from 'react'
import { getAllProducts, getAllMaleProducts, getAllFemaleProducts } from '../services/productsService'
/* import { fetchProducts } from '../services/productsService' */
import { useRouter } from 'next/router';

const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [productsForHer, setProductsForHer] = useState([])
  const [productsForHim, setProductsForHim] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter();

    
    useEffect(() => {
      const fetchProducts = async () => {
        setLoading(true);
        try {
            const all = await getAllProducts();
            const male = await getAllMaleProducts();
            const female = await getAllFemaleProducts();

            setAllProducts(all);
            setProductsForHim(male);
            setProductsForHer(female);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    fetchProducts();
    
    }, [router.pathname]);

  return (
    <ProductsContext.Provider value={{
        loading,
        allProducts,
        productsForHer,
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