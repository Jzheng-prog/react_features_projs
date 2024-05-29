import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

import "./styles.css"

const ScrollIndicator = ({url}) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');
    const [scrollPercentage, setScrollPercentage] = useState(0)


    async function fetchData(getUrl){
        try{
            setLoading(true)

            const response = await fetch(getUrl);

            const data = await response.json()

            if(data && data.products && data.products.length > 0){
                setData(data.products)
                setLoading(false)
            }
        }catch(e){
            console.log(e)
            setErrorMessage(e.message)
        }
    }

    useEffect(()=>{
        fetchData(url)
    },[url]);

    function handleScrollPercentage(){

        // console.log(
        //     "document.body.scrollTop: ", document.body.scrollTop, 
        //     "document.documentElement.scrollTop: ", document.documentElement.scrollTop, 
        //     "document.documentElement.scrollheight: ", document.documentElement.scrollHeight, 
        //     "document.documentElement.clientHeight: ", document.documentElement.clientHeight
        // )

        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScrollPercentage((howMuchScrolled/height) * 100)
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScrollPercentage)

        return ()=>{
            window.removeEventListener('scroll', ()=> {})
        }
    },[])

    if(errorMessage){
        return <div>There is an {errorMessage}</div>
    }

    if(loading){
        return <div>Loading Data!</div>
    }

    console.log(data, loading, scrollPercentage)
  return (
    <div>
        <div className='top-container'>

            <h1>Scoll Indicator</h1>
            <div className='scroll-tracking-container'>
                <div className='scroll-tracking-progress' style={{
                    width:`${scrollPercentage}%`
                }}></div>
            </div>

        </div>
        <div className='data-container'>
            {
                data && data.length > 0 ?
                data.map(item => 
                    <p>{item.title}</p>
                )
                :null
            }
        </div>
    
    </div>
  )
}

export default ScrollIndicator
