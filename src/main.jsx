import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductsProvider from './context/ProductsProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 <ProductsProvider>
    <App />
  </ProductsProvider>,
)
