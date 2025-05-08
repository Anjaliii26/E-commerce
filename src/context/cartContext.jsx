import { createContext, useReducer } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [state,dispatch] = useReducer(reducer,initialState)
    
    const addToCart = (id, selectedColor, amount, product) =>{}
  return (
    <CartContext.Provider value={{}}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider };