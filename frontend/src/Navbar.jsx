import React from 'react';
import './navbar.css'; // Assuming the styles are in App.css

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <a href="/index">Home</a>
                <a href="/all-products">All Products</a>
                <a href="/clothes">CLOTHES</a>
                <a href="/home-needs">HOMENEEDS</a>
                <a href="/kids">KIDS</a>
                <a href="/beauty">BEAUTY</a>
                <a href="/kitchen">KITCHEN</a>
                <a href="/grocery">GROCERY</a>
            </nav>
        </div>
    )
}

export default Navbar;