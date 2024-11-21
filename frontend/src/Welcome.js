import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Welcome = () => {
  return (
    <div className="welcome-container">
      <h1>Welcome to EthosMarket</h1>
      <p>
        Welcome to EthosMarket – your one-stop shop for sustainable, eco-friendly, and animal-friendly products designed to make a positive impact on the planet. Our carefully curated range of goods promotes a green lifestyle, featuring items that are biodegradable, leave zero carbon footprint, and are crafted with care for both the environment and all living beings.
        <br />
        "EthosMarket: Eco-Friendly Living for a Better Tomorrow."
        <br />
        HAPPY GREEN SHOPPING!!!!
      </p>
      <Link to="/index">
        <button>Enter</button>
      </Link>
    </div>
  );
};

export default Welcome;
