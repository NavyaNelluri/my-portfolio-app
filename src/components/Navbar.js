// Navbar.js
import React from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useDarkTheme } from "./DarkThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const { isDarkTheme, toggleDarkTheme } = useDarkTheme();

  return (
    <nav>
      <TransitionGroup>
        <CSSTransition
          key="navbar"
          timeout={500}
          classNames="navbar-transition"
        >
          <ul className={`nav-links navbar-content ${isDarkTheme ? 'text-white' : 'text-black'}`}>
            <li>
              <NavLink to="/" className="nav-link" activeClassName="active-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-link" activeClassName="active-link">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="nav-link" activeClassName="active-link">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" className="nav-link" activeClassName="active-link">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/workexperience" className="nav-link" activeClassName="active-link">
                Work Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link" activeClassName="active-link">
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
