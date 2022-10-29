import React, { useContext } from "react";
import { ThemeContext } from "./../../context";
import "./Card.css";

const Card = ({ image, heading, text }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="card">
      <img src={image} alt="" />
      <span>{heading}</span>
      <span style={darkMode ? { color: "#fff" } : { color: "var(--gray)" }}>
        {text}
      </span>
      <button className={`${darkMode ? "card__btnDark" : "card__btn"}`}>
        Learn More
      </button>
    </div>
  );
};

export default Card;
