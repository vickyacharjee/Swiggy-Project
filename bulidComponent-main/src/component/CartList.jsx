import { CDN_URL } from "../util/constant";
import { useDispatch } from "react-redux";
import { removeIndex } from "../util/store/cartSlice";
const CartList=({items})=>{
    
    const dispatch = useDispatch();

    const handleRemove=(item,index)=>{
        dispatch(removeIndex(item,index));
    }
    return(
        <div>
            {
                items.map((item,index)=>(
                    <div className=" m-1 p-1 flex shadow-lg justify-between " key={item.card.info.id}>
                        <div className="my-auto p-3">{item.card.info.name}
                            <h2 className="m-3 ">{item.card.info.price/100 || item.card.info.defaultPrice/100}</h2>
                        </div>
                        
                        <div>{<img className="w-40 rounded-2xl m-2 p-3" src={CDN_URL + item.card.info.imageId} alt="" />}</div>
                        <button className="p-2 text-2xl " onClick={()=>handleRemove(index)}>❌</button>
                    </div>
                ))
            }
        </div>
    )
}
export default CartList;