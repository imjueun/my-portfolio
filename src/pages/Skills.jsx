// // src/pages/Skills.jsx
// import React, { useEffect, useRef, useState } from 'react';

// const Skills = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const domRef = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => setIsVisible(entry.isIntersecting));
//     });

//     observer.observe(domRef.current);
//     return () => observer.unobserve(domRef.current);
//   }, []);

//   return (
//     <section
//       id="skills"
//       ref={domRef}
//       className={`min-h-screen w-full flex flex-col justify-center px-8 md:px-16 bg-white transition-opacity duration-1000 ${
//         isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//       }`}
//     >
//       <div className="max-w-6xl w-full mx-auto">
//         <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
//           My Expertise
//         </span>

//         <h2 className="mt-12 text-5xl md:text-7xl font-light tracking-tighter mb-20">
//           Technical{' '}
//           <span className="italic text-gray-400 font-serif">Skills</span>
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
//           {/* 프론트엔드 기술 */}
//           <div>
//             <h3 className="text-sm font-bold uppercase tracking-widest border-b border-black pb-4 mb-8">
//               Frontend
//             </h3>
//             <ul className="space-y-4 text-xl font-light text-gray-600">
//               <li>React.js / Next.js</li>
//               <li>Tailwind CSS / Styled Components</li>
//               <li>JavaScript (ES6+) / TypeScript</li>
//             </ul>
//           </div>

//           {/* 디자인/기타 도구 */}
//           <div>
//             <h3 className="text-sm font-bold uppercase tracking-widest border-b border-black pb-4 mb-8">
//               Design & Tools
//             </h3>
//             <ul className="space-y-4 text-xl font-light text-gray-600">
//               <li>Figma (UI/UX Design)</li>
//               <li>Adobe Creative Cloud</li>
//               <li>Git / GitHub / Vercel</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;
