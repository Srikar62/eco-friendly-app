import React, { useState } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Product_des1 = () => {
  // State to manage the selected image for the product
  const [selectedImage, setSelectedImage] = useState(
    'https://brownliving.in/cdn/shop/products/cinnamon-vanilla-air-freshener-100-soy-wax-214-10932-ar003-2s-candles-fragrances-brown-living-152962_700x.jpg?v=1682961340'
  );
  
  // State for the product quantity
  const [quantity, setQuantity] = useState(1);

  // Function to handle quantity change
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  // Function to add product to cart
  const addToCart = () => {
    const product = {
      id: 1,
      name: "Cinnamon Vanilla 100% Soy Wax Air Freshener",
      price: 567,
      image: selectedImage,
      quantity: quantity,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert('Product added to cart!');
    // Optionally, redirect to cart page after adding the product
    window.location.href = '/cart'; // Redirect to cart
  };

  return (
    <div>
      {/* Header Section */}
      <header className="header">
        <div className="header-top">
          <img className="logo" src="./logo.png" alt="EthosMarket Logo" />
          <span className="search-bar">
            <input type="text" placeholder="Search eco-friendly products..." />
            <button>🔍</button>
          </span>
          <span className="header-buttons">
            <button className="login-btn">Login</button>
            <button>🛒 Cart</button>
            <div className="dropdown-menu">
              <a href="profile.html">Your Profile</a>
              <a href="orders.html">Your Orders</a>
              <a href="address.html">Address</a>
              <a href="contact.html">Contact Us</a>
              <a href="login.html">Login</a>
            </div>
          </span>
        </div>
        <nav className="navbar">
          <a href="index.html">Home</a>
          <a href="all_products.html">All Products</a>
          <a href="clothes.html">CLOTHES</a>
          <a href="homeNeeds.html">HOMENEEDS</a>
          <a href="kids.html">KIDS</a>
          <a href="beauty.html">BEAUTY</a>
          <a href="kitchen.html">KITCHEN</a>
          <a href="grocery.html">GROCERY</a>
        </nav>
      </header>

      {/* Product Detail Section */}
      <main>
        <div className="product-detail">
          <div className="image-gallery">
            <img id="main-image" src={selectedImage} alt="Cinnamon Vanilla 100% Soy Wax Air Freshener" />
            <div className="thumbnails">
              <img
                src="https://brownliving.in/cdn/shop/products/aalay-itr-variety-pack-100-soy-wax-air-fresheners-214-10908-ar006-3s-candles-fragrances-736878_700x.jpg?v=1682959945"
                alt="Thumbnail 1"
                onClick={() => setSelectedImage('https://brownliving.in/cdn/shop/products/aalay-itr-variety-pack-100-soy-wax-air-fresheners-214-10908-ar006-3s-candles-fragrances-736878_700x.jpg?v=1682959945')}
              />
              <img
                src="https://brownliving.in/cdn/shop/products/aalay-itr-variety-pack-100-soy-wax-air-fresheners-214-10908-ar006-3s-candles-fragrances-864928_700x.jpg?v=1682959945"
                alt="Thumbnail 2"
                onClick={() => setSelectedImage('https://brownliving.in/cdn/shop/products/aalay-itr-variety-pack-100-soy-wax-air-fresheners-214-10908-ar006-3s-candles-fragrances-864928_700x.jpg?v=1682959945')}
              />
              <img
                src="https://brownliving.in/cdn/shop/products/british-rose-100-soy-wax-air-freshener-214-10939-ar001-2s-candles-fragrances-brown-living-720442_700x.jpg?v=1682961003"
                alt="Thumbnail 3"
                onClick={() => setSelectedImage('https://brownliving.in/cdn/shop/products/british-rose-100-soy-wax-air-freshener-214-10939-ar001-2s-candles-fragrances-brown-living-720442_700x.jpg?v=1682961003')}
              />
              <img
                src="https://brownliving.in/cdn/shop/products/cinnamon-vanilla-air-freshener-100-soy-wax-214-10932-ar003-2s-candles-fragrances-brown-living-936825_700x.jpg?v=1682961340"
                alt="Thumbnail 4"
                onClick={() => setSelectedImage('https://brownliving.in/cdn/shop/products/cinnamon-vanilla-air-freshener-100-soy-wax-214-10932-ar003-2s-candles-fragrances-brown-living-936825_700x.jpg?v=1682961340')}
              />
            </div>
          </div>
          <div className="product-info">
            <h1>Cinnamon Vanilla 100% Soy Wax Air Freshener</h1>
            <p className="price">$567</p>
            <p className="rating">⭐⭐⭐⭐☆ (4/5)</p>
            <p className="description">
              Let the warming smell of cinnamon and vanilla warm up your spaces with its rich and indulgent smell.
            </p>
            <div className="quantity-section">
              <label htmlFor="quantity">Quantity:</label>
              <input type="number" id="quantity" value={quantity} min="1" onChange={handleQuantityChange} />
            </div>
            <button className="add-to-bag-btn" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>

        {/* Ingredients & Benefits */}
        <section className="ingredients">
          <h2>Ingredients & Their Benefits</h2>
          <p>Each sachet is hand-poured and decorated with cinnamon sticks and Vanilla powder. We add a jute rope to make it easy to hang.</p>
          <p>Production Lead Time (Number of Days): 1</p>
          <p>Key Features: Handmade, Zero Waste</p>
          <p>Colour: White</p>
          <p>Material: Soy Wax</p>
          <p>Product Dimension (LxBxH): 13cm*13cm*13cm</p>
          <p>Product Condition: New</p>
          <p>Country of Origin: India</p>
        </section>

        {/* Certifications Section */}
        <section>
          <h2>Certifications</h2>
          <i className="fa-solid fa-paw"></i>
          <i className="fa-solid fa-earth-americas"></i>
          <i className="fa-solid fa-plant-wilt"></i>
        </section>

        {/* Reviews Section */}
        <section className="reviews">
          <h2>Ratings and Reviews</h2>
          <p>No reviews yet. Be the first to review!</p>
        </section>

        {/* Similar Products */}
        <section className="similar-products">
          <h2>Similar Products</h2>
          <div className="similar-items">
            <img src="https://brownliving.in/cdn/shop/files/scented-soywax-air-freshener-sachet-rectangle-42g-rasa-home-sustainable-candles-fragrances-brown-living-ctc0421-464145_200x.jpg?v=1715599805" alt="Similar Product 1" />
            <img src="https://brownliving.in/cdn/shop/products/100-soy-wax-air-freshener-sachet-oud-amber-214-10925-ar004-2s-candles-fragrances-203962_200x.jpg?v=1682959770" alt="Similar Product 2" />
            <img src="https://brownliving.in/cdn/shop/products/100-soy-wax-air-freshener-sachet-lime-214-10918-ar005-2s-candles-fragrances-721715_200x.jpg?v=1682959770" alt="Similar Product 3" />
            <img src="https://brownliving.in/cdn/shop/files/scented-soywax-air-freshener-sachet-oval-20g-rasa-home-sustainable-candles-fragrances-brown-living-ctc04702-720065_200x.jpg?v=1715164105" alt="Similar Product 4" />
          </div>
        </section>
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
          <a href="https://instagram.com" target="_blank" aria-label="Instagram"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" aria-label="Twitter"><FaTwitter /></a>
          <a href="https://youtube.com" target="_blank" aria-label="YouTube"><FaYoutube /></a>
        </div>
      </footer>
    </div>
  );
};

export default Product_des1;
