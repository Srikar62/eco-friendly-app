import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items from the backend
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/cart');
        if (!response.ok) {
          throw new Error('Failed to fetch cart items');
        }
        const data = await response.json();
        setCartItems(data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);
  const handleRemoveItem = async (itemId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/cart/${itemId}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        setCartItems((prevItems) =>
          prevItems.filter((item) => item._id !== itemId)
        );
        alert('Item removed from the cart');
      } else {
        const errorData = await response.json();
        console.error('Error response:', errorData);  // Log the response here
        alert(errorData.message || 'Failed to remove item');
      }
    } catch (error) {
      console.error('Error removing item:', error);  // Log the actual error
      alert('Error removing item from the cart');
    }
  };
  
  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item._id}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '50px' }}
              />
              <p>
                {item.name} - ${item.price} x {item.quantity}
              </p>
              <button onClick={() => handleRemoveItem(item._id)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <button className="button_all"><Link to="/checkout">Checkout</Link></button>
    </div>
  );
};

export default Cart;
