import React from "react";
import './cartcard.css'
import { CartState } from "../../context-reducer/Context";
const CartCard = (props)=>{

    const {state:{cart}, dispatch,}=CartState()
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
                    <div>
                    <button onClick={()=>dispatch({type: 'REMOVE_FROM_CART', payload:c,})} id='remove'>Remove</button>
                    <button id='remove'>Update</button>


                    </div>
                    


                    </span>
                    
                    
                    {/* <button>Remove from Cart</button> */}
                </div>
            ))
                
            }

        </div>
    )
}
export default CartCard