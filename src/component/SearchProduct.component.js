import React from "react";
import { Nav, Form, Button, FormGroup, FormControl, ControlLabel ,Navbar,Container } from 'react-bootstrap';

export function SearchProduct() {
    return (
      <div className= "container-fluid searchBar fixed-top ">
      <div className="row">
      <div className="col">
          <div className="justify-content-center">
          <form className="d-flex">
           <input className="form-control me-2 searchbutton" type="search" placeholder="Search for products" aria-label="Search"></input>
           <button className="btn btn-sm btn-outline-success searchbutton" type="submit">Search</button>
          </form>
      </div>
     </div>
    </div>
  </div>
    )
}