const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      // You could also initialize min/max price here if needed
      return {
        ...state,
        allProducts: [...action.payload],
        filteredProducts: [...action.payload],
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
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortedProducts = [...state.filteredProducts];
      if (state.sorting_value === "lowest") {
        newSortedProducts.sort((a, b) => a.price - b.price);
      }
      if (state.sorting_value === "highest") {
        newSortedProducts.sort((a, b) => b.price - a.price);
      }
      if (state.sorting_value === "a-z") {
        newSortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      }
      if (state.sorting_value === "z-a") {
        newSortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      }

      return {
        ...state,
        filteredProducts: newSortedProducts,
      };

    case "UPDATE_FILTERS":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let tempProducts = [...state.allProducts];
      const { text, category, company, color, price } = state.filters;

      if (text) {
        tempProducts = tempProducts.filter((product) =>
          product.name.toLowerCase().includes(text.toLowerCase())
        );
      }

      if (category !== "all") {
        tempProducts = tempProducts.filter((product) => product.category === category);
      }

      if (company !== "all") {
        tempProducts = tempProducts.filter((product) => product.company === company);
      }

      if (color !== "all") {
        tempProducts = tempProducts.filter((product) => product.colors.includes(color));
      }

      if (price) {
        tempProducts = tempProducts.filter((product) => product.price <= price);
      }

      return {
        ...state,
        filteredProducts: tempProducts,
      };

    default:
      return state;
  }
};

export default filterReducer;
