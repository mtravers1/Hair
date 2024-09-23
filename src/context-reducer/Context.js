import { createContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";
import React from "react";
export const StoreContext = createContext()

export const StoreProvider = ({children})=>{
    const [state, dispatch]=useReducer(reducer, initialState)
    const addToBasket = (product)=>{
        const updatedBasket = state.products
        updatedBasket.push(product)
        updatePrice(updatedBasket)
        dispatch({
            type:"add",
            payload:updatedBasket
        })

    }
    const removeFromBasket = (product)=>{
        const updatedBasket = state.products.filter
        ((currentProduct)=> currentProduct.name !==product.name
        )
        updatePrice(updatedBasket)
        dispatch({
            type:"remove",
            payload:updatedBasket
        })
    }

    const updatePrice=(product)=>{
        let total=0
        product.forEach((p)=>{
            total+=p.price
        })
        dispatch({
            type:"update",
            payload:total
        })
    }

    const value={
        total: state.total,
        products:state.products,
        addToBasket,
        removeFromBasket
    }
    return <StoreContext.Provider value={value}>
    {children}
</StoreContext.Provider>


}
