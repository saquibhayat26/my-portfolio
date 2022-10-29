import React from "react";
import "./Portfolio.css";

import { flipkart } from "../../portfolio-data/data";
import { tesla } from "../../portfolio-data/data";
import { spotify } from "../../portfolio-data/data";
import { disney } from "../../portfolio-data/data";
import { feed } from "../../portfolio-data/data";
import { weather } from "../../portfolio-data/data";
import { login } from "../../portfolio-data/data";

import Fkart from "../../img/FkartSS.png";
import Spotify from "../../img/spotify.png";
import Weather from "../../img/weather.png";
import Login from "../../img/login.png";
import Disney from "../../img/disney.png";
import FeedApp from "../../img/feedApp.png";
import Tesla from "../../img/tesla.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Autoplay } from "swiper";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {
  const navigate = useNavigate();

  const handleNavigate = (portfolioData) => {
    console.log(portfolioData);
    navigate("/project-details", { state: portfolioData });
  };

  return (
    <div className="portfolio" id="portfolio">
      <span>Recent Projects</span>
      <span> Portfolio</span>
      <Swiper
        breakpoints={{
          480: {
            width: 480,
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
        // slidesPerView={3}
        spaceBetween={30}
        // slidesPerGroup={3}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="wrapper" onClick={() => handleNavigate(flipkart)}>
            <img src={Fkart} alt="" />
            <span>FLIPKART CLONE</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapper" onClick={() => handleNavigate(spotify)}>
            <img src={Spotify} alt="" />
            <span>SPOTIFY UI CLONE</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapper" onClick={() => handleNavigate(weather)}>
            <img src={Weather} alt="" />
            <span>WEATHER APP</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapper" onClick={() => handleNavigate(login)}>
            <img src={Login} alt="" />
            <span>LOGIN UI</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapper" onClick={() => handleNavigate(disney)}>
            <img src={Disney} alt="" />
            <span>DISNEY HOME UI CLONE</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapper" onClick={() => handleNavigate(tesla)}>
            <img src={Tesla} alt="" />
            <span>TESLA UI CLONE</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapper" onClick={() => handleNavigate(feed)}>
            <img src={FeedApp} alt="" />
            <span>FEED APP</span>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="wrapper">
            <img src={Fkart} alt="" />
            <span>FLIPKART CLONE</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="wrapper">
            <img src={Fkart} alt="" />
            <span>FLIPKART CLONE</span>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Portfolio;
