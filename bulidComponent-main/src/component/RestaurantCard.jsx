import { CDN_URL } from "../util/constant";
import { useContext } from "react";
import UserContext from "../util/UserContext";

const RestaurantCard=({name, cuisines,cloudinaryImageId,sla,avgRating})=>{ 
    // console.log(name);
    const {loggedInUser} = useContext(UserContext);
    
    return(
        <div className="w-[269] bg-gray-100  shadow-lg mb-1 py-3 rounded-lg hover:bg-gray-200">
         <img className="rounded-lg p-2" src={CDN_URL+cloudinaryImageId} alt="" />
         <h2 className="font-bold">{name}</h2>
         <h4 className="font-semi-bold">{avgRating}🖖🏻 STAR</h4>
         <h4><b>To you within</b>  {sla.lastMileTravelString} </h4>
         <h4 className="font-extralight">{cuisines.join(', ')}</h4>
         <h2 className="font-bold">{loggedInUser}</h2>
        </div>
    )
}

// higher order function as promoted label
export const withPromotedLabel=(RestaurantCard)=>{
    return(props)=>{
        return(
            <div>
                <label className="bg-[#F79952] font-extrabold absolute rounded-md p-1">PROMOTED</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
export default RestaurantCard;

