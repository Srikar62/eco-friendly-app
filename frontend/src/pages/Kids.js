import React, { useState } from 'react';
import { Link } from "react-router-dom"; 


const Kids = () => {
    // State for search input and price filter
    const [searchQuery, setSearchQuery] = useState('');
    const [priceFilter, setPriceFilter] = useState('all');

    // Array of products
    const products = [
        { id: 1, name: 'Handmade Papers', price: 750, image: 'https://tse3.mm.bing.net/th?id=OIP.mR-pAABKbx56x44p9rptVwHaHa&pid=Api&P=0&h=180' },
        { id: 2, name: 'Recycled Notebooks', price: 700, image: 'https://brownliving.in/cdn/shop/products/recycled-notebooks-pack-of-6-70-gsm-paper-216-08584-rsk80ur-notebooks-notepads-brown-living-705176_700x.jpg?v=1682966800' },
        { id: 3, name: 'Cute Cat Bamboo Hairbrush for Kids', price: 150, image: 'https://brownliving.in/cdn/shop/files/sustainable-cute-cat-bamboo-hairbrush-for-kids-by-organic-b-at-brownliving-460789_700x.jpg?v=1731609691' }
    ];

    // Filter products based on search query and price filter
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesPrice = priceFilter === 'all' || (priceFilter === 'low-high' && product.price <= 700) || (priceFilter === 'high-low' && product.price > 700);
        return matchesSearch && matchesPrice;
    });

    // Handle search query input
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Handle price filter change
    const handlePriceChange = (e) => {
        setPriceFilter(e.target.value);
    };

    return (
        <div>
            {/* Header */}
            <header className="header">
                <div className="header-top">
                    <img className="logo" src="./logo.png" alt="EthosMarket Logo" />
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search eco-friendly products..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <button>🔍</button>
                    </div>
                    <div className="header-buttons">
                        <button onClick={() => alert('Login')}>Login</button>
                        <button onClick={() => alert('Cart')}>🛒 Cart</button>
                    </div>
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

            {/* Main Content */}
            <main>
                <h2 className="h2">KIDS</h2>
                <div className="container">
                    {/* Filters */}
                    <aside className="filters">
                        <h3>Filter By</h3>
                        <div>
                            <label htmlFor="price">Price:</label>
                            <select id="price" value={priceFilter} onChange={handlePriceChange}>
                                <option value="all">All</option>
                                <option value="low-high">Low to High</option>
                                <option value="high-low">High to Low</option>
                            </select>
                        </div>
                        <button onClick={() => alert('Applying filters')}>Apply Filters</button>
                    </aside>

                    {/* Product Grid */}
                    <section className="product-grid">
                        {filteredProducts.map(product => (
                            <div className="product-item" key={product.id}>
                                <img src={product.image} alt={product.name} />
                                <h3>{product.name}</h3>
                                <p>${product.price}</p>
                                <button onClick={() => alert(`Adding ${product.name} to cart`)}>Add to Cart</button>
                            </div>
                        ))}
                    </section>
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
}

export default Kids;
