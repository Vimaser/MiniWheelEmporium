import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FaUserCircle } from "react-icons/fa";
import img from "../img/logo.png";
import "./css/Header.css";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return unsubscribe;
  }, []);

  return (
    <header>
      <div className="logo">
        <img src={img} alt="logo" />
      </div>
      <div className="user-account">
        <FaUserCircle size={30} />
        {isLoggedIn ? (
          <>
            <a href="/logout">Logout</a>
            {/* Add user's name or profile link if needed */}
          </>
        ) : (
          <>
            <a href="/login">Login</a>
            <p className="register-prompt">
              Don't have an account? <a href="/register">Register now!</a>
            </p>
          </>
        )}
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
