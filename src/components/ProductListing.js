import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, getDocs } from "firebase/firestore";
import ProductCard from "./ProductCard";
import "./css/ProductListing.css";

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [sortCriteria, setSortCriteria] = useState("");
  const navigate = useNavigate();

  const handleProductClick = (docId) => {
    navigate(`/product/${docId}`);
  };
  
  

  useEffect(() => {
    const fetchProductsAndCategories = async () => {
      const db = getFirestore();
      // Fetch products
      const productsCol = collection(db, "Products");
      const productSnapshot = await getDocs(productsCol);
      const productList = productSnapshot.docs.map((doc) => ({
        docId: doc.id,
        ...doc.data()
      }));
      setProducts(productList);
      // Fetch categories
      const categoriesCol = collection(db, "Categories");
      const categorySnapshot = await getDocs(categoriesCol);
      const categoryList = categorySnapshot.docs.map((doc) => doc.data());
      setCategories(categoryList);
    };

    fetchProductsAndCategories();
  }, []);

  const filterProducts = () => {
    return products.filter((product) => {
      return (
        (selectedCategory ? product.category === selectedCategory : true) &&
        (selectedBrand ? product.brand === selectedBrand : true)
      );
      // Add more filters as needed
    });
  };

  const sortProducts = (filteredProducts) => {
    switch (sortCriteria) {
      case "price-ascending":
        return filteredProducts.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
      case "price-descending":
        return filteredProducts.sort(
          (a, b) => parseFloat(b.price) - parseFloat(a.price)
        );
      case "name-ascending":
        return filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      case "name-descending":
        return filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
      default:
        return filteredProducts;
    }
  };

  return (
    <div className="product-listing">
      <div className="filter-sort-section">
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category.categoryId} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>

        <select onChange={(e) => setSelectedBrand(e.target.value)}>
          {/* Assuming you have a list of brands */}
          <option value="">All Brands</option>
          {/* Map through the brands here */}
        </select>

        <select onChange={(e) => setSortCriteria(e.target.value)}>
          <option value="">Default Sorting</option>
          <option value="price-ascending">Price: Low to High</option>
          <option value="price-descending">Price: High to Low</option>
          <option value="name-ascending">Name: A to Z</option>
          <option value="name-descending">Name: Z to A</option>
        </select>
      </div>
      <div className="products-grid">
        {sortProducts(filterProducts()).map((product) => (
          <ProductCard 
            key={product.docId} 
            product={product} 
            onClick={() => handleProductClick(product.docId)}
          />
        ))}
      </div>
      <button onClick={() => navigate('/product/testId')}>Test Navigate</button>

    </div>
  );
};

export default ProductListing;
