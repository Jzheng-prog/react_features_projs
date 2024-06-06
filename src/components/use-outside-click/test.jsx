import React, { useRef, useState } from 'react'
import UseOutsideClick from '.'

const UseOnClickOutSideTest = () => {
    const[showContent, setShowContent] = useState(false)
    const ref = useRef()
    UseOutsideClick(ref, ()=>setShowContent(false))
  return (
    <div>
      {
        showContent? 
        
        <div style={{ backgroundColor: 'red', padding: '20px', color: 'white' }} ref ={ref}>
            <h1>This is random content</h1>
            <p>Click outside of the content to close.</p>
        </div> : <button onClick={()=>setShowContent(true)}>Show Content</button>
      }
    </div>
  )
}

export default UseOnClickOutSideTest
