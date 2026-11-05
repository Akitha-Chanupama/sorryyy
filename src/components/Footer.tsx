import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <motion.footer
      className="text-center py-0.5 sm:py-1 select-none shrink-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <p className="text-[10.5px] sm:text-[11.5px] text-[#477FAF]/80 font-medium tracking-wide">
        Made with lots of love, just for you <span className="text-[#80B9E8] font-bold">♡</span>
      </p>
    </motion.footer>
  );
};

