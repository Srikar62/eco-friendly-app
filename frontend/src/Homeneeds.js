import React, { useState } from 'react';
import './styles.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Homeneeds = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');

  const products = [
    {
      id: 1,
      category: 'homeNeeds',
      price: 170,
      name: 'Jute Carry Bag',
      image: 'https://4.imimg.com/data4/DL/CE/MY-11984510/jute-promotional-bags-006-1000x1000.jpg',
    },
    {
      id: 2,
      category: 'homeNeeds',
      price: 850,
      name: 'Recycled Wall Decor',
      image: 'http://images.custommade.com/7-ZgYVDUtv0eI7MgN9_dRU6KJKk=/custommade-photosets/141192/141192.463488.jpg',
    },
    // Add more products as needed
  ];

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (filter === 'low-high') return a.price - b.price;
      if (filter === 'high-low') return b.price - a.price;
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
          image: product.image,
          quantity: 1, // Default quantity
          userId: 'user123', // Replace with actual user ID if applicable
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
        <h2>Home Needs</h2>
        <div className="container">
          <aside className="filters">
            <label htmlFor="price">Filter by Price:</label>
            <select
              id="price"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="low-high">Low to High</option>
              <option value="high-low">High to Low</option>
            </select>
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
    </div>
  );
};

export default Homeneeds;
