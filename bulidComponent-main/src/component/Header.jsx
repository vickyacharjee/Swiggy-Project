import {CDN_LOGO} from "../util/constant" 
import { useState } from "react";
import { Link } from "react-router-dom";
 const Header = () => {
  const [loginBtn,setLoginBtn]=useState('login');
    return (
      <div className="header-nav">
        <div className="img-nav">
          <img src={CDN_LOGO} alt="Swiggy Logo" />
        </div>
        <div>
        <ul type="none" className="ul-container">
                <li><Link className="link">Home</Link></li>
                <li><Link className="link" to="/about">About-us</Link></li>
                <li><Link className="link" to="/contact">Contact-us</Link></li>
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