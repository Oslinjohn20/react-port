import React from "react";
import { LocationOn } from "@mui/icons-material";
import "./EducationPage.css";

const EducationPage = () => {
  return (
    <div className="education-container">
      <div className="education-header">
        <p>experience</p>
        <p>
          <span>&</span>education
        </p>
      </div>
      <div className="education-list">
        <div className="education">
          <p>Software Developer</p>
          <p>codinn.dev</p>
          <p>
            <span>Sept'19 - Present</span>
            <a href="/">
              <LocationOn />
              Cape Town
            </a>
          </p>
        </div>
        <div className="education">
          <p>Life Choices Coding Academy</p>
          <p>Coding Academy</p>
          <p>
            <span>Feb'20 - Aug'20</span>
            <a href="/">
              <LocationOn />
              Bangalore, India
            </a>
          </p>
        </div>
        <div className="education">
          <p>Motor Mechanics </p>
          <p>NorthLink College/ Imperial technical Training Center </p>
          <p>
            <span>March '12 - Apr'17</span>
            <a href="/">
              <LocationOn />
              Bellville, Cape Town
            </a>
          </p>
        </div>
        <div className="education">
          <p>Higher Secondary Education</p>
          <p>Elsies River High</p>
          <p>
            <span>December '10</span>
            <a href="/">
              <LocationOn />
              Elsies River, Cape Town
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationPage;
