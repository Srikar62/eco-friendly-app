import React from 'react';
import './App.css'; // Assuming your CSS is saved here

const Contactus = () => {
  return (
    <div>
      <Header />
      <main>
        <p>NO CONTACT DETAILS AVAILABLE</p>
      </main>
      <Footer />
    </div>
  );
};

const Header = () => (
  <header className="header">
    <div className="header-top">
      <img className="logo" src="./logo.png" alt="EthosMarket Logo" />
      <span className="search-bar">
        <input
          type="text"
          placeholder="Search eco-friendly products..."
          onInput={() => alert('Search functionality not implemented')}
          id="searchInput"
        />
        <button onClick={() => alert('Search functionality not implemented')}>🔍</button>
      </span>
      <span className="header-buttons">
        <button className="login-btn" onClick={() => (window.location.href = 'login.html')}>
          Login
        </button>
        <button onClick={() => alert('Redirect to cart')}>🛒 Cart</button>

        {/* Dropdown Menu */}
        <div className="dropdown-menu">
          <a href="profile.html">Your Profile</a>
          <a href="orders.html">Your Orders</a>
          <a href="address.html">Address</a>
          <a href="contact.html">Contact Us</a>
          <a href="login.html" onClick={() => (window.location.href = 'login.html')}>
            Login
          </a>
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
);

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2024 EthosMarket. All Rights Reserved.</p>
    <div className="footer-links">
      <a href="#">About Us</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms of Service</a>
      <a href="#">Contact Us</a>
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
);

export default Contactus;
