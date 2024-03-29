import React from "react";
import "./css/ProductCard.css";
import { useCart } from "../CartContext";

const ProductCard = ({ product, onClick }) => {
  const { handleAddToCart } = useCart();

  const renderStarRating = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? "star-filled" : "star-empty"}>
          ★
        </span>
      );
    }
    return stars;
  };

  /*   const handleAddToCart = (e) => {
    e.stopPropagation();
    console.log("Adding to cart:", product);
    onAddToCart(product);
  }; */

  return (
    <div className="product-card" onClick={onClick}>
      <img
        src={product.images[0]}
        alt={product.name}
        className="product-image"
      />
      <h3>{product.name}</h3>
      <div className="product-price">${product.price}</div>
      {product.prime && <div className="prime-badge">Prime</div>}
      <div className="product-brand">Brand: {product.brand}</div>
      <div className="product-age-range">Age Range: {product.ageRange}</div>
      <div className="product-dimensions">
        Product Dimensions: {product.dimensions}
      </div>
      <div className="product-ratings">
        {renderStarRating(product.ratings)}
        <span className="ratings-count">({product.reviewCount} reviews)</span>
      </div>
      <ul className="product-features">
        {product.features &&
          product.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
      </ul>
      <button
        className="add-to-cart-button"
        onClick={() => handleAddToCart(product)}
      >
        Add to Cart
      </button>

      <a href="#more-options" className="more-options-link">
        More Buying Choices
      </a>
    </div>
  );
};

export default ProductCard;
