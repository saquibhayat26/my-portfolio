import React, { useContext } from "react";
import { ThemeContext } from "./../../context";
import "./Navbar.css";

import Brightness5Icon from "@mui/icons-material/Brightness5";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Link } from "react-router-dom";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleToggle = () => {
    if (darkMode) {
      theme.dispatch({ type: "toggle" });
    } else {
      theme.dispatch({ type: "toggle" });
    }
  };

  const style = {
    textDecoration: "none",
    color: "inherit",
    "window.scroll": "smooth",
  };

  return (
    <div className="nav__wrapper">
      <div className="nav__left">
        <div className="nav__leftName">
          <Link
            to={"/"}
            style={{
              color: "inherit",
              textDecoration: "none",
              fontSize: "1.4rem",
              fontWeight: "bold",
            }}
          >
            Saquib
          </Link>
        </div>
        <span onClick={handleToggle}>
          <Brightness5Icon />
          <Brightness4Icon />
          <span
            className={`${darkMode ? "nav__toggleLeft" : " nav__toggleRight"}`}
          ></span>
        </span>
      </div>
      <div className="nav__right">
        <div className="nav__list">
          <ul>
            <a style={style} href="#home">
              <li>Home</li>
            </a>
            <a style={style} href="#services">
              <li>Services</li>
            </a>
            <a style={style} href="#experience">
              <li>Experience</li>
            </a>

            <a style={style} href="#portfolio">
              <li>Portfolio</li>
            </a>
            <a style={style} href="#testimony">
              <li>Testimony</li>
            </a>
          </ul>
        </div>
        <a href="#contact">
          <button className="nav__btn button">Contact</button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
