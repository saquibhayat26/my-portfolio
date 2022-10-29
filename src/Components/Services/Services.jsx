import React, { useContext } from "react";
import { ThemeContext } from "./../../context";
import "./Services.css";
import HeartEmoji from "./../../img/heartemoji.png";
import Glasses from "./../../img/glasses.png";
import Humble from "./../../img/humble.png";
import Card from "../Card/Card";

import { motion } from "framer-motion";

const Services = () => {
  const transition = { duration: 0.5, type: "string" };

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services__wrapper" id="services">
      <div className="services__left">
        <span style={darkMode ? { color: "#fff" } : { color: "var(--black)" }}>
          My Awesome
        </span>
        <span>services</span>
        <span style={darkMode ? { color: "#fff" } : { color: "var(--gray)" }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
          dolores alias nobis
          <br /> tempore facilis iusto nihil?
          <br />
          Explicabo at iure labore praesentium soluta quaerat, inventore optio,
          quibusdam debitis eaque doloremque exercitationem?
        </span>
        <button className="services__btn button">Download CV</button>
        <div className="blur"></div>
      </div>
      <div className="services__right">
        <motion.div
          initial={{ left: "14rem" }}
          whileInView={{ left: "10rem" }}
          transition={transition}
          className="services__card1"
        >
          <Card
            image={HeartEmoji}
            heading={"Design"}
            text={"Figma, Sketch, PhotoShop, Adobe, Adobe xd"}
          />
        </motion.div>
        <motion.div
          initial={{ top: "13rem", left: "-16rem" }}
          whileInView={{ top: "13rem", left: "-8rem" }}
          transition={transition}
          className="services__card2"
        >
          <Card
            image={Glasses}
            heading={"Developer"}
            text={"Html, Css, JavaScript, React, Node JS, Express"}
          />
        </motion.div>
        <motion.div
          initial={{ top: "18rem", left: "20rem" }}
          whileInView={{ top: "18rem", left: "8rem" }}
          transition={transition}
          className="services__card3"
        >
          <Card
            image={Humble}
            heading={"UI / UX"}
            text={"m dolor sit, amet consectetur adipisicing elit."}
          />
        </motion.div>
        <div className="services__blur blur-1"></div>
        <div className="services__blur blur-2"></div>
      </div>
    </div>
  );
};

export default Services;
