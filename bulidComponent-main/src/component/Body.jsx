import RestaurantCard from "./RestaurantCard";
import { resList,Sea } from "../util/constant";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{
    const [listRestaurants,setListRestaurants]=useState([]);
    const [search,setSearch]=useState('');
    const [filterRestaurant,setFilterRestaurant]=useState([]);
    
    useEffect(()=>{
        console.log("called");
      fetchData();        
    },[])

    const fetchData= async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9127021&lng=77.5621287&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        console.log(json);
        
        const res=json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        setListRestaurants(res); 
        setFilterRestaurant(res);
        console.log(res);
    }
    if (listRestaurants.length==0) {
        return(<Shimmer/>)
    }
    return(
        <div className="body">
        <div>
            <button className="top-rated" onClick={()=>{
                const filteredList=listRestaurants.filter((res)=>res.info.avgRating > 4.2);
                // console.log(filteredList);
                setListRestaurants(filteredList);
        
            }}>
                TOP RATED RESTAURANT
            </button>
            

            <input className="filter" type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
            <button onClick={()=>{
            //   console.log('tt',listRestaurants[0].info.name)
               
               
            const filterSearch=listRestaurants.filter((res)=>res.info.name.toLowerCase().includes(search.toLowerCase()));
            
                    setFilterRestaurant(filterSearch);
                
            }} className="btn">SEARCH</button>
        </div>   
    
        <div className="res-container">
            {filterRestaurant.map((restaurant)=>(
                <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
            ))}
        </div>
        </div>
    )
}
export default Body;  
