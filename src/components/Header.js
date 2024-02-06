import React from "react";
import { FaUserCircle } from "react-icons/fa";
import img from "../img/logo.png";
import "./css/Header.css";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={img} alt="logo" />
      </div>
      <div className="user-account">
        <FaUserCircle size={30} />
        <a href="/login">Login</a>
        {/* Replace the above with user account icon or name when logged in */}
      </div>
      <div className="cart-icon">
        <a href="/cart">Cart</a>
      </div>
      <div className="navigation">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/categories">Categories</a>
          </li>
          <li>
            <a href="/about">About Us</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search for toys..." />
        <button type="submit">Search</button>
      </div>
    </header>
  );
}

export default Header;
