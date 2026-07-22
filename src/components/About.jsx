import React from 'react';
import './About.css';

const About = ({ onOpenBlog }) => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section__label">// ABOUT ME</div>
        
        <div className="about__layout">
          {/* Left Side: Short precise text */}
          <div className="about__text-content glass-card">
            <h3 className="about__subtitle">Software Engineering & Backend</h3>
            <p className="about__description">
              B.Sc. Software Engineering student at ASTU. Specializing in Node.js, Express.js REST APIs, and MongoDB backend systems.
            </p>
            
            <div className="about__education">
              <span className="about__education-degree">B.Sc. Software Engineering</span>
              <span className="about__education-school">ASTU (Adama Science and Technology University)</span>
              <span className="about__education-year">2023 – 2028</span>
            </div>
          </div>

          {/* Right Side: Big Action Card with Resume, Upwork, and Blogs links */}
          <div className="about__actions-side">
            <div className="about__action-card glass-card">
              <h4 className="about__action-title">CV & Articles</h4>
              <p className="about__action-sub">Download CV, hire on Upwork, or read my technical blog posts.</p>
              
              <div className="about__action-buttons">
                <a 
                  href="/CV.pdf" 
                  download="Eyyu_Feyesa_CV.pdf"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn--primary about__btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  <span>Download Resume</span>
                </a>

                <a 
                  href="https://www.upwork.com/freelancers/~0130f4e880426f913c?mp_source=share" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn--secondary about__btn about__btn--upwork"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.396-2.025 1.447-2.704 2.837-2.704 1.258 0 2.215.938 2.215 2.502 0 1.503-.984 2.547-2.214 2.547zm0-6.958c-2.71 0-4.66 1.763-5.321 4.542a12.87 12.87 0 0 1-2.457-4.142H8.384v5.337c0 1.776-.87 2.87-2.417 2.87-1.545 0-2.415-1.094-2.415-2.87V6.6h-2.4v5.337c0 3.003 1.935 5.176 4.815 5.176 2.88 0 4.817-2.173 4.817-5.176v-1.892c.621 1.256 1.56 2.378 2.766 3.195l-1.072 5.06h2.46l.732-3.454c.944.471 1.986.732 3.136.732 2.793 0 4.635-1.996 4.635-4.887 0-2.834-1.893-4.887-4.887-4.887z"/>
                  </svg>
                  <span>Hire on Upwork</span>
                </a>

                <button 
                  onClick={onOpenBlog}
                  className="btn btn--secondary about__btn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                  <span>My Blogs</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
