# MiniWheelEmporium

# Website Layout and Design
Home Page -

Navigation Bar: Include a search bar, category dropdowns, user account options, and cart icon.
Main Banner: Rotating carousel of banners for promotions or featured categories.
Featured Categories: Highlight key categories like "Toy Cars", "Action Figures", etc.
Deals of the Day: Section for daily deals or discounts.
Recommended Products: Personalized recommendations based on user browsing history.

Product Listing Page -

Advanced Filters: Allow users to filter by age, brand, price range, customer ratings, etc.
Sort Options: Sort by relevance, price, new arrivals, and customer reviews.
Product Cards: Display product image, name, price, ratings, and prime availability.

Product Detail Page -

Multiple Images and Zoom-In Feature: Show different angles and details of the product.
Product Description: Comprehensive details, including dimensions, age appropriateness, safety information.
Customer Reviews and Ratings: Section for user reviews with sorting and filtering capabilities.
Related Products: Show similar or complementary products.

Cart and Checkout - 

Cart Summary: Review selected items with options to modify quantity or remove items.
Checkout Process: Simplified, multi-step checkout with guest checkout option.
Payment Integration: Secure payment gateway with multiple payment options.

User Account Area -

Order History: Display past orders with status and tracking.
Wish List: Allow users to save favorite items for later.
Account Settings: Manage personal information, addresses, and payment methods.


# Key Features

Responsive and Intuitive Design: Ensure the website is fully responsive and easy to navigate.

Search Functionality with Autocomplete: Powerful search bar with suggestions and autocomplete.

High Performance and Scalability: Optimize for speed and handle high traffic volumes.

Secure User Authentication and Authorization: Implement robust user login systems.

Analytics and Personalization: Use data to offer personalized product recommendations.

Robust Backend Infrastructure: Consider cloud services for hosting, database management, and scalability.

SEO and Marketing Tools: Implement SEO best practices and integrate marketing tools for campaigns and promotions.

Customer Support Features: Include live chat, FAQs, and support ticket systems.

Mobile App: Consider developing a mobile app for a more comprehensive user experience.


# Development Approach

Agile Methodology: Adopt an iterative approach, starting with a minimum viable product (MVP) and gradually adding features based on user feedback.

User-Centric Design: Regularly gather user feedback through surveys, usability tests, and analytics.

Continuous Integration/Continuous Deployment (CI/CD): Implement CI/CD for efficient development and deployment cycles.


# Development Checklist

- Project Initialization:

Ensure your project environment is set up with React, Firebase, Netlify, and Stripe.
Initialize a Git repository for version control.

- Design and Planning:

Finalize wireframes and designs for your key pages (Home, Product Listings, Product Details, Cart, Checkout).
Plan the database schema for products, users, orders, etc.

- Backend Setup:

Configure Firebase for authentication, database, and hosting.
Set up security rules and database structure in Firebase.

- Frontend Development:

Start building your React components based on the designs.
Implement routing with react-router-dom.
Connect your frontend with Firebase for data retrieval and user authentication.

- Payment Integration:

Integrate Stripe for handling payments.

- Testing:

Write unit and integration tests for your components and backend functionality.
Conduct manual testing to ensure everything works as expected.

- Deployment:

Deploy your initial version on Netlify.
Set up continuous deployment for ease of updates.

- Post-Deployment:

Monitor the website’s performance.
Collect user feedback for future improvements.

# Order of Wireframe Development

**DONE**

1. Header Component 

- Logo: Place it on the top left for brand recognition.
- Navigation Menu: Horizontally aligned. Include links like "Home," "Shop," "Categories," "About Us," "Contact."
- Search Bar: Either in the center or towards the right.
- Cart Icon: Top right corner, possibly with a small indicator of the number of items in the cart.
- User Account Icon/Login: Next to the cart icon, for easy access to user profiles or login.



2. Hero Section

- Large Banner/Carousel: Occupies a significant portion of the upper fold. Should be visually striking and engaging.
- Promotional Text/CTAs (Call to Action): Text overlay on the banner that prompts users to explore products or current promotions.
- Navigation Arrows (for Carousel): On each side, if using a carousel to showcase multiple images.



