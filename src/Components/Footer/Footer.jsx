import React from "react";
import "./Footer.css";

import Wave from "../../img/wave.png";

import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__img">
        <img src={Wave} alt="" />
      </div>
      <div className="footer__content">
        <div className="footer__email">
          <span> Send Feedback</span>
          <a href="mailto:mshayatdevop@gmail.com">
            <span>
              <EmailIcon />
            </span>
          </a>
        </div>
        <div className="footer__icons">
          <span>
            <a href="https://github.com/saquibhayat26" target={"_"}>
              <GitHubIcon />
            </a>
          </span>
          <span>
            <a href="https://www.instagram.com/ms_hayat26/" target="_">
              <InstagramIcon />
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/saquibhayat/" target={"_"}>
              <LinkedInIcon />
            </a>
          </span>
        </div>
        <div className="copyright">
          <span>
            <CopyrightIcon />
          </span>
          <span>Design by Hayat</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
