import React, { useState } from "react";

const Checkout = () => {
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  });
  const [upiDetails, setUpiDetails] = useState({
    upiApp: "",
    upiPin: "",
  });

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleProceedToPay = () => {
    if (!address) {
      alert("Please enter your shipping address.");
      return;
    }

    if (paymentMethod === "card") {
      const { cardNumber, cardExpiry, cardCvc } = cardDetails;
      if (!cardNumber || !cardExpiry || !cardCvc) {
        alert("Please enter complete card details.");
        return;
      }
    }

    if (paymentMethod === "upi") {
      const { upiApp, upiPin } = upiDetails;
      if (!upiApp || !upiPin) {
        alert("Please choose a UPI app and enter your PIN.");
        return;
      }
    }

    // Proceed to the next page
    alert("Payment successful!");
    window.location.href = "/index"; // Adjust this route as needed
  };

  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="header-top">
          <img className="logo" src="./logo.png" alt="EthosMarket Logo" />
          <span className="search-bar">
            <input type="text" placeholder="Search eco-friendly products..." />
            <button>🔍</button>
          </span>
          <span className="header-buttons">
            <button className="login-btn" onClick={() => (window.location.href = "/login")}>
              Login
            </button>
            <button onClick={() => (window.location.href = "/cart")}>🛒 Cart</button>
          </span>
        </div>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/all-products">All Products</a>
          <a href="/clothes">Clothes</a>
          <a href="/home-needs">Home Needs</a>
          <a href="/kids">Kids</a>
          <a href="/beauty">Beauty</a>
          <a href="/kitchen">Kitchen</a>
          <a href="/grocery">Grocery</a>
        </nav>
      </header>

      {/* Checkout Form */}
      <div className="checkout-container">
        <h1>Checkout Page</h1>

        {/* Shipping Address */}
        <div className="form-group">
          <label htmlFor="address">Shipping Address:</label>
          <textarea
            id="address"
            rows="4"
            cols="50"
            placeholder="Enter your shipping address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>

        {/* Payment Method Selection */}
        <div className="form-group">
          <label htmlFor="payment-method">Choose Payment Method:</label>
          <select
            id="payment-method"
            value={paymentMethod}
            onChange={(e) => handlePaymentMethodChange(e.target.value)}
          >
            <option value="">Select Payment Method</option>
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI Apps</option>
            <option value="cod">Cash on Delivery (COD)</option>
          </select>
        </div>

        {/* Payment Details */}
        {paymentMethod === "card" && (
          <div className="payment-option">
            <h3>Credit/Debit Card Details:</h3>
            <input
              type="text"
              placeholder="Card Number"
              value={cardDetails.cardNumber}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cardNumber: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Expiry Date (MM/YY)"
              value={cardDetails.cardExpiry}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cardExpiry: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="CVC"
              value={cardDetails.cardCvc}
              onChange={(e) =>
                setCardDetails({ ...cardDetails, cardCvc: e.target.value })
              }
            />
          </div>
        )}

        {paymentMethod === "upi" && (
          <div className="payment-option">
            <h3>Choose UPI App:</h3>
            <select
              value={upiDetails.upiApp}
              onChange={(e) =>
                setUpiDetails({ ...upiDetails, upiApp: e.target.value })
              }
            >
              <option value="">Select UPI App</option>
              <option value="gpay">Google Pay</option>
              <option value="paytm">Paytm</option>
              <option value="phonepe">PhonePe</option>
            </select>
            {upiDetails.upiApp && (
              <input
                type="password"
                placeholder="Enter UPI PIN"
                value={upiDetails.upiPin}
                onChange={(e) =>
                  setUpiDetails({ ...upiDetails, upiPin: e.target.value })
                }
              />
            )}
          </div>
        )}

        {paymentMethod === "cod" && (
          <div className="payment-option">
            <h3>Cash on Delivery</h3>
            <p>No online payment required. Pay when the order is delivered.</p>
          </div>
        )}

        {/* Proceed Button */}
        <button onClick={handleProceedToPay}>Proceed to Pay</button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 EthosMarket. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
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
    </div>
  );
};

export default Checkout;