3. Featured Categories

- Category Tiles: Represent different toy categories with engaging images.
- Titles/Descriptions: Brief title or description on each tile.
- Layout: Grid or horizontally scrollable layout works well.



4. Popular Products

- Product Cards: Display each product with an image, name, price, and quick "Add to Cart" button.
- Consistent Grid Layout: To keep it organized and easy to browse.
- Section Title: Something like "Best Sellers" or "Popular Now."



5. Footer

- Informational Links: Include "About Us," "Contact," "Privacy Policy," "Terms of Service."
- Social Media Icons: Links to your business's social media profiles.
- Newsletter Sign-up: Optional, if you plan to have email marketing.
- Contact Details: Quick access to customer service contact information.



6. Home Page

- Start with Home.js.
- Implement the Hero Section with a large banner or carousel showcasing featured products or promotions.
- Add sections for Featured Categories and Popular Products.
- Integrate the Header and Footer components.



7. Product Listing Page

- Develop a Products.js page.
- Implement functionality to list products. You might start with dummy data before integrating with Firebase.
- Include options for filtering and sorting products.



8. Product Detail Page

- Create a ProductDetail.js component.
- This page should show detailed information about a single product, including images, descriptions, price, and an "Add to Cart" button.

**DONE**

9. Shopping Cart

- Develop a Cart.js component.
- Implement functionality to view items in the cart, update quantities, remove items, and proceed to checkout.

// Working on the Shopping cart. Passing the prop etc.
// Done, ran into some issues parsing, inifinteloop, all that fun stuff
// It's fixed, but still testing. Went with a cartcontext to save state. 
// Still need to refactor some code and remove redudant code.
// Won't move to done till Checkout page implimenation is done and further testing.
 
10. Checkout Page

- Create a Checkout.js component.
- Design the layout to include forms for billing, shipping, and payment information.
- Integrate Stripe for payment processing.

11. User Authentication  **CURRENTLY WORKING ON DEV NOTE: THIS NEEDS TO BE FINISHED FIRST BECAUSE ALL OTHER COMPONENTS WILL BE USING AUTH**

- Implement user authentication using Firebase. This includes Login.js and Register.js components.
- Ensure users can sign up, log in, and log out.

12. User Profile

- Develop a user profile section where users can view their order history and manage their account settings.

13. Connect with Firebase

 ** Devnote: I've been doing this in between coding. I still need to set up the rules for firestore db. Below is code I haven't utilized yet for testing **

```JSON
// I know it's based on common expression language see I read the docs!

match /Users/{userId} {
  allow read, write: if request.auth != null && request.auth.uid == userId;
}

```

- Connect your components with Firebase to fetch real data (products, user info, orders).
- Implement CRUD (Create, Read, Update, Delete) operations for products (if you plan to have an admin panel).

13. Responsive Design

- Ensure that all your components and pages are responsive and work well on various devices and screen sizes.

14. Testing

- Regularly test your application for bugs and usability issues.
- Test both frontend functionality and backend integration.

15. Deployment

- Once MVP is working, deploy site on Netlify.
- Set up continuous deployment for easy updates.


# Dev Notes

HexCode for color scheme is going to be...

Racing Blue
#2C84C7 

Petty Blue
#4251AE

Racing Yellow
#F1D74D

Racing Red
#D42F41

... It's the Hotwheels color scheme-- sue me, actually no please don't >_>;

# Database Structure

Detailed Structure:

1. Products Collection:

Each document represents a single product.
Fields: id, name, description, price, category, images (array of image URLs), ratings, brand, ageRange, dimensions, etc.

2. Users Collection:

Each document corresponds to a user.
Fields: userId, name, email, address, orderHistory (array of order IDs or subcollection), wishlist (array of product IDs), etc.

3. Orders Collection:

Each document is an order placed by a user.
Fields: orderId, userId, products (array of product IDs with quantities), totalPrice, orderDate, shippingAddress, status (e.g., shipped, delivered), etc.

4. Categories Collection:

Each document represents a product category.
Fields: categoryId, name, description, image.

5. Reviews Collection:

Each document is a review for a product.
Fields: reviewId, productId, userId, rating, comment, date.

***DONE***