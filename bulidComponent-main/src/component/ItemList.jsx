import { useDispatch } from "react-redux";
import { useState } from "react"; // Import useState
import { CDN_URL } from "../util/constant";
import { addItem } from "../util/store/cartSlice";
import LoadingCart from "./LoadingCart";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const [loadingItemId, setLoadingItemId] = useState(null); 

    const handleAddItem = (item) => {
        setLoadingItemId(item.card.info.id); 
        dispatch(addItem(item));
       
        setTimeout(() => {
            setLoadingItemId(null); 
        }, 500); 
    }

    return (
        <div>
            {
                items.map((item) => (
                    <div className="m-3 p-3 border-b-2" key={item.card.info.id}>
                        <div>
                            <div className="font-bold ">{item.card.info.name}</div>
                            <div className="flex justify-between">
                                <div className="font-extralight">₹{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</div>
                                <div>
                                    <img className="w-40 rounded-2xl m-1 p-3" src={CDN_URL + item.card.info.imageId} alt="" />
                                    <button
                                        onClick={() => handleAddItem(item)}
                                        className="border px-2 m-1 ml-4 bg-black text-white rounded-md">add+</button>
                                    {loadingItemId === item.card.info.id && <LoadingCart items={item.card.info}/>} {/* Show loading indicator */}
                                </div>
                            </div>
                            <p className="text-xs">{item.card.info.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ItemList;