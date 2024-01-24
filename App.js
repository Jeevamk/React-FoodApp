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

const RestaurantCard = (props) =>{
    // const {resName , cuisine } = props
    return (
<div className="resCard">
        <img alt="resimg" src="https://amritsruae.com/blog/wp-content/uploads/2021/01/chicken-biryani-benefits-main.jpg" width={'100%'} style={{borderRadius:'15px'}}></img>
        <h3>{props.resName}</h3>
        <h5 style={{color:"gray"}}>{props.cuisine}</h5>
        <h5>4.4 <span>⭐</span></h5>
        <h5>38 minutes</h5>
    </div>
    )
    
}

const Body = ()=> {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
              <RestaurantCard resName="PARAGON" cuisine="Biriyani , North Indian , Asian" />
              <RestaurantCard resName="KFC" cuisine="Burger, Fastfood"/>
              


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



// https://www.chilitochoc.com/wp-content/uploads/2020/05/crispy-chicken-burger-e1615289026561.jpg