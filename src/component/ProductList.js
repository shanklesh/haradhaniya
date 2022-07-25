import React from "react";
import { Card,Button,Form} from "react-bootstrap";
import {IncrementDecrement } from "./IncrementDecrement.component";

function prepareList(product){
    return (
    <div className='col-sm p00 pbb'>
    <Card>
    <div className="row">
    <div className="col">
            <Card.Img variant="top" src={product.url} style= {{width:"5rem",height:"5rem"}}/>
         </div>
         <div className="col textAlign">
             <p className="mbb0">{product.name}</p>
             <p className="mrp">MRP: Rs.{product.actualPrice.mrp}/{product.actualPrice.unit}</p>

             <p className="mbb0 mrp">2Kg x 20</p>
             <p className="mrp">Total: Rs 40</p>
    </div>   
    </div>
    <Card.Body>
        <Form.Select size="sm">
         <option>50Kg</option>
         <option>kg</option>
        </Form.Select>
        <div className="m-1 flex-row d-flex">
        <div className="col-6" style={{display:'flex'}}>
        <IncrementDecrement className='float-start'/>
        </div>
        <div className="col-6">
        <Button className="m-1 float-end btn btn-success btn-sm">
        <div><span className="font-size-15 mt-0 pt-0">ADD</span><span className="material-icons font-size-15 m-1">shopping_cart</span></div>
       </Button>
        <div className="bg-primary">         
        </div>
        </div>
        </div>
    </Card.Body>
    </Card>
    </div>
    )
}