
import './App.css';
import Header from './mycomponents/Header';
import Todos from './mycomponents/Todos';
// use state hack 
import React, { useState } from 'react';
import Addtodo from './mycomponents/Addtodo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './mycomponents/Home';
import About from './mycomponents/About';




function App() {
  
  function ondelete(todo) {
    settodo(todos.filter((e) => {
      return e !== todo;
    }))
  }
  let addto = (title, desc) => {
    let newtodo = {
      title: title,
      desc: desc
    }
    settodo([...todos, newtodo])
  }
  const [Class, setclass] = useState("white");
  const [navbarcolor, setnavbarcolor] = useState("navbar navbar-expand-lg navbar-light bg-light");
  let change=()=>{
if(Class==="white")
{
  setclass("black")
  console.log("blsck")
}
if(Class==="black")
{
  setclass("white")
  console.log("white")
}
if(navbarcolor==="navbar navbar-expand-lg navbar-light bg-light")
{
  setnavbarcolor("navbar navbar-expand-lg navbar-dark bg-dark")
  console.log("blsck")
}
if(navbarcolor==="navbar navbar-expand-lg navbar-dark bg-dark")
{
  setnavbarcolor("navbar navbar-expand-lg navbar-light bg-light")
  console.log("white")
}}
  const [todos, settodo] = useState([

    {
      no: 1,
      title: "Watch TV",
      desc: "you have ton complete this job1"
    },
    {
      no: 2,
      title: "Watch TV 2",
      desc: "you have ton complete this job2"
    },
    {
      no: 3,
      title: "Watch TV 3",
      desc: "you have ton complete this job3"
    }
  ]);

  return (
    <div className={Class} >
      <Router>


        <Header search={1} functio={change} navcolor={navbarcolor}  />

        <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
                    <Addtodo addtodo={addto}  />
                    <Todos todo={todos} ondelete={ondelete} length={todos.length} />
                    </>
            )

          }}>
          
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
        
          <Route exact path="/about">
            <About/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
