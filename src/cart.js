import React, { useContext } from "react";
import { useState } from "react";
import { StoreContext } from "./context-reducer/Context";
import Nav from "./components/nav";
import Products from "./products";
const Cart = ()=>{
    const [cart, SetCart]=useState({name:"", price:"", description:""})

    const {total}=useContext(StoreContext)

    return(
        <div>
            <Nav/>
            <div>
            <h3 style={{textAlign:'center'}}>Cart</h3>
        <div>

        <p>total price: {total}</p>
        {
            
        }
        </div>

            </div>

            


        </div>
    )
}

export default Cart;