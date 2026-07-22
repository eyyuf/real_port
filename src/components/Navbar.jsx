import { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import logoImg from '../assets/logo.jpg';
import './Navbar.css';

const navLinks = [
  { id: 'about', label: 'DWMA Archive' },
  { id: 'skills', label: 'Soul Resonance' },
  { id: 'projects', label: 'Death Contracts' },
  { id: 'experience', label: 'Chronicles' },
  { id: 'contact', label: 'Summon' },
];

export default function Navbar({ onOpenBlog, isBlogPage }) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (isBlogPage) return;
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(l => document.getElementById(l.id));
      const scrollPos = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isBlogPage]);

  const handleNavClick = (id) => {
    setMobileOpen(false);
    if (isBlogPage && onOpenBlog) {
      onOpenBlog(false);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a 
          href="#" 
          className="navbar__logo" 
          onClick={(e) => { 
            e.preventDefault(); 
            if (isBlogPage && onOpenBlog) onOpenBlog(false);
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
          }}
        >
          <img src={logoImg} alt="Eyyu Feyesa Favicon Logo" className="navbar__logo-img" />
          <span className="navbar__logo-text">EF</span>
          <span className="navbar__logo-tag">// DWMA</span>
        </a>

        <div className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
          {!isBlogPage && navLinks.map((link) => (
            <button
              key={link.id}
              className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
              <span className="navbar__link-indicator" />
            </button>
          ))}

          <button 
            className={`navbar__link ${isBlogPage ? 'navbar__link--active' : ''}`}
            onClick={() => onOpenBlog && onOpenBlog(!isBlogPage)}
          >
            Blogs
            <span className="navbar__link-indicator" />
          </button>

          <button 
            className="navbar__theme-toggle" 
            onClick={toggleTheme} 
            aria-label="Toggle Soul Eater Day/Night mode"
            title={`Switch to ${theme === 'dark' ? 'Laughing Sun (Day)' : 'Bleeding Moon (Night)'}`}
          >
            {theme === 'dark' ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" fill="#ffb703" stroke="#ffb703" />
                <path d="M12 1v3M12 20v3M1 12h3M20 12h3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="#ffb703" />
                <path d="M9.5 12a2.5 2.5 0 0 0 5 0" stroke="#000" strokeWidth="1.5" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#ff2a4b" stroke="#ff2a4b" />
                <circle cx="12" cy="10" r="1.5" fill="#fff" />
              </svg>
            )}
          </button>

          <a
            href="/CV.pdf"
            download="Eyyu_Feyesa_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__resume-btn"
          >
            Grimoire / CV
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </div>

        <div className="navbar__right-mobile">
          <button 
            className="navbar__theme-toggle navbar__theme-toggle--mobile" 
            onClick={toggleTheme} 
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          
          <button
            className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}
