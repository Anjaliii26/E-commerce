const filterReducer = (state, action) => {
    switch (action.type) {
      case "FILTER_PRODUCTS":
        return {
          ...state,
          FilteredProducts: [...action.payload],
          allProducts: [...action.payload],
        };
  
      case "SET_GRIDVIEW":
        return {
          ...state,
          gridView: true,
        };
  
      case "SET_LISTVIEW":
        return {
          ...state,
          gridView: false,
        };
  
      default:
        return state;
    }
  };
  
  export default filterReducer;
  