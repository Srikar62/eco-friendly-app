import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom for navigation

// Header Component
const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <div className="header-top">
        <img className="logo" src="./logo.png" alt="EthosMarket Logo" />
        <span className="search-bar">
          <input
            type="text"
            placeholder="Search eco-friendly products..."
            onInput={(e) => onSearch(e.target.value)} // onInput for real-time search updates
            id="searchInput"
          />
          <button onClick={() => onSearch(document.getElementById('searchInput').value)}>
            🔍
          </button>
        </span>
        <span className="header-buttons">
          <Link to="/SignUp" className="login-btn">Login</Link>
          <Link to="/Cart" className="cart-btn">🛒 Cart</Link>

          {/* Dropdown Menu */}
          <div className="dropdown-menu">
            <Link to="/ContactUs">Contact Us</Link>
            <Link to="/SignUp">SignUp</Link>
          </div>
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
  );
};


// Product Item Component
const ProductItem = ({ product }) => (
  <span className="product-item" data-category={product.category} data-price={product.price}>
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>${product.price}</p>
    <button>Add to Cart</button>
  </span>
);

// Beauty Page Component
const Beauty = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Track search query
  const [sortOrder, setSortOrder] = useState("all"); // Track sort order
  const [cart, setCart] = useState([]); // Track cart items

  const products = [
    {
      name: "Organic Face Wash",
      price: 567,
      category: "beauty",
      image: "https://tse2.mm.bing.net/th?id=OIP.YN7I7sPqbEEUXm0ZvqIocAHaHa&pid=Api&P=0&h=180",
    },
    {
      name: "Natural Moisturizing Cream",
      price: 679,
      category: "beauty",
      image: "https://tse4.mm.bing.net/th?id=OIP.HfPCmRj64omfirHJ9uhuRAHaHa&pid=Api&P=0&h=180",
    },
    {
      name: "Natural Organic Serum",
      price: 670,
      category: "beauty",
      image: "https://tse2.mm.bing.net/th?id=OIP.8o28yE3MPQvuz6A_tXLVQQHaIl&pid=Api&P=0&h=180",
    },
    {
      name: "Bamboo Hair Shampoo",
      price: 650,
      category: "beauty",
      image: "https://tse3.mm.bing.net/th?id=OIP.oaDWjR2M0FjUVp2jYezWowAAAA&pid=Api&P=0&h=180",
    },
    {
      name: "Bamboo Toothbrush",
      price: 800,
      category: "beauty",
      image: "https://tse1.mm.bing.net/th?id=OIP.kx59SFfi38gcduu9-5fqcgHaHa&pid=Api&P=0&h=180",
    },
    {
      name: "Coconut Shell Ecofriendly Soap Dish",
      price: 500,
      category: "beauty",
      image: "https://brownliving.in/cdn/shop/products/coconut-shell-ecofriendly-soap-dish-set-of-2-173-11066-thenga14-bath-accessories-brown-living-471188_700x.jpg?v=1724151688",
    },
  ];

  // Filter and sort the products based on search query and price
  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) // Filter by search query
    )
    .sort((a, b) => {
      if (sortOrder === "low-high") return a.price - b.price;
      if (sortOrder === "high-low") return b.price - a.price;
      return 0;
    });

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]); // Update cart state
  };

  // Get the count of items in the cart
  const cartCount = cart.length;

  return (
    <>
      <Header onSearch={setSearchQuery} cartCount={cartCount} />
      <main>
        <h2 className="h2">BEAUTY</h2>
        <div className="container">
          {/* Sidebar Filters */}
          <aside className="filters">
            <h3>Filter By</h3>
            <div>
              <label htmlFor="price">Price:</label>
              <select id="price" onChange={(e) => setSortOrder(e.target.value)}>
                <option value="all">All</option>
                <option value="low-high">Low to High</option>
                <option value="high-low">High to Low</option>
              </select>
            </div>
          </aside>

          {/* Products Grid */}
          <section className="product-grid" id="productGrid">
            {filteredProducts.map((product, index) => (
              <ProductItem key={index} product={product} onAddToCart={addToCart} />
            ))}
          </section>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; 2024 EthosMarket. All Rights Reserved.</p>
        <div className="footer-links">
          <Link to="/AboutUs">About Us</Link>
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms of Service</Link>
          <Link to="">Contact Us</Link>
        </div>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://youtube.com" target="_blank" aria-label="YouTube" rel="noopener noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </footer>
    </>
  );
};

export default Beauty;
