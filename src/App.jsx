import { useContext} from 'react';
import Header from './components/Header'
import Products from './components/Products';
import Loading from './components/Loading';
import ProductsContext from './context/ProductsContexts';
import Cart from './components/Cart';

export default function App() {
  const {
    isLoading, searchProduct, listProducts, setSearchProduct, searchButtonClick
  } = useContext(ProductsContext);
  return (
    <main className='w-full h-full'>
      <Header 
        isLoading={isLoading}
        searchProduct={searchProduct}
        setSearchProduct={setSearchProduct} 
        actionButtonClick={searchButtonClick} 
      />
      {
        isLoading ? <Loading /> 
        : (
          <div className='flex'>
            <Products listProducts={listProducts} />
            <Cart />
          </div>
        )
      }
    </main>
  )
}

