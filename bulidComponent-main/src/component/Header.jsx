import {CDN_LOGO} from "../util/constant" 
import { useState } from "react";

 const Header = () => {
  const [loginBtn,setLoginBtn]=useState('login');
    return (
      <div className="header-nav">
        <div className="img-nav">
          <img src={CDN_LOGO} alt="Swiggy Logo" />
        </div>
        <div>
        <ul type="none" className="ul-container">
                <li>Home</li>
                <li>About-us</li>
                <li>Contact</li>
                <li>Cart</li>
                <li>
                  <button onClick={()=>{
                    loginBtn==="login"?setLoginBtn('logout'):setLoginBtn('login')
                    }} className="auth-btn">{loginBtn}</button>
                </li>
            </ul>
        </div>
      </div>
    );
  };

  export default Header;