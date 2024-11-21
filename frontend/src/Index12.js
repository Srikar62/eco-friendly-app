import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css"; // Assuming the styles are in App.css
import Navbar from "./Navbar.jsx";

const Index12 = () => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to search products
  const searchProducts = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Function to add a product to the cart
  const addToCart = async (product) => {
    try {
      const response = await fetch("http://localhost:5000/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product.id,
          name: product.name,
          price: product.price,
          image: product.imgSrc,
          quantity: 1,
          userId: "user123",
        }),
      });

      if (response.ok) {
        alert(`${product.name} has been added to your cart.`);
        setCart((prevCart) => [...prevCart, product]); // Update cart state
      } else {
        alert("Failed to add item to cart");
      }
    } catch (error) {
      alert("Error adding item to cart");
    }
  };

  return (
    <div>
      <Header searchProducts={searchProducts} />
      <main>
        <FeaturedProducts
          addToCart={addToCart}
          searchQuery={searchQuery}
        />
        <CartModal cart={cart} />
      </main>
      <Footer />
    </div>
  );
};

const Header = ({ searchProducts }) => (
  <header className="header">
    <div className="header-top">
      <img className="logo" src="./logo.png" alt="EthosMarket Logo" />
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search eco-friendly products..."
          onChange={searchProducts}
        />
        <button>🔍</button>
      </div>
      <div className="header-buttons">
        <Link to="/login">Login</Link>
        <Link to="/cart">🛒 Cart</Link>
      </div>
    </div>
    <Navbar />
  </header>
);

const FeaturedProducts = ({ addToCart, searchQuery }) => {
  const products = [
    {
      id: 1,
      name: "Organic Face Wash",
      price: 15.99,
      imgSrc:
        "https://tse2.mm.bing.net/th?id=OIP.YN7I7sPqbEEUXm0ZvqIocAHaHa&pid=Api&P=0&h=180",
    },
    {
      id: 2,
      name: "Moisturizing Cream",
      price: 25.99,
      imgSrc:
        "https://tse4.mm.bing.net/th?id=OIP.HfPCmRj64omfirHJ9uhuRAHaHa&pid=Api&P=0&h=180",
    },
    {
      id: 3,
      name: "Natural Serum",
      price: 12.49,
      imgSrc:
        "https://tse2.mm.bing.net/th?id=OIP.8o28yE3MPQvuz6A_tXLVQQHaIl&pid=Api&P=0&h=180",
    },
  ];

  // Filter products based on the search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  return (
    <section className="featured-products">
      <h2>Featured Products</h2>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-item" key={product.id}>
            <img src={product.imgSrc} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

const CartModal = ({ cart }) => (
  <div
    id="cartModal"
    className="cart-modal"
    style={{ display: cart.length > 0 ? "block" : "none" }}
  >
    <h2>Your Cart</h2>
    <div id="cartItems">
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <p>
              {item.name} - ${item.price.toFixed(2)}
            </p>
          </div>
        ))
      )}
    </div>
    <Link to="/cart">
      <button>Go to Cart</button>
    </Link>
  </div>
);

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2024 EthosMarket. All Rights Reserved.</p>
    <div className="footer-links">
      <Link to="/aboutus">About Us</Link>
      <Link to="/privacy">Privacy Policy</Link>
      <Link to="/terms">Terms of Service</Link>
      <Link to="/contactus">Contact Us</Link>
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

export default Index12;
