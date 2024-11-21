import React, { useState } from "react";
import Navbar from './Navbar.jsx';

const Beauty = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");

  const products = [
    {
      id: 1,
      category: "beauty",
      price: 567,
      image:
        "https://tse2.mm.bing.net/th?id=OIP.YN7I7sPqbEEUXm0ZvqIocAHaHa&pid=Api&P=0&h=180",
      name: "Organic Face Wash",
    },
    {
      id: 2,
      category: "beauty",
      price: 679,
      image:
        "https://tse4.mm.bing.net/th?id=OIP.HfPCmRj64omfirHJ9uhuRAHaHa&pid=Api&P=0&h=180",
      name: "Natural Moisturizing Cream",
    },
    {
      id: 3,
      category: "beauty",
      price: 670,
      image:
        "https://tse2.mm.bing.net/th?id=OIP.8o28yE3MPQvuz6A_tXLVQQHaIl&pid=Api&P=0&h=180",
      name: "Natural Organic Serum",
    },
    {
      id: 4,
      category: "beauty",
      price: 650,
      image:
        "https://tse3.mm.bing.net/th?id=OIP.oaDWjR2M0FjUVp2jYezWowAAAA&pid=Api&P=0&h=180",
      name: "Bamboo Hair Shampoo",
    },
    {
      id: 5,
      category: "beauty",
      price: 800,
      image:
        "https://tse1.mm.bing.net/th?id=OIP.kx59SFfi38gcduu9-5fqcgHaHa&pid=Api&P=0&h=180",
      name: "Bamboo Toothbrush",
    },
    {
      id: 6,
      category: "beauty",
      price: 500,
      image:
        "https://brownliving.in/cdn/shop/products/coconut-shell-ecofriendly-soap-dish-set-of-2-173-11066-thenga14-bath-accessories-brown-living-471188_700x.jpg?v=1724151688",
      name: "Coconut Shell Ecofriendly Soap Dish",
    },
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
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

  const filteredProducts = applyFilters();

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
          userId: 'user123', // Replace with dynamic user ID if needed
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

  const handleLogin = () => {
    window.location.href = "/login";
  };

  const handleCart = () => {
    window.location.href = "/cart";
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="header-top">
          <img className="logo" src="./logo.png" alt="EthosMarket Logo" />
          <span className="search-bar">
            <input
              type="text"
              placeholder="Search eco-friendly products..."
              value={searchQuery}
              onChange={handleSearch}
            />
            <button>🔍</button>
          </span>
          <span className="header-buttons">
            <button className="login-btn" onClick={handleLogin}>
              Login
            </button>
            <button onClick={handleCart}>🛒 Cart</button>
          </span>
        </div>
        <Navbar />
      </header>

      {/* Main Content */}
      <main>
        <h2 className="h2">Beauty</h2>
        <div className="container">
          {/* Filters */}
          <aside className="filters">
            <h3>Filter By</h3>
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
            <button onClick={applyFilters}>Apply Filters</button>
          </aside>

          {/* Product Grid */}
          <section className="product-grid">
            {filteredProducts.map((product) => (
              <span
                key={product.id}
                className="product-item"
                data-category={product.category}
                data-price={product.price}
              >
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </span>
            ))}
          </section>
        </div>
      </main>

      {/* Footer */}
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

export default Beauty;
