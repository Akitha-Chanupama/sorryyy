import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <motion.header
      className="text-center flex flex-col items-center justify-center pt-3 sm:pt-5 pb-2.5 px-3 select-none shrink-0 relative"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Soft Ambient Glow behind the Header */}
      <div className="absolute -top-4 w-44 h-16 bg-[#80B9E8]/25 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Cool Frosted Glass Pill Badge with Glow */}
      <motion.div
        className="relative inline-flex items-center gap-2 px-4 py-1.2 rounded-full bg-white/95 border border-[#B8D8F5] shadow-[0_4px_16px_rgba(86,145,190,0.2)] text-[#35658F] text-[11px] sm:text-[12px] font-bold tracking-widest mb-2 backdrop-blur-md"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        <Sparkles className="w-3.5 h-3.5 text-[#80B9E8] animate-pulse" />
        <span className="bg-gradient-to-r from-[#35658F] via-[#477FAF] to-[#35658F] bg-clip-text text-transparent">
          A LITTLE NOTE FOR YOU ♡
        </span>
        <Sparkles className="w-3.5 h-3.5 text-[#80B9E8] animate-pulse" />
      </motion.div>

      {/* Main Romantic Heading */}
      <h1 className="text-[27px] sm:text-[32px] font-heading font-bold text-[#24527A] tracking-tight leading-tight flex items-center justify-center gap-2 drop-shadow-[0_2px_12px_rgba(128,185,232,0.25)]">
        <span>Hey, pretty girl!</span>
        <motion.span
          className="inline-block"
          animate={{ scale: [1, 1.15, 1], rotate: [0, -5, 5, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
        >
          💙
        </motion.span>
      </h1>

      {/* Subtitle with soft romantic tone */}
      <p className="text-[13.5px] sm:text-[15px] font-medium text-[#4E677E] mt-1 flex items-center justify-center gap-1.5 font-sans">
        <span>Can I have a tiny moment?</span>
        <span className="text-sm">🥺</span>
      </p>
    </motion.header>
  );
};
