import React, { useState } from "react";
import { Link } from "react-router-dom"; // Ensure Link is imported for navigation

const Grocery = () => {
  // States for handling search, filters, and products
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [products] = useState([
    {
      id: 1,
      name: "Bambooshell Leak Proof Steel Bottle",
      price: 400,
      image:
        "https://brownliving.in/cdn/shop/files/sustainable-bambooshell-leak-proof-steel-bottle-by-organic-b-at-brownliving-135845_300x.jpg?v=1731608235",
      category: "Grocery",
    },
    // Add more products as needed
  ]);

  // Filtered products based on search and price filter
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (priceFilter === "low-high") return a.price - b.price;
      if (priceFilter === "high-low") return b.price - a.price;
      return 0; // Default order
    });

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
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
              onChange={handleSearch}
            />
            <button>🔍</button>
          </div>
          <div className="header-buttons">
            <Link to="/login" className="login-btn">
              Login
            </Link>
            <Link to="/cart" className="cart-btn">
              🛒 Cart
            </Link>
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

      {/* Main Content */}
      <main>
        <h2 className="h2">GROCERY</h2>
        <div className="container">
          {/* Sidebar Filters */}
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

          {/* Products Grid */}
          <section className="product-grid" id="productGrid">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="product-item"
                data-category={product.category}
                data-price={product.price}
              >
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>₹{product.price}</p>
                <button>Add to Cart</button>
              </div>
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
};

export default Grocery;
