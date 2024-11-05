import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { resList,Sea } from "../util/constant";
import { useState,useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../util/useOnlineStatus";
import UserContext from "../util/UserContext";


const Body=()=>{
    const [listRestaurants,setListRestaurants]=useState([]); // this for restaurant list
    const [search,setSearch]=useState(''); // this is for search
    const [filterRestaurant,setFilterRestaurant]=useState([]); // this is for rendering the component
    //testTing hook
    const [test,setTest]=useState([]); // this is for the main menu
    //promoted label
    const PromotedLabel=withPromotedLabel(RestaurantCard);
    // for top-rated restaurant
    const [topRatedRestaurant,setTopRatedRestaurant]=useState('Top-Rated Restaurnats'); 
    
    // for search restaurant
    const [searchBtn,setSearchBtn]=useState('Search'); 
    
    useEffect(()=>{
        // console.log("called");
      fetchData();        
    },[])

    const fetchData= async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9127021&lng=77.5621287&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json= await data.json();
        // console.log(json);
        const res=json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        // console.log(res);
        
        setListRestaurants(res); 
        setFilterRestaurant(res);
        setTest(res);
    }
    const onlineStatus=useOnlineStatus();
    if (onlineStatus===false) {
        return(
            <h1>offline</h1>
        )
    }
    if (listRestaurants.length===0) {
        return(<Shimmer/>)
    }
    const {setUserName,loggedInUser}=useContext(UserContext)
    return(
        <div className="body">
        <div>
            <button className="p-1 bg-red-200 border rounded-lg px-6" onClick={()=>{
                if (topRatedRestaurant==='Top-Rated Restaurnats') {
                    setTopRatedRestaurant('See-All')
                    const filteredList=listRestaurants.filter((res)=>res.info.avgRating > 4.3);
                    setFilterRestaurant(filteredList);
                }
                else{
                    setTopRatedRestaurant('Top-Rated Restaurnats')
                    setFilterRestaurant(listRestaurants);
                }
            }}>
                {topRatedRestaurant}
            </button>

            <input placeholder=" search here..." className="m-1 border border-solid border-black" type="text" value={search} onChange={(e)=>setSearch(e.target.value)} />
            <button onClick={()=>{
            const filterSearch=listRestaurants.filter((res)=>res.info.name.toLowerCase().includes(search.toLowerCase())); 
            console.log(listRestaurants);
            
            if (searchBtn==='Search') {
                if (filterSearch.length === 0) {
                    alert('not found')
                    // setSearch('')
                    
                }else{
                    setFilterRestaurant(filterSearch);
                    setSearchBtn('Main-Menu')
                    }   
                    setSearch('')
                    }
            else{
                setSearchBtn('Search')
                setFilterRestaurant(listRestaurants);
            }  
            }} className="p-1 bg-red-200 rounded-lg">{searchBtn}</button>
            
            {/*  */}
            
            {/*  */}
            <input   onChange={(e)=>setUserName(e.target.value)}/>
        </div>   
    
        <div className="  flex flex-wrap mx-2 mt-1 gap-3">
            {filterRestaurant.map((restaurant)=>(
                <Link key={restaurant?.info?.id} to={"/restaurants/"+restaurant?.info?.id}>
                     {
                        restaurant.info.avgRating>=4.5?(
                            <PromotedLabel {...restaurant?.info}/>
                        ):(
                            <RestaurantCard {...restaurant?.info}/>
                        )
                     }
                </Link>

            ))}
        </div>
        </div>
    )
}
export default Body;  
