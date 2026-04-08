import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Header from './components/Header';
import Project from './pages/Project';
import Footer from './components/Footer';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = (e) => {
    if (e.target.scrollTop > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <div 
      className="w-full h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth bg-[#fafafa]"
      onScroll={handleScroll}
    >
      <Header isScrolled={isScrolled} />
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
