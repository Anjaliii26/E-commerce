

const filterReducer = (state, action) => {
    switch(action.type) {
        case "FILTER_PRODUCTS":
            return {
                ...state,
                FilteredProducts:[...action.payload],
                allProducts: [...action.payload],
            };
        case "SET_GRIDVIEW":
            return {
                ...state,
                gridView: true,
            };
        
        default:
            return state;
    }

}

export default filterReducer;