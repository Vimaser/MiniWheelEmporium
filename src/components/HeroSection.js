import React from "react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeroBanner from "../img/HeroBanner.png";
// import SecondBanner from "../img/SecondBanner.png";
import "./css/HeroSection.css";

function HeroSection() {
    const navigate = useNavigate();

    const handleShopNowClick = () => {
        navigate('/productlisting');
    };

  const settings = {
    dots: true,
    // KEEP INFINITE AT FALSE OTHERWISE THERE'S A BUG!
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="hero-section">
      <Slider {...settings}>
        <div className="hero-slide">
          <img src={HeroBanner} alt="Hero Banner" />
          <div className="hero-text">
            {/* <h1>Explore Our Collection of Toys!</h1>
                        <p>Find the perfect toy for you!</p> */}
            <button onClick={handleShopNowClick}>Shop Now!</button>
          </div>
        </div>
{/*         <div className="hero-slide">
          <img src={SecondBanner} alt="Second Banner" />
          <div className="hero-text">
            <h1>New Arrivals!</h1>
            <p>Check out the latest additions to our collection!</p>
            <button>See New Toys</button>
          </div> 
        </div>*/}
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
}

export default HeroSection;
