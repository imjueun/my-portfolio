import { motion } from 'framer-motion';
import aidLogo from '../assets/project/aid-logo.png';
import spinnoffLogo from '../assets/project/spinnoff-logo.png';
import ScrollButton from '../components/ScrollButton';

const Project = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projects = [
    {
      id: 1,
      title: 'AiD',
      description: '웹툰 보조작가 플랫폼',
      tags: ['HTML','CSS','JavaScript','React', 'Tailwind', 'Framer-motion'],
      logo: aidLogo,
      link: 'https://aid-raw.com',
      detailLink: 'https://prickly-baker-3b3.notion.site/AiD-32f35b948d6881dba6faf0f2c851ebd8?pvs=74',
      color: 'bg-gray-100',
    },
    {
      id: 2,
      title: 'Spinnoff',
      description: '웹툰 작가 포트폴리오 관리 & 작품 매칭 플랫폼',
      tags: ['HTML','CSS','JavaScript','React', 'Tailwind', 'Framer-motion'],
      logo: spinnoffLogo,
      link: 'https://spinnoff.net',
      detailLink: 'https://prickly-baker-3b3.notion.site/32f35b948d6881faa01afb43c0a64850',
      color: 'bg-gray-100',
    },
  ];

  return (
    <section
      id="project"
      className="relative min-h-screen w-full flex flex-col justify-center py-24 px-8 md:px-16  bg-[#1a1a1a]"
    >
      {/* 라벨 */}
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="mb-8"
      >
        <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-gray-400">
          Projects
        </span>
      </motion.div>

      {/* 프로젝트 그리드 */}
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 px-4 md:px-0 max-w-4xl mx-auto w-full"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="cursor-pointer group relative overflow-hidden rounded-3xl p-8 h-[400px] flex flex-col justify-end
                       bg-white/70 backdrop-blur-xl
                       transition-all duration-500"
            style={{
              boxShadow: `
                0 10px 40px rgba(0,0,0,0.07),
                0 1px 3px rgba(0,0,0,0.05),
                inset 0 0 0 1px rgba(255,255,255,0.75),
                inset 0 -1px 0 rgba(0,0,0,0.04)
              `,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = `
                0 24px 64px rgba(0,0,0,0.13),
                0 1px 3px rgba(0,0,0,0.06),
                inset 0 0 0 1px rgba(255,255,255,0.75),
                inset 0 -1px 0 rgba(0,0,0,0.05)
              `;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = `
                0 10px 40px rgba(0,0,0,0.07),
                0 1px 3px rgba(0,0,0,0.05),
                inset 0 0 0 1px rgba(255,255,255,0.75),
                inset 0 -1px 0 rgba(0,0,0,0.04)
              `;
            }}
          >
            {/* 은은한 컬러 */}
            <div className={`absolute inset-0  ${project.color}`} />

            {/* 💧 Apple 물방울 로고 */}
            <div className="absolute top-0 right-0 p-6 md:p-8 transition-all duration-500 group-hover:scale-110">
              <div className="relative w-32 h-32 flex items-center justify-center">

                {/* 물방울 베이스 */}
                <div className="absolute inset-0 rounded-full 
                                backdrop-blur-2xl 
                                bg-white/10
                                shadow-[inset_0_4px_12px_rgba(255,255,255,0.6),inset_0_-6px_10px_rgba(0,0,0,0.08),0_15px_30px_rgba(0,0,0,0.08)]" />

                {/* 상단 하이라이트 */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-6 
                                bg-white/60 blur-lg rounded-full opacity-70" />

                {/* 내부 빛 */}
                <div className="absolute inset-0 rounded-full bg-white/20 blur-xl opacity-30" />

                {/* 유리 테두리 */}
                <div className="absolute inset-0 rounded-full ring-1 ring-white/40" />

                {/* 로고 */}
                <img
                  src={project.logo}
                  alt=""
                  className="relative w-16 h-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />

              </div>
            </div>

            {/* 콘텐츠 */}
            <div className="relative z-10">
              {/* 태그 1열 (3개) */}
              <div className="flex gap-1.5 mb-1.5 flex-wrap">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-bold px-3 py-1
                               bg-white/70 backdrop-blur-md
                               rounded-full text-gray-600
                               uppercase tracking-wider
                               border border-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* 태그 2열 (3개) */}
              <div className="flex gap-1.5 mb-4 flex-wrap">
                {project.tags.slice(3, 6).map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] font-bold px-3 py-1
                               bg-white/70 backdrop-blur-md
                               rounded-full text-gray-600
                               uppercase tracking-wider
                               border border-white/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {project.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className='flex gap-4 justify-center mt-2 md:mt-4'>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-black/90 text-white text-xs font-bold rounded-full backdrop-blur-md"
                >
                  바로가기
                </motion.a>

                <motion.a
                  href={project.detailLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2 bg-white/70 text-black border border-white/40 text-xs font-bold rounded-full backdrop-blur-md hover:bg-white"
                >
                  자세히 보기
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <ScrollButton targetId="contact" />
    </section>
  );
};

export default Project;