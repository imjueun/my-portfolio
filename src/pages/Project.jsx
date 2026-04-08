import { motion } from 'framer-motion';
import aidLogo from '../assets/project/aid-logo.png';
import spinnoffLogo from '../assets/project/spinnoff-logo.png';

const Project = () => {
  // 애니메이션 설정
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
      color: 'bg-blue-50',
      logo: aidLogo,
      link: 'https://aid-raw.com',
      detailLink: 'https://prickly-baker-3b3.notion.site/AiD-32f35b948d6881dba6faf0f2c851ebd8?pvs=74'
    },
    {
      id: 2,
      title: 'Spinnoff',
      description: '웹툰 작가 포트폴리오 관리 & 작품 매칭 플랫폼',
      tags: ['HTML','CSS','JavaScript','React', 'Tailwind', 'Framer-motion'],
      color: 'bg-purple-50',
      logo: spinnoffLogo,
      link: 'https://spinnoff.net',
      detailLink: 'https://prickly-baker-3b3.notion.site/32f35b948d6881faa01afb43c0a64850'
    },
  ];

  return (
    <section
      id="project"
      className="min-h-screen w-full flex flex-col justify-center py-24 px-8 md:px-16 bg-[#fafafa]"
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
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12 px-20"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeInUp}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className={`cursor-pointer group relative overflow-hidden rounded-3xl p-8 h-[400px] flex flex-col justify-end border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl ${project.color}`}
          >
            {/* 카드 배경 장식 (로고로 대체) */}
            <div className="absolute top-0 right-0 p-12 transition-all duration-500 opacity-70 group-hover:opacity-30 group-hover:scale-110">
               <img src={project.logo} alt="" className="w-32 h-auto" />
            </div>

            <div className="relative z-10">
              <div className="flex gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[9px] font-bold px-2 py-1 bg-white/80 rounded-full text-gray-500 uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              
              <div className='flex gap-4 justify-center'>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-6 py-2 bg-black text-white text-xs font-bold rounded-full cursor-pointer mt-4"
                >
                  바로가기
                </motion.a>
                <motion.a
                  href={project.detailLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-6 py-2 bg-white text-black border border-black text-xs font-bold rounded-full cursor-pointer mt-4 transition-colors hover:bg-gray-100"
                >
                  자세히 보기
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Project;
