import ItemList from "./ItemList";
const RestaurantCategory=({data,showItems,setShowIndex})=>{
    
    const handleClick=()=>{
        setShowIndex();
    }
   
    return(
        <div className="w-6/12 mx-auto my-4 p-4 shadow-md">
         <span onClick={handleClick}  className="font-bold cursor-pointer">{data.title} {data.itemCards.length} </span>
         <span>⬇️</span>
         {showItems && <ItemList items={data.itemCards}/>}
        </div>
    )
}
export default RestaurantCategory;