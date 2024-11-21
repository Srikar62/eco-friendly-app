import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const ProductDetailPage = () => {
  const [mainImage, setMainImage] = useState(
    "https://brownliving.in/cdn/shop/products/cinnamon-vanilla-air-freshener-100-soy-wax-214-10932-ar003-2s-candles-fragrances-brown-living-152962_700x.jpg?v=1682961340"
  );
  const [quantity, setQuantity] = useState(1);

  const navigate = useNavigate(); // Initialize the navigation hook

  // Thumbnail click handler to update the main image
  const handleThumbnailClick = (src) => {
    setMainImage(src);
  };

  // Add to Cart function
  const addToCart = () => {
    const product = {
      id: 1,
      name: "Cinnamon Vanilla 100% Soy Wax Air Freshener",
      price: 567,
      image: mainImage,
      quantity: quantity,
    };

    // Retrieve cart from local storage or create a new one
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");

    // Redirect to Cart page after adding the product
    navigate("/Cart");
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
              onInput={() => {}}
              id="searchInput"
            />
            <button onClick={() => {}}>🔍</button>
          </span>
          <span className="header-buttons">
            <button
              className="login-btn"
              onClick={() => navigate("/Login")} // Navigate to Login page
            >
              Login
            </button>
            <button onClick={() => navigate("/Cart")}>🛒 Cart</button>
            <div className="dropdown-menu">
              <a href="profile.js">Your Profile</a>
              <a href="orders.js">Your Orders</a>
              <a href="address.js">Address</a>
              <a href="contact.js">Contact Us</a>
              <a
                href="login.js"
                onClick={() => navigate("/Login")} // Navigate to Login page
              >
                Login
              </a>
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

      {/* Main content */}
      <main>
        <div className="product-detail">
          <div className="image-gallery">
            <img
              id="main-image"
              src={mainImage}
              alt="Cinnamon Vanilla 100% Soy Wax Air Freshener"
            />
            <div className="thumbnails">
  <img
    src="https://brownliving.in/cdn/shop/products/aalay-itr-variety-pack-100-soy-wax-air-fresheners-214-10908-ar006-3s-candles-fragrances-736878_700x.jpg?v=1682959945"
    alt="Thumbnail 1"
    onClick={() =>
      handleThumbnailClick(
        "https://brownliving.in/cdn/shop/products/aalay-itr-variety-pack-100-soy-wax-air-fresheners-214-10908-ar006-3s-candles-fragrances-736878_700x.jpg?v=1682959945"
      )
    }
  />
  <img
    src="https://brownliving.in/cdn/shop/products/aalay-itr-variety-pack-100-soy-wax-air-fresheners-214-10908-ar006-3s-candles-fragrances-864928_700x.jpg?v=1682959945"
    alt="Thumbnail 2"
    onClick={() =>
      handleThumbnailClick(
        "https://brownliving.in/cdn/shop/products/aalay-itr-variety-pack-100-soy-wax-air-fresheners-214-10908-ar006-3s-candles-fragrances-864928_700x.jpg?v=1682959945"
      )
    }
  />
  <img
    src="https://brownliving.in/cdn/shop/products/british-rose-100-soy-wax-air-freshener-214-10939-ar001-2s-candles-fragrances-brown-living-720442_700x.jpg?v=1682961003"
    alt="Thumbnail 3"
    onClick={() =>
      handleThumbnailClick(
        "https://brownliving.in/cdn/shop/products/british-rose-100-soy-wax-air-freshener-214-10939-ar001-2s-candles-fragrances-brown-living-720442_700x.jpg?v=1682961003"
      )
    }
  />
  <img
    src="https://brownliving.in/cdn/shop/products/cinnamon-vanilla-air-freshener-100-soy-wax-214-10932-ar003-2s-candles-fragrances-brown-living-936825_700x.jpg?v=1682961340"
    alt="Thumbnail 4"
    onClick={() =>
      handleThumbnailClick(
        "https://brownliving.in/cdn/shop/products/cinnamon-vanilla-air-freshener-100-soy-wax-214-10932-ar003-2s-candles-fragrances-brown-living-936825_700x.jpg?v=1682961340"
      )
    }
  />
  <img
    src="https://brownliving.in/cdn/shop/files/scented-soywax-air-freshener-sachet-rectangle-42g-rasa-home-sustainable-candles-fragrances-brown-living-ctc0421-464145_200x.jpg?v=1715599805"
    alt="Thumbnail 5"
    onClick={() =>
      handleThumbnailClick(
        "https://brownliving.in/cdn/shop/files/scented-soywax-air-freshener-sachet-rectangle-42g-rasa-home-sustainable-candles-fragrances-brown-living-ctc0421-464145_200x.jpg?v=1715599805"
      )
    }
  />
  <img
    src="https://brownliving.in/cdn/shop/products/100-soy-wax-air-freshener-sachet-oud-amber-214-10925-ar004-2s-candles-fragrances-203962_200x.jpg?v=1682959770"
    alt="Thumbnail 6"
    onClick={() =>
      handleThumbnailClick(
        "https://brownliving.in/cdn/shop/products/100-soy-wax-air-freshener-sachet-oud-amber-214-10925-ar004-2s-candles-fragrances-203962_200x.jpg?v=1682959770"
      )
    }
  />
</div>

          </div>
          <div className="product-info">
            <h1>Cinnamon Vanilla 100% Soy Wax Air Freshener</h1>
            <p className="price">$567</p>
            <p className="rating">⭐⭐⭐⭐☆ (4/5)</p>
            <p className="description">
              Let the warming smell of cinnamon and vanilla warm up your spaces
              with its rich and indulgent smell. Ditch the chemical room/air
              fresheners for our organic wax sachets perfumed with non-toxic
              essence! Simply hang one of our Cinnamon Vanilla sachets with real
              whole spices to your bathroom, room, or cupboard, and let this
              work its magic.
            </p>
            <div className="quantity-section">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <button className="add-to-bag-btn" onClick={addToCart}>
              Add to Cart
            </button>
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

        {/* Certifications */}
        <section>
          <h2>Certifications</h2>
          <i className="fa-solid fa-paw"></i>
          <i className="fa-solid fa-earth-americas"></i>
          <i className="fa-solid fa-plant-wilt"></i>
        </section>

        {/* Reviews */}
        <section className="reviews">
          <h2>Ratings and Reviews</h2>
          <p>No reviews yet. Be the first to review!</p>
        </section>

        {/* Similar Products */}
        <section className="similar-products">
          <h2>Similar Products</h2>
          <div className="similar-items">
            <img
              src="https://brownliving.in/cdn/shop/files/scented-soywax-air-freshener-sachet-rectangle-42g-rasa-home-sustainable-candles-fragrances-brown-living-ctc0421-464145_200x.jpg?v=1715599805"
              alt="Similar Product 1"
            />
            <img
              src="https://brownliving.in/cdn/shop/products/100-soy-wax-air-freshener-sachet-oud-amber-214-10925-ar004-2s-candles-fragrances-203962_200x.jpg?v=1682959770"
              alt="Similar Product 2"
            />
            <img
              src="https://brownliving.in/cdn/shop/products/100-soy-wax-air-freshener-sachet-lime-214-10918-ar005-2s-candles-fragrances-721715_200x.jpg?v=1682959770"
              alt="Similar Product 3"
            />
            <img
              src="https://brownliving.in/cdn/shop/files/scented-soywax-air-freshener-sachet-oval-20g-rasa-home-sustainable-candles-fragrances-brown-living-ctc04702-720065_200x.jpg?v=1715164105"
              alt="Similar Product 4"
            />
          </div>
        </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailPage;
