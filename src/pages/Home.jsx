import Header from "../components/Header";
import { getProductList } from "../services/getApi"
import { useEffect, useState } from "react"

export default function Home() {
  const [productName, setProductName] = useState('');
  useEffect(()=> {
    getProductList('computador').then((response)=> {
      console.log(response);
    })
  })
 
  return (
    <main>
      <Header productName={productName} setProductName={setProductName} />
    </main>
  )
}
