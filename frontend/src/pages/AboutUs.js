import React from "react";
import { Link } from "react-router-dom"; // Make sure to install react-router-dom
import HomePage from './HomePage';

// Header component
const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <div className="header-top">
        <img className="logo" src="./logo.png" alt="EthosMarket Logo" />
        <span className="search-bar">
          <input
            type="text"
            placeholder="Search eco-friendly products..."
            onInput={(e) => onSearch(e.target.value)} // onInput for real-time search updates
            id="searchInput"
          />
          <button onClick={() => onSearch(document.getElementById('searchInput').value)}>
            🔍
          </button>
        </span>
        <span className="header-buttons">
          <Link to="/SignUp" className="login-btn">Login</Link>
          <Link to="/Cart" className="cart-btn">🛒 Cart</Link>

          {/* Dropdown Menu */}
          <div className="dropdown-menu">
            <Link to="/ContactUs">Contact Us</Link>
            <Link to="/SignUp">SignUp</Link>
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
  );
};

// Footer component
const Footer = () => (
  <footer className="footer">
    <p>&copy; 2024 EthosMarket. All Rights Reserved.</p>
    <div className="footer-links">
      <Link to="/AboutUs">About Us</Link>
      <Link to="/ContactUs">Contact Us</Link>
    </div>
    <div className="social-icons">
      <a href="https://instagram.com" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://twitter.com" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://youtube.com" target="_blank" aria-label="YouTube" rel="noopener noreferrer">
        <i className="fab fa-youtube"></i>
      </a>
    </div>
  </footer>
);

// About Us Page
const AboutUs = () => {
  return (
    <>
      <Header onSearch={(query) => console.log("Searching for:", query)} />
      <main style={{ height: "900px", width: "100%", margin: "20px", padding: "20px", fontSize: "large", backgroundColor: "antiquewhite" }}>
        <h1>ETHOSMARKET - An Ecofriendly and Sustainable Shopping Platform</h1>
        <p>
          Our team carefully curates a variety of every-day-use products that are earth-friendly for our eco-conscious consumers, with a single goal
          to leave this Earth better than we found it.
        </p>
        <p>
          If you want to make informed choices and shop consciously, guilt-free, with least damage to the environment, we have a handpicked list
          created just for you. Our online shop will enable you to buy these products all from one place.
        </p>
        <h2>OUR MISSION</h2>
        <p>
          To make environmentally-sustainable products easily accessible to the consumers of today. To create an awareness about conscious
          consumption and environment-positive products.
        </p>
        <h2>CAUSES WE SUPPORT</h2>
        <p>
          Sustainable Living & Conscious Consumption<br />
          Afforestation<br />
          Slow Living & Fashion<br />
          Eco-friendly Products<br />
          Biodegradable Packaging<br />
          Zero Waste Lifestyle: discourage single-use plastics<br />
          Resource Conserving Methods for Production and Use<br />
          Fair Trade & Ethical Sourcing<br />
          Sustainable Farming, No Animal Harming or Testing<br />
          Vegan & Plant-Based Products<br />
          Natural Ingredients
        </p>
      </main>
      <Footer />
    </>
  );
};

export default AboutUs;
