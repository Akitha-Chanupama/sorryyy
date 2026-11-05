import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, PhoneCall } from 'lucide-react';

export const ApologyCard: React.FC = () => {
  const [showSecretPromise, setShowSecretPromise] = useState(false);

  return (
    <motion.div
      className="relative w-full max-w-[390px] mx-auto luxury-card-sheen rounded-[26px] sm:rounded-[30px] border border-white/95 p-4 sm:p-5 my-1.5 sm:my-2 shadow-soft-blue transition-all shrink-0"
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Decorative Stamp in Top Right Corner */}
      <div className="absolute -top-3.5 -right-2 rotate-6 select-none pointer-events-none z-20">
        <div className="px-2.5 py-1 rounded-md bg-white/95 border border-[#B8D8F5] shadow-xs text-[10px] text-[#477FAF] font-semibold tracking-wider flex items-center gap-1 backdrop-blur-xs">
          <span>AIRMAIL</span>
          <span className="text-[#80B9E8]">💌</span>
        </div>
      </div>

      {/* Decorative corner hearts */}
      <div className="absolute top-2.5 left-3.5 opacity-40 text-[#80B9E8] text-xs pointer-events-none select-none">
        ♡
      </div>
      <div className="absolute bottom-2.5 right-3.5 opacity-40 text-[#B8D8F5] text-xs pointer-events-none select-none">
        ♡
      </div>

      <div className="flex flex-col space-y-2.5 sm:space-y-3 text-center">
        {/* Section 1 */}
        <div className="space-y-1 rounded-2xl p-2 sm:p-2.5 bg-gradient-to-b from-[#F5FAFF]/80 to-transparent border border-white/70">
          <h2 className="text-[16px] sm:text-[17.5px] font-heading font-semibold text-[#2D5A83] tracking-tight flex items-center justify-center gap-1.5">
            <span>I'm sorry, baby.</span>
            <span className="text-base">🥺</span>
          </h2>
          <p className="text-[13px] sm:text-[14px] text-[#4E677E] leading-relaxed font-sans px-1">
            I was just joking, but I understand that my words hurt you. I really didn't mean to make you feel that way.
          </p>
        </div>

        {/* Divider 1 with tiny blue heart */}
        <div className="flex items-center justify-center gap-2.5 py-0.5">
          <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#B8D8F5] to-[#B8D8F5]" />
          <Heart className="w-3 h-3 text-[#80B9E8] fill-[#80B9E8] animate-pulse" />
          <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent via-[#B8D8F5] to-[#B8D8F5]" />
        </div>

        {/* Section 2 */}
        <div className="space-y-1 rounded-2xl p-2 sm:p-2.5 bg-gradient-to-b from-[#F5FAFF]/80 to-transparent border border-white/70">
          <h2 className="text-[16px] sm:text-[17.5px] font-heading font-semibold text-[#2D5A83] tracking-tight flex items-center justify-center gap-1.5">
            <span>You're irreplaceable.</span>
            <span className="text-base">💙</span>
          </h2>
          <p className="text-[13px] sm:text-[14px] text-[#4E677E] leading-relaxed font-sans px-1">
            You're not someone I could simply replace. You mean so much to me.
          </p>
        </div>

        {/* Divider 2 with tiny blue heart */}
        <div className="flex items-center justify-center gap-2.5 py-0.5">
          <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#B8D8F5] to-[#B8D8F5]" />
          <Heart className="w-3 h-3 text-[#80B9E8] fill-[#80B9E8] animate-pulse" />
          <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-transparent via-[#B8D8F5] to-[#B8D8F5]" />
        </div>

        {/* Section 3 */}
        <div className="space-y-1 rounded-2xl p-2 sm:p-2.5 bg-gradient-to-b from-[#F5FAFF]/80 to-transparent border border-white/70">
          <h2 className="text-[16px] sm:text-[17.5px] font-heading font-semibold text-[#2D5A83] tracking-tight flex items-center justify-center gap-1.5">
            <span>I choose you. Always.</span>
            <span className="text-base">💙</span>
          </h2>
          <p className="text-[13px] sm:text-[14px] text-[#4E677E] leading-relaxed font-sans px-1">
            I want you, and all the beautiful memories we still have to make together.
          </p>
        </div>

        {/* Special Lecture Call Request Box */}
        <motion.div
          className="mt-1.5 p-2.5 sm:p-3 rounded-2xl bg-gradient-to-r from-[#EAF5FF] via-[#F2F8FD] to-[#EAF5FF] border border-[#B8D8F5] shadow-xs text-center"
          whileHover={{ scale: 1.01 }}
        >
          <div className="flex items-center justify-center gap-1.5 text-[#2A5A82] font-semibold text-[13.5px] sm:text-[15px]">
            <PhoneCall className="w-4 h-4 text-[#80B9E8] animate-bounce" />
            <span>Please forgive me just this one time...</span>
            <span className="text-base">🥺</span>
          </div>
          <p className="text-[12px] sm:text-[13px] text-[#4E677E] font-medium mt-1 leading-relaxed">
            And give me a call once your lectures are finished? I miss you so much. 💙
          </p>
        </motion.div>
      </div>

      {/* Sweet Interactive "Tap to reveal a secret promise" feature */}
      <div className="mt-2 pt-1.5 border-t border-[#B8D8F5]/40 flex flex-col items-center">
        <button
          type="button"
          onClick={() => setShowSecretPromise(!showSecretPromise)}
          className="inline-flex items-center gap-1.5 text-[11.5px] sm:text-[12.5px] font-semibold text-[#477FAF] hover:text-[#2D5A83] transition-colors cursor-pointer py-1 px-3 rounded-full hover:bg-[#EAF5FF] touch-manipulation active:scale-95"
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
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="overflow-hidden mt-1 text-center"
            >
              <div className="p-2 sm:p-2.5 rounded-xl bg-gradient-to-r from-[#EAF5FF] via-white to-[#EAF5FF] border border-[#B8D8F5] text-[12px] sm:text-[13px] text-[#2D5A83] font-medium shadow-xs leading-relaxed">
                "I promise to always protect your heart and never make you feel anything less than adored. You are my favorite person in the whole universe." 💙
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};
