import { useEffect } from "react";
import { useState } from "react"

import './styles.css'

const LoadMore = () => {

    const [loading, setLoading] =useState(false);
    const [products, setProducts] =useState([]);
    const [count, setCount] =useState(0);
    const [disableBtn, setDisableBtn] = useState(false)

    async function fetchProducts(){
        try{
            setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count ===0? 0:count *20}`)

            const data = await response.json();
            if(data && data.products && data.products.length){
                setProducts((prevData)=>[...prevData, ...data.products])
                setLoading(false)
            }

        }catch(e){
            console.log(e)
            setLoading(false)

        }
    }
    useEffect(()=>{
        fetchProducts()
    },[count]);
    useEffect(()=>{
        if(products && products.length ===100){
            setDisableBtn(true)
        }
    },[products])

    if(loading){
        return <div> Loading data!</div>
    }
  return (
    <div className="load-prod-container">
      <div className="product-container">
        {
            products && products.length?
            products.map(item=> 
            
                <div className='product' key= {item.id}>
                    <img src = {item.thumbnail} alt={item.title}/>
                    <p>{item.title}</p>
                </div>)
            
            :null}
      </div>
      <div className="btn-container">
        <button disabled={disableBtn} onClick={()=>setCount(count+1)}>Load More Products</button>
        {
            disableBtn? <p>Reached 100 products!</p> : null
        }
      </div>
    </div>
  )
}

export default LoadMore
