import { motion } from 'framer-motion';
import AboutImage from '../components/about/AboutImage';
import AboutIntro from '../components/about/AboutIntro';

const About = () => {
  // 애니메이션 설정
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  return (
    <section
      id="about"
      className="min-h-screen w-full flex flex-col justify-center bg-[#fafafa] py-32"
    >
      <div className="px-8 md:px-24 max-w-7xl mx-auto w-full">
        {/* 상단 라벨 */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mb-16"
        >
         <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-gray-400">
  About Me
          </span>
        </motion.div>

        {/* 2열 비대칭 그리드 레이아웃 (어울리는 비율로 조정) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 lg:gap-12 items-center">
          {/* 1. 이미지 섹션 */}
          <AboutImage variants={fadeInUp} />
          
          {/* 2. 소개 섹션 */}
          <AboutIntro variants={fadeInUp} />
        </div>
      </div>
    </section> 
  );
};

export default About;
