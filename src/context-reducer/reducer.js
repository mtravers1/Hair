// import React from "react";

// export const initialState={
//     total:0,
//     products:[]
// }

//  const storeReducer=(state, action)=>{
//     switch(action.type){
//         case "add":
//             return{
//                 ...state,
//                 products:action.payload
//             }
//         case "remove":
//                 return{
//                     ...state,
//                     product:action.payload
//                 }
//         case "update":
//             return{
//                 ...state,
//                 total: action.payload
//             }
//             default: throw Error("Cant match case")
//     }
// }
// export default storeReducer


export const cartReducer=(state, action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            return { ...state, cart: [...state.cart, {...action.payload, qty:1}]}
        
            case "REMOVE_FROM_CART":
                return { ...state, cart: state.cart.filter((c)=>c.id!==action.payload.id)}
            
            default:
            return state;
    } 
}