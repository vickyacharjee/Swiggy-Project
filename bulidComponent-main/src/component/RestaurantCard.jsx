import { CDN_URL } from "../util/constant";

const RestaurantCard=({name, cuisines,cloudinaryImageId,sla,avgRating})=>{
    // const {resData}=props;
    // const { name, cuisine,star_rating,cost_for_two} =resData;  
    return(
        <div className="res-card">
         <img src={CDN_URL+cloudinaryImageId} alt="" />
         <h2>{name}</h2>
         <h4>{avgRating} STAR</h4>
         <h4><b>To you within</b>  {sla.lastMileTravelString} </h4>
         <h4>{cuisines.join(', ')}</h4>
        </div>
    )
}
export default RestaurantCard;

