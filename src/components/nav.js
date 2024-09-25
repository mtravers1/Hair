import React from "react";
import { useState } from "react";
import './nav.css'
import { FaCartShopping } from "react-icons/fa6";
import logo from '../pics/logo.jpg'
import { CartState } from "../context-reducer/Context";
import { Link, useLocation } from "react-router-dom";

const Nav = ()=>{

  const {state:{cart}, dispatch}=CartState()
    const [nav, setNav]=useState('')
    const [toggle, setToggle]=useState()

    const tog = ()=>{
        setToggle(!toggle)
    }
    return(
        <div>
                 <header id="header">
        <span>
        <Link to='/'><img width={70} src={logo} alt="logo" id="logo"/></Link> 
        </span>
        <span>

          <Link style={{textDecoration:'none', color:'white'}} to='/'><h2>Hair Stylist Creations</h2></Link>
        </span>
        <div id="navhead">
            <div id="nav">
            {/* <li>Products</li> */}
            <Link to="/">Home</Link>

                <Link to="/products">Products</Link>
                {/* <li>Styles</li> */}
                <Link to="/styles">Styles</Link>

                {/* <li>Contacts</li> */}
                <Link to="/about">About</Link>




            </div>
            

        </div>
        <span id='l'>
          <span >
          <button id="login"><a href='/login'>Login</a></button>

          </span>
          <p id='cl'>{cart.length}</p>

          <Link to='/cart'><button style={{background:"none", color:"pink", border:'none', cursor:'pointer'}}><FaCartShopping size={30} /></button></Link>
            

        </span>
      </header>
      <div id='headmobile'>
      <span>
        <Link to='/'><img width={50} src={logo} alt="logo" id="logo"/></Link> 
        </span>
        <span id='l'>
          <span >
          <button id="login"><Link to='/login'>Login</Link></button>

          </span>
          <p id='cl'>{cart.length}</p>

            <button style={{background:"none", color:"pink", border:'none', cursor:'pointer', textDecoration:'none'}}><Link to='/cart'><FaCartShopping size={30} /></Link></button>
            

        </span>
      </div>
    
        <div id="mobilenav">
           <button id='to' onClick={tog}>menu</button>
           {toggle && (
            <div id="mob" >
                <ul>
                  <Link to="/products">Products</Link>
                {/* <li>Styles</li> */}
                <Link to="/styles">Styles</Link>

                {/* <li>Contacts</li> */}
                <Link to="/about">About</Link>
                </ul>
            </div>
           )}
            

        </div>
        </div>
    )
}

export default Nav;