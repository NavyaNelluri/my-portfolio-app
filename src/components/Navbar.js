// Navbar.js
import React from "react";
import { NavLink, useMatch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useDarkTheme } from "./DarkThemeContext";
import "./Navbar.css"; // Import the CSS file for navbar transitions

const Navbar = () => {
  const homeMatch = useMatch("/home");
  const aboutMatch = useMatch("/about");
  const projectsMatch = useMatch("/projects");
  const skillsMatch = useMatch("/skills");
  const workExperienceMatch = useMatch("/workexperience");
  const contactMatch = useMatch("/contact");
  const { isDarkTheme, toggleDarkTheme } = useDarkTheme();

  return (
    <nav>
      {/* Use TransitionGroup to handle navbar transitions */}
      <TransitionGroup>
        <CSSTransition
          key="navbar" // You can use a constant key for the navbar
          timeout={500}
          classNames="navbar-transition"
        >
          {/* Your navbar content goes here */}
          <ul className={`nav-links navbar-content ${isDarkTheme ? 'text-white' : 'text-black'}`}>
            <li>
              <NavLink to="/home" className={`nav-link ${homeMatch ? 'active-link' : ''}`}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={`nav-link ${aboutMatch ? 'active-link' : ''}`}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={`nav-link ${projectsMatch ? 'active-link' : ''}`}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" className={`nav-link ${skillsMatch ? 'active-link' : ''}`}>
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/workexperience" className={`nav-link ${workExperienceMatch ? 'active-link' : ''}`}>
                Work Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={`nav-link ${contactMatch ? 'active-link' : ''}`}>
                Contact
              </NavLink>
            </li>
            <li>
              <button className="text-white" onClick={toggleDarkTheme}>
                {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
              </button>
            </li>
          </ul>
        </CSSTransition>
      </TransitionGroup>
    </nav>
  );
};

export default Navbar;
