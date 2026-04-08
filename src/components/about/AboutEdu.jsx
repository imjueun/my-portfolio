import React from 'react';
import { motion } from 'framer-motion';

const AboutEdu = ({ variants }) => {
  return (
    <motion.div variants={variants} className="flex flex-col text-left">


      <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-[#1a1a1a] mb-6">
        Education
      </h3>
      <div className="text-gray-600 font-light leading-relaxed">
    
       <div>
    <p className="text-[#1a1a1a] font-medium">
      엘리스트랙
      <span className="ml-2 text-sm text-gray-400">
       2023.12 - 2024.04
      </span>
    </p>
    <p className="text-sm mt-1">
      - JavaScript의 핵심 개념, 비동기 처리, DOM 조작 및 이벤트 처리 학습<br/>
      - Node.js, Express, MongoDB 기반 백엔드 기초 및 쇼핑몰 프로젝트 서버 개발
    </p>
    <br/>
  </div>
       <div>
    <p className="text-[#1a1a1a] font-medium">
      위코드
      <span className="ml-2 text-sm text-gray-400">
      2023.08 - 2023.11
      </span>
    </p>
    <p className="text-sm mt-1">
    - HTML, CSS, JavaScript, React 기반 컴포넌트 구조, 상태 관리, API 통신 학습<br/>
- 클론 코딩 및 기업 연계 프로젝트를 통해 서비스 구현 경험과 협업 능력 향상
    </p>
  </div>
      </div>


     
    </motion.div>
  );
};

export default AboutEdu;
