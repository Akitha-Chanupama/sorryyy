import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <motion.header
      className="text-center flex flex-col items-center justify-center pt-1 pb-1 px-2 select-none"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Decorative Label Pill */}
      <motion.div
        className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-white/80 border border-[#B8D8F5] shadow-xs text-[#477FAF] text-[10.5px] sm:text-xs font-semibold tracking-wider mb-1"
        whileHover={{ scale: 1.03 }}
      >
        <Sparkles className="w-3 h-3 text-[#80B9E8] animate-pulse" />
        <span>A LITTLE NOTE FOR YOU ♡</span>
        <Sparkles className="w-3 h-3 text-[#80B9E8] animate-pulse" />
      </motion.div>

      {/* Main Heading */}
      <h1 className="text-2xl sm:text-3xl font-heading font-semibold text-[#35658F] tracking-tight leading-tight flex items-center justify-center gap-1.5 drop-shadow-xs">
        Hey, pretty girl! <span className="inline-block transform hover:scale-110 transition-transform">💙</span>
      </h1>

      {/* Subtitle */}
      <p className="text-xs sm:text-sm font-medium text-[#60778C]/90 mt-0.5 flex items-center justify-center gap-1 font-sans">
        <span>Can I have a tiny moment?</span>
        <span className="text-sm">🥺</span>
      </p>
    </motion.header>
  );
};
