import React from "react";
import { FaStar } from "react-icons/fa6";
import './stars.css'
const Stars = ()=>{
    return(
        <div id='stars'>
            {
                [...Array(4)].map((i)=>(
                    <div>
                        <FaStar size={50} color={'pink'}/>

                    </div>
                ))
            }
                                    <FaStar size={50} color={'black'}/>



        </div>
    )
}

export default Stars;