import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { Link } from "react-router-dom";

function Mynav()
{
    return(
        <Fragment>
            
           <nav className="navbar navbar-expand-lg bg-light fixed-top shadow">
  <div className="container-fluid">
    <a className="navbar-brand" href="http://google.com">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/myform">Fomrs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/myaxiosapi">axios</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/myfetch">Fetchapi</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/lazyloading">lazyloading</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/mychart">chart</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/service">service</Link>
        </li>


        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="http://google.com" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="http://google.com">Action</a></li>
            <li><a className="dropdown-item" href="http://google.com">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="http://google.com">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> 


        </Fragment>
    )
}

export default Mynav


