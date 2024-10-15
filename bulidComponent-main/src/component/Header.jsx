import {CDN_LOGO} from "../util/constant" 
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../util/useOnlineStatus";
 const Header = () => {
  const [loginBtn,setLoginBtn]=useState('login');
  const onlineStatus=useOnlineStatus();
    return (
      <div className="header-nav">
        <div className="img-nav">
          <Link><img className="img-logo" src={CDN_LOGO} alt="Swiggy Logo"/></Link>
        </div>
        <div>
        <ul type="none" className="ul-container">
                <li>{onlineStatus?"💚":"❤️"}</li>
                <li><Link className="link">Home</Link></li>
                <li><Link className="link" to="/about">About-us</Link></li>
                <li><Link className="link" to="/contact">Contact-us</Link></li>
                <li><Link className="link" to="/grocery">Grocery</Link></li>
                
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