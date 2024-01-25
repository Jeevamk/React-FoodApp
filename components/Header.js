const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://img.freepik.com/premium-vector/restaurant-logo-design-template_79169-56.jpg?w=360"
          ></img>
        </div>
        <div className="navItems">
          <ul>
            <li>Home</li>
            <li>Contact Us</li>
            <li>Offers</li>
            <li>Profile</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    );
  };


export default Header;