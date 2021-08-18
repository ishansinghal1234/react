import React from 'react'

export default function todoitem(prop) {
    return (
      
    <div className="card margin1" style={{"width":"18rem"}} id="main">
  <img src="https://source.unsplash.com/1600x900/?nature,work" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title fontblack">{prop.todo.title}</h5>
    <p className="card-text fontblack">{prop.todo.desc}</p>
    <a href="#" className="btn btn-primary" id="button" onClick={()=>{prop.ondelete(prop.todo)}}>Go somewhere</a>
  </div>
</div>
       


       
    )
}
