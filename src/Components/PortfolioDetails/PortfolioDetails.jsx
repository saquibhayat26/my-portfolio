import React, { useEffect } from "react";

import "./PortfolioDetails.css";

import { useLocation } from "react-router-dom";

const PortfolioDetails = () => {
  const location = useLocation();

  return (
    <div className="pDetails">
      <p>{location.state.title}</p>
      {location.state.images.map((image, index) => (
        <div className="pDetailsImg" key={index}>
          <img src={image} alt="" />
        </div>
      ))}
      <div className="pDetailsList">
        <p>Technology Used</p>
        <ul>
          {location.state.technology.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ul>
      </div>
      <div className="pDetailsLink">
        <p>
          LINK :
          <a href={location.state.url} target="_">
            {location.state.url}
          </a>
        </p>
        <p>
          GITHUB :
          <a href={location.state.github} target="_">
            {location.state.github}
          </a>
        </p>
      </div>
    </div>
  );
};

export default PortfolioDetails;
