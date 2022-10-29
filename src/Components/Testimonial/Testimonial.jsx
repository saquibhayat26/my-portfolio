import React, { useContext } from "react";
import { ThemeContext } from "./../../context";
import "./Testimonial.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import Profile1 from "../../img/profile1.jpg";
import Profile2 from "../../img/profile2.jpg";
import Profile3 from "../../img/profile3.jpg";
import Profile4 from "../../img/profile4.jpg";
import Profile5 from "../../img/profile5.jpg";
import Profile6 from "../../img/profile6.jpg";

const clients = [
  {
    img: Profile1,
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda autem quas ea vero eaque quod nobis repellendus sed hic iusto et pariatur, eos molestias, reiciendis soluta esse quo cumque corrupti",
  },
  {
    img: Profile2,
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda autem quas ea vero eaque quod nobis repellendus sed hic iusto et pariatur, eos molestias, reiciendis soluta esse quo cumque corrupti",
  },
  {
    img: Profile3,
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda autem quas ea vero eaque quod nobis repellendus sed hic iusto et pariatur, eos molestias, reiciendis soluta esse quo cumque corrupti",
  },
  {
    img: Profile4,
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda autem quas ea vero eaque quod nobis repellendus sed hic iusto et pariatur, eos molestias, reiciendis soluta esse quo cumque corrupti",
  },
  {
    img: Profile5,
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda autem quas ea vero eaque quod nobis repellendus sed hic iusto et pariatur, eos molestias, reiciendis soluta esse quo cumque corrupti",
  },
  {
    img: Profile6,
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda autem quas ea vero eaque quod nobis repellendus sed hic iusto et pariatur, eos molestias, reiciendis soluta esse quo cumque corrupti",
  },
];

const Testimonial = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="testimonial" id="testimony">
      <div className="testimonial__top">
        <p>
          Always get
          <span
            style={{
              color: `${darkMode ? "#fff" : " var(--gray)"}`,
              fontSize: "2rem",
              fontWeight: "600",
            }}
          >
            &nbsp; Exceptional Work &nbsp;
          </span>
          from me...
        </p>
        <span style={darkMode ? { color: "#fff" } : { color: "var(--black)" }}>
          Reviews
        </span>
        <div className="testimonial__blur t-blur1"></div>
        <div className="testimonial__blur t-blur2"></div>
      </div>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {clients.map((slideContent, index) => (
          <SwiperSlide key={index}>
            <div className="review">
              <img src={slideContent.img} alt="" />
              <span>{slideContent.review}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
