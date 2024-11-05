import { useDispatch } from "react-redux";
import { removeIndexGrocery } from "../util/store/grocerySlice";


const CartGroceryList = ({items}) => {
    const dispatch = useDispatch();

    const handleRemove=(item,index)=>{
        dispatch(removeIndexGrocery(item,index));
    }
    return (
        <div>
            <h1>Grocery Carts</h1>
            {
                items.map((item,index)=>(
                    <div className=" m-1 p-1 flex shadow-lg justify-between " key={item.id}>
                        <div className="my-auto p-3">{item.name}
                            <h2 className="m-3 ">{item.price}</h2>
                        </div>
                        
                        <div>{<img className="w-40 rounded-2xl m-1 p-3" src={item.image} alt="alt" />}</div>
                        <button className="p-2 text-2xl " onClick={()=>handleRemove(index)}>❌</button>
                        
                    </div>
                ))
            }

        </div>
    );
};

export default CartGroceryList;
