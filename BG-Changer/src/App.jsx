import React, { useState } from 'react'
import Buttons from './Buttons'
import BorderBox from './BorderBox'

const App = () => {
  const color = ["pink", "blue", "red", "yellow"]
  const [clr, setClr] = useState('')

  return (
    <div className='h-screen bg-gray-500 flex flex-col items-center justify-center'>
      <div className='text-5xl'>Color Switcher</div>

      <Buttons color={color} setClr={setClr} />

      <BorderBox color={clr} />
    </div>
  )
}

export default App