import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation} from "react-router-dom";
import "./App.css"; // Make sure this file exists and contains necessary styles
import Navbar from "./components/Navbar.js";
import Education from "./components/Education.js";
import Work from "./components/Projects.js";
import Contacts from "./components/contact.js";
import  { DarkThemeProvider, useDarkTheme }  from './components/DarkThemeContext.js';

import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";


import { NavLink } from "react-router-dom"; // Add this line


// Home component
const Home = ({ isProfileInfoVisible, toggleProfileInfo }) => (
  <section id="home" className="mb-8">
    {/* Home content goes here */}
    <div className="text-center">
      <img
        src="images/profile.jpeg"
        alt="Profile Picture"
        className={`cursor-pointer transform hover:scale-110 transition-transform duration-300 ease-in-out ${
          isProfileInfoVisible ? 'opacity-80' : ''
        }`}
        style={{
          width: '300px',
          height: '350px',
          margin: '60px',
          position: 'absolute',
          top: '100px',
          transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
        }}
        onClick={toggleProfileInfo}
      />

      <div
        className="mt-4 profile-info"
        style={{
          opacity: isProfileInfoVisible ? 1 : 0,
          transform: isProfileInfoVisible ? 'translateY(0)' : 'translateY(-2rem)',
          transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
          left: '380px',
          top: '160px',
          position: 'absolute',
        }}
      >
        <p className="text-lg">
          👋 Hello! I'm Navya Chowdary Nelluri, a passionate and driven master's student at Saint Louis University.
        </p>
        <p className="text-lg">
          I am an advocate for continuous learning and innovation. I believe in the power of collaboration and am excited about the prospect of contributing to projects that make a meaningful impact. As you explore my portfolio, you'll discover a blend of theoretical knowledge and practical applications, showcasing my dedication to bridging the gap between academia and industry.
        </p>
      </div>
    </div>
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
const Projects = () => (
  <section id="projects" className="mb-8">
    {/* Projects content goes here */}
    <Work />

  </section>
);

// Contact component
const Contact = () => (
  <section id="contact" className="mb-8">
    {/* Contact content goes here */}
    <Contacts />

  </section>
);
const AppContent = () => {
  const { isDarkTheme } = useDarkTheme();
  const [isProfileInfoVisible, setProfileInfoVisible] = useState(false);

  const toggleProfileInfo = () => {
    setProfileInfoVisible(!isProfileInfoVisible);
  };

  const toggleDetails = (detailsId) => {
    const detailsElement = document.getElementById(detailsId);
    if (detailsElement) {
      detailsElement.classList.toggle("hidden");
    }
  };
  return (
    <div className={`bg-${isDarkTheme ? 'dark' : 'light'} min-h-screen font-sans`}>
    <header className={`bg-${isDarkTheme ? 'dark' : 'light'} text-center py-5`}>
      <h1 className={`text-3xl ${isDarkTheme ? 'text-dark' : 'text-light'}`}>Navya Chowdary Nelluri</h1>
    </header>

    <Navbar />

    <main className={`${isDarkTheme ? 'text-dark' : 'text-light'} text-3xl p-4`}>
     <Routes>
            <Route
              path="/"
              element={<Home isProfileInfoVisible={isProfileInfoVisible} toggleProfileInfo={toggleProfileInfo} />}
            />
            <Route path="/about" element= {<Education toggleDetails={toggleDetails} />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />

            {/* Pass toggleDetails as a prop to the Education component */}
            <Route path="/Education" element={<Education toggleDetails={toggleDetails} />} />
          </Routes>
        </main>
    </div>
  );
};

const App = () => (
  <DarkThemeProvider>
    <Router>
      <AppContent />
    </Router>
  </DarkThemeProvider>
);

export default App;