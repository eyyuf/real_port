import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <h2 className="section__label">// CHRONICLES & EXPERIENCE</h2>
        
        <div className="experience__timeline">
          <div className="timeline__item">
            <div className="timeline__dot"></div>
            <div className="timeline__content">
              <div className="timeline__header">
                <h3 className="timeline__title">Software Developer</h3>
                <span className="timeline__date">2024 – Present</span>
              </div>
              <h4 className="timeline__subtitle">Academic & Personal Projects</h4>
              <p className="timeline__location">Addis Ababa, Ethiopia</p>
              
              <ul className="timeline__list">
                <li>Built web APIs, user authentication, and MongoDB backend modules.</li>
                <li>Engineered gamified platforms and RESTful web services.</li>
              </ul>
            </div>
          </div>
          
          <div className="timeline__item">
            <div className="timeline__dot"></div>
            <div className="timeline__content">
              <div className="timeline__header">
                <h3 className="timeline__title">B.Sc. in Software Engineering</h3>
                <span className="timeline__date">2023 – 2028</span>
              </div>
              <h4 className="timeline__subtitle">Adama Science and Technology University (ASTU)</h4>
              <p className="timeline__location">Adama, Ethiopia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
