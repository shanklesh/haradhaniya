import react from "react";
import { Nav, Form, Button, FormGroup, FormControl, ControlLabel ,Navbar,Container } from 'react-bootstrap';


export function BottomBar() {
    return(
    <div>
    <nav className="navbar fixed-bottom navbar-light bg-light">
        <div className="container-fluid">
        <span className="material-icons">home</span>
        <span className="material-icons">person</span>
        <div className="material-icons position-realtive">shopping_cart <span className="position-absolute top-10 start-90 translate-middle badge rounded-pill bg-danger">
       <span className="visually-hidden">1</span>

  </span></div>    
        </div>
    </nav>
    </div>

    )
}