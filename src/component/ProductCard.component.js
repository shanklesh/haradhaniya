import React from "react";
import { Card,Button,Form} from "react-bootstrap"
import {IncrementDecrement } from "./IncrementDecrement.component"
export function Products() {
    const name = 'Hara dhaniya'
    const itemList =[];
    const x = <div className='col'>
    <Card className="mmb">
    <Card.Img variant="top" src="haradhaniya.jpg" style= {{width:"5rem",height:"5rem"}}/>
    <Card.Body className="pad-tb-0 pad-lr-10">
        <Card.Text className="fs-6 float-start">
          {name}
        </Card.Text>
        <Form.Select size="sm">
         <option>Small select</option>
        </Form.Select>
        <div className="m-1 float-end">
        <Button style={{height:"20px", padding:"0px"}} variant="primary" size="sm">
         <span className="font-size-15 mt-0 pt-0">ADD</span><span className="material-icons font-size-15 m-1">shopping_cart</span>    

       </Button>
        </div>
    </Card.Body>
    </Card>
    </div>
    let p = [
        {
            url:'haradhaniya.jpg',
            name:'Hara Dhaniya',
            actualPrice:{
                mrp:20,
                unit:'Kg'
            }
        },
        {
            url:'tomato.jpg',
            name:'Tomato',
            actualPrice:{
                mrp:20,
                unit:'Kg'
            }
    
        },{
            url:'bringle.jpg',
            name:'Bringle',
            actualPrice:{
                mrp:20,
                unit:'Kg'
            }
        },
        {
            url:'potatoes.jpg',
            name:'Potatoes',
            actualPrice:{
                mrp:20,
                unit:'Kg'
            }
        },{
            url:'simlamirch.jpg',
            name:'Bringle',
            actualPrice:{
                mrp:20,
                unit:'Kg'
            }
        },
        {
            url:'ladies-finger.jpg',
            name:'Bhindi',
            actualPrice:{
                mrp:20,
                unit:'Kg'
            }
        }
    ]
    for(let i=0; i< p.length; i++){
        itemList.push(prepareList(p[i]))
    }
    return (
        <div className="container-fluid">
        <div className="row m-2 d-sm-flex flex-sm-row flex-sm-nowrap">           
         {itemList}     
        </div>
        
        </div>
        
    )
}

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
        {/* <div className="row textAlign">
            <p className="mbb0">{product.name}</p>
        </div>
        <div className="row textAlign">
           <p>MRP: Rs.{product.actualPrice.mrp}/{product.actualPrice.unit}</p>
        </div> */}
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