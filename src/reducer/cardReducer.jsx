const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, selectedColor, amount, product } = action.payload;
      const tempId = id + selectedColor;
      const existingItem = state.cart.find((item) => item.id === tempId);

      if (existingItem) {
        const updatedCart = state.cart.map((item) => {
          if (item.id === tempId) {
            let newAmount = item.amount + amount;
            if (newAmount > item.max) newAmount = item.max;
            return { ...item, amount: newAmount };
          }
          return item;
        });
        return { ...state, cart: updatedCart };
      } else {
        const newItem = {
          id: tempId,
          name: product.name,
          color: selectedColor,
          amount,
          image: product.image[0].url,
          price: product.price,
          max: product.stock,
        };
        return { ...state, cart: [...state.cart, newItem] };
      }
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    case "CART_TOTAL_ITEM": {
      const { total_items, total_amount } = state.cart.reduce(
        (acc, item) => {
          acc.total_items += item.amount;
          acc.total_amount += item.price * item.amount;
          return acc;
        },
        {
          total_items: 0,
          total_amount: 0,
        }
      );
      return { ...state, total_items, total_amount };
    }

    default:
      return state;
  }
};

export default cartReducer;
