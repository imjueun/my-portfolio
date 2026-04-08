import { motion } from 'framer-motion';

const Home = () => {
  // 기존 애니메이션 (유지)
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  // 🔥 드롭 텍스트
  const text = "UI 개발자 이주은";

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const charVariant = {
    hidden: { y: -40, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 20,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center px-8 md:px-16 bg-[#fafafa] overflow-hidden"
    >
      {/* 🎨 배경 애니메이션 그라데이션 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Blob 1 - Pink */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 80, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] left-[15%] w-[30%] h-[30%] bg-pink-200/40 rounded-full blur-[80px]"
        />
        {/* Blob 2 - Red */}
        <motion.div
          animate={{
            x: [0, -60, 0],
            y: [0, 40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[40%] right-[10%] w-[25%] h-[25%] bg-red-200/30 rounded-full blur-[100px]"
        />
        {/* Blob 3 - Pink */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[20%] left-[10%] w-[20%] h-[20%] bg-pink-100/50 rounded-full blur-[70px]"
        />
        {/* Blob 4 - Red */}
        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[5%] right-[20%] w-[15%] h-[15%] bg-red-400/20 rounded-full blur-[60px]"
        />
      </div>

      <div className="relative z-10">
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

      {/* 2. 설명 */}
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

          {/* 🔥 이름 드롭 애니메이션 */}
          <motion.span
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="font-bold text-black inline-block"
          >
            {text.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={charVariant}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.span>

          입니다.
        </p>

        <br />

        <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
          단순한 구현을 넘어, <br />
          사용자가 느끼는 가치를 <br />
          코드에 담아내고자 합니다.
        </p>
      </motion.div>
      </div>
    </section>
  );
};

export default Home;