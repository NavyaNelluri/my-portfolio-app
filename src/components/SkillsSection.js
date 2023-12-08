import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { DiGit, DiVisualstudio } from "react-icons/di";

const SkillsSection = () => {
  const skillsData = [
    { skill: "HTML", icon: <FaHtml5 />, proficiency: 90 },
    { skill: "CSS", icon: <FaCss3 />, proficiency: 85 },
    { skill: "JavaScript", icon: <FaJs />, proficiency: 80 },
    { skill: "React", icon: <FaReact />, proficiency: 75 },
    { skill: "Node.js", icon: <FaNodeJs />, proficiency: 70 },
    { skill: "Database", icon: <FaDatabase />, proficiency: 65 },
    { skill: "Git", icon: <DiGit />, proficiency: 85 },
    { skill: "Visual Studio Code", icon: <DiVisualstudio />, proficiency: 80 },
  ];

  return (
    <section id="skills" className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillsData.map(({ skill, icon, proficiency }) => (
          <div key={skill} className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="mr-2">{icon}</div>
                <p className="font-semibold">{skill}</p>
              </div>
              <p className="text-gray-600">{`${proficiency}%`}</p>
            </div>
            <div className="relative h-4 bg-gray-300 rounded-full">
              <div
                className="absolute top-0 left-0 h-full bg-blue-500 rounded-full"
                style={{ width: `${proficiency}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
