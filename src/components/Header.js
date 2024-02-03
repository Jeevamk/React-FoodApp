import { useState , useEffect } from 'react';
import {LOGO_URL} from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  const [loginBtn , setloginBtn] = useState("Login")
  const OnlineStatus = useOnlineStatus();


  

    return (
      <div className="flex justify-between shadow-lg">
        <div className="logo-container">
          <img
            className="w-20"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="flex items-center">
          <ul className='flex p-3 m-3'>
            <li className='px-4'>Online Status : {OnlineStatus ? "✅" :"🔴"}</li>
            <li className='px-4'><Link to="/">Home</Link></li>
            <li className='px-4'><Link to="/contact">Contact Us</Link></li>
            <li className='px-4'><Link to="/about">About Us</Link></li>
            <li className='px-4'>Cart</li>
            <li className='px-4'><button className='btnLogin' onClick={()=> {
             loginBtn ==='Login'? setloginBtn("Logout"): setloginBtn("Login")
            }}>
              {loginBtn}</button></li>
          </ul>
        </div>
      </div>
    );
  };


export default Header;