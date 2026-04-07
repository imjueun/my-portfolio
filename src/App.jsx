// src/App.jsx
import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-black selection:text-white">
      {/* --- 1. HEADER --- */}
      <header className="fixed top-0 w-full px-8 py-6 flex justify-between items-center z-50 bg-white/80 backdrop-blur-sm">
        <h1 className="text-xl font-bold tracking-tighter">IM JUEUN</h1>
        <nav className="space-x-8 text-sm font-medium">
          <a href="#work" className="hover:line-through">
            Work
          </a>
          <a href="#about" className="hover:line-through">
            About
          </a>
          <a href="#contact" className="hover:line-through">
            Contact
          </a>
        </nav>
      </header>

      <main className="pt-32 px-8">
        {/* --- 2. HERO SECTION (표지) --- */}
        <section className="h-[70vh] flex flex-col justify-center border-b border-gray-100">
          <h2 className="text-6xl md:text-8xl font-light leading-tight tracking-tighter">
            Digital Product <br />
            <span className="italic font-serif text-gray-400">
              Designer & Developer
            </span>
          </h2>
          <p className="mt-8 text-lg text-gray-500 max-w-md">
            사용자 경험을 중심으로 간결하고 의미 있는 디지털 솔루션을 만듭니다.
            현재 서울을 기반으로 활동 중입니다.
          </p>
        </section>

        {/* --- 3. WORK SECTION (내용) --- */}
        <section id="work" className="py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* 프로젝트 카드 예시 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden mb-6">
                <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-gray-400">
                  Project Image 01
                </div>
              </div>
              <h3 className="text-2xl font-medium">Brand Identity Design</h3>
              <p className="text-gray-400 mt-2">Graphic / 2024</p>
            </div>

            {/* 프로젝트 카드 예시 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-gray-100 overflow-hidden mb-6">
                <div className="w-full h-full bg-gray-200 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center text-gray-400">
                  Project Image 02
                </div>
              </div>
              <h3 className="text-2xl font-medium">Mobile App Concept</h3>
              <p className="text-gray-400 mt-2">UIUX / 2024</p>
            </div>
          </div>
        </section>
      </main>

      {/* --- 4. FOOTER --- */}
      <footer className="px-8 py-24 border-t border-gray-100">
        <p className="text-sm text-gray-400">
          © 2026 Im Jueun. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
