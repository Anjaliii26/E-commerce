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
        case "GET_SORT_VALUE":

        let userValue = document.getElementById("sort").value;
        let sort_value=userValue.options[userValue.selectedIndex].value
        return{
          ...state,
          sorting_value: sort_value
        }

  
      default:
        return state;
    }
  };
  
  export default filterReducer;
  