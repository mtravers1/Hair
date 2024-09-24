import React from 'react'
import Nav from './components/nav'
import { useState, useEffect } from 'react'
import Footer from './footer'
import productdata from './data/productdata.json'
import oil from './pics/oil.jpg'
import weave from './pics/weave.jpg'
import './product.css';
import Card from './components/card'
import oil2 from './pics/oil1.jpg'
import oil3 from './pics/oil3.jpg'
import oil4 from './pics/oil4.jpg'
import oil5 from './pics/oil5.jpg'
import wig1 from './pics/wig1.jpg'
import wig2 from './pics/wig2.jpg'






const Products = ()=>{

    const [cart, SetCart]=useState({name:"", price:0, description:""})

    const handleDelete=(e)=>{
        e.preventDefault()


    }

    const [products, setProducts]=useState([{
        id:1,
    name: "Large oil",
    price: 39.00,
    ingredients: "",
    photo:oil,
    description:""
    
},
{
    id:2,
    name: "Large oil",
    price: 39.00,
    ingredients: "",
    photo:oil2,
    description:""
    
},{
    id:3,
    name: "Weave",
    price: 200,
    ingredients: "",
    photo:weave,
    description:""
    
},
{
    id:4,
    name: "Wig",
    price: 150.00,
    ingredients: "",
    photo:wig1,
    description:""
    
},
{   id:5,
    name: "Wig",
    price: 150.00,
    ingredients: "",
    photo:oil5,
    description:""
    
},
{
    id:6,

    name: "Wig",
    price: 150.00,
    ingredients: "",
    photo:wig2,
    description:""
    
},
{        id:7,

    name: "Wig",
    price: 150.00,
    ingredients: "",
    photo:oil4,
    description:""
    
}
])
    return(
        <div id="prod">
                  {/* <header id="header">
        <span>
          <img src='' alt="logo"/>
        </span>
        <span>
          <h2>Hair Stylist Creations</h2>
        </span>
        <span>
            <button>Login</button>
        </span>
      </header> */}
            <Nav/>
            <h1 style={{background:'black', margin:0, color:'white', padding:'20px'}} >Products</h1>
            <Card products={products}/>
            {/* <div id="inven">

            {products.map((d)=>(
                <div>
                    <h3>{d.name}</h3>
                    <h4>{d.price}</h4>
                    <h4>{d.ingredients}</h4>
                    <img src={d.img}/>

                    </div>
            ))}
            </div> */}
            <h1 style={{background:'black', margin:0, color:'white', padding:'20px'}}>Deals</h1>

            
            {/* <div id="inven">
            {products.map((d)=>(
                <div>
                    <h3>{d.name}</h3>
                    <h4>{d.price}</h4>
                    <h4>{d.ingredients}</h4>
                    <img src={d.photo}/>

                    </div>
            ))}
            </div> */}
            {
                
            
                    <Card products={products}/>
            }
            
            <Footer/>
        </div>
    )
}
export default Products