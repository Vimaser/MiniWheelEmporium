import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import FeaturedCategories from './FeaturedCategories';
import PopularProducts from './PopularProducts';
import Footer from './Footer';
import './css/Home.css';

function Home() {
    return (
        <div className="home-page">
            <Header />
            <HeroSection />
            <FeaturedCategories />
            <PopularProducts />
            <Footer />
        </div>
    );
}

export default Home;
