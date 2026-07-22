import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';

function App() {
  const [showBlog, setShowBlog] = useState(false);

  return (
    <>
      <Navbar 
        isBlogPage={showBlog} 
        onOpenBlog={(open) => {
          setShowBlog(open);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }} 
      />
      
      <main>
        {showBlog ? (
          <Blog onBackToHome={() => {
            setShowBlog(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} />
        ) : (
          <>
            <Hero />
            <About onOpenBlog={() => {
              setShowBlog(true);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </>
        )}
      </main>
      
      <Footer />
    </>
  );
}

export default App;
