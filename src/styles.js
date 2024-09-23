import React from 'react'
import Footer from './footer'
import Nav from './components/nav'
import { useState } from 'react'
import dreads from './pics/dreads.jpg'
import braids from './pics/braids.jpg'
import Card from './components/card'
import './styles.css'
const Styles = ()=>{
    const[hairstyles, setHairstyles]=useState([{
        id:1,
        name:"Braids",
        price:100.00,
        photo:braids
    },{
        id:2,
        name:"Corn-Rows",
        price:100.00,
        photo:dreads
    },
    {
        id:3,
        name:"Twist",
        price:100.00,
        photo:braids
    },
    {
        id:4,
        name:"Dreads",
        price:100.00,
        photo:dreads
    }])

    return(
        <div>
        <Nav/>
            <h1 id='h' >Styles</h1>
            <div id="style">
            {hairstyles.map((d)=>(
                <div id='s'>
                    <h2>{d.name}</h2>
                    <h4>$ {d.price}</h4>
                    <img src={d.photo}/>
                    <div id='bu'>
                    <button id="button">Add to Cart</button>

                        </div>

                </div>
            ))}
            </div>
            {/* <Card hairstyles={hairstyles}/> */}
        <Footer/>
        </div>
    )
}

export default Styles