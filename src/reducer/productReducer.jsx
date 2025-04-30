const ProductReducer = (state, action) => {
    switch(action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
        case "GET_PRODUCTS":
            const featureProducts = action.payload.filter((product) => product.featured === true);
            return {
                ...state,
                isLoading: false,
                products: action.payload,
                featureProducts: featureProducts,
            };
        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };
        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true,
            };
        case "GET_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload,
            };
        case "SINGLE_PRODUCT_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                singleProductError: true,
            };
        default:
            return state;
    }

}
export default ProductReducer;