
import React, { useEffect, useState } from 'react'

const useFetch = (url, options ={}) => {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fetchData(getUrl){
        setLoading(true)

        try{
            const response = await fetch(url)
            if(!response.ok){
                throw new Error(response.statusText)
            }
            const result = await response.json();
            setData(result)
            setError(null)
            setLoading(false)
        }catch(e){
            console.log(e)

            setError("some error occured: " + e)
            setLoading(false)
        }
    }
    useEffect(()=>{
        fetchData()
    }, [url])
  return {data,error,loading}
}

export default useFetch
