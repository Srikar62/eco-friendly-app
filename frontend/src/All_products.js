import React, { useState, useMemo } from 'react';
import './styles.css'; // Ensure your CSS is properly linked
import Navbar from './Navbar.jsx';
import { Link } from 'react-router-dom';

const All_products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');

  const products = [
    {
      id: 1,
      category: 'beauty',
      price: 567,
      image:
        'https://tse2.mm.bing.net/th?id=OIP.YN7I7sPqbEEUXm0ZvqIocAHaHa&pid=Api&P=0&h=180',
      name: 'Organic Face Wash',
    },
    {
      id: 2,
      category: 'beauty',
      price: 679,
      image:
        'https://tse4.mm.bing.net/th?id=OIP.HfPCmRj64omfirHJ9uhuRAHaHa&pid=Api&P=0&h=180',
      name: 'Natural Moisturizing Cream',
    },
    // Removed carry bag and wall decor items
  ];

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory =
          categoryFilter === 'all' || product.category === categoryFilter;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => {
        if (priceFilter === 'low-high') {
          return a.price - b.price;
        } else if (priceFilter === 'high-low') {
          return b.price - a.price;
        }
        return 0;
      });
  }, [searchQuery, categoryFilter, priceFilter, products]);

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
    <div>
      <header className="header">
        <div className="header-top">
          <img className="logo" src="./logo.png" alt="EthosMarket Logo" />
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search eco-friendly products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="header-buttons">
            <button className="login-btn">
              <Link to="/login">Login</Link>
            </button>
            <Link to="/cart">🛒 Cart</Link>
          </div>
        </div>
        <Navbar />
      </header>

      <main>
        <h2>All Products</h2>
        <div className="container">
          <aside className="filters">
            <h3>Filter By</h3>
            <div>
              <label htmlFor="category">Category:</label>
              <select
                id="category"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="clothes">Clothes</option>
                <option value="homeNeeds">Home Needs</option>
                <option value="beauty">Beauty</option>
                <option value="kitchen">Kitchen</option>
                <option value="grocery">Grocery</option>
              </select>
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <select
                id="price"
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="low-high">Low to High</option>
                <option value="high-low">High to Low</option>
              </select>
            </div>
          </aside>

          <section className="product-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-item">
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
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

export default All_products;
