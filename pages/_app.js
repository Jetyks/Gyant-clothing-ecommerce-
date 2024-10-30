import { ProductsProvider } from '../context/ProductsContext';
import NavBar from "../components/NavBar"
import '../styles/globals.css';
import AnnouncementBar from '../components/AnnouncementBar';

/* import '../styles/home.css'; */

export default function App({ Component, pageProps }) {
  return  (
    <ProductsProvider>
      <NavBar/>
      <AnnouncementBar/>
      <Component {...pageProps} />
    </ProductsProvider>
  )
}