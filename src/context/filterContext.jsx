import { createContext, useEffect, useReducer, useContext } from "react";
import { useGlobalContext } from "./productcontext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  filteredProducts: [],
  allProducts: [],
  gridView: true,
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "all",
    company: "all",
    color: "all",
    price: 0,
    maxPrice: 0,
    minPrice: 0,
  },
};

export const FilterProvider = ({ children }) => {
  const { products } = useGlobalContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    dispatch({ type: "SET_GRIDVIEW" });
  };

  const setListView = () => {
    dispatch({ type: "SET_LISTVIEW" });
  };

  const sorting = (e) => {
    dispatch({ type: "GET_SORT_VALUE", payload: e.target.value });
  };

  const updateFilter = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: "UPDATE_FILTERS", payload: { name, value } });
  };

  //to clear all filters
  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [products, state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        setGridView,
        setListView,
        sorting,
        updateFilter,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
