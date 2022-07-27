import react, {useState} from "react";
import { Nav, Form, Button, FormGroup, FormControl, ControlLabel ,Navbar,Container } from 'react-bootstrap';
import { ItemReviewComponent } from "./Item-review.component";

export function BottomBar(prop) {
    console.log("==bottom nav ",prop.cartItems)
    const cartList = () => {
        console.log("==b nav",prop.cartItems)
        console.log("sho",prop.showItem)
    }
    return(
    <div>
    <nav className="navbar fixed-bottom navbar-light bg-light">
        <div className="container-fluid">
        <span className="material-icons">home</span>
        <span className="material-icons" >person</span>
        <ItemReviewComponent showItem = {prop.showItem}/>

        {/* <div className="material-icons position-realtive" onClick={cartList}>shopping_cart 
        {prop.showItem ?<span className="position-absolute top-10 start-90 translate-middle badge rounded-pill bg-danger">
       <span className="visually-hidden">1</span>

        </span>
       :null}
  
  </div>     */}
        </div>
    </nav>
    </div>

    )
}