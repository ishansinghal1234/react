import React, { useState } from 'react'


export default function Add(prop) {
    let titlevalue=document.getElementById("exampleInputtitle");

    
    const [title,settitle]=useState("")
const [desc, setdesc] = useState("")
function handleSubmit(event) {
    event.preventDefault();
    prop.addtodo(title,desc)
    
  }
// function submit(e){
// e.preventDefault()
// }
    return (
        <div className="margin2">
            <form id="form" onSubmit=
                {handleSubmit}
                // ()=>{
                //     submit()
                // }
            >
                <h3>ADD TO-DO</h3>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">TITLE</label>
                    <input type="text"  onChange={event => settitle(event.target.value)} className="form-control" id="exampleInputtitle" aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label ">DESCRIPTION</label>
                    <input type="text" value={desc} onChange={event => setdesc(event.target.value)} className="form-control" id="exampleInputdescription" />
                </div>
                
                <button type="submit" className="btn btn-primary" onClick={()=>{
                    console.log(titlevalue.value)
                    // title(titlevalue)
                }}>Submit</button>
            </form>
        </div>
    )
}
