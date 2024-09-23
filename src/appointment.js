import React from "react";
import { useState } from "react";
import Nav from "./components/nav";
import './appointment.css'
import Footer from "./footer";
import data from './data/appointment.json'
const Appointment = ()=>{
    let id=(Math.random(10)*100).toFixed(0)
    const [name, setName]=useState()
    const [style, setStyle]=useState()
    const [phone, setPhone]=useState()
    const [email, setEmail]=useState()
    const [sub, setSub]=useState()

    fetch('http://localhost:8080/').then(res=>res.json()).then(data=>console.log(data))
 fetch('http://localhost:8080/',{
                method:'POST',
                headers:{
                  'Content-Type':'application/json'
                },
                body:JSON.stringify(sub)
              
              })
    const handleSubmit= (e)=>{
            e.preventDefault();

            let sub={id, name, style, phone, email}
            setSub(sub)
            // alert(`Name: ${name}, style: ${style}, phone: ${phone}, email: ${email}`)
           

    }
    

    return(
        <div>
            <Nav/>
            <h1 id="title">Book Appointment</h1>

            <div id="form">
            <div style={{textAlign:'center'}}>
            </div>

                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input value={name} onChange={e=>setName(e.target.value)}/>
                    <label>Style</label>
                    <input value={style} onChange={e=>setStyle(e.target.value)}/>
                    <select id="sel" >
                        <option>
                            Dreads
                        </option>
                        <option>
                            Braids
                        </option>
                    </select>
                    <label>Phone</label>
                    <input value={phone} onChange={e=>setPhone(e.target.value)}/>
                    <label>Email</label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <div style={{display:'flex', justifyContent:'center'}}>
                    <button>Submit</button>
                    </div>

                </form>
            </div>
        <Footer/>
        </div>
    )
}
export default Appointment