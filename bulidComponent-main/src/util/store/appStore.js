import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import cartGroceryReducer from "./grocerySlice"

const appStore=configureStore({
    reducer:{
        cart:cartReducer,
        cartGrocery:cartGroceryReducer
    }
});




export default appStore;  