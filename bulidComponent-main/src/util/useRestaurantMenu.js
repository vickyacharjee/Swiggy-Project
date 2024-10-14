import { useState,useEffect } from "react";
import { restaurant_menu_url } from "./constant";

const useRestaurantMenu=(resId)=>{
    const [resInfo,setResInfo]=useState(null);
        useEffect(()=>{
        fetchMenu();
    },[])
        const fetchMenu = async () => {
        const data=await fetch(
            restaurant_menu_url+resId
            )
        const json =await data?.json();
        setResInfo(json)
        // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card);
    }
    return resInfo;
}
export default useRestaurantMenu;