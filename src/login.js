import React from "react";
import { useState } from "react";
import './login.css'
import Nav from './components/nav'
import Footer from "./footer";
const Login = ()=>{
    const [names, setNames]=useState('')
    const [password, setPassword]=useState('')
    return(
        <div>
            <Nav/>
            
            <div id='lo'>
                <div>
            <h1 style={{textAlign:'center'}}>Login</h1>

                <div id="container">
                <span>
                    <label>User Name/Email</label>
                    <input onChange={(e)=>setNames(e.target.value)} placeholder='username/email' type='text' value={names}/>
                </span>
                <span>
                    <label>Password</label>
                    <input onChange={(e)=>setPassword(e.target.value)} placeholder='password' type='password' value={password}/>
                </span>
                <span style={{display:'flex', justifyContent:'center', alignItems:'center', padding:'20px'}}>
                <button>Login</button>

                </span>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Login