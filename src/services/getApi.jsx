const fetchProducts = async (param, setListProducts) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;

  try {
  const response = await fetch(url);
  const data = await response.json();
  setListProducts(data.results);
  } catch (error) {
    return error;
  }
};
export default fetchProducts;
