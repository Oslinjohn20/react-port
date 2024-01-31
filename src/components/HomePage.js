import React from "react";
// import { LinkedInIcon } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import "./HomePage.css";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <div className="home-page-header">
        <Navbar />
      </div>
      <div className="home-page">
        <div>
          <span>Hey,</span>
          <p>
            this is <span>Oslin</span>,
          </p>
        </div>
        <span>a web developer.</span>
      </div>

      <div className="home-page-footer">
        <a href="github" target="_blank" rel="noopener noreferrer">
          <GitHub />
        </a>
        {/* <a href="" target="_blank" rel="noopener norefferer">
          <LinkedInIcon />
        </a> */}
        <a href="twitter">
          <Twitter />
        </a>
      </div>
    </div>
  );
};

export default HomePage;
