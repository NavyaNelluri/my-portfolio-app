import React from "react";
import { NavLink, useMatch } from "react-router-dom";
import { useDarkTheme } from "./DarkThemeContext"; // Update the path accordingly

const Navbar = () => {
  const homeMatch = useMatch("/");
  const aboutMatch = useMatch("/about");
  const projectsMatch = useMatch("/projects");
  const contactMatch = useMatch("/contact");
  const { isDarkTheme, toggleDarkTheme } = useDarkTheme();

  return (
    <nav className={`bg-gray-600 p-4 ${isDarkTheme ? 'text-white' : 'text-black'}`}>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={`nav-link ${homeMatch ? 'active-link' : ''}`}>
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
    </nav>
  );
};

export default Navbar;
