import React from 'react'
import oil from '../pics/oil.jpg'
import weave from '../pics/weave.jpg'
import "./card.css"
// import products from '../data/productdata'
import { useContext } from 'react'
// import { StoreContext } from '../context-reducer/Context'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa6'
import { CartState } from '../context-reducer/Context'
const Card = (props)=>{
    // console.log(products)
    const {state:{cart}, dispatch,}=CartState()
    const prod=props.products
    const [name, setName]=useState()
    const [price, setPrice]=useState()
    const [description, setDesctiption]=useState()
    const [image, setImage]=useState()
    // const prod=props.hairstyles
    // console.log(prod)
    const [add, SetAdd]=useState({name:"name", price:0, description:"description"})
    // const {addToBasket}=useContext(StoreContext)
    const handleClick=(e)=>{    
        e.preventDefault()
        let data={name:prod.name, price:prod.price, description:prod.description}
        SetAdd(data)
        
      
    }
    const handleAdd= ()=>{
        let data={name, price, description}
        
        // addToBasket(data)
        console.log(name)
        


    }
    console.log(cart)
    return(
        <div>
            <div id="inven">

{prod.map((d, index)=>(
    <div key={d.id} style={{display:'flex'}} id="prod">
      <div id="p">
        
        <img value={d.photo} src={d.photo}/>
        <p value={name}>{d.name}</p>
        <p value={price}>$ {d.price}</p>

        <p value={description}>{d.ingredients}</p>
        <p>
            {
            [...Array(5)].map(()=>(
                <>
                            <FaStar/>
                </>
               

            ))
            
            }

        </p>
        <select id='am'>
        <option>
                1
            </option>
            <option>
                2
            </option>
            <option>
                3
            </option>
            <option>
                4
            </option>
            <option>
                5
            </option>
            <option>
                6
            </option>
            <option>
                7
            </option>
            <option>
                8
            </option>
            <option>
                9
            </option>
            <option>
                10
            </option>
        </select>
        {/* <input /> */}
        <div id='buttin'>
        <button onClick={()=>dispatch({type: 'ADD_TO_CART', payload:d,})} id="button">Add to cart</button>

        </div>
    </div>
        </div>
))}
</div>


        </div>
    )
}

export default Card