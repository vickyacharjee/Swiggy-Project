import RestaurantCard from "./RestaurantCard";
import { resList,Sea } from "../util/constant";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body=()=>{
    const [listRestaurants,setListRestaurants]=useState([]); // this for restaurant list
    const [search,setSearch]=useState(''); // this is for search
    const [filterRestaurant,setFilterRestaurant]=useState([]); // this is for rendering the component
    //testTing hook
    const [test,setTest]=useState([]); // this is for the main menu
    
    useEffect(()=>{
        console.log("called");
      fetchData();        
    },[])

    const fetchData= async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9127021&lng=77.5621287&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        // console.log(json);
        const res=json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
        setListRestaurants(res); 
        setFilterRestaurant(res);
        setTest(res);
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
                setFilterRestaurant(filteredList);
            }}>
                TOP RATED RESTAURANT
            </button>

            <input className="filter" type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
            <button onClick={()=>{
            const filterSearch=listRestaurants.filter((res)=>res.info.name.toLowerCase().includes(search.toLowerCase()));
             if (filterSearch.length==0) {
                 
             }else{
                 setFilterRestaurant(filterSearch);
             }        
            
            }} className="btn">SEARCH</button>
            
            {/*  */}
            <button  onClick={()=>{
                console.log(test)
                setFilterRestaurant(test);
            }}>
                    Main Menu
            </button>
            {/*  */}
        </div>   
    
        <div className="res-container">
            {filterRestaurant.map((restaurant)=>(
                <Link key={restaurant?.info?.id} to={"/restaurants/"+restaurant?.info?.id}> <RestaurantCard  {...restaurant?.info} /> </Link>

            ))}
        </div>
        </div>
    )
}
export default Body;  
