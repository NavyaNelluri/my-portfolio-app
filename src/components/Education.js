import React from "react";

const Education = ({ toggleDetails, isDarkTheme }) => (
  <section id="education" className={`p-6 ${isDarkTheme ? 'bg-dark text-white' : 'bg-light text-black'}`}>
    <header>
      <h2 className="text-3xl font-semibold mb-4">Education</h2>
    </header>
    <div className={`education-entry mb-4 p-4 border rounded cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200 ${isDarkTheme ? 'hover:bg-dark' : 'hover:bg-light'}`} onClick={() => toggleDetails('master-details')}>
      <h3 className={`text-3xl font-semibold mb-4 ${isDarkTheme ? 'text-white' : 'text-black'}`}>Master's, Saint Louis University</h3>
      <p>2022 - Present</p>
      <div id="master-details" className={`text-3xl font-semibold mb-4 ${isDarkTheme ? 'text-white' : 'text-black'}`}>
        <p>- Master’s from Saint Louis University with 3.8 GPA (till date).</p>
      </div>
    </div>
    <div className={`education-entry mb-4 p-4 border rounded cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200 ${isDarkTheme ? 'hover:bg-dark' : 'hover:bg-light'}`} onClick={() => toggleDetails('Bachelor-details')}>
      <h3 className="text-xl font-semibold">Bachelor of Technology, MLR Institute of Technology</h3>
      <p>2015 - 2019</p>
      <div id="Bachelor-details" className="details mt-2 hidden">
        <p>- Undergraduation (B. Tech) from MLR Institute of Technology, India with 9.7 CGPA.</p>
      </div>
    </div>
    <div className={`education-entry mb-4 p-4 border rounded cursor-pointer transition duration-300 ease-in-out hover:bg-gray-200 ${isDarkTheme ? 'hover:bg-dark' : 'hover:bg-light'}`} onClick={() => toggleDetails('school-details')}>
      <h3 className="text-xl font-semibold">High School, Sri Chaitanya concept school</h3>
      <p>2013 - 2015</p>
      <div id="school-details" className="details mt-2 hidden">
        <p>- Maths, physics & chemistry from Sri Chaitanya concept school, India with 93%.</p>
      </div>
    </div>
  </section>
);

export default Education;
