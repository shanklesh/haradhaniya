import React from "react";
import { Nav, Form, Button, FormGroup, FormControl, ControlLabel ,Navbar,Container } from 'react-bootstrap';
import { SignIn } from "./SignIn.component";

export function NaveBar() {
    return (
        <div className="sticky-top mb50">
        <Navbar bg="light" variant="light">
            <Container fluid>
              <Navbar.Brand href="#home">
                <img
                  alt=""
                src="haradhaniya.jpg"
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                />{' '}
              <span className="green"> HaraDhaniya</span>
              
              </Navbar.Brand>
              <Navbar.Collapse className="justify-content-end">
              <Navbar.Text className="me-1"><SignIn /></Navbar.Text>
            </Navbar.Collapse>  
       <span className="material-icons position-realtive">face
  </span>
  </Container>

  </Navbar>
        </div>
    )
}