import { createContext, useEffect, useReducer } from "react";
import { useContext } from "react";
import axios from "axios";
import reducer from "../reducer/productReducer";


const AppContext = createContext();

//initial state
const initialState = {
    isLoading : false,
    products : [],
    isError : false,
    featureProducts : [],
    isSingleLoading : false,
    singleProduct : {},
    singleProductError : false,

};


const AppProvider = ({ children }) => {

    const[state,dispatch]=useReducer(reducer,initialState)


   const  getProducts = async()=>{
         dispatch({type : "SET_LOADING"})
       try {
         const response = await axios.get('https://api.pujakaitem.com/api/products')
         const products = await response.data
         dispatch({type : "GET_PRODUCTS", payload : products})
       } catch (error) {
            dispatch({type : "API_ERROR"})
            console.log(error);
       }
      }
    const getSingleProduct = async (id)=> {
        dispatch({type : "SET_SINGLE_LOADING"})
        try {
            const response = await axios.get(`https://api.pujakaitem.com/api/products/${id}`)
            const singleProduct = await response.data
            dispatch({type : "GET_SINGLE_PRODUCT", payload : singleProduct})
        } catch (error) {
            dispatch({type : "SINGLE_PRODUCT_ERROR"})
            console.log(error);
        }
    }
    useEffect(() => {
        getProducts()
    },[])
  return (
    <AppContext.Provider value={{...state, getProducts, getSingleProduct}}>
        {/* <h1>hello</h1> */}
      {children}
    </AppContext.Provider>
  );
}

//custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };


