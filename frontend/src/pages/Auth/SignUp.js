import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    gender: '',
    dob: ''
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, email, phone, gender, dob } = formData;
    
    if (name && email && phone && gender && dob) {
      alert(`Sign-Up Successful!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nGender: ${gender}\nDOB: ${dob}`);
      navigate("/HomePage"); // Redirect to HomePage after successful sign-up
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="signup-container">
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
            <button onClick={() => navigate("/login")}>
              Login
            </button>
            <button onClick={() => navigate("/cart")}>🛒 Cart</button>
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

      {/* Main Sign Up Form */}
      <main>
        <div className="form-container">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="signup-button">Sign Up</button>
          </form>
        </div>
      </main>

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

export default SignUpPage;
 