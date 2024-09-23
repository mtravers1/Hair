import React from "react";
import { useState } from "react";
import data from '../data/reviews.json'
import pic from '../pics/user.png'
import "./reviews.css"
const Reviews=()=>{
    const [dada, SetReviews]=([{
        name:"dameatis",
        img:pic,
        rating: 4,
        description:"Fast, Inexpesive, Impressed"
    },{
        name:"dameatis",
        img:pic,
        rating: 4,
        description:"Fast, Inexpesive, Impressed"
    },{
        name:"dameatis",
        img:pic,
        rating: 4,
        description:"Fast, Inexpesive, Impressed"
    },{
        name:"dameatis",
        img:pic,
        rating: 4,
        description:"Fast, Inexpesive, Impressed"
    },])
    return(
        <div>
            <h3>Reviews</h3>
            <div>
                {
                    data.map((d)=>(
                        <div >
                            <div id="review">
                            <span id="img">
                            {/* <img src={d.img}/> */}
                            <img src={pic}/>

                            </span>
                            <span id="info">
                            <p>{d.name}</p>
                            <p>{d.rating}/5</p>
                            <p>{d.description}</p>
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