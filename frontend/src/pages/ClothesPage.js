import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for React Router

const ClothesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('all');
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Vegan Leather Bracelet',
      price: 780,
      img: 'https://tse1.mm.bing.net/th?id=OIP.IEydvhF1S6RhwITR-WG_aQHaJ4&pid=Api&P=0&h=180',
    },
    {
      id: 2,
      name: 'Artificial Leather Handbag',
      price: 1000,
      img: 'https://tse4.mm.bing.net/th?id=OIP.CImjoPJtzzlq25QNII3VRAHaHa&pid=Api&P=0&h=180',
    },
    {
      id: 3,
      name: 'Fusion Upcycled Fabric Bangles - Set of 6',
      price: 1000,
      img: 'https://brownliving.in/cdn/shop/products/fusion-upcycled-fabric-bangles-set-of-6-verified-sustainable-womens-accessories-on-brown-living-313503_700x.jpg?v=1704784526',
    },
  ];

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'low-high') return a.price - b.price;
      if (sortOption === 'high-low') return b.price - a.price;
      return 0;
    });

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  return (
    <div>
      {/* Header Section */}
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
            <button>🔍</button>
          </div>
          <div className="header-buttons">
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/cart" className="cart-btn">🛒 Cart ({cart.length})</Link> {/* Show cart item count */}
          </div>
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

      {/* Main Section */}
      <main>
        <h2 className="h2">CLOTHES</h2>
        <div className="container">
          {/* Sidebar Filters */}
          <aside className="filters">
            <h3>Filter By</h3>
            <div>
              <label htmlFor="price">Price:</label>
              <select
                id="price"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
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
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-item">
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </section>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 EthosMarket. All Rights Reserved.</p>
        <div className="footer-links">
          <Link to="#">About Us</Link>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Service</Link>
          <Link to="#">Contact Us</Link>
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

export default ClothesPage;
