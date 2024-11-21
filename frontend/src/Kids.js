import React, { useState } from 'react';
import './App.css'; // You can copy your styles.css here or use inline styles
import Navbar from './Navbar.jsx';
import { Link } from 'react-router-dom';

function Kids() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('all');

  const products = [
    { id: 1, name: 'Handmade Papers', price: 750, category: 'kids', imgUrl: 'https://tse3.mm.bing.net/th?id=OIP.mR-pAABKbx56x44p9rptVwHaHa&pid=Api&P=0&h=180' },
    { id: 2, name: 'Recycled Notebooks', price: 700, category: 'kids', imgUrl: 'https://brownliving.in/cdn/shop/products/recycled-notebooks-pack-of-6-70-gsm-paper-216-08584-rsk80ur-notebooks-notepads-brown-living-705176_700x.jpg?v=1682966800' },
    { id: 3, name: 'Cute Cat Bamboo Hairbrush for Kids', price: 150, category: 'kids', imgUrl: 'https://brownliving.in/cdn/shop/files/sustainable-cute-cat-bamboo-hairbrush-for-kids-by-organic-b-at-brownliving-460789_700x.jpg?v=1731609691' },
  ];

  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sortBy === 'low-high') return a.price - b.price;
    if (sortBy === 'high-low') return b.price - a.price;
    return 0;
  });

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
          image: product.imgUrl,
          quantity: 1,
          userId: 'user123',  // You can dynamically change the userId based on authentication
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
      {/* Header Section */}
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
            <button>🔍</button>
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

      {/* Main Content */}
      <main>
        <h2 className="h2">KIDS</h2>
        <div className="container">
          {/* Filters Section */}
          <aside className="filters">
            <h3>Filter By</h3>
            <div>
              <label htmlFor="price">Price:</label>
              <select 
                id="price" 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="all">All</option>
                <option value="low-high">Low to High</option>
                <option value="high-low">High to Low</option>
              </select>
            </div>
            <button>Apply Filters</button>
          </aside>

          {/* Products Grid */}
          <section className="product-grid" id="productGrid">
            {sortedProducts.map((product) => (
              <span key={product.id} className="product-item" data-category={product.category} data-price={product.price}>
                <img src={product.imgUrl} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </span>
            ))}
          </section>
        </div>
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
}

export default Kids;
