import React from "react";
import './css/Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <a href="/about-us">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
      </div>

      <div className="social-media">
        {/* <a href="http://facebook.com">Facebook</a>
                <a href="http://twitter.com">Twitter</a>
                <a href="http://instagram.com">Instagram</a>
                <a href="http://linkedin.com">LinkedIn</a> */}
      </div>

      <div className="newsletter-signup">
        <form>
          <label htmlFor="newsletter-email">Sign up for our newsletter:</label>
          <input
            type="email"
            id="newsletter-email"
            name="newsletter-email"
            placeholder="Your email address"
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="contact-details">
        <p>Customer Service: 123-123-1234</p>
        <p>Email: support@example.com</p>
      </div>
    </footer>
  );
};

export default Footer;
