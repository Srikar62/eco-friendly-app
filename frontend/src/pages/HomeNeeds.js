import React, { useState } from "react";
import { Link } from "react-router-dom"; // For routing in React

const HomeNeeds = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");

  const products = [
    {
      id: 1,
      category: "homeNeeds",
      price: 170,
      name: "Jute Carry Bag",
      img: "https://4.imimg.com/data4/DL/CE/MY-11984510/jute-promotional-bags-006-1000x1000.jpg",
    },
    {
      id: 2,
      category: "homeNeeds",
      price: 850,
      name: "Recycled Wall Decor",
      img: "http://images.custommade.com/7-ZgYVDUtv0eI7MgN9_dRU6KJKk=/custommade-photosets/141192/141192.463488.jpg",
    },
    {
      id: 3,
      category: "homeNeeds",
      price: 1650,
      name: "Sustainable Grooming Kit | Personal Care Gift Box | Men & Women",
      img: "https://brownliving.in/cdn/shop/products/sustainable-grooming-kit-personal-care-gift-box-men-women-tbb-77-gift-box-brown-living-340870_700x.jpg?v=1682968110",
    },
    {
      id: 4,
      category: "homeNeeds",
      price: 600,
      name: "Cinnamon Vanilla 100% Soy Wax Air Freshener",
      img: "https://brownliving.in/cdn/shop/products/cinnamon-vanilla-air-freshener-100-soy-wax-214-10932-ar003-2s-candles-fragrances-brown-living-152962_700x.jpg?v=1682961340",
    },
    {
      id: 5,
      category: "homeNeeds",
      price: 450,
      name: "Natural Bamboo Amplifier Speaker",
      img: "https://brownliving.in/cdn/shop/files/sustainable-natural-bamboo-amplifier-speaker-by-organic-b-at-brownliving-513217_700x.jpg?v=1731614315",
    },
    {
      id: 6,
      category: "homeNeeds",
      price: 350,
      name: "Beeswax Tealight Candles",
      img: "https://brownliving.in/cdn/shop/products/beeswax-tealight-candles-pack-of-18-verified-sustainable-products-on-brown-living-461088_700x.jpg?v=1697801872",
    },
    {
      id: 7,
      category: "homeNeeds",
      price: 200,
      name: "Mangowood Wall Clock",
      img: "https://brownliving.in/cdn/shop/files/sustainable-mangowood-wall-clock-by-khushakriti-at-brownliving-407669_700x.jpg?v=1731613338",
    },
  ];

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handlePriceChange = (event) => {
    setPriceFilter(event.target.value);
  };

  const applyFilters = () => {
    let filteredProducts = [...products];

    if (priceFilter === "low-high") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (priceFilter === "high-low") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    return filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery)
    );
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
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button>🔍</button>
          </span>
          <span className="header-buttons">
            <Link to="/SignUp" className="login-btn">Login</Link>
            <Link to="/Cart" className="cart-btn">🛒 Cart</Link>
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

      {/* Main Content */}
      <main>
        <h2 className="h2">HOMENEEDS</h2>
        <div className="container">
          {/* Sidebar Filters */}
          <aside className="filters">
            <h3>Filter By</h3>
            <div>
              <label htmlFor="price">Price:</label>
              <select id="price" value={priceFilter} onChange={handlePriceChange}>
                <option value="all">All</option>
                <option value="low-high">Low to High</option>
                <option value="high-low">High to Low</option>
              </select>
            </div>
            <button onClick={applyFilters}>Apply Filters</button>
          </aside>

          {/* Products Grid */}
          <section className="product-grid">
            {applyFilters().map((product) => (
              <span
                key={product.id}
                className="product-item"
                data-category={product.category}
                data-price={product.price}
              >
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button onClick={() => alert("Item added to cart!")}>Add to Cart</button>
              </span>
            ))}
          </section>
        </div>
      </main>

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

export default HomeNeeds;
