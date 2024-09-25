import React from "react";
import './cartcard.css'
const CartCard = (props)=>{
    const data = props.data;
    return(
        <div>
            {data.map((c)=>(
                <div id="card">
                    <span>
                    <img src={c.photo}/>


                    </span>
                    <span id='info'>
                    <p>{c.name}</p>
                    <p>$ {c.price}</p>
                    <select>
                        <option>
                            1
                        </option>
                    </select>

                    <button>Remove</button>



                    </span>
                    
                    
                    {/* <button>Remove from Cart</button> */}
                </div>
            ))
                
            }

        </div>
    )
}
export default CartCard