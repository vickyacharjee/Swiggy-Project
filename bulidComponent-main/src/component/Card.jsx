import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemGrocery } from "../util/store/grocerySlice";
import LoadingCart from "./LoadingCart";

function Card({items}) {

  const [loading,setLoading]=useState();
  const dispatch=useDispatch()
  
  const handleAddItem = (item) => {
    dispatch(addItemGrocery(item));
    setLoading(item.id)

    setTimeout(()=>{
    setLoading(null)
    },5000)

   
   
}
  return ( 
    <div className="bg-white shadow-lg rounded-lg p-4 w-[280px]">
      <button
      onClick={() => handleAddItem(items)} 
      className="absolute bg-black text-white p-1 rounded-md">Add+</button>
      {loading===items.id && <LoadingCart items={items}/>}
      <img
        src={items.image}
        alt="Burger"
        className="w-full h-70 object-cover rounded-t-lg"
      />
      <div className="mt-4">
        <h3 className="text-xl font-semibold">{items.name}</h3>
        <p className="text-gray-600 flex items-center">
          <span className="text-lg font-medium">{items.rating}</span>
          <span className="ml-2 text-amber-500"> STAR</span>
        </p>
        <p className="mt-2 font-medium">To you within {items.range}</p>
        <p className="text-gray-500">{items.description}</p>
      </div>
    </div>
  );
}

export default Card;
