import React, { useState } from 'react';
import { Link } from "react-router-dom"; 

const OrderConfirmation = () => {
  const [selectedCause, setSelectedCause] = useState('');

  const handleCauseChange = (event) => {
    setSelectedCause(event.target.value);
  };

  const continueShopping = () => {
    window.location.href = '/index.js';
  };

  // Define the searchProducts function
  const searchProducts = (query) => {
    console.log('Searching for:', query);
    // Here you can implement the logic for searching products.
    // This could be an API call, filter logic, etc.
  };

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="header-top">
          <img className="logo" src="/logo.png" alt="EthosMarket Logo" />
          <span className="search-bar">
            <input
              type="text"
              placeholder="Search eco-friendly products..."
              onChange={(e) => searchProducts(e.target.value)} // Call searchProducts on input change
              id="searchInput"
            />
            <button onClick={() => searchProducts(document.getElementById('searchInput').value)}>
              🔍
            </button>
          </span>
          <span className="header-buttons">
            <button className="login-btn" onClick={() => window.location.href = '/login.js'}>Login</button>
            <button onClick={() => window.location.href = '/cart.js'}>🛒 Cart</button>

            {/* Dropdown Menu */}
            <div className="dropdown-menu">
              <a href="/profile.js">Your Profile</a>
              <a href="/orders.js">Your Orders</a>
              <a href="/address.js">Address</a>
              <a href="/contact.js">Contact Us</a>
              <a href="/login.js" onClick={() => window.location.href = '/login.js'}>Login</a>
            </div>
          </span>
        </div>
        <nav className="navbar">
          <Link to="/HomePage">HomePage</Link>
          <Link to="/AllProducts">All Products</Link>
          <Link to="/ClothesPage">CLOTHES</Link>
          <Link to="/HomeNeeds">HOMENEEDS</Link>
          <Link to="/Kids">KIDS</Link>
          <Link to="/Beauty">BEAUTY</Link>
          <Link to="/kitchen">KITCHEN</Link>
          <Link to="/Grocery">GROCERY</Link>
        </nav>
      </header>

      {/* Confirmation Content */}
      <div className="confirmation-container">
        <h1>Payment Successful!</h1>
        <p>Order Placed Successfully.</p>
        <p>You earned <strong>1000 Green Points!!!</strong></p>
        <p>Become a member of our initiative by subscribing.</p>

        {/* Dropdown for Supporting a Cause */}
        <label htmlFor="support-cause"><strong>Support a Cause:</strong></label>
        <select
          id="support-cause"
          value={selectedCause}
          onChange={handleCauseChange}
        >
          <option value="">Select a cause to support</option>
          <option value="animal">Support an animal</option>
          <option value="tree">Plant a tree in your name</option>
          <option value="plastic-free">Support Plastic-Free India</option>
          <option value="artisans">Encourage local artisans</option>
          <option value="farmers">Support farmers who follow regenerative sustainable cropping</option>
          <option value="zero-carbon">Complete the whole shopping process by leaving 0 carbon footprint</option>
        </select>

        <p className="note">
          In order to support these causes, become a member of EthosMarket.
          <br />
          Thank you for choosing EthosMarket!
        </p>

        {/* Continue Shopping Button */}
        <button onClick={continueShopping}>Continue Shopping</button>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 EthosMarket. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/aboutus.js">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="/contactus.js">Contact Us</a>
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

export default OrderConfirmation;
