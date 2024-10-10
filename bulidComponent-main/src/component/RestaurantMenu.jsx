import { useEffect,useState } from "react";
import Shimmer_two from "./Shimmer_two";
import { CDN_restaurant_image_url } from "../util/constant";
import { restaurant_menu_url } from "../util/constant";
import { useParams } from "react-router-dom";
const RestaurantMenu=()=>{
    const [resInfo, setResInfo] = useState(null);
    // const params=useParams() initially hook returns useParams, so we will destructure it
    const { resId } = useParams();
    
    useEffect(()=>{
        fetchMenu();
    },[])
    

    const fetchMenu = async () => {
        const data=await fetch(
            restaurant_menu_url+resId
            )
        const json =await data.json();
        setResInfo(json)
        // console.log(json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card);
    }
    if (resInfo===null) return <Shimmer_two/>
    const {name,costForTwoMessage,cuisines}=resInfo?.data?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;    
    return(
        <div><div className="res-heading-name">
                <h1>{name}</h1>
                <h2>Cuisines {cuisines.join(", ")}</h2>
                <h2>cost for Two ₹ {costForTwoMessage}</h2>            
            </div>
                <div className="res-menu">
                    {itemCards?.map(item=><div key={item?.card?.info?.id}> 
                                            {item?.card?.info?.name}
                                            {console.log(item?.card?.info)
                                            } 
                                        Rs -{item?.card?.info?.price/100}
                                            {console.log(item?.card?.info?.price)}
                                            
                                        <div>
                                            <img className="img-res" width={40} src={CDN_restaurant_image_url+item?.card?.info?.imageId} alt="Swiggy Logo" />
                                        </div>
                                        </div>)}
                </div>
        </div>
        
        
    )
}
export default RestaurantMenu;