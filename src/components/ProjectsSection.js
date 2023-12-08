// ProjectsSection.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import './ProjectsSection.css'; // Add your styling for projects section

const projectsData = [
  {
    id: 1,
    title: 'Beyond Backgrounds',
    thumbnail: 'profile1.jpg',
    description: 'Resume filtering',
    link: 'https://github.com/NavyaNelluri/BeyondBackgrounds',
    details: 'Our application aims to revolutionize the way resume filtering is conducted, particularly by ensuring that job skills are assessed independently of a candidates criminal record. This approach sets us apart from traditional software solutions by providing a fair and unbiased hiring process.',
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={process.env.PUBLIC_URL + `/images/${project.thumbnail}`}
              alt={project.title}
              className="project-thumbnail"
              onClick={() => openModal(project)}
            />
            <p className="project-description">{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>

      <Modal
        isOpen={selectedProject !== null}
        onRequestClose={closeModal}
        className="project-modal"
        overlayClassName="project-modal-overlay"
      >
        {selectedProject && (
          <>
            <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
            <img
              src={process.env.PUBLIC_URL + `/images/${selectedProject.thumbnail}`}
              alt={selectedProject.title}
              className="project-thumbnail-modal"
            />
            <p className="project-description-modal">{selectedProject.details}</p>
            <button onClick={closeModal} className="close-modal-btn">
              Close
            </button>
          </>
        )}
      </Modal>
    </div>
  );
};

export default ProjectsSection;
