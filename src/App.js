import React,{ useState} from 'react';
import { Nav, Form, Button, FormGroup, FormControl, ControlLabel ,Navbar,Container } from 'react-bootstrap';
import './App.css';
import {NaveBar} from './component/navbar.component'
import { SearchProduct} from './component/SearchProduct.component'
import { Products } from './component/ProductCard.component'
import {BottomBar } from './component/bottomBar.component'
function App() {
  let cartItems =[]
  const [showItem,setShowItem] = useState(cartItems.length == 0 ? false:true)
  const t = () => setShowItem(true)
  return (
  <div className="App"> 
     <div className="sticky-top green">

     <NaveBar>
     </NaveBar>
     <SearchProduct></SearchProduct>
     </div>
     <Products cartItems = {cartItems} t ={t}></Products>
     <BottomBar cartItems = {cartItems} showItem = {showItem}></BottomBar>
  </div>
  );
}

export default App;
