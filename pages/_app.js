import { ProductsProvider } from '../context/ProductsContext';
import { useRouter } from 'next/router';
import NavBar from "../components/NavBar"
import '../styles/globals.css';
import AnnouncementBar from '../components/AnnouncementBar';
import { CartProvider } from '../context/CartContext';
import { AuthProvider } from '../context/AuthContext';


export default function App({ Component, pageProps }) {
  const router = useRouter();

  const hideAnnouncementBar = ['/login', '/cart'].includes(router.pathname);
  return  (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <NavBar/>
          {!hideAnnouncementBar && <AnnouncementBar />}
          <Component {...pageProps} />
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  )
}