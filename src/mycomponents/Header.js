import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';

export default function Header(props) {
  const [Class, setclass] = useState("white")
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
  }
  return (
    <nav className={props.navcolor}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Navbar</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">about</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><Link className="dropdown-item" to="#">Action</Link></li>
              <li><Link className="dropdown-item" to="#">Another action</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><Link className="dropdown-item" to="#">Something else here</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="#" tabIndex={-1} aria-disabled="true">Disabled</Link>
          </li>
          <li   >
          <i className="fa fa-moon-o fontblack" onClick={props.functio} aria-hidden="true" ></i>

          </li>
        </ul>
        {/* teranary operator */}
        {/* brackets are used as to have javscri[pt embede in html] */}
        {
          props.search?  <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>:"no search bar"
        }
      
      </div>
    </div>
  </nav>
  )
}
