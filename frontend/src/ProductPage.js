import React from 'react';
import './styles.css'; // Add your custom CSS
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductPage = () => {
  const navigate = useNavigate();

  const products = [
    { id: 1, name: 'Eco-Friendly Water Bottle', price: 10 },
    { id: 2, name: 'Biodegradable Phone Case', price: 15 },
    { id: 3, name: 'Sustainable Grocery Bag', price: 8 },
    // Add more products here
  ];

  const addToCart = async (product) => {
    try {
      const response = await axios.post('http://localhost:5000/api/cart', product);
      alert(`${product.name} added to cart!`);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <div>
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <button onClick={() => navigate("/cart")}>Go to Cart</button> {/* Go to Cart button */}
    </div>
  );
};

export default ProductPage;
