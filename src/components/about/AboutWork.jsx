import React from 'react';
import { motion } from 'framer-motion';

const AboutWork = ({ variants }) => {
  return (
    <motion.div variants={variants} className="flex flex-col text-left">
      <h3 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-[#1a1a1a] mb-6">
  Work
      </h3>
    <div className="text-gray-600 font-light leading-relaxed space-y-6">
  <div>
    <p className="text-[#1a1a1a] font-medium">
      (주)크림
      <span className="ml-2 text-sm text-gray-400">
        2024.04 - 2026.02
      </span>
    </p>
    <p className="text-sm mt-1">
      - 프론트엔드 개발 및 UI 퍼블리싱 전반 단독 담당<br/>
- 일부 프로젝트 서비스 기획 참여
    </p>
  </div>

  <div>
    <p className="text-[#1a1a1a] font-medium">
      (주)디지털존
      <span className="ml-2 text-sm text-gray-400">
        2020.08 - 2023.07
      </span>
    </p>
    <p className="text-sm mt-1">
      - 대학 증명서 발급 서비스 ‘웹민원센터’ 기획 및 운영 담당
    </p>
  </div>
</div>
    </motion.div>
  );
};

export default AboutWork;
