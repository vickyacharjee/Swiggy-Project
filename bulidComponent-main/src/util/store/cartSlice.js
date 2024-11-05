import {  createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[] 
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state)=>{
            state.items.pop();
        },
         clearCart:(state,action)=>{
            // state.items.length=0;
            return {items:[]}
         },
         removeIndex:(state,action)=>{
            state.items.splice(action.payload,1);
         }
    }
})

export const {addItem,removeItem,clearCart,removeIndex}=cartSlice.actions;

export default cartSlice.reducer;
