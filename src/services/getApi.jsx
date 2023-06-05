import axios from 'axios';

export const getProduct = async (id) => {
  if (!id) throw new Error('ID não informado');
  try{
    const data = await axios.get(`https://api.mercadolibre.com/items/${id}`);
    return data;
  }
  catch(error){
    alert('Problemas de requisição ao servidor do Mercado Livre')
  }

}
export const getProductList = async (query)=> {
  if (!query) throw new Error('Termo de busca não informado');
  try{
    const {data} = await axios.get(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    return data.results;
  }

  catch(error){
    alert('Problemas de requisição ao servidor do Mercado Livre')
  }
   
}