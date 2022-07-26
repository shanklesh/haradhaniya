import { React,useState }from "react";

import {Badge, Card,Button,Form} from "react-bootstrap"
import {IncrementDecrement } from "./IncrementDecrement.component"
export function Products() {
    const name = 'Hara dhaniya'
    const itemList =[];
     
    let p = [
        {
            url:'haradhaniya.jpg',
            name:'Hara Dhaniya',
            actualPrice:{
                mrp:20,
                unit:'Kg'
            },
            units:[
                {
                    'unitId':1,
                    'unit': 'g',
                    'qty':'100'
                },
                {
                    'unitId':2,
                    'unit': 'g',
                    'qty':'250'
                },
                {
                    'unitId':3,
                    'unit': 'g',
                    'qty':'500'
                },
                {
                    'unitId':4,
                    'unit': 'kg',
                    'qty':'1'
                }
            ]
        },
        {
            url:'tomato.jpg',
            name:'Tomato',
            actualPrice:{
                mrp:30,
                unit:'Kg'
            },
            units:[
                {
                    'unitId':1,
                    'unit': 'g',
                    'qty':'100'
                },
                {
                    'unitId':2,
                    'unit': 'g',
                    'qty':'250'
                },
                {
                    'unitId':3,
                    'unit': 'g',
                    'qty':'500'
                },
                {
                    'unitId':4,
                    'unit': 'kg',
                    'qty':'1'
                }
            ]
    
        },{
            url:'bringle.jpg',
            name:'Bringle',
            actualPrice:{
                mrp:40,
                unit:'Kg'
            },
            units:[
                {
                    'unitId':1,
                    'unit': 'g',
                    'qty':'100'
                },
                {
                    'unitId':2,
                    'unit': 'g',
                    'qty':'250'
                },
                {
                    'unitId':3,
                    'unit': 'g',
                    'qty':'500'
                },
                {
                    'unitId':4,
                    'unit': 'kg',
                    'qty':'1'
                }
            ]
        },
        {
            url:'potatoes.jpg',
            name:'Potatoes',
            actualPrice:{
                mrp:10,
                unit:'Kg'
            },
            units:[
                {
                    'unitId':1,
                    'unit': 'g',
                    'qty':'100'
                },
                {
                    'unitId':2,
                    'unit': 'g',
                    'qty':'250'
                },
                {
                    'unitId':3,
                    'unit': 'g',
                    'qty':'500'
                },
                {
                    'unitId':4,
                    'unit': 'kg',
                    'qty':'1'
                }
            ]
        },{
            url:'simlamirch.jpg',
            name:'Bringle',
            actualPrice:{
                mrp:13,
                unit:'Kg'
            },
            units:[
                {
                    'unitId':1,
                    'unit': 'g',
                    'qty':'100'
                },
                {
                    'unitId':2,
                    'unit': 'g',
                    'qty':'250'
                },
                {
                    'unitId':3,
                    'unit': 'g',
                    'qty':'500'
                },
                {
                    'unitId':4,
                    'unit': 'kg',
                    'qty':'1'
                }
            ]
        },
        {
            url:'ladies-finger.jpg',
            name:'Bhindi',
            actualPrice:{
                mrp:20,
                unit:'Kg'
            },
            units:[
                {
                    'unitId':1,
                    'unit': 'g',
                    'qty':'100'
                },
                {
                    'unitId':2,
                    'unit': 'g',
                    'qty':'250'
                },
                {
                    'unitId':3,
                    'unit': 'g',
                    'qty':'500'
                },
                {
                    'unitId':4,
                    'unit': 'kg',
                    'qty':'1'
                }
            ]
        }
    ]
    for(let i=0; i< p.length; i++){
        itemList.push(PrepareList(p[i]))
    }
    return (
        <div className="container-fluid">
        <div className="row m-2 d-sm-flex flex-sm-row flex-sm-nowrap">           
         {itemList}     
        </div>
        
        </div>
        
    )
}

export function PrepareList(product){
    const [counter, setCounter] = useState(1);
    const [selected,setSelected] = useState(0);
    const incrementCounter = () => setCounter(counter +1);
    let decrementCounter   = () => setCounter(counter - 1);
    let pricePer50Gram = (product.actualPrice.mrp * 1)/1000;

    if (counter<=1){
      decrementCounter = ()=>setCounter(1);
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setSelected(e.target.value)

    }
    let totalPrice = Number(counter) * Number(pricePer50Gram) * Number(product.units[selected].qty);

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

             <p className="mbb0 mrp">{counter} x {product.units[selected].qty}{product.units[selected].unit} </p>
             <p className="mrp">Total: Rs {totalPrice}</p>
    </div>   
    </div>
    <Card.Body>
        {/* <div className="row textAlign">
            <p className="mbb0">{product.name}</p>
        </div>
        <div className="row textAlign">
           <p>MRP: Rs.{product.actualPrice.mrp}/{product.actualPrice.unit}</p>
        </div> */}
            <Form className="gridDisplay">
            <select value={selected} onChange={handleChange}>
              {product.units.map((element,index)=> { 
                if (index == 0){
                    return <option value={index}>{element.qty}{element.unit}</option>
                }else {
                    return <option value={index}>{element.qty}{element.unit}</option>
                }
            })
        }
     
            </select>
            </Form>
        
        <div className="m-1 flex-row d-flex">
        <div className="col-6" style={{display:'flex'}}>
        {/* <IncrementDecrement className='float-start'/> */}
        <div>

        <Button className="bg-success m-1 btn btn-success btn-sm searchbutton"  onClick = {incrementCounter}>+</Button>
        <label style={{marginLeft:'.5rem'}}>{counter}</label>
        <Button  className="bg-success  m-1 btn btn-success btn-sm searchbutton" onClick={decrementCounter}>-</Button>
        </div>

        </div>
        <div className="col-6">
        <Button className="m-1 float-end btn btn-success btn-sm searchbutton">
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