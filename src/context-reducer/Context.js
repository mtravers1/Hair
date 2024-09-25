import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./reducer";
import products from "../data/productdata";
const Cart = createContext();

const Context = ({ children }) => {
//   const product = [...Array(20)].map(() => ({
//     id: products.id,
//     name: products.name,
//     price: products.price,
    
//     // fastDelivery: faker.datatype.boolean(),
//   }));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

//   const [productState, productDispatch] = useReducer(productReducer, {
//     byStock: false,
//     byFastDelivery: false,
//     byRating: 0,
//     searchQuery: "",
//   });

//   console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;