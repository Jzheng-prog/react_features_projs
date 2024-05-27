import { useState } from "react"
import QRCode from "react-qr-code"

const QRCodeGenerator = () => {

    const [qrCode, setQrCode] = useState('');
    const [input, setInput] = useState('')

    function handleGenerateCode(){
        setQrCode(input)
        setInput('')
    }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <input onChange={(e)=>setInput(e.target.value)} type='text' name='qr-code' placeholder="Enter Your Value" value={input}/>
      <button style={{padding:'0'}}disabled={input && input.trim()!==''? false: true} onClick={handleGenerateCode}>Generate</button>
      <div>
        <QRCode id = 'qr-code-value' value={qrCode} size={400} bgColor="#fff"/>
      </div>
    </div>
  )
}

export default QRCodeGenerator
