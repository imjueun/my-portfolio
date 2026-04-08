import { motion } from 'framer-motion';
import InfiniteSlider from '../components/InfiniteSlider';
import AboutEdu from '../components/about/AboutEdu';
import AboutWork from '../components/about/AboutWork';

const Career = () => {
  // 애니메이션 설정
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="career"
      className="min-h-screen w-full flex flex-col justify-center bg-[#fafafa] py-24"
    >
      <div className="px-8 md:px-16 max-w-7xl mx-auto w-full">
        {/* 상단 라벨 */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="mb-16"
        >
          <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-gray-400">
            Career
          </span>
         
        </motion.div>

        {/* 2열 레이아웃 for Edu/Work */}
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 mb-24"
        >
          
          
          {/* 2. 교육 이력 섹션 (edu) */}
          <AboutEdu variants={fadeInUp} />
          {/* 1. 근무 이력 섹션 (work) */}
          <AboutWork variants={fadeInUp} />
        </motion.div>
      </div>

      {/* 기술 스택 슬라이더 */}
      <div className="mt-12">
        <div className="px-8 md:px-16 max-w-7xl mx-auto w-full mb-8">
          <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-gray-400">
            Skills & Tools
          </span>
        </div>
        <InfiniteSlider />
      </div>
    </section>
  );
};

export default Career;
