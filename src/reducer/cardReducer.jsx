const cardReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
      let { id, selectedColor, amount, product } = action.payload;
  
      const cartProduct = {
        id: id + selectedColor,
        name: product.name,
        color: selectedColor,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
  
      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  
    return state; 
  };
  
  export default cardReducer;
  