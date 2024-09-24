import React from "react";
import { useState } from "react";
import data from '../data/reviews.json'
import pic from '../pics/user.png'
import "./reviews.css"
import { FaStar } from "react-icons/fa6";
import Stars from "./stars";
import r1 from '../pics/r1.jpg'
import r2 from '../pics/r2.jpg'
const Reviews=()=>{
    const [dada, SetReviews]=useState([{
        name:"dameatis",
        img:pic,
        rating: 4,
        description:"Fast, Inexpesive, Impressed, best stylist i've been to",
        photo:r1
    },{
        name:"dameatis",
        img:pic,
        rating: 4,
        description:"Fast, Inexpesive, Impressed, would highly recommend",
        photo:r2
    }
    // {
    //     name:"dameatis",
    //     img:pic,
    //     rating: 4,
    //     description:"Fast, Inexpesive, Impressed"
    // },{
    //     name:"dameatis",
    //     img:pic,
    //     rating: 4,
    //     description:"Fast, Inexpesive, Impressed"
    // }
])
    return(
        <div>
            <div >
            <h3 >Reviews</h3>

            </div>
            <div>
                {
                    
                    dada.map((d)=>(
                        <div >
                            <div id="review">
                            <span id="img">
                            {/* <img src={d.img}/> */}
                            <img src={pic}/>
                            <p style={{textAlign:'left'}}>{d.name}</p>
                            </span>
                            <span id="info">
                            
                            {/* <p>{d.rating}/5</p> */}

                            <Stars/>
                         
                            <p>{d.description}</p>
                            </span>
                            <span id='ph'>
                            <img width={300} src={d.photo}/>

                            </span>
                            </div>
                           
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Reviews;