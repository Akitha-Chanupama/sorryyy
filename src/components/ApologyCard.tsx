import React from 'react';
import { motion } from 'framer-motion';

export const ApologyCard: React.FC = () => {
  return (
    <motion.div
      className="relative w-full max-w-[390px] mx-auto romantic-card-sheen rounded-[24px] sm:rounded-[28px] border border-white/90 p-3.5 sm:p-4.5 my-1.5 shadow-soft-blue"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Decorative tiny corner hearts */}
      <div className="absolute top-2.5 right-3 opacity-60 text-[#80B9E8] text-xs pointer-events-none select-none">
        ♡
      </div>
      <div className="absolute bottom-2.5 left-3 opacity-50 text-[#B8D8F5] text-xs pointer-events-none select-none">
        ♡
      </div>

      <div className="flex flex-col space-y-2 text-center">
        {/* Section 1 */}
        <div className="space-y-0.5">
          <h2 className="text-[15px] sm:text-[17px] font-heading font-semibold text-[#35658F] tracking-tight">
            I'm sorry, baby. <span className="text-base">🥺</span>
          </h2>
          <p className="text-[12px] sm:text-[13px] text-[#60778C] leading-relaxed font-sans px-1">
            I was just joking, but I understand that my words hurt you. I really didn't mean to make you feel that way.
          </p>
        </div>

        {/* Divider 1 with tiny blue heart */}
        <div className="flex items-center justify-center gap-2 py-0.5">
          <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent via-[#B8D8F5] to-[#B8D8F5]" />
          <span className="text-[#80B9E8] text-[11px] select-none">💙</span>
          <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent via-[#B8D8F5] to-[#B8D8F5]" />
        </div>

        {/* Section 2 */}
        <div className="space-y-0.5">
          <h2 className="text-[15px] sm:text-[17px] font-heading font-semibold text-[#35658F] tracking-tight">
            You're irreplaceable. <span className="text-base">💙</span>
          </h2>
          <p className="text-[12px] sm:text-[13px] text-[#60778C] leading-relaxed font-sans px-1">
            You're not someone I could simply replace. You mean so much to me.
          </p>
        </div>

        {/* Divider 2 with tiny blue heart */}
        <div className="flex items-center justify-center gap-2 py-0.5">
          <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent via-[#B8D8F5] to-[#B8D8F5]" />
          <span className="text-[#80B9E8] text-[11px] select-none">💙</span>
          <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent via-[#B8D8F5] to-[#B8D8F5]" />
        </div>

        {/* Section 3 */}
        <div className="space-y-0.5">
          <h2 className="text-[15px] sm:text-[17px] font-heading font-semibold text-[#35658F] tracking-tight">
            I choose you. Always. <span className="text-base">💙</span>
          </h2>
          <p className="text-[12px] sm:text-[13px] text-[#60778C] leading-relaxed font-sans px-1">
            I want you, and all the beautiful memories we still have to make together.
          </p>
        </div>
      </div>
    </motion.div>
  );
};
