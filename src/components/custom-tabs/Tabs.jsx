import React, { useState } from 'react'

import './styles.css'

const Tabs = ({tabsContent, onChange}) => {

    const [currTabIndex, setCurrTabIndex] = useState(0)

    function handleOnClick(currIndex){
        setCurrTabIndex(currIndex)
        onChange(currIndex)
    }
  return (
    <div className='wrapper'>
      <div className='heading'>
        {
            tabsContent.map((item, index) => 
                <div className={`tab-item ${currTabIndex === index? 'active':''}`}onClick={()=>handleOnClick(index)}key = {item.label}>
                    <span className='label'>{item.label}</span>
                </div>
            )
        }
      </div>
      <div className='content'>
            {
                tabsContent[currTabIndex] && tabsContent[currTabIndex].content
            }
      </div>
    </div>
  )
}

export default Tabs
