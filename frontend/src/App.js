import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Aboutus from "./Aboutus";
import AllProducts from "./All_products";
import Beauty from "./Beauty";
import Cart from "./Cart"; // Import Cart page
import Checkout from "./Checkout";
import Clothes from "./Clothes";
import Contactus from "./Contactus";
import Grocery from "./Grocery";
import Homeneeds from "./Homeneeds";
import IndexPage from "./Index12";
import Kids from "./Kids";
import Kitchen from "./Kitchen";
import LastPage from "./Lastpage";
import Login from "./Login";
import ProductDes from "./Product_des";
import ProductDes1 from "./Product_des1";
import Welcome from "./Welcome";
import ProductPage from "./ProductPage"; // Import ProductPage component

class App extends React.Component {
  render() {
    return (
      <Router>
       

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/index" element={<IndexPage />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/cart" element={<Cart />} /> {/* Cart Page */}
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/home-needs" element={<Homeneeds />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/last-page" element={<LastPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product-description" element={<ProductDes />} />
          <Route path="/product-description-1" element={<ProductDes1 />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/product-page" element={<ProductPage />} /> {/* Product Page */}
        </Routes>
      </Router>
    );
  }
}

export default App;
