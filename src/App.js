import React from "react";
import { BrowserRouter, Route, Routes, Router } from 'react-router-dom';
import Products from "./products";
import Styles from "./styles";
import Home from "./home";
import About from "./about";
import Login from "./login"
import Appointment from "./appointment";
import {CartState} from './context-reducer/Context'
import Carts from "./carts";
const App = ()=>{
  return(
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/appointment" element={<Appointment/>}/>
        {/* <Route path="/products" element={<Products/>}/>
        <Route path="/styles" element={<Styles/>}/> */}
        <Route path="/products" element={<Products/>}/>
        <Route path="/styles" element={<Styles/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cart" element={<Carts/>}/>




      </Routes>

    </div>
  )
}

export default App