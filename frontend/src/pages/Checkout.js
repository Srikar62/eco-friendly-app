import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Checkout = () => {
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [cardDetails, setCardDetails] = useState({ cardNumber: "", expiry: "", cvc: "" });

  const navigate = useNavigate(); // Initialize useNavigate

  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
    setCardDetails({ cardNumber: "", expiry: "", cvc: "" }); // Reset card details
  };

  const proceedToPay = () => {
    if (!address) {
      alert("Please enter your shipping address.");
      return;
    }

    if (paymentMethod === "card") {
      if (!cardDetails.cardNumber || !cardDetails.expiry || !cardDetails.cvc) {
        alert("Please enter complete card details.");
        return;
      }
    }

    alert("Payment Successful!");
    navigate("/HomePage"); // Redirect to HomePage after alert
  };

  return (
    <div className="checkout-page">
      <h1>Checkout Page</h1>

      {/* Shipping Address */}
      <div className="form-group">
        <label htmlFor="address">Shipping Address:</label>
        <textarea
          id="address"
          rows="4"
          placeholder="Enter your shipping address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      {/* Payment Method */}
      <div className="form-group">
        <label htmlFor="payment-method">Choose Payment Method:</label>
        <select
          id="payment-method"
          value={paymentMethod}
          onChange={(e) => handlePaymentChange(e.target.value)}
        >
          <option value="">Select Payment Method</option>
          <option value="card">Credit/Debit Card</option>
          <option value="cod">Cash on Delivery</option>
        </select>
      </div>

      {/* Credit/Debit Card Fields */}
      {paymentMethod === "card" && (
        <div className="card-details">
          <label htmlFor="card-number">Card Number:</label>
          <input
            type="text"
            id="card-number"
            placeholder="Enter card number"
            value={cardDetails.cardNumber}
            onChange={(e) =>
              setCardDetails({ ...cardDetails, cardNumber: e.target.value })
            }
          />
          <label htmlFor="expiry">Expiry Date:</label>
          <input
            type="text"
            id="expiry"
            placeholder="MM/YY"
            value={cardDetails.expiry}
            onChange={(e) =>
              setCardDetails({ ...cardDetails, expiry: e.target.value })
            }
          />
          <label htmlFor="cvc">CVC:</label>
          <input
            type="text"
            id="cvc"
            placeholder="Enter CVC"
            value={cardDetails.cvc}
            onChange={(e) =>
              setCardDetails({ ...cardDetails, cvc: e.target.value })
            }
          />
        </div>
      )}

      {/* Proceed to Pay */}
      <button className="pay-btn" onClick={proceedToPay}>
        Proceed to Pay
      </button>
    </div>
  );
};

export default Checkout;
