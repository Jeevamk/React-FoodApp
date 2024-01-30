import { useState } from 'react';
import {LOGO_URL} from '../utils/constants';

const Header = () => {
  const [loginBtn , setloginBtn] = useState("Login")
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="navItems">
          <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>Offers</li>
            <li>Profile</li>
            <li>Cart</li>
            <li><button className='btnLogin' onClick={()=> {
             loginBtn ==='Login'? setloginBtn("Logout"): setloginBtn("Login")
            }}>
              {loginBtn}</button></li>
          </ul>
        </div>
      </div>
    );
  };


export default Header;