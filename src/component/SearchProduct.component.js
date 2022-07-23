import React from "react";
import { Nav, Form, Button, FormGroup, FormControl, ControlLabel ,Navbar,Container } from 'react-bootstrap';

export function SearchProduct() {
    return (
      <div className= "container-fluid mt-1">
      <div className="row">
      <div className="col">
          <div className="justify-content-center mmb">
          <form className="d-flex">
           <input className="form-control me-2 searchbutton" type="search" placeholder="Search for products" aria-label="Search"></input>
           <button className="btn btn-sm btn-success searchbutton" type="submit">Search</button>
          </form>
      </div>
     </div>
    </div>
  </div>
    )
}