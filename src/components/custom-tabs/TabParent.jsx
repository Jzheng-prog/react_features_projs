import React from 'react'
import Tabs from './Tabs'

const TabParent = () => {

    const tabs = [
        {
            label: 'Tab 1',
            content: <div>Content for tab 1</div>
        },
        {
            label: 'Tab 2',
            content: <div>Content for tab 2</div>
        },
        {
            label: 'Tab 3',
            content: <div>Content for tab 3</div>
        }
    ]

    function handleChange(currIndex){
        console.log(currIndex)
    }

  return (
    <div>
      <Tabs tabsContent = {tabs} onChange={handleChange}/>
    </div>
  )
}

export default TabParent
