const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/cartDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Error connecting to MongoDB: ", err));

// Cart Schema
const cartSchema = new mongoose.Schema({
  productId: String,
  name: String,
  price: Number,
  quantity: { type: Number, default: 1 },
});

const Cart = mongoose.model('Cart', cartSchema);

// API Endpoints

// Add item to cart
app.post('/api/cart', async (req, res) => {
  const { productId, name, price } = req.body;

  try {
    // Check if the item already exists in the cart
    const existingCartItem = await Cart.findOne({ productId });
    if (existingCartItem) {
      existingCartItem.quantity += 1; // Increment quantity
      await existingCartItem.save();
      return res.status(200).json(existingCartItem);
    }

    // If item doesn't exist, create a new cart item
    const newCartItem = new Cart({ productId, name, price });
    await newCartItem.save();
    res.status(201).json(newCartItem);
  } catch (err) {
    console.error("Error adding item to cart:", err);
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
});

// Get cart items
app.get('/api/cart', async (req, res) => {
  try {
    const cartItems = await Cart.find();
    res.status(200).json(cartItems);
  } catch (err) {
    console.error("Error fetching cart items:", err);
    res.status(500).json({ error: 'Failed to fetch cart items' });
  }
});

// Delete an item from the cart
app.delete('/api/cart/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await Cart.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ error: 'Item not found' });
    }
    res.status(200).json({ message: 'Item removed from cart' });
  } catch (err) {
    console.error("Error removing item from cart:", err);
    res.status(500).json({ error: 'Failed to remove item from cart' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
