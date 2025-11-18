import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check system theme preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);

    // Listen for theme changes
    const handler = (e) => setIsDark(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <section className="hero">
      <div className="section-content">
        <div className="hero-content fade-in-up">
          <div className="logo-container">
            <img 
              src={isDark ? "/aatma-labs-light.svg" : "/aatma-labs-dark.svg"} 
              alt="Aatma Labs" 
              className="logo-image" 
            />
            <h1 className="logo">Studio Momo</h1>
          </div>
          <p className="description">
            Reimagines how dance, yoga, and fitness studios run their business — with simplicity and soul.
          </p>
          <a href="#signup" className="btn btn-primary">
            Join the Waitlist
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
