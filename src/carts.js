import React, { useContext } from "react";
import { useState } from "react";
import { StoreContext } from "./context-reducer/Context";
import Nav from "./components/nav";
import Products from "./products";
import { CartState } from "./context-reducer/Context";
const Carts = ()=>{
    // const [cart, SetCart]=useState({name:"", price:"", description:""})

    // const {total}=useContext(StoreContext)
    // console.log(total)
    const {state:{cart}, dispatch,}=CartState()
    console.log(cart)
    return(
        <div>
            <Nav/>
            <div>
            <h3 style={{textAlign:'center'}}>Cart</h3>
        <div>
        {
            cart.map((i)=>(
            <div>
                <p>{i.name}</p>
                <p>{i.photo}</p>
                <p>{i.price}</p>
                
            </div>
            ))
        }
        {/* <p>total price: {total}</p> */}
        {
            
        }
        </div>

            </div>

            


        </div>
    )
}

export default Carts;