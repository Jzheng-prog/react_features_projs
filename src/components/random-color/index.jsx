import { useEffect, useState } from "react"
import './styles.css'
const RandomColor = () => {

    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#000000')

    function createRandomHexColor(){
        const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
        let hexColor = '#'

        for(let i = 0; i < 6; i++){
            hexColor += hex[Math.floor(Math.random() * hex.length)]
        }
        setColor(hexColor)
    }
    function createRandomRGBColor(){
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)

        setColor(`rgb(${r},${g},${b})`)
    }

    useEffect(()=>{
        if(typeOfColor=='rgb'){
            createRandomRGBColor();
        }else{
            createRandomHexColor()
        }
    },[typeOfColor])

  return (
    <div style={{
        background:color,
        width: "100vw",
        height:'100vh'
        }}>
            
        <button onClick={()=>setTypeOfColor('hex')}>Create Hex Color</button>
        <button onClick={()=>setTypeOfColor('rgb')}>Create RBG Color</button>
        <button onClick={typeOfColor === 'hex'? createRandomHexColor : createRandomRGBColor}>Generate Random Color</button>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            fontSize: '30px',
            marginTop: '40px',
            flexDirection:'column',
            gap: "20px"
        }}>
            <h3>{typeOfColor === 'rgb' ? 'RGB Color':"Hex Color"}</h3>
            <h1>{color}</h1>
        </div>
      
    </div>
  )
}

export default RandomColor
