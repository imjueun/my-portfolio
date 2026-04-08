import { motion } from 'framer-motion';

import img1 from '../assets/about/skills_img_01.svg';
import img2 from '../assets/about/skills_img_02.svg';
import img3 from '../assets/about/skills_img_03.svg';
import img4 from '../assets/about/skills_img_04.png';
import img5 from '../assets/about/skills_img_05.png';
import img6 from '../assets/about/skills_img_06.svg';
import img7 from '../assets/about/skills_img_07.svg';
import img8 from '../assets/about/skills_img_08.png';

const InfiniteSlider = () => {
  const skillImages = [img1, img2, img3, img4, img5, img6, img7, img8];
  
  // 무한 루프를 위해 배열 복제 (두 세트를 이어 붙임)
  const doubleImages = [...skillImages, ...skillImages];

  return (
    <div className="overflow-hidden py-10 w-full relative">
      {/* 그래디언트 오버레이 (선택사항: 양 끝을 부드럽게 가리고 싶을 때 사용) */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#fafafa] to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#fafafa] to-transparent z-10"></div>

      <motion.div 
        className="flex w-max"
        animate={{
          x: [0, "-50%"] // 전체의 절반만큼 이동하면 완벽한 루프가 됨
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30, // 속도를 30초로 수정 (더 느리게 원하시면 숫자를 키우세요)
            ease: "linear",
          },
        }}
      >
        {doubleImages.map((img, idx) => (
          <div 
            key={idx} 
            className="flex-shrink-0  md:px-12 flex items-center justify-center"
          >
            <img 
              src={img} 
              alt={`Skill ${idx % 8 + 1}`} 
              className="h-12 rounded-lg md:h-20 w-auto object-contain transition-all duration-300 opacity-80 hover:opacity-100"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteSlider;
