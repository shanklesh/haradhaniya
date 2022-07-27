import react, { Component, useState } from "react"
import {Modal,Button,Form} from "react-bootstrap";
import { BottomBar } from "./bottomBar.component";
export function ItemReviewComponent(prop) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
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
            <div className='row'>
                <div className="col">
                <img  src='tomato.jpg' style={{width:"5rem",height:"5rem"}}></img>
                </div>
                <div className="col"><p>data goes here</p></div>
            </div>
            <hr></hr>
            <div className='row'>
            <div className="col">
                <img  src='tomato.jpg' style={{width:"5rem",height:"5rem"}}></img>
                </div>
                <div className="col"><p>data goes here</p></div>            
            </div>
            <hr></hr>
            <div className='row'>
            <div className="col">
                <img  src='tomato.jpg' style={{width:"5rem",height:"5rem"}}></img>
                </div>
                <div className="col"><p>data goes here</p></div>
            </div>
            <hr></hr>
         <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
             Login
            </Button>       
        </Modal.Footer>
        <div class="row fixed-bottom">
            <Button>
            <p>checkout/login/Add address goes here</p>
            </Button>
        </div>
        </Modal.Body>
        </Modal>
      </>
    );
  }
  

 