import React from 'react'

const ToDoList = (props) => {
    console.log(props)
  return (
    
        <div>
            <div className='row p-2'>
                    <div className='col-md-4 bg-primary text-light' >
                        <div className='row'>
                            
                            <div className='col-md-10 p-3'>
                                {props.eachItem}
                            </div>
                            <div className='col-md-2 p-3'>
                                <span class='icons '>
                                    <i className='fa-solid fa-trash-can icon-delete ' onClick={(e)=>{props.del(props.index)}}></i>
                                    </span>
                            </div>
                        </div>
                    </div>
                    <br></br>
           </div>
       </div>
     
  )
}

export default ToDoList