import React from 'react'

const BorderBox = ({color}) => {
  return (
    <div className='p-30 border mt-10'
    style={{backgroundColor:`${color}`}}
    >
        {color}
    </div>
  )
}

export default BorderBox