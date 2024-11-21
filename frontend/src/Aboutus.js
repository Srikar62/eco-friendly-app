import React from 'react';
import './styles.css';  // Import custom CSS
import { FaInstagram, FaTwitter, FaYoutube, FaSearch } from 'react-icons/fa';

const App = () => {
  // Function for search button
  const searchProducts = () => {
    console.log("Search functionality to be implemented!");
  };

  // Function for login button
  const login = () => {
    console.log("Login functionality to be implemented!");
  };

  // Function to redirect to the cart
  const redirectToCart = () => {
    console.log("Redirect to Cart functionality to be implemented!");
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
              onInput={searchProducts}
              id="searchInput"
            />
            <button onClick={searchProducts}>
              <FaSearch />
            </button>
          </span>
          <span className="header-buttons">
            <button className="login-btn" onClick={login}>
              Login
            </button>
            <button onClick={redirectToCart}>🛒 Cart</button>

            {/* Dropdown Menu */}
            <div className="dropdown-menu">
              <a href="profile.html">Your Profile</a>
              <a href="orders.html">Your Orders</a>
              <a href="address.html">Address</a>
              <a href="contact.html">Contact Us</a>
              <a href="login.html" onClick={login}>
                Login
              </a>
            </div>
          </span>
        </div>
        <nav className="navbar">
          <a href="index.html">Home</a>
          <a href="all_products.html">All Products</a>
          <a href="clothes.html">CLOTHES</a>
          <a href="homeNeeds.html">HOMENEEDS</a>
          <a href="kids.html">KIDS</a>
          <a href="beauty.html">BEAUTY</a>
          <a href="kitchen.html">KITCHEN</a>
          <a href="grocery.html">GROCERY</a>
        </nav>
      </header>

      {/* Main Section */}
      <main style={{ height: "900px", width: "100%", margin: "20px", padding: "20px", fontSize: "large", backgroundColor: "antiquewhite" }}>
        <h1>ETHOSMARKET - an ecofriendly and sustainable shopping platform</h1>
        <p>
          Our team carefully curates a variety of every-day-use products that are
          earth-friendly, for our eco-conscious consumers, with a single goal to
          leave this Earth better than we found it.
        </p>
        <p>
          If you want to make informed choices and shop consciously, guiltfree,
          with least damage to the environment, we have a handpicked list created
          just for you. Our online shop will enable you to buy these products all
          from one place.
        </p>
        <h2>OUR MISSION</h2>
        <p>
          To make environmentally-sustainable products easily accessible to the
          consumers of today. To create an awareness about conscious consumption
          and environment-positive products.
        </p>
        <h2>CAUSES WE SUPPORT</h2>
        <p>
          Sustainable Living & Conscious Consumption
          Afforestation Slow Living & Fashion Eco-friendly Products Biodegradable
          Packaging Zero Waste Lifestyle: discourage single-use plastics Resource
          Conserving Methods for Production and Use Fair Trade & Ethical Sourcing
          Sustainable Farming, No Animal Harming or Testing Vegan & Plant-Based
          Products Natural Ingredients
        </p>
      </main>

      {/* Footer Section */}
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
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="https://youtube.com" target="_blank" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
