import React from "react";
import dada from '../data/data.js'
import braids from '../pics/braids.jpg'
import dreads from '../pics/dreads.jpg'
import weave from '../pics/weave.jpg'
import { useState } from "react";
import './styles.css'
const Styles = ()=>{
    const [tog, setTog]=useState('')
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
                  <button id="b" onClick={()=>setTog(!tog)}>View Styles</button>

               <div id="styles">
      {tog &&(
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
      )}
  

     </div>

        </div>
    )
}
export default Styles

