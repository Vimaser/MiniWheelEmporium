import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import submitRating from "./SubmitRating";
import StarRating from "./StarRating";
import { useCart } from "../CartContext";

const ProductDetail = ({ userId }) => {
  const [product, setProduct] = useState(null);
  const { docId } = useParams();
  const navigate = useNavigate();
  const { handleAddToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      const db = getFirestore();
      const productRef = doc(db, "Products", docId);
      const productSnap = await getDoc(productRef);

      if (productSnap.exists()) {
        setProduct({ docId, ...productSnap.data() });
      } else {
        console.log("No such product!");
      }
    };

    fetchProduct();
  }, [docId]);

  const handleRatingSubmit = (rating) => {
    submitRating(docId, userId, rating)
      .then(() => {
        console.log("Rating submitted successfully");
      })
      .catch((error) => {
        console.error("Error submitting rating: ", error);
      });
  };

  const handleBackButtonClick = () => {
    navigate("/productlisting");
  };

  /*   const handleAddToCart = (e) => {
    e.stopPropagation();
    onAddToCart(product);
  }; */

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <div className="product-images">
        {product.images.map((url, index) => (
          <img key={index} src={url} alt={`${product.name} image`} />
        ))}
      </div>
      <button onClick={handleBackButtonClick}>Back to Product List</button>
      <p>
        <strong>Description:</strong> {product.description}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Brand:</strong> {product.brand}
      </p>
      <p>
        <strong>Age Range:</strong> {product.ageRange}
      </p>
      <p>
        <strong>Dimensions:</strong> {product.dimensions}
      </p>
      <p>
        <strong>Ratings:</strong> {product.ratings}
      </p>
      <StarRating onRatingSubmit={handleRatingSubmit} productId={docId} />
      <button
        className="add-to-cart-button"
        onClick={() => handleAddToCart(product)}
      >
        Add to Cart
      </button>

      <a href="#more-options" className="more-options-link">
        More Buying Choices
      </a>

      <br />
    </div>
  );
};

export default ProductDetail;
