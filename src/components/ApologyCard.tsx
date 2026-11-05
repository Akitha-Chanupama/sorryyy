import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

export const ApologyCard: React.FC = () => {
  const [showSecretPromise, setShowSecretPromise] = useState(false);

  return (
    <motion.div
      className="relative w-full max-w-[395px] mx-auto luxury-card-sheen rounded-[26px] sm:rounded-[30px] border border-white/95 p-4 sm:p-5 my-1 sm:my-1.5 shadow-soft-blue transition-all"
      initial={{ opacity: 0, y: 22, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Decorative Stamp in Top Right Corner */}
      <div className="absolute -top-3.5 -right-2 rotate-6 select-none pointer-events-none z-20">
        <div className="px-2.5 py-1 rounded-md bg-white/90 border border-[#B8D8F5] shadow-xs text-[10px] text-[#477FAF] font-semibold tracking-wider flex items-center gap-1 backdrop-blur-xs">
          <span>AIRMAIL</span>
          <span className="text-[#80B9E8]">💌</span>
        </div>
      </div>

      {/* Decorative subtle corner hearts */}
      <div className="absolute top-2.5 left-3.5 opacity-40 text-[#80B9E8] text-xs pointer-events-none select-none">
        ♡
      </div>
      <div className="absolute bottom-2.5 right-3.5 opacity-40 text-[#B8D8F5] text-xs pointer-events-none select-none">
        ♡
      </div>

      <div className="flex flex-col space-y-2.5 text-center">
        {/* Section 1 */}
        <motion.div
          className="space-y-0.5 rounded-2xl p-2 bg-gradient-to-b from-[#F5FAFF]/80 to-transparent border border-white/60 transition-all hover:bg-[#F5FAFF]"
          whileHover={{ scale: 1.01 }}
        >
          <h2 className="text-[15px] sm:text-[17px] font-heading font-semibold text-[#35658F] tracking-tight flex items-center justify-center gap-1">
            <span>I'm sorry, baby.</span>
            <span className="text-base">🥺</span>
          </h2>
          <p className="text-[12px] sm:text-[13px] text-[#60778C] leading-relaxed font-sans px-1">
            I was just joking, but I understand that my words hurt you. I really didn't mean to make you feel that way.
          </p>
        </motion.div>

        {/* Divider 1 with tiny blue heart */}
        <div className="flex items-center justify-center gap-2.5 py-0.5">
          <div className="h-[1px] w-14 sm:w-20 bg-gradient-to-r from-transparent via-[#B8D8F5] to-[#B8D8F5]" />
          <Heart className="w-3 h-3 text-[#80B9E8] fill-[#80B9E8] animate-pulse" />
          <div className="h-[1px] w-14 sm:w-20 bg-gradient-to-l from-transparent via-[#B8D8F5] to-[#B8D8F5]" />
        </div>

        {/* Section 2 */}
        <motion.div
          className="space-y-0.5 rounded-2xl p-2 bg-gradient-to-b from-[#F5FAFF]/80 to-transparent border border-white/60 transition-all hover:bg-[#F5FAFF]"
          whileHover={{ scale: 1.01 }}
        >
          <h2 className="text-[15px] sm:text-[17px] font-heading font-semibold text-[#35658F] tracking-tight flex items-center justify-center gap-1">
            <span>You're irreplaceable.</span>
            <span className="text-base">💙</span>
          </h2>
          <p className="text-[12px] sm:text-[13px] text-[#60778C] leading-relaxed font-sans px-1">
            You're not someone I could simply replace. You mean so much to me.
          </p>
        </motion.div>

        {/* Divider 2 with tiny blue heart */}
        <div className="flex items-center justify-center gap-2.5 py-0.5">
          <div className="h-[1px] w-14 sm:w-20 bg-gradient-to-r from-transparent via-[#B8D8F5] to-[#B8D8F5]" />
          <Heart className="w-3 h-3 text-[#80B9E8] fill-[#80B9E8] animate-pulse" />
          <div className="h-[1px] w-14 sm:w-20 bg-gradient-to-l from-transparent via-[#B8D8F5] to-[#B8D8F5]" />
        </div>

        {/* Section 3 */}
        <motion.div
          className="space-y-0.5 rounded-2xl p-2 bg-gradient-to-b from-[#F5FAFF]/80 to-transparent border border-white/60 transition-all hover:bg-[#F5FAFF]"
          whileHover={{ scale: 1.01 }}
        >
          <h2 className="text-[15px] sm:text-[17px] font-heading font-semibold text-[#35658F] tracking-tight flex items-center justify-center gap-1">
            <span>I choose you. Always.</span>
            <span className="text-base">💙</span>
          </h2>
          <p className="text-[12px] sm:text-[13px] text-[#60778C] leading-relaxed font-sans px-1">
            I want you, and all the beautiful memories we still have to make together.
          </p>
        </motion.div>
      </div>

      {/* Sweet Interactive "Tap to reveal a secret promise" feature */}
      <div className="mt-2 pt-1 border-t border-[#B8D8F5]/40 flex flex-col items-center">
        <button
          type="button"
          onClick={() => setShowSecretPromise(!showSecretPromise)}
          className="inline-flex items-center gap-1 text-[11px] font-medium text-[#477FAF] hover:text-[#35658F] transition-colors cursor-pointer py-0.5 px-2.5 rounded-full hover:bg-[#EAF5FF]/80"
        >
          <Sparkles className="w-3 h-3 text-[#80B9E8]" />
          <span>{showSecretPromise ? "Hide promise ♡" : "Tap for a tiny secret promise 💌"}</span>
        </button>

        <AnimatePresence>
          {showSecretPromise && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -4 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -4 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="overflow-hidden mt-1 text-center"
            >
              <div className="p-2 rounded-xl bg-gradient-to-r from-[#EAF5FF] via-white to-[#EAF5FF] border border-[#B8D8F5] text-[11.5px] sm:text-xs text-[#35658F] font-medium shadow-xs">
                "I promise to always protect your heart and never make you feel anything less than adored. You are my favorite person in the whole universe." 💙
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
