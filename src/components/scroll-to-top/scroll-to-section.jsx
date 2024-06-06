import React, { useRef } from 'react'

const ScrollToSection = () => {

    const ref = useRef()
    const data = [
        {
            label: 'first Card',
            style : {
                width:"100%",
                height:'600px',
                background: 'red'
            }
        },
        {
            label: 'Second Card',
            style : {
                width:"100%",
                height:'600px',
                background: 'green'
            }
        },
        {
            label: 'third Card',
            style : {
                width:"100%",
                height:'600px',
                background: 'blue'
            }
        },
        {
            label: '4 Card',
            style : {
                width:"100%",
                height:'600px',
                background: 'brown'
            }
        },
        {
            label: '5 Card',
            style : {
                width:"100%",
                height:'600px',
                background: 'yellow'
            }
        },
        {
            label: '6 Card',
            style : {
                width:"100%",
                height:'600px',
                background: 'black'
            }
        },
    ]
    function handleScollBtn(){
        let pos = ref.current.getBoundingClientRect().top;
        window.scrollTo({
            top: pos,
            behavior:'smooth'
        })
    }
  return (
    <div>
      <h1>Scroll to A particular Section</h1>
      <button onClick={handleScollBtn}>Click To Scroll</button>
      {
        data.map((item, index)=>
            <div key={index}ref={index===3? ref: null}style={item.style}>
                <h2>{item.label}</h2>
            </div>
        )
      }
    </div>
  )
}

export default ScrollToSection
