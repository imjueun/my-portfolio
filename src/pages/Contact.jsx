import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useState } from 'react';
import decorationImg from '../assets/contact/conpeti_img.png';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  // 마우스 추적 배경 효과를 위한 설정
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const shadowX = useSpring(mouseX, springConfig);
  const shadowY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    mouseX.set(x * 100);
    mouseY.set(y * 100);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('leeje7766@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="contact"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full flex flex-col justify-center items-center px-8 md:px-24 overflow-hidden bg-[#fafafa] text-center"
    >
      {/* 🌈 동적 배경 그라데이션 */}
      <motion.div 
        className="absolute inset-0 -z-10 opacity-30"
        style={{
          background: `radial-gradient(circle at ${shadowX}% ${shadowY}%, rgba(0, 0, 0, 0.05) 0%, transparent 50%)`
        }}
      />

      {/* ✨ 타이틀 섹션 */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={item} className="">
          <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-gray-400">
            Contact
          </span>
        </motion.div>

        <motion.div variants={item} className="flex justify-center mt-8">
           <img src={decorationImg} className='w-20' alt="Contact decoration"/>
        </motion.div>

        <motion.div variants={container} className="space-y-4 mt-8">
          <motion.h2
            variants={item}
            className="text-6xl md:text-9xl font-light tracking-tighter text-[#1a1a1a] leading-[0.9]"
          >
            함께 할 동료를 찾으시나요?
          </motion.h2>

          <motion.h2
            variants={item}
            className="text-4xl md:text-6xl font-light tracking-tight text-gray-400 mt-8"
          >
            언제든 편하게 연락주세요 :)
          </motion.h2>
        </motion.div>
      </motion.div>

      {/* 📩 이메일 섹션 */}
      <motion.div
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-12 md:mt-12 relative w-full flex flex-col items-center"
      >
        <motion.div variants={item} className="flex flex-col items-center gap-8">
          <a
            href="mailto:leeje7766@gmail.com"
            className="group relative inline-block text-3xl md:text-5xl text-[#1a1a1a] font-bold tracking-tight transition-all duration-300"
          >
            leeje7766@gmail.com
           
          </a>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={copyEmail}
            className="px-8 py-4 bg-black text-white text-xs font-bold rounded-full uppercase tracking-widest cursor-pointer overflow-hidden relative min-w-[160px]"
          >
            <span className="relative z-10">
              {copied ? 'Email Copied!' : 'Copy Email'}
            </span>
            {copied && (
              <motion.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                className="absolute inset-0 bg-gray-600"
              />
            )}
          </motion.button>
        </motion.div>
      </motion.div>

      {/* 🌍 장식 요소 */}
      <div className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] rounded-full border border-gray-100 -z-20 opacity-50" />
    </section>
  );
};

export default Contact;