import React from 'react'
import Footer from './footer'
import Nav from './components/nav'
import { useState } from 'react'
import dreads from './pics/dreads.jpg'
import braids from './pics/braids.jpg'
import Card from './components/card'
import './styles.css'
import h1 from './pics/hair1.jpg'
import h2 from './pics/hair2.jpg'
import h3 from './pics/hair3.jpg'
import h4 from './pics/hair4.jpg'
import h5 from './pics/hair5.jpg'
import AppointmentCard from './components/appointmentCard'


const Styles = ()=>{
    const[hairstyles, setHairstyles]=useState([{
        id:9,
        name:"Braids",
        price:100.00,
        photo:braids
    },{
        id:10,
        name:"Corn-Rows",
        price:100.00,
        photo:dreads
    },
    {
        id:11,
        name:"Twist",
        price:100.00,
        photo:h1
    },
    {
        id:12,
        name:"Dreads",
        price:200.00,
        photo:h2
    },
    {
        id:13,
        name:"Dreads",
        price:40.00,
        photo:h3
    }, {
        id:14,
        name:"Dreads",
        price:50.00,
        photo:h4
    }, {
        id:15,
        name:"Dreads",
        price:145.00,
        photo:h5
    }])

    return(
        <div>
        <Nav/>
            <h1 style={{background:'black', margin:0, color:'white', padding:'20px'}} id='h' >Styles</h1>
            <div id="style">
            {/* <AppointmentCard products={hairstyles}/> */}
            <Card products={hairstyles}/>
            {/* {hairstyles.map((d)=>(
                <div id='s'>
                    <p>{d.name}</p>
                    <p>$ {d.price}</p>
                    <img src={d.photo}/>
                    <div id='bu'>
                    <button id="button">Add to Cart</button>

                        </div>

                </div>
            ))} */}
            </div>
            {/* <Card hairstyles={hairstyles}/> */}
        <Footer/>
        </div>
    )
}

export default Styles