import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <motion.header
      className="text-center flex flex-col items-center justify-center pt-1.5 pb-1 px-2 select-none shrink-0"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Decorative Label Pill */}
      <motion.div
        className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/90 border border-[#B8D8F5] shadow-xs text-[#477FAF] text-[11px] sm:text-[12px] font-semibold tracking-wider mb-1 backdrop-blur-xs"
        whileTap={{ scale: 0.96 }}
      >
        <Sparkles className="w-3 h-3 text-[#80B9E8] animate-pulse" />
        <span>A LITTLE NOTE FOR YOU ♡</span>
        <Sparkles className="w-3 h-3 text-[#80B9E8] animate-pulse" />
      </motion.div>

      {/* Main Heading */}
      <h1 className="text-[25px] sm:text-[29px] font-heading font-semibold text-[#2D5A83] tracking-tight leading-tight flex items-center justify-center gap-2 drop-shadow-xs">
        <span>Hey, pretty girl!</span>
        <span className="inline-block transform active:scale-125 transition-transform duration-200">💙</span>
      </h1>

      {/* Subtitle */}
      <p className="text-[13px] sm:text-[14.5px] font-medium text-[#4E677E] mt-0.5 flex items-center justify-center gap-1 font-sans">
        <span>Can I have a tiny moment?</span>
        <span className="text-sm">🥺</span>
      </p>
    </motion.header>
  );
};
