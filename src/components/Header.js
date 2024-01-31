import { useState , useEffect } from 'react';
import {LOGO_URL} from '../utils/constants';
import { Link } from 'react-router-dom';

const Header = () => {
  const [loginBtn , setloginBtn] = useState("Login")
  console.log("header render");

useEffect(()=>{
  console.log("useEfferct is called");
},[])



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
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About Us</Link></li>
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