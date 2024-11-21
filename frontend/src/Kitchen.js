import React, { useState } from "react";
import './App.css';
import Navbar from './Navbar.jsx';
import { Link } from "react-router-dom";

const Kitchen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("all");

  const products = [
    {
      name: "Beeswax Food Wraps",
      price: 950,
      image: "https://i.etsystatic.com/11252521/r/il/b65813/1521823252/il_fullxfull.1521823252_i3dd.jpg",
      category: "kitchen",
    },
    {
      name: "Bamboo Plates Set",
      price: 900,
      image: "https://tse2.mm.bing.net/th?id=OIP.HynpIAm1p4CvBiA8-3OBKQHaGd&pid=Api&P=0&h=180",
      category: "kitchen",
    },
    {
      name: "Recycled Kitchen Towel",
      price: 550,
      image: "https://brownliving.in/cdn/shop/products/recycled-kitchen-towel-2-ply-75-pulls-per-roll-pack-of-4-rolls-179-05974-8906004867057-1-cleaning-supplies-brown-living-214688_200x.jpg?v=1682966797",
      category: "kitchen",
    },
    {
      name: "Natural Coconut Coir Dishwashing Round Scrub Pad",
      price: 300,
      image: "https://brownliving.in/cdn/shop/products/natural-coconut-coir-dishwashing-round-scrub-pad-271-2907-598-gsrc001-kitchen-tools-brown-living-516770_700x.jpg?v=1718880228",
      category: "kitchen",
    },
  ];

  const filteredProducts = products
    .filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOrder === "low-high") return a.price - b.price;
      if (sortOrder === "high-low") return b.price - a.price;
      return 0;
    });

  // Handle adding item to cart
  const handleAddToCart = async (product) => {
    try {
      const response = await fetch('http://localhost:5000/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product.id, 
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
          userId: 'user123', // Replace with dynamic user ID if necessary
        }),
      });
      if (response.ok) {
        alert('Item added to cart');
      } else {
        alert('Failed to add item to cart');
      }
    } catch (error) {
      alert('Error adding item to cart');
    }
  };

  return (
    <div>
      <header className="header">
        <div className="header-top">
          <img className="logo" src="./logo.png" alt="EthosMarket Logo" />
          <span className="search-bar">
            <input
              type="text"
              placeholder="Search eco-friendly products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={() => setSearchQuery(searchQuery)}>🔍</button>
          </span>
          <span className="header-buttons">
            <button className="login-btn">
              <Link to="/login">Login</Link>
            </button>
            <Link to="/cart">🛒 Cart</Link>
          </span>
        </div>
        <Navbar />
      </header>

      <main>
        <h2 className="h2">KITCHEN</h2>
        <div className="container">
          <aside className="filters">
            <h3>Filter By</h3>
            <div>
              <label htmlFor="price">Price:</label>
              <select id="price" onChange={(e) => setSortOrder(e.target.value)} value={sortOrder}>
                <option value="all">All</option>
                <option value="low-high">Low to High</option>
                <option value="high-low">High to Low</option>
              </select>
            </div>
            <button onClick={() => alert('Applying Filters')}>Apply Filters</button>
          </aside>

          <section className="product-grid">
            {filteredProducts.map((product, index) => (
              <div className="product-item" key={index} data-category={product.category} data-price={product.price}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </section>
        </div>
      </main>

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
    </div>
  );
};

export default Kitchen;
