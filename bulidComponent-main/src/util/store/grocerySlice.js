import {  createSlice } from "@reduxjs/toolkit";

const grocerySlice=createSlice({
    name:"cartGrocery",
    initialState:{
        items:[] 
    },
    reducers:{
        addItemGrocery:(state,action)=>{
            state.items.push(action.payload);
        },
         clearCartGrocery:(state,action)=>{
            // state.items.length=0;
            return {items:[]}
         },
         removeIndexGrocery:(state,action)=>{
            state.items.splice(action.payload,1);
         },
        removeItemGrocery:(state)=>{
            state.items.pop();
        }
    }
})

export const {addItemGrocery,clearCartGrocery,removeIndexGrocery,removeItemGrocery}=grocerySlice.actions;

export default grocerySlice.reducer;
