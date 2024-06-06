import React from 'react'

import useWindowResize from '.'

const UseWindowResizeTest = () => {

    const windowSize = useWindowResize()

    const {width, height} = windowSize

  return (
    <div>
      <h1>Use Window resize Hook</h1>
      <p>
        width : {width}
      </p>
      <p>
        height : {height}
      </p>
    </div>
  )
}

export default UseWindowResizeTest
