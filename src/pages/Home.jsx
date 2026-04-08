import { motion } from 'framer-motion';

const Home = () => {
  // 애니메이션 설정 (재사용 가능)
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full flex flex-col justify-center px-8 md:px-16 bg-[#fafafa]"
    >
      {/* 1. 라벨 */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
     
      >
     <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-gray-400">
Introduction
          </span>
      </motion.div>


      {/* 3. 설명 구절 */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        transition={{ ...fadeInUp.transition, delay: 0.4 }}
        className="mt-4 md:mt-8"
      >
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
          안녕하세요, <br />
          사용자 경험을 이해하고 구현하는 <br />
          <span className="font-bold text-black">UI 개발자 이주은</span>
          입니다.
        </p>
        <br />
        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
          단순한 구현을 넘어, <br />
          사용자가 느끼는 가치를 <br />
          코드에 담아내고자 합니다.
        </p>
      </motion.div>
    </section>
  );
};

export default Home;
