import React, { useContext } from "react";
import { ThemeContext } from "./../../context";
import "./Works.css";
import Shopify from "./../../img/Shopify.png";
import Amazon from "./../../img/amazon.png";
import Fiverr from "./../../img/fiverr.png";
import Facebook from "./../../img/Facebook.png";
import Upwork from "./../../img/Upwork.png";

import { motion } from "framer-motion";

const Works = () => {
  // const spinTransition = {
  //   loop: Infinity,
  //   ease: "linear",
  //   duration: 5,
  // };

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="work__wrapper" id="work">
      <div className="work__left">
        <div className="work__name">
          <span
            style={{
              color: `${darkMode ? "#ccbfbf" : "var(--black)"}`,
            }}
          >
            Practicing on Building Clone of All these
          </span>
          <span>famous Website </span>
          <span>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque,
            sapiente minima quas fuga est commodi, velit ea aliquam odio, cumque
            repellendus laboriosam. Perspiciatis reprehenderit enim distinctio
            ratione ducimus illum! Impedit?
          </span>
        </div>
        <a href="mailto:mshayatdevop@gmail.com">
          <button className="work__btn button">Hire me</button>
        </a>
        <div className="work__blur w-blur2"></div>
      </div>
      <div className="work__right">
        <motion.div
          initial={{ rotate: 360 }}
          whileInView={{ rotate: -360 }}
          transition={{ duration: 2, type: "spring" }}
          className="main__circle"
        >
          <div className="inner__circle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="inner__circle">
            <img src={Facebook} alt="" />
          </div>
          <div className="inner__circle">
            <img src={Amazon} alt="" />
          </div>
          <div className="inner__circle">
            <img src={Upwork} alt="" />
          </div>
          <div className="inner__circle">
            <img src={Shopify} alt="" />
          </div>
        </motion.div>
        <div className="back__circle blue__circle"></div>
        <div className="back__circle yellow__circle"></div>
        <div className="work__blur w-blur1"></div>
      </div>
    </div>
  );
};

export default Works;
