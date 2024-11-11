import { ProductsProvider } from '../context/ProductsContext';
import NavBar from "../components/NavBar"
import '../styles/globals.css';
import AnnouncementBar from '../components/AnnouncementBar';
import { CartProvider } from '../context/CartContext';


export default function App({ Component, pageProps }) {
  return  (
    
      <ProductsProvider>
        <CartProvider>
          <NavBar/>
          <AnnouncementBar/>
          <Component {...pageProps} />
        </CartProvider>
      </ProductsProvider>
  )
}