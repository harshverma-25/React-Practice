import React from 'react'

const Buttons = ({ color, setClr }) => {
   
  return (
    <div className="flex gap-4 mt-6">
      {color.map((items) => (
        <button
        onClick={()=>{setClr(items)}}
          className="px-4 py-2  rounded-lg shadow cursor-pointer"
          style={{
            backgroundColor:`${items}`
        
          }}
        >
          {items}
        </button>
      ))}
    </div>
  )
}

export default Buttons