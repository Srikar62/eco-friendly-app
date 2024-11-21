import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar.jsx';
import { Link } from "react-router-dom";

const Clothes = () => {
  const initialProducts = [
    {
      id: 1,
      category: 'clothes',
      price: 780,
      name: 'Vegan Leather Bracelet',
      image: 'https://tse1.mm.bing.net/th?id=OIP.IEydvhF1S6RhwITR-WG_aQHaJ4&pid=Api&P=0&h=180',
    },
    {
      id: 2,
      category: 'clothes',
      price: 1000,
      name: 'Artificial Leather Handbag',
      image: 'https://tse4.mm.bing.net/th?id=OIP.CImjoPJtzzlq25QNII3VRAHaHa&pid=Api&P=0&h=180',
    },
    {
      id: 3,
      category: 'clothes',
      price: 1000,
      name: 'Fusion Upcycled Fabric Bangles- Set of 6',
      image: 'https://brownliving.in/cdn/shop/products/fusion-upcycled-fabric-bangles-set-of-6-verified-sustainable-womens-accessories-on-brown-living-313503_700x.jpg?v=1704784526',
    },
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [products, setProducts] = useState(initialProducts);
  const [cartItems, setCartItems] = useState([]);  // State to store cart items

  // Fetch cart items from the backend
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/cart');
        const data = await response.json();
        setCartItems(data);  // Update cart items state
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

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
        alert(`${product.name} has been added to your cart.`);
        // Refetch the updated cart items after adding to cart
        const updatedCartResponse = await fetch('http://localhost:5000/api/cart');
        const updatedCart = await updatedCartResponse.json();
        setCartItems(updatedCart); // Update cart items state with the new data
      } else {
        alert('Failed to add item to cart.');
      }
    } catch (error) {
      alert('Error adding item to cart.');
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredProducts = products
    .filter((product) => product.name.toLowerCase().includes(searchQuery))
    .sort((a, b) => {
      if (priceFilter === 'low-high') return a.price - b.price;
      if (priceFilter === 'high-low') return b.price - a.price;
      return 0;
    });

  return (
    <div>
      <Header searchQuery={searchQuery} onSearch={handleSearch} cartItems={cartItems} /> {/* Pass cartItems as a prop */}
      <main>
        <h2 className="h2">Clothes</h2>
        <div className="container">
          <Filters
            priceFilter={priceFilter}
            setPriceFilter={setPriceFilter}
          />
          <ProductGrid
            products={filteredProducts}
            onAddToCart={handleAddToCart}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

const Header = ({ searchQuery, onSearch, cartItems }) => (
  <header className="header">
    <div className="header-top">
      <img className="logo" src="./logo.png" alt="EthosMarket Logo" />
      <span className="search-bar">
        <input
          type="text"
          placeholder="Search eco-friendly products..."
          value={searchQuery}
          onChange={onSearch}
        />
      </span>
      <span className="header-buttons">
        <button className="login-btn">
          <Link to="/login">Login</Link>
        </button>
        <Link to="/cart">🛒 Cart ({cartItems.length})</Link> {/* Show cart item count */}
      </span>
    </div>
    <Navbar />
  </header>
);

const Filters = ({ priceFilter, setPriceFilter }) => (
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
  </aside>
);

const ProductGrid = ({ products, onAddToCart }) => (
  <section className="product-grid">
    {products.map((product) => (
      <div className="product-item" key={product.id}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      </div>
    ))}
  </section>
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
  </footer>
);

export default Clothes;
