import { useDispatch, useSelector } from "react-redux";
import CartList from "./CartList";
import { clearCart,removeItem } from "../util/store/cartSlice";
import BillDetails from "./BillDetails";
import CartGroceryList from "./cartGroceryList";
import { clearCartGrocery,removeItemGrocery } from "../util/store/grocerySlice";





const Cart=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleClearCart=()=>{
            dispatch(clearCart())   
            dispatch(clearCartGrocery())  
        }

     
        const handleRemoveItem=()=>{
            dispatch(removeItemGrocery())    
            dispatch(removeItem()) 
            }        
    const total=cartItems.reduce((acc,item)=>{
        return acc+item.card.info.price/100 || acc+item.card.info.defaultPrice/100;
    },0)   
  

    function addPercentage(baseValue, percentage) {
        const increase = baseValue * (percentage / 100);
        const result = baseValue + increase;
        return result;
    }
    const baseValue = total;
    const percentage = 18;
    const res=addPercentage(baseValue, percentage)

    const grocery = useSelector((store) => store.cartGrocery.items);
    // console.log("This is it", grocery); 
    const totalGrocery=grocery.reduce((acc,item)=>{
        return acc+item.price;
    },0)   

    let overAll=cartItems.length+grocery.length;
    const sum=addPercentage(totalGrocery,18)
    const sumGrocery=sum-totalGrocery
    
    
    
    return(
        <div className="my-5 flex">  
            <div className="w-6/12 m-auto">
                <button className="border bg-gray-100  text-black   p-2  font-bold" onClick={handleClearCart}>Clear Cart</button>
                {!overAll && <h1>Your cart is empty...</h1>}
                <CartList items={cartItems} />
                 {grocery.length>0 && <CartGroceryList items={grocery}/>}
                {/* {total>0 && <h2 className="text-center p-2 m-2 font-bold">Total bill-{res.toFixed(2)}</h2>} */}
                {cartItems.length>0 && <button className="text-center bg-red-100 rounded-md p-1" onClick={handleRemoveItem}>Remove</button>}
            </div>
            <div>
                {overAll && <BillDetails totalGrocery={totalGrocery} sumGrocery={sumGrocery} items={res} details={cartItems} cost={res-total}/>}
            </div>
        </div>
    )
}
export default Cart;