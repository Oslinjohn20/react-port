import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu } from "@mui/icons-material";
import { Close } from "@mui/icons-material";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsmenuOpen] = useState(false);
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <Link to="home" spy={true} smooth={true} duration={500}>
          Oslin.Johnson
        </Link>
      </div>
      <div className="navbar-right-menubar">
        {isMenuOpen ? (
          <div className="navbar-menu-options">
            <Close onClick={() => setIsmenuOpen(!isMenuOpen)} />
            <Link
              onClick={() => setIsmenuOpen(!isMenuOpen)}
              to="home"
              spy={true}
              duration={500}
              smooth={true}
            >
              home
            </Link>
            <Link
              onClick={() => setIsmenuOpen(!isMenuOpen)}
              to="about"
              spy={true}
              duration={500}
              smooth={true}
            >
              about
            </Link>
            <Link
              onClick={() => setIsmenuOpen(!isMenuOpen)}
              to="skills"
              spy={true}
              duration={500}
              smooth={true}
            >
              skills
            </Link>
            <Link
              onClick={() => setIsmenuOpen(!isMenuOpen)}
              to="projects"
              spy={true}
              duration={500}
              smooth={true}
            >
              projects
            </Link>
            <Link
              onClick={() => setIsmenuOpen(!isMenuOpen)}
              to="contact"
              spy={true}
              duration={500}
              smooth={true}
            >
              contact
            </Link>
          </div>
        ) : (
          <Menu onClick={() => setIsmenuOpen(!isMenuOpen)} />
        )}
      </div>
      <div className="navbar-right-options">
        <Link to="home" spy={true} smooth={true} duration={500}>
          home
        </Link>
        <Link to="about" spy={true} smooth={true} duration={500}>
          about
        </Link>
        <Link to="skills" spy={true} smooth={true} duration={500}>
          skills
        </Link>
        <Link to="projects" spy={true} smooth={true} duration={500}>
          projects
        </Link>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
