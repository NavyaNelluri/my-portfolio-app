import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css"; // Make sure this file exists and contains necessary styles
import Navbar from "./components/Navbar.js";
import Education from "./components/Education.js";
import SkillsSection from "./components/SkillsSection.js";
import Work from "./components/Projects.js";
import Contacts from "./components/contact.js";
import Home from "./components/Home.js";

import ProjectsSection from "./components/ProjectsSection.js";

import  { DarkThemeProvider, useDarkTheme }  from './components/DarkThemeContext.js';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./Transition.css";

import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";


import { NavLink } from "react-router-dom"; // Add this line


// Education component
const home = () => (
  <section id="about" className="mb-8">
    {/* About content goes here */}
    <Home />
  </section>
);
// Education component
const About = () => (
  <section id="about" className="mb-8">
    {/* About content goes here */}
    <Education />
  </section>
);
// Projects component
const WorkExperience = () => (
  <section id="work" className="mb-8">
    {/* Projects content goes here */}
    <Work />

  </section>
);
const Skills = () => (
  <section id="skills" className="mb-8">
    {/* Contact content goes here */}
    <SkillsSection />

  </section>
);
const Projects = () => (
  <section id="projectsection" className="mb-8">
    {/* Contact content goes here */}
    <ProjectsSection />

  </section>
);
// Contact component
const Contact = () => (
  <section id="contact" className="mb-8">
    {/* Contact content goes here */}
    <Contacts />

  </section>
);

const sections = ["home", "about", "projects", "skills", "workexperience", "contact"];

const AppContent = () => {
  const { isDarkTheme } = useDarkTheme();
  const [currentSection, setCurrentSection] = useState(0);
  const [isProfileInfoVisible, setProfileInfoVisible] = useState(false);
  const navigate = useNavigate();


 
  const toggleDetails = (detailsId) => {
    const detailsElement = document.getElementById(detailsId);
    if (detailsElement) {
      detailsElement.classList.toggle("hidden");
    }
  };

  const nextSection = () => {
    setCurrentSection((prevSection) => (prevSection + 1) % sections.length);
  };

  const prevSection = () => {
    setCurrentSection((prevSection) => (prevSection - 1 + sections.length) % sections.length);
  };

  useEffect(() => {
    const handleRouteChange = () => {
      const currentPath = window.location.pathname.slice(1);
      const currentSectionIndex = sections.indexOf(currentPath);
      setCurrentSection(currentSectionIndex >= 0 ? currentSectionIndex : 0);
    };

    // Add a listener for route changes
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      // Remove the listener when the component is unmounted
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []); // Run this effect only once when the component mounts

  useEffect(() => {
    const nextSectionPath = currentSection === 0 ? "" : `/${sections[currentSection]}`;
    navigate(nextSectionPath);
  }, [currentSection, navigate]);

  const toggleProfileInfo = () => {
    setProfileInfoVisible((prevVisible) => {
      if (prevVisible) {
        nextSection();
      }
      return !prevVisible;
    });
  };

  return (
    <div className={`bg-${isDarkTheme ? 'dark' : 'light'} min-h-screen font-sans`}>
      <header className={`bg-${isDarkTheme ? 'dark' : 'light'} text-center py-5`}>
        <h1 className={`text-3xl ${isDarkTheme ? 'text-dark' : 'text-light'}`}>Navya Chowdary Nelluri</h1>
      </header>

      <Navbar />

      <main className={`${isDarkTheme ? 'text-dark' : 'text-light'} text-3xl p-4`}>
      <TransitionGroup>
      <CSSTransition
            key={currentSection}
            timeout={500}
            classNames="page-transition"
          >
<Routes>
<Route index element={<Home isProfileInfoVisible={isProfileInfoVisible} toggleProfileInfo={toggleProfileInfo} />} />

  <Route path="/about" element={<Education />} />
  <Route path="/projects" element={<ProjectsSection />} />
  <Route path="/skills" element={<Skills />} />
  <Route path="/workexperience" element={<Work />} />
  <Route path="/contact" element={<Contacts />} />
</Routes>


        </CSSTransition>
        </TransitionGroup>
        <div className="slideshow-arrows text-center mt-4">
      <button onClick={prevSection}>&#8249;</button>
      <button onClick={nextSection}>&#8250;</button>
    </div>
      </main>
    </div>
  );
};


const App = () => (
  <DarkThemeProvider>
    <Router>
      <Routes>
        {/* Wrap the entire app with a route for page transitions */}
        <Route path="/*" element={<AppContent />} />
      </Routes>
    </Router>
  </DarkThemeProvider>
);

export default App;