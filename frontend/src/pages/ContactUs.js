import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // For routing in React


const ContactUs = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const searchProducts = () => {
        // Handle search logic
        console.log(`Searching for: ${searchQuery}`);
    };

    return (
        <div>
            {/* Header Section */}
            <header className="header">
                <div className="header-top">
                    <img src="/logo.png" alt="EthosMarket Logo" />
                    <span className="search-bar">
                        <input 
                            type="text" 
                            placeholder="Search eco-friendly products..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)} // update search query state
                            id="searchInput"
                        />
                        <button onClick={searchProducts}>🔍</button>
                    </span>
                    <span className="header-buttons">
                        <Link to="/login" className="login-btn">Login</Link>
                        <Link to="/cart" className="cart-btn">🛒 Cart</Link>

                        {/* Dropdown Menu */}
                        <div className="dropdown-menu">
                            <Link to="/profile">Your Profile</Link>
                            <Link to="/orders">Your Orders</Link>
                            <Link to="/address">Address</Link>
                            <Link to="/contact">Contact Us</Link>
                            <Link to="/login" className="login-link">Login</Link>
                        </div>
                    </span>
                </div>
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/all-products">All Products</Link>
                    <Link to="/clothes">CLOTHES</Link>
                    <Link to="/home-needs">HOMENEEDS</Link>
                    <Link to="/kids">KIDS</Link>
                    <Link to="/beauty">BEAUTY</Link>
                    <Link to="/kitchen">KITCHEN</Link>
                    <Link to="/grocery">GROCERY</Link>
                </nav>
            </header>

            {/* Main Content */}
            <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/imagehttps://static.vecteezy.com/system/resources/previews/000/453/432/original/vector-contact-us-background.jpg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about prodduct feel free to call anytime we 24X7
            vaialible
          </p>
          <p className="mt-3">
             www.help@ecommerceapp.com
          </p>
          <p className="mt-3">
             012-3456789
          </p>
          <p className="mt-3">
             : 1800-0000-0000 (toll free)
          </p>
        </div>
      </div>

            {/* Footer Section */}
            <footer className="footer">
                <p>&copy; 2024 EthosMarket. All Rights Reserved.</p>
                <div className="footer-links">
                    <Link to="/about-us">About Us</Link>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                    <Link to="/terms-of-service">Terms of Service</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
                <div className="social-icons">
                    <a href="https://instagram.com" target="_blank" aria-label="Instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" aria-label="Twitter">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://youtube.com" target="_blank" aria-label="YouTube">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default ContactUs;
