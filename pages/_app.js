import { ProductsProvider } from '../context/ProductsContext';
import { useRouter } from 'next/router';
import NavBar from "../components/NavBar"
import '../styles/globals.css';
import AnnouncementBar from '../components/AnnouncementBar';
import { CartProvider } from '../context/CartContext';


export default function App({ Component, pageProps }) {
  const router = useRouter();
  return  (
    
      <ProductsProvider>
        <CartProvider>
          <NavBar/>
          {router.pathname !== '/cart' && <AnnouncementBar />}
          <Component {...pageProps} />
        </CartProvider>
      </ProductsProvider>
  )
}