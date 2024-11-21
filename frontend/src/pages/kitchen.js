import React, { useState } from 'react';
import { Link } from "react-router-dom"; 

// Product Item Component
const ProductItem = ({ product, onAddToCart }) => (
    <div className="product-item" data-category={product.category} data-price={product.price}>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.price}</p>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
);

// Filters Component
const Filters = ({ filterPrice, onPriceChange }) => (
    <aside className="filters">
        <h3>Filter By</h3>
        <div>
            <label htmlFor="price">Price:</label>
            <select id="price" value={filterPrice} onChange={onPriceChange}>
                <option value="all">All</option>
                <option value="low-high">Low to High</option>
                <option value="high-low">High to Low</option>
            </select>
        </div>
        <button onClick={() => alert('Apply Filters')}>Apply Filters</button>
    </aside>
);

// Header Component
const Header = ({ searchQuery, onSearchChange, onViewCart }) => (
    <header className="header">
        <div className="header-top">
            <img className="logo" src="./logo.png" alt="EthosMarket Logo" />
            <span className="search-bar">
                <input
                    type="text"
                    placeholder="Search eco-friendly products..."
                    onChange={onSearchChange}
                    value={searchQuery}
                />
                <button onClick={() => onSearchChange({ target: { value: searchQuery } })}>🔍</button>
            </span>
            <span className="header-buttons">
                <button className="login-btn" onClick={() => window.location.href = 'login.html'}>Login</button>
                <button onClick={onViewCart}>🛒 Cart</button>
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
);

// Footer Component
const Footer = () => (
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
);

// Main Kitchen Component
const Kitchen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterPrice, setFilterPrice] = useState('all');
    const [cart, setCart] = useState([]);

    const products = [
        {
            id: 1,
            category: 'kitchen',
            price: 950,
            image: 'https://i.etsystatic.com/11252521/r/il/b65813/1521823252/il_fullxfull.1521823252_i3dd.jpg',
            name: 'Beeswax Food Wraps',
        },
        {
            id: 2,
            category: 'kitchen',
            price: 900,
            image: 'https://tse2.mm.bing.net/th?id=OIP.HynpIAm1p4CvBiA8-3OBKQHaGd&pid=Api&P=0&h=180',
            name: 'Bamboo Plates Set',
        },
        {
            id: 3,
            category: 'Kitchen',
            price: 550,
            image: 'https://brownliving.in/cdn/shop/products/recycled-kitchen-towel-2-ply-75-pulls-per-roll-pack-of-4-rolls-179-05974-8906004867057-1-cleaning-supplies-brown-living-214688_200x.jpg?v=1682966797',
            name: 'Recycled Kitchen Towel',
        },
        {
            id: 4,
            category: 'Kitchen',
            price: 300,
            image: 'https://brownliving.in/cdn/shop/products/natural-coconut-coir-dishwashing-round-scrub-pad-271-2907-598-gsrc001-kitchen-tools-brown-living-516770_700x.jpg?v=1718880228',
            name: 'Natural Coconut Coir Dishwashing Round Scrub Pad',
        },
    ];

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const handlePriceChange = (e) => {
        setFilterPrice(e.target.value);
    };

    const filteredProducts = products.filter((product) => {
        const productName = product.name.toLowerCase();
        return productName.includes(searchQuery);
    });

    const sortedProducts = filteredProducts.sort((a, b) => {
        if (filterPrice === 'low-high') {
            return a.price - b.price;
        }
        if (filterPrice === 'high-low') {
            return b.price - a.price;
        }
        return 0;
    });

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.name} added to cart!`);
    };

    const handleViewCart = () => {
        alert(cart.map(item => `${item.name} - $${item.price}`).join("\n") || "Your cart is empty");
    };

    return (
        <div>
            <Header searchQuery={searchQuery} onSearchChange={handleSearchChange} onViewCart={handleViewCart} />
            <main>
                <h2 className="h2">KITCHEN</h2>
                <div className="container">
                    {/* Filters */}
                    <Filters filterPrice={filterPrice} onPriceChange={handlePriceChange} />

                    {/* Product Grid */}
                    <section className="product-grid" id="productGrid">
                        {sortedProducts.map((product) => (
                            <ProductItem key={product.id} product={product} onAddToCart={handleAddToCart} />
                        ))}
                    </section>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Kitchen;
