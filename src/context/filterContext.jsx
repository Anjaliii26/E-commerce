import { createContext, useEffect, useReducer, useContext } from "react";
import { useGlobalContext } from "./productcontext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  FilteredProducts: [],
  allProducts: [],
  gridView: true,
  

};

export const FilterProvider = ({ children }) => {
  const { products } = useGlobalContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = () => {
    return dispatch({ type: "SET_GRIDVIEW" });
  }

  const setListView = () => {
    return dispatch({ type: "SET_LISTVIEW" });
  }

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
