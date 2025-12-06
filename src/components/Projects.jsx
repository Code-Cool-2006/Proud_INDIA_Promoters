import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Modern Residential Villa',
    category: 'Residential',
    image: '/images/residential.png',
    location: 'Beverly Hills, CA'
  },
  {
    id: 2,
    title: 'Skyline Corporate Center',
    category: 'Commercial',
    image: '/images/commercial.png',
    location: 'Downtown, NY'
  },
  {
    id: 3,
    title: 'Luxury Apartment Renovation',
    category: 'Interior',
    image: '/images/interior.png',
    location: 'Miami, FL'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">
        <span className="section-subtitle reveal">Our Portfolio</span>
        <h2 className="section-title reveal delay-100">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className={`project-card reveal delay-${(index + 2) * 100}`} key={project.id}>
              <div className="project-image-wrapper">
                <img src={project.image} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <a href="#" className="btn btn-outline project-btn">View Details</a>
                </div>
              </div>
              <div className="project-info">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-location">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
