import { motion } from 'framer-motion';
import { useMemo } from 'react';
import ScrollButton from '../components/ScrollButton';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

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

  // 🎲 입자별 랜덤 속성 미리 계산 (리렌더링마다 바뀌지 않도록 useMemo)
  const particles = useMemo(() => {
    return [...Array(12)].map((_, i) => {
      const baseAngle = (i * 30) * Math.PI / 180;
      // 각도에 ±20° 랜덤 흔들림
      const angleJitter = (Math.random() - 0.5) * (40 * Math.PI / 180);
      const angle = baseAngle + angleJitter;

      // 이동 거리 랜덤 (200px ~ 550px)
      const dist = 200 + Math.random() * 350;

      // 시작 위치 오프셋 (중앙에서 살짝 어긋나게)
      const startX = (Math.random() - 0.5) * 80;
      const startY = (Math.random() - 0.5) * 80;

      // 크기 랜덤 (60px ~ 220px)
      const size = 60 + Math.random() * 160;

      // 형태: 타원 비율 랜덤 (정원 ~ 가로/세로 찌그러짐)
      const widthRatio = 0.5 + Math.random() * 1.0;   // 0.5x ~ 1.5x
      const heightRatio = 0.5 + Math.random() * 1.0;

      // border-radius 랜덤 (원형 ~ 타원 ~ 사각형에 가깝게)
      const rx = 20 + Math.random() * 80; // 20% ~ 100%

      // blur 랜덤 (10px ~ 60px)
      const blur = 10 + Math.random() * 50;

      // 색상
      const colors = [
        'bg-pink-400/40',
        'bg-red-400/40',
        'bg-rose-300/40',
        'bg-fuchsia-400/35',
        'bg-orange-300/35',
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];

      // 애니메이션 duration 랜덤 (3s ~ 6s)
      const duration = 3 + Math.random() * 3;

      // delay 랜덤 (0s ~ 1.5s) → 입자가 한꺼번에 안 터지게
      const delay = Math.random() * 1.5;

      // 최대 scale 랜덤 (0.8 ~ 1.6)
      const maxScale = 0.8 + Math.random() * 0.8;

      return {
        angle, dist, startX, startY,
        size, widthRatio, heightRatio, rx, blur,
        color, duration, delay, maxScale,
      };
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center px-8 md:px-16 bg-[#fafafa] overflow-hidden"
    >
      {/* 🎨 배경 폭발 애니메이션 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center z-0">

        {/* 중앙 코어 */}
       <motion.div
  animate={{
    scale: [0, 0.6, 1.2, 1.5],
    opacity: [0, 0.4, 0.7, 0],
  }}
  transition={{
    duration: 5, // ⬅️ 전체 속도 느리게
    repeat: Infinity,
    ease: "easeInOut", // ⬅️ 초반 느림
    times: [0, 0.4, 0.7, 1], // ⬅️ 초반 구간 길게
  }}
  className="absolute w-[50vw] h-[50vw] bg-pink-300/40 rounded-full blur-[80px]"
/>

        {/* 🎲 불규칙 입자들 */}
        {particles.map((p, i) => (
          <motion.div
            key={i}
            animate={{
              x: [p.startX, p.startX + Math.cos(p.angle) * p.dist],
              y: [p.startY, p.startY + Math.sin(p.angle) * p.dist],
              scale: [0, p.maxScale, 0],
              opacity: [0, 0.85, 0],
              rotate: [0, (Math.random() - 0.5) * 60],  // 회전도 랜덤
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "circOut",
              times: [0, 0.35, 1],
              delay: p.delay,
            }}
            className={`absolute ${p.color}`}
            style={{
              width: `${p.size * p.widthRatio}px`,
              height: `${p.size * p.heightRatio}px`,
              borderRadius: `${p.rx}%`,
              filter: `blur(${p.blur}px)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* 라벨 */}
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

        {/* 설명 */}
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

      {/* 스크롤 가이드 버튼 */}
      <ScrollButton targetId="about" />
    </section>
  );
};

export default Home;