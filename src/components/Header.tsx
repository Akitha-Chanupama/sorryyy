import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <motion.header
      className="text-center flex flex-col items-center justify-center pt-0.5 pb-0.5 px-2 select-none shrink-0"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Decorative Label Pill */}
      <motion.div
        className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/90 border border-[#B8D8F5] shadow-xs text-[#477FAF] text-[10px] sm:text-[11px] font-semibold tracking-wider mb-0.5 backdrop-blur-xs"
        whileTap={{ scale: 0.96 }}
      >
        <Sparkles className="w-2.5 h-2.5 text-[#80B9E8] animate-pulse" />
        <span>A LITTLE NOTE FOR YOU ♡</span>
        <Sparkles className="w-2.5 h-2.5 text-[#80B9E8] animate-pulse" />
      </motion.div>

      {/* Main Heading */}
      <h1 className="text-[22px] sm:text-[26px] font-heading font-semibold text-[#35658F] tracking-tight leading-tight flex items-center justify-center gap-1.5 drop-shadow-xs">
        Hey, pretty girl! <span className="inline-block transform active:scale-125 transition-transform duration-200">💙</span>
      </h1>

      {/* Subtitle */}
      <p className="text-[11.5px] sm:text-[13px] font-medium text-[#60778C]/90 mt-0.5 flex items-center justify-center gap-1 font-sans">
        <span>Can I have a tiny moment?</span>
        <span className="text-xs">🥺</span>
      </p>
    </motion.header>
  );
};
