import react, { Component, useState } from "react"
import {Modal,Button,Form} from "react-bootstrap";
import { BottomBar } from "./bottomBar.component";
export function ItemReviewComponent(prop) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let productName ='Tomato';
    let qty = '1kg'
    let amount = '20'
    console.log("iten in rev",prop.cartItems)
    let reviewList= []
    for (let i=0; i < prop.cartItems.length; i++){
        reviewList.push(CartItemInReview(prop.cartItems[i]))
    }
    return (
      <>
        <div className="material-icons position-realtive" onClick={handleShow}>shopping_cart 
        {prop.showItem ?<span className="position-absolute top-10 start-90 translate-middle badge rounded-pill bg-danger">
       <span className="visually-hidden">1</span>

        </span>
       :null}
  
  </div>    
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
          fullscreen 
        >
       
          <Modal.Body>
           <div className='row bg-success fixed-top'>
             <p className='text-center text-white'>Review Cart</p>
            </div>
            <div className='row bg-light'>
                <div className="col">
                <p className="fw-lighter">2 Items</p>
                </div>
            </div>
           
              {reviewList}

         <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
             Login
            </Button>       
        </Modal.Footer>
        <div class="row fixed-bottom bg-light">
            <div className="col">
                <p>Total: <i className="fa fa-inr"></i>555</p> 
            </div>
            <div className="col">
                <Button className="right m-3">Place order</Button>
            </div>
        
        </div>
        </Modal.Body>
        </Modal>
      </>
    );
  }

export function CartItemInReview(prop) {
    return (
        <>
        < div className='row'>
                <div className="col-3">
                <img  src={prop.url} style={{width:"5rem",height:"5rem"}}></img>
                </div>
                <div className="col">
                    <p className="m-0 fw-bold">{prop.pName}</p>
                    <p className="fw-light">{prop.qty}</p>
                    <p className="m-0 fw-bold"><i className="fa fa-inr"></i>{prop.amount}</p>
                </div>
            </div>
            <hr></hr>
        </>
    )
}