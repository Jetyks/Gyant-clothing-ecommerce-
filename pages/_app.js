import { ProductsProvider } from '../context/ProductsContext';
import '../styles/globals.css';

/* import '../styles/home.css'; */

export default function App({ Component, pageProps }) {
  return  (
    <ProductsProvider>
      <Component {...pageProps} />
    </ProductsProvider>
  )
}