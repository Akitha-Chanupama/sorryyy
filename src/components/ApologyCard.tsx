import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, PhoneCall } from 'lucide-react';

export const ApologyCard: React.FC = () => {
  const [showSecretPromise, setShowSecretPromise] = useState(false);

  return (
    <motion.div
      className="relative w-full max-w-[380px] mx-auto luxury-card-sheen rounded-[24px] sm:rounded-[28px] border border-white/95 p-3 sm:p-3.5 my-auto shadow-soft-blue transition-all shrink-0"
      initial={{ opacity: 0, y: 14, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Decorative Stamp in Top Right Corner */}
      <div className="absolute -top-3 -right-1.5 rotate-6 select-none pointer-events-none z-20">
        <div className="px-2 py-0.5 rounded-md bg-white/95 border border-[#B8D8F5] shadow-xs text-[9.5px] text-[#477FAF] font-semibold tracking-wider flex items-center gap-1 backdrop-blur-xs">
          <span>AIRMAIL</span>
          <span className="text-[#80B9E8]">💌</span>
        </div>
      </div>

      {/* Decorative corner hearts */}
      <div className="absolute top-2 left-3 opacity-40 text-[#80B9E8] text-[11px] pointer-events-none select-none">
        ♡
      </div>
      <div className="absolute bottom-2 right-3 opacity-40 text-[#B8D8F5] text-[11px] pointer-events-none select-none">
        ♡
      </div>

      <div className="flex flex-col space-y-1.5 text-center">
        {/* Section 1 */}
        <div className="space-y-0.5 rounded-xl p-1.5 bg-gradient-to-b from-[#F5FAFF]/80 to-transparent border border-white/70">
          <h2 className="text-[15px] sm:text-[16.5px] font-heading font-semibold text-[#2D5A83] tracking-tight flex items-center justify-center gap-1">
            <span>I'm sorry, baby.</span>
            <span className="text-sm">🥺</span>
          </h2>
          <p className="text-[12.5px] sm:text-[13.5px] text-[#4E677E] leading-snug font-sans px-1">
            I was just joking, but I understand that my words hurt you. I really didn't mean to make you feel that way.
          </p>
        </div>

        {/* Divider 1 with tiny blue heart */}
        <div className="flex items-center justify-center gap-2 py-0.2">
          <div className="h-[1px] w-14 sm:w-20 bg-gradient-to-r from-transparent via-[#B8D8F5] to-[#B8D8F5]" />
          <Heart className="w-2.5 h-2.5 text-[#80B9E8] fill-[#80B9E8] animate-pulse" />
          <div className="h-[1px] w-14 sm:w-20 bg-gradient-to-l from-transparent via-[#B8D8F5] to-[#B8D8F5]" />
        </div>

        {/* Section 2 */}
        <div className="space-y-0.5 rounded-xl p-1.5 bg-gradient-to-b from-[#F5FAFF]/80 to-transparent border border-white/70">
          <h2 className="text-[15px] sm:text-[16.5px] font-heading font-semibold text-[#2D5A83] tracking-tight flex items-center justify-center gap-1">
            <span>You're irreplaceable.</span>
            <span className="text-sm">💙</span>
          </h2>
          <p className="text-[12.5px] sm:text-[13.5px] text-[#4E677E] leading-snug font-sans px-1">
            You're not someone I could simply replace. You mean so much to me.
          </p>
        </div>

        {/* Divider 2 with tiny blue heart */}
        <div className="flex items-center justify-center gap-2 py-0.2">
          <div className="h-[1px] w-14 sm:w-20 bg-gradient-to-r from-transparent via-[#B8D8F5] to-[#B8D8F5]" />
          <Heart className="w-2.5 h-2.5 text-[#80B9E8] fill-[#80B9E8] animate-pulse" />
          <div className="h-[1px] w-14 sm:w-20 bg-gradient-to-l from-transparent via-[#B8D8F5] to-[#B8D8F5]" />
        </div>

        {/* Section 3 */}
        <div className="space-y-0.5 rounded-xl p-1.5 bg-gradient-to-b from-[#F5FAFF]/80 to-transparent border border-white/70">
          <h2 className="text-[15px] sm:text-[16.5px] font-heading font-semibold text-[#2D5A83] tracking-tight flex items-center justify-center gap-1">
            <span>I choose you. Always.</span>
            <span className="text-sm">💙</span>
          </h2>
          <p className="text-[12.5px] sm:text-[13.5px] text-[#4E677E] leading-snug font-sans px-1">
            I want you, and all the beautiful memories we still have to make together.
          </p>
        </div>

        {/* Special Lecture Call Request Box */}
        <motion.div
          className="mt-1 p-2 sm:p-2.5 rounded-xl bg-gradient-to-r from-[#EAF5FF] via-[#F2F8FD] to-[#EAF5FF] border border-[#B8D8F5] shadow-xs text-center"
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex items-center justify-center gap-1.5 text-[#2A5A82] font-semibold text-[13px] sm:text-[14px]">
            <PhoneCall className="w-3.5 h-3.5 text-[#80B9E8] animate-bounce" />
            <span>Please forgive me just this one time...</span>
            <span className="text-sm">🥺</span>
          </div>
          <p className="text-[11.5px] sm:text-[12.5px] text-[#4E677E] font-medium mt-0.5 leading-snug">
            And give me a call once your lectures are finished? I miss you so much. 💙
          </p>
        </motion.div>
      </div>

      {/* Sweet Interactive "Tap to reveal a secret promise" feature */}
      <div className="mt-1.5 pt-1 border-t border-[#B8D8F5]/40 flex flex-col items-center">
        <button
          type="button"
          onClick={() => setShowSecretPromise(!showSecretPromise)}
          className="inline-flex items-center gap-1 text-[11px] sm:text-[12px] font-semibold text-[#477FAF] hover:text-[#2D5A83] transition-colors cursor-pointer py-0.5 px-2.5 rounded-full hover:bg-[#EAF5FF] touch-manipulation active:scale-95"
        >
          <Sparkles className="w-2.5 h-2.5 text-[#80B9E8]" />
          <span>{showSecretPromise ? "Hide promise ♡" : "Tap for a tiny secret promise 💌"}</span>
        </button>

        <AnimatePresence>
          {showSecretPromise && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -4 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -4 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden mt-1 text-center"
            >
              <div className="p-1.5 rounded-xl bg-gradient-to-r from-[#EAF5FF] via-white to-[#EAF5FF] border border-[#B8D8F5] text-[11px] sm:text-[12px] text-[#2D5A83] font-medium shadow-xs leading-snug">
                "I promise to always protect your heart and never make you feel anything less than adored. You are my favorite person in the whole universe." 💙
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
