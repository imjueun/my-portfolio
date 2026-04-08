import React from 'react';
import { motion } from 'framer-motion';

const AboutIntro = ({ variants }) => {
  return (
    <motion.div variants={variants} className="flex flex-col text-left mt-8">
      <p className='font-bold text-lg'>LEE JUEUN</p><br/>
      <p className="text-sm md:text-sm text-gray-800 leading-relaxed font-light font-medium">
        안녕하세요!<br/>2년 차 UI 개발자 이주은입니다.<br /><br />
        HTML, CSS, JavaScript, React를 활용하여 사용자 중심의 인터페이스를 구현하고 있으며, <br />
        웹 표준과 웹 접근성을 준수하여 누구나 편리하게 이용할 수 있는 웹 환경을 만드는 데 집중하고 있습니다. <br /><br />
        기획부터 개발, 배포 및 운영까지 서비스 출시 전 과정을 직접 경험한 프로젝트를 수행하며, <br />
        서비스 전반의 흐름과 사용자 경험을 깊이 있게 이해하고 있습니다. <br /><br />
        맡은 일에 애정을 가지고 책임감 있게 업무를 수행하며, <br />주어진 역할 속에서 가치를 만들어내는 것을 중요하게 생각합니다.
      </p>
    </motion.div>
  );
};

export default AboutIntro;
