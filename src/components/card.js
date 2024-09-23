import React from 'react'
import oil from '../pics/oil.jpg'
import weave from '../pics/weave.jpg'
import "./card.css"
import { useContext } from 'react'
import { StoreContext } from '../context-reducer/Context'
import { useState } from 'react'
const Card = (props)=>{

    const prod=props.products
    // const prod=props.hairstyles
    // console.log(prod)
    const [add, SetAdd]=useState({name:"name", price:0, description:"description"})
    const {addToBasket}=useContext(StoreContext)
    const handleClick=(e)=>{    
        e.preventDefault()
        let data={name:prod.name, price:prod.price, description:prod.description}
        SetAdd(data)
      
    }
    const handleAdd= ()=>{
        addToBasket(prod)
    }

    return(
        <div>
            <div id="inven">

{prod.map((d)=>(
    
    <div id="prod">
      <div id="p">
        <h2 value={d.name}>{d.name}</h2>
        <h4 value={d.price}>$ {d.price}</h4>
        <h4 value={d.description}>{d.ingredients}</h4>
        <img value={d.photo} src={d.photo}/>
        {/* <input /> */}
        <div id='buttin'>
        <button onClick={handleAdd} id="button">Add to cart</button>

        </div>
    </div>
        </div>
))}
</div>


        </div>
    )
}

export default Card