import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Header from './components/Header';
import Project from './pages/Project';
import Footer from './components/Footer';
import TopButton from './components/TopButton';

export default function App() {
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHeaderScrolled(scrollY > 50);
      setShowTopButton(scrollY > 500); // Home 섹션을 어느 정도 벗어났을 때
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-[#fafafa]">
      <Header isScrolled={headerScrolled} />
      <TopButton isVisible={showTopButton} />
      <div className="snap-start w-full">
        <Home />
      </div>
      <div className="snap-start w-full">
        <About />
      </div>
      <div className="snap-start w-full">
        <Career />
      </div>
      <div className="snap-start w-full">
        <Project />
      </div>
      <div className="snap-start w-full">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
