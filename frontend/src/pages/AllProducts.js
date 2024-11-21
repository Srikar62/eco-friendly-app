import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for navigation

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
const ProductItem = ({ product, onAddToCart, onImageClick }) => (
  <span className="product-item">
    <img
      src={product.img}
      alt={product.name}
      onClick={() => onImageClick(product)} // Redirect on image click
      style={{ cursor: "pointer" }} // Add pointer cursor for clickable image
    />
    <h3>{product.name}</h3>
    <p>${product.price.toFixed(2)}</p>
    <button onClick={() => onAddToCart(product)}>Add to Cart</button>
  </span>
);

// All Products Page
const AllProducts = () => {
  const [cart, setCart] = useState([]); // Cart state
  const [search, setSearch] = useState(""); // Search query state
  const navigate = useNavigate(); // Hook for navigation

  // Sample product data with id
  const products = [
    { id: 1, name: "Cinnamon Vanilla 100% Soy Wax Air Freshener", price: 600, img: "https://example.com/image1.jpg" },
    { id: 2, name: "Organic Face Wash", price: 15.99, img: "https://example.com/image2.jpg" },
    { id: 3, name: "Natural Moisturizing Cream", price: 25.99, img: "https://example.com/image3.jpg" },
    { id: 4, name: "Natural Organic Serum", price: 12.49, img: "https://example.com/image4.jpg" },
    { id: 5, name: "Bamboo Hair Shampoo", price: 18.99, img: "https://example.com/image5.jpg" },
  ];

  // Add product to the cart
  const addToCart = async (product) => {
    try {
      const response = await fetch('http://localhost:5000/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product.id,
          quantity: 1,
          userId: 'user123', // This should come from the logged-in user's data
        }),
      });

      if (response.ok) {
        setCart((prevCart) => [...prevCart, product]); // Update the cart state locally
        alert(`${product.name} has been added to your cart.`);
      } else {
        alert('Failed to add product to the cart.');
      }
    } catch (error) {
      alert('Error adding product to cart.');
      console.error('Error:', error);
    }
  };

  // Handle image click for product redirection
  const handleImageClick = (product) => {
    if (product.name === "Cinnamon Vanilla 100% Soy Wax Air Freshener") {
      navigate("/Product_des"); // Redirect to Product description page
    }
  };

  // Search products based on the query
  const searchProducts = (query) => {
    setSearch(query);
  };

  return (
    <>
      <Header onSearch={searchProducts} />
      <main>
        <h2>All Products</h2>
        <div className="product-grid">
          {products
            .filter((product) =>
              product.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((product, index) => (
              <ProductItem
                key={index}
                product={product}
                onAddToCart={addToCart}
                onImageClick={handleImageClick}
              />
            ))}
        </div>
      </main>
    </>
  );
};

export default AllProducts;
