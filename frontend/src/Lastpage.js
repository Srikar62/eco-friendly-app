import React, { useState } from 'react';
import './styles.css'; // Assuming you import your styles here or use external CSS

const Lastpage = () => {
  const [selectedCause, setSelectedCause] = useState("");

  // Handle cause selection change
  const handleCauseChange = (event) => {
    setSelectedCause(event.target.value);
  };

  // Handle continue shopping button click
  const continueShopping = () => {
    window.location.href = '/'; // Redirect to homepage
  };

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="header-top">
          <img className="logo" src="./logo.png" alt="EthosMarket Logo" />
          <span className="search-bar">
            <input
              type="text"
              placeholder="Search eco-friendly products..."
              id="searchInput"
              // Can be used with state to track search query
            />
            <button>🔍</button>
          </span>
          <span className="header-buttons">
            <button className="login-btn">Login</button>
            <button>🛒 Cart</button>

            {/* Dropdown Menu */}
            <div className="dropdown-menu">
              <a href="profile.html">Your Profile</a>
              <a href="orders.html">Your Orders</a>
              <a href="address.html">Address</a>
              <a href="contact.html">Contact Us</a>
              <a href="login.html">Login</a>
            </div>
          </span>
        </div>
        <nav className="navbar">
          <span><a href="index.html">Home</a></span>
          <span><a href="all_products.html">All Products</a></span>
          <span><a href="clothes.html">CLOTHES</a></span>
          <span><a href="homeNeeds.html">HOMENEEDS</a></span>
          <span><a href="kids.html">KIDS</a></span>
          <span><a href="beauty.html">BEAUTY</a></span>
          <span><a href="kitchen.html">KITCHEN</a></span>
          <span><a href="grocery.html">GROCERY</a></span>
        </nav>
      </header>

      {/* Order Confirmation Container */}
      <div className="confirmation-container">
        <h1>Payment Successful!</h1>
        <p>Order Placed Successfully.</p>
        <p>You earned <strong>1000 Green Points!!!</strong>.</p>
        <p>Become a member of our initiative by subscribing.</p>

        {/* Dropdown for Support a Cause */}
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
          In order to support these causes, become a member of EthosMarket. <br />
          Thank you for choosing EthosMarket!
        </p>

        {/* Continue Shopping Button */}
        <button onClick={continueShopping}>Continue Shopping</button>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 EthosMarket. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="aboutus.html">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="contactus.html">Contact Us</a>
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

export default Lastpage;
