import React, { useState } from 'react'

const InputTodo = (props) => {
    const[input,setInput]=useState()
    const onEnterKey=(event)=>{
      if(event.keyCode==13){
        props.addData(input)
        setInput('')
      }
        }
  return (
    <div>
        <input className='m-1' type='text' placeholder='type-your-task-here' value={input} onChange={(e)=>{setInput(e.target.value)}} onKeyDown={onEnterKey}></input>
        <button onClick={()=>{props.addData(input)
      setInput('')  }}>+</button>
       
    </div>
  )
}

export default InputTodo