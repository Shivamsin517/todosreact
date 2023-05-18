import React, { useState } from 'react'
import InputTodo from './InputTodo'
import ToDoList from './ToDoList'


const App = () => {
  const[listTodo,setListTodo]=useState([])
  const addList=(input)=>{
   
   setListTodo([...listTodo,input])
  }

  const deleteHandler=(key)=>{
  const newList=[...listTodo]
  newList.splice(key,1)
  setListTodo([...newList])
  }
  //console.log(listTodo)
  return (
    <div>
   <InputTodo addData={addList} enterKey={onEnterKey}/>
   <h1>Todos</h1>
   <hr/>
   <div className='container'> 
   {
    listTodo.map((listitem,i)=>{
     
    return  <ToDoList key={i} index={i} eachItem={listitem} del={deleteHandler}/>
      
    })
   }
    </div>
    </div>
  )
}

export default App