import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Committees from './components/Committees';
import Registration from './components/Registration';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Letters from './components/Letters';

const LOGO_URL = 'https://i.imgur.com/WeDyRQ7.png';

function App() {
  // More pronounced parallax state for logo
  const [logoY, setLogoY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setLogoY(y * 0.1); // More visible parallax
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="global-overlay" />
      <div
        className="logo-lightbeam"
        style={{
          top: `calc(50% + ${logoY}px)`,
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.99,
        }}
      />
      {/* Parallax Logo */}
      <img
        src={LOGO_URL}
        alt="Background Logo"
        className="parallax-logo"
        style={{
          position: 'fixed',
          top: `calc(50% + ${logoY}px)`,
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '60vw',
          maxWidth: '700px',
          minWidth: '320px',
          opacity: 0.50,
          zIndex: 0,
          pointerEvents: 'none',
          transition: 'filter 0.4s, opacity 0.4s',
        }}
      />
      <div
        className="min-h-screen bg-transparent"
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Header />
        <main>
          <Hero />
          <About />
          <Committees />
          <Letters />
          <Registration />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;