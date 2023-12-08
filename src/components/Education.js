import React, { useState, useRef } from "react";
import { CSSTransition } from 'react-transition-group';

const Education = ({ isDarkTheme }) => {
  const [showMasterDetails, setShowMasterDetails] = useState(false);
  const [showBachelorDetails, setShowBachelorDetails] = useState(false);
  const [showSchoolDetails, setShowSchoolDetails] = useState(false);

  const masterDetailsRef = useRef(null);
  const bachelorDetailsRef = useRef(null);
  const schoolDetailsRef = useRef(null);

  const toggleDetails = (detailsSetter) => {
    // Toggle the visibility of details
    detailsSetter((prev) => !prev);
  };

  return (
    <section id="education" className={`p-6 ${isDarkTheme ? 'bg-dark text-white' : 'bg-light text-black'}`}>
      <header>
        <h2 className="text-3xl font-semibold mb-4">Education</h2>
      </header>

      {/* Master's education details */}
      <div
        className={`education-entry mb-4 p-4 border rounded cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200 ${isDarkTheme ? 'hover:bg-dark' : 'hover:bg-light'}`}
        onClick={() => toggleDetails(setShowMasterDetails)}
      >
        <h3 className={`text-3xl font-semibold mb-4 ${isDarkTheme ? 'text-white' : 'text-black'}`}>
          Master's, Saint Louis University
        </h3>
        <p>2022 - Present</p>
        <CSSTransition
          nodeRef={masterDetailsRef}
          in={showMasterDetails}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div
            ref={masterDetailsRef}
            className={`text-3xl font-semibold mb-4 ${isDarkTheme ? 'text-white' : 'text-black'}`}
          >
            <p>- Master’s from Saint Louis University with 3.8 GPA (till date).</p>
          </div>
        </CSSTransition>
      </div>

      {/* Bachelor's education details */}
      <div
        className={`education-entry mb-4 p-4 border rounded cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200 ${isDarkTheme ? 'hover:bg-dark' : 'hover:bg-light'}`}
        onClick={() => toggleDetails(setShowBachelorDetails)}
      >
        <h3 className="text-xl font-semibold">Bachelor of Technology, MLR Institute of Technology</h3>
        <p>2015 - 2019</p>
        <CSSTransition
          nodeRef={bachelorDetailsRef}
          in={showBachelorDetails}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div
            ref={bachelorDetailsRef}
            className="details mt-2"
          >
            <p>- Undergraduation (B. Tech) from MLR Institute of Technology, India with 9.7 CGPA.</p>
          </div>
        </CSSTransition>
      </div>

      {/* High School education details */}
      <div
        className={`education-entry mb-4 p-4 border rounded cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200 ${isDarkTheme ? 'hover:bg-dark' : 'hover:bg-light'}`}
        onClick={() => toggleDetails(setShowSchoolDetails)}
      >
        <h3 className="text-xl font-semibold">High School, Sri Chaitanya concept school</h3>
        <p>2013 - 2015</p>
        <CSSTransition
          nodeRef={schoolDetailsRef}
          in={showSchoolDetails}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div
            ref={schoolDetailsRef}
            className="details mt-2"
          >
            <p>- Maths, physics & chemistry from Sri Chaitanya concept school, India with 93%.</p>
          </div>
        </CSSTransition>
      </div>
    </section>
  );
};

export default Education;
