import React, { useContext } from "react";
import { useState } from "react";
import { StoreContext } from "./context-reducer/Context";
import Nav from "./components/nav";
import Products from "./products";
import { CartState } from "./context-reducer/Context";
import Card from "./components/card";
import CartCard from "./components/card/cartcard";
import './carts.css'
const Carts = ()=>{
    // const [cart, SetCart]=useState({name:"", price:"", description:""})

    // const {total}=useContext(StoreContext)
    // console.log(total)
    const {state:{cart}, dispatch,}=CartState()
    console.log('this is the cart section', cart)
    let total=0
    cart.forEach((a)=>{
        total+=a.price
    })
    let url='http://localhost:8080/'
    fetch(url).then(res=>res.json()).then(data=>console.log(data))

        const handleSubmit= (e)=>{
            e.preventDefault()
            let sub={id:cart.id, name:cart.name, price:cart.price}
            console.log(cart)
            
  fetch('http://localhost:8080/', {
                method:'POST',
                headers:{
                    'Accept': 'application/json',
      'Content-Type': 'application/json'
                },
                body:JSON.stringify(sub)

            }).then(alert('posted'))    //       
            
        }

    return(
        <div>
            <Nav/>
            <h1 id='h1'style={{background:'black', margin:0, color:'white', padding:'20px', textAlign:'center'}} >Cart</h1>
            <div id='cart'>
                
            <div id='cardd'>
        <CartCard data={cart}/>
            </div>

       
        <div id='total'>
        <form id='f' onSubmit={handleSubmit}>
            {
                cart.map((d)=>(
                    
                    <>
                    <div key={d.id} id='c'>
                    <p >{d.name}</p>
                    <p >$ {d.price}</p>

                    </div>
                   
                    </>
                ))
            }
            <div id='z'>
                <span id='o'>
                <p>Total:</p>
                <p> {total} </p>
                </span>

                <label>Delivery</label>

            
            <span id='shipping'>

                        <span>
                        <span sty id='radio'>
                           <span>
                           <p >Express</p>


                           </span>
                        <span style={{display:'flex'}}>
                        <input type='radio'/>
                        <p>1 October 2024</p>

                        </span>

                        
                          
                        </span>
                        </span>

                        <span  id='radio'>
                            <p>Priority</p>
                            <span style={{display:'flex'}}>
                            <input type='radio'/>
                            <p>12 October 2024</p>

                            </span>
                       
                            
                        </span>
                        <span  id='radio'>
                       <p>Standard</p>
                       <span style={{display:'flex'}}>
                       <input type='radio'/>

<p>16 October 2024</p>

                       </span>
                      
                     
                        </span>
                    </span>
                    {/* <button>Order</button> */}
                    <span style={{display:'flex', justifyContent:'center'}}>
                    <button id='butto'>Order</button>


                    </span>
                    </div>
                    </form>
        </div>


        </div>
            


        </div>
    )
}

export default Carts;