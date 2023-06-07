import { useEffect, useState } from 'react';
import fetchProducts from '../services/getApi';
import { getCartProductsToStorages, setCartProductsToStorages } from '../services/localStorage';



function useProducts() {
  const [searchProduct, setSearchProduct] = useState('');
  const [listProducts, setListProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(()=> {
    const productsFromStorage = JSON.parse(getCartProductsToStorages());
    console.log(productsFromStorage)
    setTimeout(async() => {
      await fetchProducts( undefined, setListProducts);
      if(productsFromStorage) setCartItems(productsFromStorage);  
      setIsLoading(false);
    }, 200);
  }, []);
  const searchButtonClick = () => {
    setIsLoading(true);
      setTimeout(async() => {
        await fetchProducts(searchProduct, setListProducts);
        setSearchProduct('');
        setIsLoading(false);
      }, 200); 
    }
  
  const addToCart = (name, image, price) => { 
    const indexItem = cartItems.findIndex((item)=> {
     return  item.name === name 
    });
    if(indexItem> -1){
      cartItems[indexItem].quantity += 1;
      
      setCartItems([...cartItems]);
      setCartProductsToStorages(JSON.stringify([...cartItems]))
    }
    else {
      const item = {
          name,
          imageUrl: image,
          price,
          quantity: 1,
        }
      setCartItems([...cartItems, item]);
      setCartProductsToStorages(JSON.stringify([...cartItems, item]));
    }
  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.name !== item.name);
    setCartItems(updatedCartItems);
    setCartProductsToStorages(JSON.stringify(updatedCartItems));

  };

  const increaseItemQuantity = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);
    setCartProductsToStorages(JSON.stringify([...cartItems]))

  }
  const decreaseItemQuantity = (item) => {
    if(item.quantity === 1) {
      removeFromCart(item);
    }
    else{
      item.quantity -= 1;
      setCartItems([...cartItems]);
      setCartProductsToStorages(JSON.stringify([...cartItems]))
    }
    
  }
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
    increaseItemQuantity,
    decreaseItemQuantity,
  });
}

export default useProducts;


