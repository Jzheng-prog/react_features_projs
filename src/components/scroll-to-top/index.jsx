import React, { useRef } from 'react'
import useFetch from '../use-fetch'

const ScrollToTopAndBottom = () => {

    const {data, error, loading} = useFetch("https://dummyjson.com/products?limit=100",{})
    const bottomRef = useRef(null)
    console.log(data)
    if(loading){
        return <div>Loading</div>
    }
    if(error){
        return <h1>Error</h1>
    }
    function handleScrollTop(){
        window.scrollTo({
            top:0,
            left:0,
            behavior: 'smooth'
        })
    }
    function handleScrollBottom(){
        bottomRef.current.scrollIntoView({behavior:'smooth'})
    }
  return (
    <div>
      <h1>Scroll to Top</h1>
      <h3>This is the top Section</h3>
      <button onClick={handleScrollBottom}>Scroll to Bottom</button>
      <ul style={{listStyle:'none'}}>
        {
            data && data.products && data.products.length?
            data.products.map((item,index) => 
                <li key={index}>{item.title}</li>
            ):null
        }
      </ul>
      <button onClick={handleScrollTop}>Scroll to Top</button>
      <h3>This is the bottom Section</h3>
      <div ref ={bottomRef}></div>

    </div>
  )
}

export default ScrollToTopAndBottom
