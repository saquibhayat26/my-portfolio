import React, { useContext } from "react";
import { ThemeContext } from "./../../context";

import { motion } from "framer-motion";

import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import MyImg from "../../img/MyImage.png";
import Crown from "../../img/crown.png";
import ThumbsUp from "../../img/thumbup.png";
import Glassesemoji from "../../img/glassesimoji.png";
import FloatingDiv from "../Floater/FloatingDiv";

const Intro = () => {
  const transition = { duration: 0.5, type: "string" };

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro__wrapper" id="home">
      <div className="intro__left">
        <div className="intro__name">
          <span
            style={darkMode ? { color: "#fff" } : { color: "var(--black)" }}
          >
            Hy! I Am
          </span>
          <span>Saquib Hayat</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the quality work.
          </span>
        </div>
        <a href="mailto:mshayatdevop@gmail.com">
          <button className="intro__btn button">Hire me</button>
        </a>

        <div className="intro__icons">
          <a href="https://github.com/saquibhayat26" target={"_"}>
            <img src={Github} alt="" />
          </a>
          <a href="https://www.instagram.com/ms_hayat26/" target={"_"}>
            {" "}
            <img src={Instagram} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/saquibhayat/" target={"_"}>
            <img src={LinkedIn} alt="" />
          </a>
        </div>
      </div>
      <div className="intro__right">
        <img src={Vector1} alt="blue  " />
        <img src={Vector2} alt="yellow" />
        <img src={MyImg} alt="myImage" />
        <motion.div
          initial={{ top: "1rem", left: "23rem" }}
          whileInView={{ top: "1rem", left: "18rem" }}
          transition={transition}
          className="floater1"
        >
          <FloatingDiv image={Crown} text1={"Web"} text2={"Developer"} />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "-10rem" }}
          whileInView={{ top: "19rem", left: "-4rem" }}
          transition={transition}
          className="floater2"
        >
          <FloatingDiv image={ThumbsUp} text1={"Frontend"} text2={"Backend"} />
        </motion.div>
        <motion.div
          initial={{ top: "1rem", left: "-10rem" }}
          whileInView={{ top: "1rem", left: "-6rem" }}
          transition={transition}
          className="floater3"
        >
          <FloatingDiv image={Glassesemoji} />
        </motion.div>
        <div className="intro__blur blur1"></div>
        <div className="intro__blur blur2"></div>
      </div>
    </div>
  );
};

export default Intro;
