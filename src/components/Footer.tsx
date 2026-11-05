import React from 'react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <motion.footer
      className="text-center py-1 sm:py-2 select-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.3 }}
    >
      <p className="text-[11px] sm:text-xs text-[#477FAF]/80 font-medium tracking-wide">
        Made with lots of love, just for you <span className="text-[#80B9E8] font-bold">♡</span>
      </p>
    </motion.footer>
  );
};
