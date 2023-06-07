import { useEffect, useState } from 'react';
import fetchProducts from '../services/getApi';


function useProducts() {
  const [searchProduct, setSearchProduct] = useState('');
  const [listProducts, setListProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=> {
    setTimeout(() => {
      fetchProducts( undefined, setListProducts);
      setIsLoading(false);
    }, 200);
}, [])

  const searchButtonClick = () => {
    setIsLoading(true);
      setTimeout(async() => {
        await fetchProducts(searchProduct, setListProducts);
        setSearchProduct('');
        setIsLoading(false);
      }, 100); 
    }
  
  const addToCart = (product) => {
    const indexItem = cartItems.findIndex((item)=> {
     return  item.name === product 
    });
    console.log(indexItem)
    if(indexItem> -1){
      console.log()
      cartItems[indexItem].quantidade =  cartItems[indexItem].quantidade  +1;
      setCartItems([...cartItems]);
    }
    else {
      const item = {
          name: product,
          quantidade: 1,
        }
      setCartItems([...cartItems, item]);
    }

  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCartItems);
  };
  return ({
    isLoading,
    setIsLoading,
    searchProduct,
    setSearchProduct,
    listProducts,
    cartItems,
    addToCart,
    removeFromCart,
    searchButtonClick,
  });
}

export default useProducts;


