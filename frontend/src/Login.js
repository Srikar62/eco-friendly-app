import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './styles.css'; // Assuming your styles are in this file or import from external CSS
import { Link } from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');

  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name && email && phone && gender && dob) {
      alert(`Sign-Up Successful!\n
             Name: ${name}\n
             Email: ${email}\n
             Phone: ${phone}\n
             Gender: ${gender}\n
             DOB: ${dob}`);

      // Navigate to the homepage (or any other route)
      navigate('/'); // This will redirect to the home page
    } else {
      alert("Please fill in all fields!");
    }
  };

  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form id="signupForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)} // Update state on input change
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state on input change
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)} // Update state on input change
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)} // Update state on selection change
            required
          >
            <option value="" disabled selected>Select your gender</option>
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
            value={dob}
            onChange={(e) => setDob(e.target.value)} // Update state on date change
            required
          />
        </div>
        <Link to="/index">Sign Up</Link>
      </form>
    </div>
  );
};

export default Login;
