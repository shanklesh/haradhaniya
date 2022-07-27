import react, { Component, useState } from "react"
import {Modal,Button,Form} from "react-bootstrap";

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
          <Modal.Header closeButton>
            <Modal.Title>Sign in</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
             Login
            </Button>       
        </Modal.Footer>
        </Form>
        </Modal.Body>
        </Modal>
      </>
    );
  }
  

 