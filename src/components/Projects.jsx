import React from 'react';
import './Projects.css';

import birrSmartImg from '../assets/projects/birr-smart.jpg';
import appointmentImg from '../assets/projects/appointment-system.jpg';
import codeDuelsImg from '../assets/projects/code-duels.jpg';
import cineswipeImg from '../assets/projects/cineswipe.jpg';

const projects = [
  {
    title: 'Birr Smart',
    subtitle: 'Financial Management App',
    image: birrSmartImg,
    tech: ['Node.js', 'Express.js', 'MongoDB', 'React'],
    githubLink: 'https://github.com/eyyuf/birr-smart'
  },
  {
    title: 'University Appointment System',
    subtitle: 'Scheduling & Booking Platform',
    image: appointmentImg,
    tech: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    githubLink: 'https://github.com/eyyuf/Appointment_managment_system'
  },
  {
    title: 'Code Duels',
    subtitle: 'Competitive Coding Platform',
    image: codeDuelsImg,
    tech: ['Node.js', 'Express.js', 'WebSockets', 'React'],
    githubLink: 'https://github.com/eyyuf/code_duels'
  },
  {
    title: 'CineSwipe',
    subtitle: 'Movie Picking & Recommendation',
    image: cineswipeImg,
    tech: ['React', 'Node.js', 'REST APIs', 'CSS3'],
    githubLink: 'https://github.com/eyyuf/CineSwipe'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <div className="projects__header">
          <div className="section__label">// FEATURED PROJECTS</div>
          <h2 className="section__title">GitHub Repositories & Web Apps</h2>
        </div>
        
        <div className="projects__grid">
          {projects.map((project, index) => (
            <div className="projects__card glass-card" key={index}>
              {/* Top part: Image container with title, subtitle, and link overlay */}
              <div className="projects__image-container">
                <img 
                  src={project.image} 
                  alt={`${project.title} Preview`} 
                  className="projects__image" 
                />
                <div className="projects__overlay" />
                
                <div className="projects__image-content">
                  <span className="projects__card-subtitle">{project.subtitle}</span>
                  <h3 className="projects__card-title">{project.title}</h3>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="projects__link" aria-label={`GitHub Repo for ${project.title}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    <span>View Repository</span>
                  </a>
                </div>
              </div>

              {/* Bottom part outside the image: Tech Stack badges at bottom left */}
              <div className="projects__card-bottom">
                <div className="projects__tech-stack">
                  {project.tech.map((tech, i) => (
                    <span className="projects__tech-badge" key={i}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects__footer">
          <a href="https://github.com/eyyuf" target="_blank" rel="noopener noreferrer" className="btn btn--secondary">
            <span>View All Repositories on GitHub</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
