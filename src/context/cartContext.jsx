import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cardReducer";

const CartContext = createContext();

const getLocalCartData = () => {
  try {
    const localCartData = localStorage.getItem("cart");
    return localCartData ? JSON.parse(localCartData) : [];
  } catch (error) {
    console.error("Failed to parse cart data:", error);
    return [];
  }
};

const initialState = {
  cart: getLocalCartData(),
  total_items: 0,
  total_amount: 0,
  shipping_fee: 500,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, selectedColor, amount, product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, selectedColor, amount, product },
    });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { CartProvider, useCartContext };
