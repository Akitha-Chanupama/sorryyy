import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { TeddyBear } from './TeddyBear';
import { Heart, Sparkles } from 'lucide-react';

interface BurstHeart {
  id: number;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  color: string;
}

const BLUE_SHADES = ['#80B9E8', '#B8D8F5', '#A8D4F7', '#D6EBFF', '#477FAF'];

export const HugInteraction: React.FC = () => {
  const [isHugging, setIsHugging] = useState(false);
  const [hugCount, setHugCount] = useState(0);
  const [burstHearts, setBurstHearts] = useState<BurstHeart[]>([]);
  const shouldReduceMotion = useReducedMotion();

  const handleHugClick = useCallback(() => {
    setIsHugging(true);
    setHugCount((prev) => prev + 1);

    // 24 Heart Burst Particles in a 360 degree explosion
    const newHearts: BurstHeart[] = Array.from({ length: 24 }).map((_, i) => {
      const angle = (i / 24) * 360 + (Math.random() * 20 - 10);
      const rad = (angle * Math.PI) / 180;
      const distance = 45 + Math.random() * 75;
      return {
        id: Date.now() + i,
        x: Math.cos(rad) * distance,
        y: Math.sin(rad) * distance - 25,
        scale: 0.6 + Math.random() * 0.75,
        rotation: Math.random() * 60 - 30,
        color: BLUE_SHADES[Math.floor(Math.random() * BLUE_SHADES.length)],
      };
    });

    setBurstHearts(newHearts);

    const timer = setTimeout(() => {
      setIsHugging(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center my-auto w-full select-none shrink-0">
      {/* 1. Center Stage: Teddy Bear with Animated Hearts & Tap Reaction */}
      <div className="relative flex items-center justify-center mb-0.5">
        {/* Heart Burst Particles */}
        <AnimatePresence>
          {burstHearts.map((h) => (
            <motion.div
              key={h.id}
              className="absolute pointer-events-none z-30"
              initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: 0 }}
              animate={{
                x: h.x,
                y: h.y,
                scale: h.scale,
                opacity: 0,
                rotate: h.rotation,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <Heart
                style={{
                  fill: h.color,
                  stroke: '#FFFFFF',
                  strokeWidth: 1.2,
                  width: `${h.scale * 22}px`,
                  height: `${h.scale * 22}px`,
                  filter: 'drop-shadow(0 2px 5px rgba(86,145,190,0.35))',
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Floating blue hearts around the teddy bear when hug delivered */}
        {hugCount > 0 && !shouldReduceMotion && (
          <>
            <motion.div
              className="absolute pointer-events-none text-[#80B9E8] text-xs z-10"
              style={{ top: '8%', left: '8%' }}
              animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6], scale: [0.9, 1.15, 0.9] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              💙
            </motion.div>
            <motion.div
              className="absolute pointer-events-none text-[#A8D4F7] text-sm z-10"
              style={{ top: '12%', right: '10%' }}
              animate={{ y: [0, -10, 0], opacity: [0.7, 1, 0.7], scale: [1, 1.2, 1] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 0.3 }}
            >
              💙
            </motion.div>
            <motion.div
              className="absolute pointer-events-none text-[#B8D8F5] text-xs z-10"
              style={{ bottom: '18%', left: '4%' }}
              animate={{ y: [0, -6, 0], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
            >
              ♡
            </motion.div>
            <motion.div
              className="absolute pointer-events-none text-[#80B9E8] text-xs z-10"
              style={{ bottom: '20%', right: '6%' }}
              animate={{ y: [0, -8, 0], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.1, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
            >
              ♡
            </motion.div>
          </>
        )}

        {/* Teddy Bear Component (Tappable!) */}
        <TeddyBear isHugging={isHugging} onBearTap={handleHugClick} />
      </div>

      {/* 2. Text message: Prompt or Hug Delivered confirmation */}
      <div className="h-6 sm:h-7 flex items-center justify-center my-0.5">
        <AnimatePresence mode="wait">
          {hugCount > 0 ? (
            <motion.div
              key="hug-delivered-msg"
              initial={{ opacity: 0, y: 4, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.92 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="px-3.5 py-0.5 rounded-full bg-white/95 border border-[#B8D8F5] shadow-xs text-[#35658F] text-[12px] sm:text-[13px] font-semibold flex items-center gap-1.5 backdrop-blur-xs"
            >
              <Sparkles className="w-3 h-3 text-[#80B9E8] animate-spin" style={{ animationDuration: '6s' }} />
              <span>One big warm hug, just for you!</span>
              <span className="text-sm">💙</span>
            </motion.div>
          ) : (
            <motion.p
              key="hug-prompt-msg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-[12px] sm:text-[13px] text-[#60778C] font-medium font-sans flex items-center gap-1"
            >
              <span>Can I send you a little hug?</span>
              <span className="text-sm">🥺</span>
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* 3. Tap for a hug Button with luxurious pillowy glow & light ray */}
      <motion.button
        type="button"
        onClick={handleHugClick}
        whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
        whileTap={shouldReduceMotion ? {} : { scale: 0.94 }}
        className="relative group overflow-hidden px-6 sm:px-7 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#80B9E8] via-[#68A7DC] to-[#477FAF] text-white font-semibold text-xs sm:text-[13px] tracking-wide shadow-btn-shadow transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-[#80B9E8] focus:ring-offset-2 flex items-center justify-center gap-1.5 cursor-pointer"
        aria-label="Send a hug"
      >
        {/* Animated Light Ray reflection sweeping across */}
        <span className="absolute -inset-full w-[250%] h-[250%] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none animate-light-ray" />

        <span className="relative z-10 flex items-center gap-1.5 drop-shadow-xs">
          {hugCount > 0 ? (
            <>
              <span>Hug delivered!</span>
              <span className="text-sm">🫂</span>
              {hugCount > 1 && (
                <span className="ml-1 px-1.5 py-0.2 bg-white/25 rounded-full text-[10px] font-bold">
                  {hugCount}x
                </span>
              )}
            </>
          ) : (
            <>
              <span>Tap for a hug</span>
              <span className="text-sm">🧸</span>
            </>
          )}
        </span>
      </motion.button>
    </div>
  );
};
