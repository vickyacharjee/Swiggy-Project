import Shimmer_two from "./Shimmer_two";
import { CDN_restaurant_image_url } from "../util/constant";
import useRestaurantMenu from "../util/useRestaurantMenu";
import { useParams } from "react-router-dom";
const RestaurantMenu=()=>{
    // const params=useParams() initially hook returns useParams, so we will destructure it
    const { resId } = useParams();
    console.log(resId);
    
    const resInfo=useRestaurantMenu(resId);
    if (resInfo===null) return <Shimmer_two/>
    const {name,costForTwoMessage,cuisines}=resInfo?.data?.cards[2]?.card?.card?.info;
    const { itemCards } = resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;    
    return(
        <div><div className="res-heading-name">
                <h1>{name}</h1>
                <h2>Cuisines {cuisines.join(", ")}</h2>
                <h2>cost for Two  {costForTwoMessage}</h2>            
            </div>
                <div className="res-menu">
                    {itemCards?.map(item=><div key={item?.card?.info?.id}> 
                                                {item?.card?.info?.name}
                                            Rs -{item?.card?.info?.price/100}   
                                                <div>
                                                     <img className="img-res" width={40} src={CDN_restaurant_image_url+item?.card?.info?.imageId} alt="Swiggy Logo" />
                                                </div>
                                          </div>)}
                </div>
            </div>
    )
}
export default RestaurantMenu;