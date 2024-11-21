import React, { useState } from 'react';
import './App.css'; // Assuming your styles are in this file or import from external CSS

const Product_des = () => {
  // State for product image, quantity, etc.
  const [mainImage, setMainImage] = useState('https://tse2.mm.bing.net/th?id=OIP.YN7I7sPqbEEUXm0ZvqIocAHaHa&pid=Api&P=0&h=180');
  const [quantity, setQuantity] = useState(1);

  // Handle thumbnail click to update main image
  const handleThumbnailClick = (imageSrc) => {
    setMainImage(imageSrc);
  };

  // Handle adding to bag
  const handleAddToBag = () => {
    alert(`Added ${quantity} item(s) to your bag.`);
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>Men's Wear</li>
            <li>Women's Wear</li>
            <li>Kids</li>
            <li>Home Decor</li>
            <li>Kitchen</li>
            <li>Beauty</li>
            <li>Furniture</li>
            <li>Health</li>
            <li>Grocery</li>
          </ul>
          <button id="login-btn">Login/Signup</button>
        </nav>
      </header>

      <main>
        <div className="product-detail">
          <div className="image-gallery">
            <img id="main-image" src={mainImage} alt="Organic Face Wash" />
            <div className="thumbnails">
              <img src="https://via.placeholder.com/50" alt="Thumbnail 1" onClick={() => handleThumbnailClick('https://via.placeholder.com/50')} />
              <img src="https://via.placeholder.com/50" alt="Thumbnail 2" onClick={() => handleThumbnailClick('https://via.placeholder.com/50')} />
              <img src="https://via.placeholder.com/50" alt="Thumbnail 3" onClick={() => handleThumbnailClick('https://via.placeholder.com/50')} />
              <img src="https://via.placeholder.com/50" alt="Thumbnail 4" onClick={() => handleThumbnailClick('https://via.placeholder.com/50')} />
            </div>
          </div>
          <div className="product-info">
            <h1>Organic Face Wash</h1>
            <p className="price">$567</p>
            <p className="rating">⭐⭐⭐⭐☆ (4/5)</p>
            <p className="description">
              A gentle, organic face wash made with natural ingredients to cleanse your skin without stripping its natural oils.
            </p>
            <div className="quantity-section">
              <label htmlFor="quantity">Quantity:</label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                min="1"
                onChange={(e) => setQuantity(e.target.value)} // Update quantity state
              />
            </div>
            <button id="add-to-bag" onClick={handleAddToBag}>Add to Bag</button>
          </div>
        </div>

        <section className="ingredients">
          <h2>Ingredients & Their Benefits</h2>
          <p>Contains aloe vera, tea tree oil, and essential vitamins for a healthy glow.</p>
        </section>

        <section className="faq">
          <h2>FAQs About the Product</h2>
          <p><strong>Q:</strong> Is this suitable for all skin types?</p>
          <p><strong>A:</strong> Yes, it works well for all skin types, including sensitive skin.</p>
        </section>

        <section className="reviews">
          <h2>Ratings and Reviews</h2>
          <p>No reviews yet. Be the first to review!</p>
        </section>

        <section className="similar-products">
          <h2>Similar Products</h2>
          <div className="similar-items">
            <img src="https://via.placeholder.com/100" alt="Similar Product 1" />
            <img src="https://via.placeholder.com/100" alt="Similar Product 2" />
            <img src="https://via.placeholder.com/100" alt="Similar Product 3" />
            <img src="https://via.placeholder.com/100" alt="Similar Product 4" />
          </div>
        </section>
      </main>

      <footer>
        <p>Contact us | About us | Terms and Conditions</p>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
      </footer>
    </div>
  );
};

export default Product_des;
