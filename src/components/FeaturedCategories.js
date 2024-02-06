import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import "./css/FeaturedCategories.css";
import "../firebaseConfig";

// Component for individual categories
const CategoryTile = ({ title, image, description }) => (
  <div className="category-tile">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// Main Component
const FeaturedCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const db = getFirestore();
            const querySnapshot = await getDocs(collection(db, "Categories"));
            const categoriesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setCategories(categoriesData);
        };

        fetchCategories();
    }, []);

    // Check if categories is defined and is an array
    if (!Array.isArray(categories) || categories.length === 0) {
        // Render a loading indicator, placeholder, or null
        return <div>Loading...</div>;
    }

    return (
        <div className="featured-categories">
            {categories.map((category) => (
                <CategoryTile
                    key={category.id}
                    title={category.title}
                    image={category.image}
                    description={category.description}
                />
            ))}
        </div>
    );
};

export default FeaturedCategories;
