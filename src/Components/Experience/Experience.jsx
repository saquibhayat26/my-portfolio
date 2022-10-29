import React, { useContext } from "react";
import { ThemeContext } from "./../../context";
import "./Experience.css";

import { motion } from "framer-motion";

const Experience = () => {
  // const transition = { duration: 3, type: "string" };

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      id="experience"
      className="experience"
      style={{ backgroundColor: `${darkMode ? "" : "#fff"}` }}
    >
      <div className="achievements__wrapper1">
        <div
          className="achievements__wrapper2 "
          style={{
            background: `${
              darkMode
                ? "linear-gradient(to bottom, #87e6fb 0%, #f6ce8f 100%)"
                : "linear-gradient(to bottom, #87e6fb 0%, #f6ce8f 100%)"
            }`,
          }}
        >
          <div
            className="achievements "
            style={{
              backgroundColor: `${darkMode ? "#322e2e" : "#fff"}`,
            }}
          >
            <span>15+</span>
            <span>completed</span>
            <span>Projects</span>
            <span>made with</span>
          </div>
        </div>
      </div>
      <div className="skills__wrapper">
        <div className="skills__set">
          <div
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 100,
              bottom: 100,
            }}
            className="skills"
          >
            HTML
          </div>
          <motion.div
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 100,
              bottom: 100,
            }}
            className="skills"
          >
            CSS
          </motion.div>
          <motion.div
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 100,
              bottom: 100,
            }}
            className="skills"
          >
            JAVASCRIPT
          </motion.div>
          <motion.div
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 100,
              bottom: 100,
            }}
            className="skills"
          >
            REACT JS
          </motion.div>
        </div>
        <div className="skills__set">
          <motion.div
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 100,
              bottom: 100,
            }}
            className="skills"
          >
            REACT ROUTER
          </motion.div>
          <motion.div
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 100,
              bottom: 100,
            }}
            className="skills"
          >
            REACT MUI
          </motion.div>
          <motion.div
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 100,
              bottom: 100,
            }}
            className="skills"
          >
            REDUX
          </motion.div>
          <motion.div
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 100,
              bottom: 100,
            }}
            className="skills"
          >
            REDUX TOOLKIT
          </motion.div>
        </div>
        <div className="skills__set">
          <motion.div
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 100,
              bottom: 100,
            }}
            className="skills"
          >
            NODE JS
          </motion.div>
          <motion.div
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 100,
              bottom: 100,
            }}
            className="skills"
          >
            EXPRESS JS
          </motion.div>
          <motion.div
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 100,
              bottom: 100,
            }}
            className="skills"
          >
            MONGO DB
          </motion.div>
          <motion.div
            drag
            dragConstraints={{
              top: -50,
              left: -50,
              right: 100,
              bottom: 100,
            }}
            className="skills"
          >
            GITHUB
          </motion.div>
        </div>
      </div>
      <div className="achievements__blur"></div>
    </div>
  );
};

export default Experience;
