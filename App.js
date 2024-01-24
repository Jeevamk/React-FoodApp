import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * -Logo
 * -Nav Items
 * 
 * Body
 * -Search
 * -Restaurant Container
 *  -Restaurant Card
 *     -image
 *     -Name , star rating , cuisine,delivery time
 * 
 * Footer
 * -Copyright
 * -Links
 * -Address
 * -Contact
 */


const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
               <img className="logo" src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=360"></img>
            </div>
            <div className="navItems">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () =>{
    return (
<div className="resCard">
        <h3>Paragon</h3>
    </div>
    )
    
}

const Body = ()=> {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
              <RestaurantCard/>
            </div>
        </div>
    )
}


const AppLayout = ()=> {
    return (
        <div className="App">
            <Header />
            <Body />
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>)