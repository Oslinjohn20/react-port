import React from "react";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        ab<span>out</span>
      </div>
      <div className="about-info">
        <div className="about-left">
          I love to create simple and clean using javascript, html and css.
        </div>
        <div className="about-right">
          <p>
            I'm Oslin Johnson. I am a <span>Software Developer</span> &{" "}
            <span>Web Developer</span>. I have done a bootcamp in web and
            software development at LifeChoice Coding Academey.
          </p>
          <p>
            I specialize in efficient <span>JavaScript frameworks</span> like ,{" "}
            <span>React and Vue </span>.
          </p>
          <p>
            I should be writing something about how I want to improve myseif in
            this coding space.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
