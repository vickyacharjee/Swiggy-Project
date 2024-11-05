import Shimmer_two from "./Shimmer_two";
import useRestaurantMenu from "../util/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import { Link } from "react-router-dom";
const RestaurantMenu=()=>{
    // const params=useParams() initially hook returns useParams, so we will destructure it
    const { resId } = useParams();
    console.log(resId);
    const [showIndex,setShowIndex]=useState(0);
    
    const resInfo=useRestaurantMenu(resId);
    if (resInfo===null) return <Shimmer_two/>
    const {name,costForTwoMessage,cuisines}=resInfo?.data?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;    
    
    const categories=resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c)=>c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    console.log("categories"+categories);

    return(
        <div>
            <Link to={"/"}><span className="mx-10 absolute stickey  mb-5  p-4 text-2xl "> ⬅ </span></Link>
            <div className="text-center my-10 border w-6/12 m-auto bg-red-50 shadow-lg p-4">
                <h1 className="font-bold text-2xl">{name}</h1>
                <h2 className="text-xl font-extralight">Cuisines {cuisines.join(", ")}</h2>
                <h2 className="text-lg font-semibold">cost for Two  {costForTwoMessage}</h2>            
            </div>
                {
                    categories.map((category,index)=>(
                        <RestaurantCategory key={category?.card?.card?.title} 
                                            data={category?.card?.card} 
                                            setShowIndex={()=>setShowIndex(index)}
                                            showItems={index===showIndex?true:false}
                        />
                    ))
                }
            </div>
    )
}
export default RestaurantMenu;