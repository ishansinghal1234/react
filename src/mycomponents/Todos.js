import React from 'react'
import todoitem from './Todoitem'
import Todoitem from './Todoitem'

export default function Todos(prop) {

    return (
       <>

{
    prop.length?<div className="margin">{prop.todo.map((todo)=>{
        return(
    <Todoitem todo={todo} ondelete={prop.ondelete}/>
        )
    })}</div>:"NOTHING TO SHOW"
}
        
    {/* foor loop */}


</>
    )
}
