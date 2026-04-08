import React from 'react';

const Header = ({ isScrolled }) => {
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
     isScrolled 
  ? 'bg-white/70 backdrop-blur-xl shadow-[0_1px_10px_rgba(0,0,0,0.05)] py-4 text-gray-900' 
          : 'bg-transparent py-6 text-gray-800'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="text-xl md:text-2xl font-black tracking-tighter">
         JUEUN-PORTFOLIO
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-semibold tracking-wide uppercase">
             <a href="#home" className="hover:text-gray-500 transition-colors">Home</a>
          <a href="#about" className="hover:text-gray-500 transition-colors">About</a>
          <a href="#career" className="hover:text-gray-500 transition-colors">Career</a>
          <a href="#project" className="hover:text-gray-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-gray-500 transition-colors">Contact</a>
        </nav>
        {/* Mobile Menu Icon Placeholder */}
        <div className="md:hidden">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
