import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cardReducer";
const CartContext = createContext();

const initialState = {
  cart:[],
  total_items: "",
  total_amount: "",
  shipping_fee: 500,
};


const CartProvider = ({ children }) => {

    const [state,dispatch] = useReducer(reducer,initialState)
    
    const addToCart = (id, selectedColor, amount, product) => {
      dispatch({ type: "ADD_TO_CART", payload: { id, selectedColor, amount, product } });
    };
    

  return (
    <CartContext.Provider value={{...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}
const useCartContext = () => {
  return useContext(CartContext);
}
export { CartProvider, useCartContext };