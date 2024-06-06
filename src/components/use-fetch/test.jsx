import React from 'react'
import useFetch from '.'

const TestFetchHook = () => {
    const {data, error, loading} = useFetch("https://dummyjson.com/products?",{})

    console.log(data,error, loading)
  return (
    <div>
      <h1>Use fetch Hook</h1>
      {
        loading? <h3>Loading.. Please wait</h3> : null
      }
      {
        data && data.products && data.products.length ? 
        data.products.map((item,index) => 
            <p key={index}>{item.title}</p>
        ): null
      }
    </div>
  )
}

export default TestFetchHook
