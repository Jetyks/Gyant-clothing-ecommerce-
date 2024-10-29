import { ProductsProvider } from '../context/ProductsContext';
import NavBar from "../components/NavBar"
import '../styles/globals.css';

/* import '../styles/home.css'; */

export default function App({ Component, pageProps }) {
  return  (
    <ProductsProvider>
      <NavBar/>
      <Component {...pageProps} />
    </ProductsProvider>
  )
}