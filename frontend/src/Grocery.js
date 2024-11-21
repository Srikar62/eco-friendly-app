import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar.jsx';
import { Link } from 'react-router-dom';

const Grocery = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const searchProducts = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  return (
    <div>
      <Header searchProducts={searchProducts} />
      <main>
        <h2 className="h2">GROCERY</h2>
        <div className="container">
          <Sidebar />
          <ProductGrid searchQuery={searchQuery} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Header = ({ searchProducts }) => (
  <header className="header">
    <div className="header-top">
      <img className="logo" src="./logo.png" alt="EthosMarket Logo" />
      <span className="search-bar">
        <input
          type="text"
          placeholder="Search eco-friendly products..."
          onChange={searchProducts}
          id="searchInput"
        />
        <button onClick={searchProducts}>🔍</button>
      </span>
      <span className="header-buttons">
        <button className="login-btn">
          <Link to="/login">Login</Link>
        </button>
        <Link to="/cart">🛒 Cart</Link>

        {/* Dropdown Menu */}
        <div className="dropdown-menu">
          <a href="profile.html">Your Profile</a>
          <a href="orders.html">Your Orders</a>
          <a href="address.html">Address</a>
          <a href="contact.html">Contact Us</a>
          <a
            href="login.html"
            onClick={() => (window.location.href = 'login.html')}
          >
            Login
          </a>
        </div>
      </span>
    </div>
    <Navbar />
  </header>
);

const Sidebar = () => {
  const applyFilters = () => {
    const price = document.getElementById('price').value;
    const products = Array.from(document.querySelectorAll('.product-item'));

    if (price === 'low-high') {
      products.sort(
        (a, b) =>
          parseFloat(a.getAttribute('data-price')) -
          parseFloat(b.getAttribute('data-price'))
      );
    } else if (price === 'high-low') {
      products.sort(
        (a, b) =>
          parseFloat(b.getAttribute('data-price')) -
          parseFloat(a.getAttribute('data-price'))
      );
    }

    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';
    products.forEach((product) => productGrid.appendChild(product));
  };

  return (
    <aside className="filters">
      <h3>Filter By</h3>
      <div>
        <label htmlFor="price">Price:</label>
        <select id="price">
          <option value="all">All</option>
          <option value="low-high">Low to High</option>
          <option value="high-low">High to Low</option>
        </select>
      </div>
      <button onClick={applyFilters}>Apply Filters</button>
    </aside>
  );
};

const ProductGrid = ({ searchQuery }) => {
  const products = [
    {
      id: 1,
      category: 'Grocery',
      price: 400,
      img: 'https://brownliving.in/cdn/shop/files/sustainable-bambooshell-leak-proof-steel-bottle-by-organic-b-at-brownliving-135845_300x.jpg?v=1731608235',
      name: 'Bambooshell Leak Proof Steel Bottle',
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

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
          image: product.img,
          quantity: 1,
          userId: 'user123',
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
    <section className="product-grid" id="productGrid">
      {filteredProducts.map((product) => (
        <div
          className="product-item"
          key={product.id}
          data-category={product.category}
          data-price={product.price}
        >
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </section>
  );
};

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

export default Grocery;
