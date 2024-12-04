import React from 'react'
import './btn.css'
function Btn({pushtodo}) {
  return (
    <div className='button'>
      <button onClick={()=>pushtodo()}>Add Todo</button>
    </div>
  )
}

export default Btn  
