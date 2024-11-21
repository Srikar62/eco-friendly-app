import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate for navigation

// Header component
const Header = ({ onSearch, onViewCart }) => {
  return (
    <header className="header">
      <div className="header-top">
        <img className="logo" src="./logo.png" alt="EthosMarket Logo" />
        <span className="search-bar">
          <input
            type="text"
            placeholder="Search eco-friendly products..."
            onChange={(e) => onSearch(e.target.value)}
          />
          <button onClick={() => onSearch("")}>🔍</button>
        </span>
        <span className="header-buttons">
          <Link to="/SignUp" className="login-btn">Login</Link>
          <button className="cart-btn" onClick={onViewCart}>🛒 Cart</button>
        </span>
      </div>
      <nav className="navbar">
        <Link to="/HomePage">HomePage</Link>
        <Link to="/AllProducts">All Products</Link>
        <Link to="/ClothesPage">CLOTHES</Link>
        <Link to="/HomeNeeds">HOMENEEDS</Link>
        <Link to="/Kids">KIDS</Link>
        <Link to="/Beauty">BEAUTY</Link>
        <Link to="/Kitchen">KITCHEN</Link>
        <Link to="/Grocery">GROCERY</Link>
      </nav>
    </header>
  );
};

// Product Item component
const ProductItem = ({ product, onAddToCart }) => (
  <span className="product-item">
    <img src={product.img} alt={product.name} />
    <h3>{product.name}</h3>
    <p>${product.price.toFixed(2)}</p>
    <button onClick={() => onAddToCart(product)}>Add to Cart</button>
  </span>
);

// Featured Products component
const FeaturedProducts = ({ products, onAddToCart, search }) => {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const navigate = useNavigate(); // Navigation hook for "View All Products"

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {filteredProducts.map((product, index) => (
          <ProductItem key={index} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
      <button
        className="view-all-products"
        onClick={() => navigate("/AllProducts")}
      >
        View All Products
      </button>
    </section>
  );
};

// Footer component
const Footer = () => (
  <footer className="footer">
    <p>&copy; 2024 EthosMarket. All Rights Reserved.</p>
    <div className="footer-links">
      <Link to="/AboutUs">About Us</Link>
      <Link to="/PrivacyPolicy">Privacy Policy</Link>
      <Link to="/TermsOfService">Terms of Service</Link>
      <Link to="/ContactUs">Contact Us</Link>
    </div>
    <div className="social-icons">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-youtube"></i>
      </a>
    </div>
  </footer>
);

const HomePage = () => {
  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate(); // Hook for navigating to the cart page

  const products = [
    {
      name: "Organic Face Wash",
      price: 15.99,
      img: "https://tse2.mm.bing.net/th?id=OIP.YN7I7sPqbEEUXm0ZvqIocAHaHa&pid=Api&P=0&h=180",
    },
    {
      name: "Natural Moisturizing Cream",
      price: 25.99,
      img: "https://tse4.mm.bing.net/th?id=OIP.HfPCmRj64omfirHJ9uhuRAHaHa&pid=Api&P=0&h=180",
    },
    {
      name: "Natural Organic Serum",
      price: 12.49,
      img: "https://tse2.mm.bing.net/th?id=OIP.8o28yE3MPQvuz6A_tXLVQQHaIl&pid=Api&P=0&h=180",
    },
    {
      name: "Bamboo Hair Shampoo",
      price: 18.99,
      img: "https://tse3.mm.bing.net/th?id=OIP.oaDWjR2M0FjUVp2jYezWowAAAA&pid=Api&P=0&h=180",
    },
  ];

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save cart to localStorage
    alert(`${product.name} has been added to your cart.`);
  };

  const viewCart = () => {
    navigate("/Cart"); // Navigate to Cart page
  };

  const searchProducts = (query) => {
    setSearch(query);
  };

  return (
    <>
      <Header onSearch={searchProducts} onViewCart={viewCart} />
      <FeaturedProducts
        products={products}
        search={search}
        onAddToCart={addToCart}
      />
      <Footer />
    </>
  );
};

export default HomePage;
