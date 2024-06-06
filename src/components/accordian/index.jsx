import { useState } from "react"

import data from "./data"
import './styles.css'

const Accordian = () => {

    const [selected, setSelected] = useState(null);
    const [enableMulti, setEnableMulti] = useState(false);
    const [multiple, setMultiple] = useState([]);


    function handleSingleSelected(currentId){
        //console.log(currentId)
        setSelected(currentId === selected? null : currentId)
    }
    function handleMultiSelection(currId){
        let copyMulti = [...multiple];

        const findIndexOfCurr = copyMulti.indexOf(currId);
        if(findIndexOfCurr === -1){
            copyMulti.push(currId)
        }else{
            copyMulti.splice(findIndexOfCurr,1)
        }
        setMultiple(copyMulti)
    }
    //console.log(selected, multiple)
  return (
    <div className="wrapperAcc">
        <button onClick={()=>setEnableMulti(!enableMulti)}>Enable Mutiple</button>
      <div className="accordian">
        {
            data && data.length > 0?
            data.map(item => 
                <div className="itemAcc" key = {item.id}>
                    <div onClick={ enableMulti? ()=> handleMultiSelection(item.id):()=>handleSingleSelected(item.id)} className="title">
                        <h3>{item.question}</h3>
                        <span>+</span>
                    </div>
                    {
                        enableMulti? multiple.indexOf(item.id) !== -1 && 
                        (<div className="contentAcc">{item.answer}</div>)
                        :
                        selected === item.id && (<div className="contentAcc" >{item.answer}</div>)

                    }
                </div>
            )
            :
            <div> No data</div>

        }
      </div>
    </div>
  )
}

export default Accordian
