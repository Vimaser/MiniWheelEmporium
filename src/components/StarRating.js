import React, { useState } from 'react';
import './css/StarRating.css';

const StarRating = ({ onRatingSubmit }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <span 
              className="star"
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(rating)}
              style={{ color: ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9" }}
            >
              ★
            </span>
          </label>
        );
      })}
      <button onClick={() => onRatingSubmit(rating)}>Submit Rating</button>
    </div>
  );
};

export default StarRating;
