import React from 'react';
import { motion } from 'framer-motion';

const AboutImage = ({ variants }) => {
  return (
    <motion.div
      variants={variants}
      className="w-full max-w-[320px] aspect-square rounded-2xl overflow-hidden flex items-center justify-center mt-8"


    >
      
      <img src="/public/favicon.png" alt="Profile" className="w-full h-full object-cover" />
    </motion.div>
  );
};

export default AboutImage;
