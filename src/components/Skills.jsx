import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Backend & APIs',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MVC Architecture', 'JWT Authentication']
  },
  {
    title: 'Frontend',
    skills: ['React', 'HTML5', 'CSS3', 'JavaScript']
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'Mongoose ODM']
  },
  {
    title: 'Tools & Security',
    skills: ['Git', 'GitHub', 'Postman', 'JWT']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section__label">// SKILLS & TECH</div>
        <h2 className="section__title">Abilities & Technologies</h2>
        
        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skills__card glass-card">
              <h3 className="skills__card-title">{category.title}</h3>
              <div className="skills__tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
