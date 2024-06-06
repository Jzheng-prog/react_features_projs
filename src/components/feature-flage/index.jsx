import React, { useContext } from 'react'
import { FeatureFlagsContext } from './context'
import LightDark from '../light-dark-mode/LightDark'
import TicTackToe from '../tic-tact-toe/TicTackToe'
import RandomColor from '../random-color'
import Accordian from '../accordian'

const FeatureFlags = () => {

    const {enableFlag, loading} = useContext(FeatureFlagsContext)
    const componentsToRender = [
        {
            key: 'showLightAndDarkMode',
            component : <LightDark/>
        },
        {
            key: 'showTicTacToe',
            component : <TicTackToe/>
        },
        {
            key: 'showRandomColorGenerator',
            component : <RandomColor/>
        },
        {
            key: 'showAccordian',
            component : <Accordian/>
        }
    ]
    if(loading){
        return <div>Loading data!</div>
    }

    function checkEnable(currKey){
        return enableFlag[currKey]
    }
  return (
    <div>
      <h1>FeatureFlag</h1>
      {
        componentsToRender.map(item => checkEnable(item.key) ? item.component : null
        )
      }
    </div>
  )
}

export default FeatureFlags
