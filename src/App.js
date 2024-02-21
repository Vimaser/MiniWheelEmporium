import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import {
  Home,
  ProductListing,
  ProductDetail,
  Login,
  Logout,
  Register,
  Header,
  ShoppingCart,
} from "./components";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productlisting" element={<ProductListing />} />
            <Route path="/product/:docId" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/ShoppingCart" element={<ShoppingCart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
