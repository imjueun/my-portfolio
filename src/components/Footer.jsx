import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-gray-100 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-8 md:px-16 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-xs font-bold tracking-widest text-gray-400 uppercase">
          © 2026 LEE JUEUN. ALL RIGHTS RESERVED.
        </div>
        <div className="flex gap-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          <a href="#home" className="hover:text-black transition-colors">Home</a>
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <a href="#project" className="hover:text-black transition-colors">Projects</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
