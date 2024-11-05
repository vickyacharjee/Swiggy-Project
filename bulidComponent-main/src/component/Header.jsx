import {CDN_LOGO} from "../util/constant" 
import { useState,useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";
import UserContext from "../util/UserContext";
import { useSelector } from "react-redux";
 const Header = () => {
  const [loginBtn,setLoginBtn]=useState('login');
  const onlineStatus=useOnlineStatus();
  const { loggedInUser}=useContext(UserContext)
  const cartItem=useSelector((store)=>store.cart.items)
  const cartGrocery=useSelector((store)=>store.cartGrocery.items)

  let range=cartGrocery.length+cartItem.length;

  
    return (
      <div className="flex justify-between shadow-md m-1">
        <div className="img-nav">
          <Link> <img className="w-20 p-2"  src={CDN_LOGO} alt="Swiggy Logo"/></Link>
        </div>
        <div>
        <ul type="none" className="flex p-4 items-center">
                <li className="border p-2 text-xl font-medium hover:bg-gray-100 rounded-md "><Link className="link"><FontAwesomeIcon icon={faHouse} /> Home </Link></li>
                <li className=" mx-2 border p-2 text-xl font-medium hover:bg-gray-100 rounded-md"><Link className="link" to="/aboutus">About-us</Link></li>
                <li className="border mx-2 p-2 text-xl font-medium hover:bg-gray-100 rounded-md mr-2"><Link className="link" to="/contact">Contact-us </Link></li>
                <li ><Link className="text-xl bg-gray-100 p-2 rounded-xl hover:bg-white border" to={"/cart"}> 🛒 {range}</Link>  </li>
                <li className="px-2 py-1 text-xl font-bold mx-2 rounded-md bg-green-100 hover:bg-green-400 "><Link className="link" to="/grocery">Grocery</Link></li>
            
                <li>
                  <button onClick={()=>{
                    loginBtn==="login"?setLoginBtn('logout'):setLoginBtn('login')
                  }} className="bg-gray-200 p-2 text-xl rounded-md font-extrabold hover:bg-white border">{loginBtn}</button>
                </li>
                <li className="pl-2">{loggedInUser}</li>
                  <li className="px-2 text-xl font-bold">{onlineStatus?"🟢":"🔴"}</li>
            </ul>
        </div>
      </div>
    );
  };

  export default Header;