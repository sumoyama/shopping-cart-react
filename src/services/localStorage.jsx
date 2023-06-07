export const setCartProductsToStorages = (products) => {
  localStorage.setItem("cartProducts", products);
};

export const getCartProductsToStorages = () =>
  localStorage.getItem("cartProducts");
