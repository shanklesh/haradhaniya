import React from 'react';
import { Nav, Form, Button, FormGroup, FormControl, ControlLabel ,Navbar,Container } from 'react-bootstrap';
import './App.css';
import {NaveBar} from './component/navbar.component'
import { SearchProduct} from './component/SearchProduct.component'
import { Products } from './component/ProductCard.component'
import {BottomBar } from './component/bottomBar.component'
function App() {
  return (
  <div className="App">
     <NaveBar></NaveBar>
     <SearchProduct></SearchProduct>
     <Products></Products>
     <BottomBar></BottomBar>
  </div>
  );
}

export default App;
