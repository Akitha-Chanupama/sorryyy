import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface TeddyBearProps {
  isHugging?: boolean;
  onBearTap?: () => void;
  className?: string;
}

export const TeddyBear: React.FC<TeddyBearProps> = ({ isHugging = false, onBearTap, className = '' }) => {
  const shouldReduceMotion = useReducedMotion();
  const [isBlinking, setIsBlinking] = useState(false);
  const [isLocalBoop, setIsLocalBoop] = useState(false);

  // Natural blinking loop: blink every 3.5 - 5 seconds
  useEffect(() => {
    if (shouldReduceMotion) return;

    let timeoutId: NodeJS.Timeout;
    const scheduleBlink = () => {
      const nextBlink = 3000 + Math.random() * 2500;
      timeoutId = setTimeout(() => {
        setIsBlinking(true);
        setTimeout(() => {
          setIsBlinking(false);
          scheduleBlink();
        }, 150);
      }, nextBlink);
    };

    scheduleBlink();
    return () => clearTimeout(timeoutId);
  }, [shouldReduceMotion]);

  const handleTap = () => {
    setIsLocalBoop(true);
    setTimeout(() => setIsLocalBoop(false), 800);
    if (onBearTap) onBearTap();
  };

  const isExcited = isHugging || isLocalBoop;

  return (
    <motion.div
      onClick={handleTap}
      role="button"
      tabIndex={0}
      title="Tap me! 🧸"
      className={`relative inline-flex items-center justify-center cursor-pointer select-none ${className}`}
      animate={
        shouldReduceMotion
          ? {}
          : isExcited
          ? {
              scale: [1, 1.16, 0.94, 1.08, 1],
              rotate: [0, -6, 6, -3, 0],
              y: [0, -16, 2, -6, 0],
            }
          : {
              y: [0, -6, 0],
              rotate: [0, 0.8, -0.8, 0],
            }
      }
      transition={
        isExcited
          ? { duration: 0.8, ease: "easeInOut" }
          : { duration: 4.2, repeat: Infinity, ease: "easeInOut" }
      }
      whileTap={{ scale: 0.92 }}
    >
      {/* Ambient glowing halo behind the cute bear */}
      <div className="absolute inset-0 w-24 h-24 sm:w-28 sm:h-28 bg-[#80B9E8]/20 rounded-full blur-xl -z-10 animate-pulse pointer-events-none" />

      {/* Floating mini heart when bear is tapped */}
      {isExcited && (
        <motion.div
          className="absolute -top-3 right-2 text-sm pointer-events-none"
          initial={{ opacity: 0, y: 0, scale: 0.5 }}
          animate={{ opacity: [0, 1, 0], y: -24, scale: 1.2 }}
          transition={{ duration: 0.85, ease: "easeOut" }}
        >
          💙
        </motion.div>
      )}

      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[98px] h-[98px] sm:w-[110px] sm:h-[110px] filter drop-shadow-[0_10px_20px_rgba(86,145,190,0.28)] transition-transform duration-300"
      >
        <defs>
          {/* Fur Gradient - Cuddly honey mocha */}
          <linearGradient id="bearFur" x1="20" y1="20" x2="100" y2="110" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EAD8C7" />
            <stop offset="0.55" stopColor="#DEC7B2" />
            <stop offset="1" stopColor="#CCAFA0" />
          </linearGradient>

          {/* Inner Ear / Snout Gradient */}
          <linearGradient id="bearInner" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#FFF9F5" />
            <stop offset="1" stopColor="#EEDDD0" />
          </linearGradient>

          {/* Glowing Romantic Blue Heart */}
          <linearGradient id="heartGrad" x1="45" y1="55" x2="75" y2="95" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B3DCFD" />
            <stop offset="0.45" stopColor="#80B9E8" />
            <stop offset="1" stopColor="#5093CA" />
          </linearGradient>

          {/* Ribbon Bowtie Gradient */}
          <linearGradient id="ribbonGrad" x1="50" y1="65" x2="70" y2="75" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D6EBFF" />
            <stop offset="0.5" stopColor="#80B9E8" />
            <stop offset="1" stopColor="#5B9FD4" />
          </linearGradient>

          {/* Heart Glow Shadow */}
          <filter id="heartGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#80B9E8" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* EARS with subtle playful twitch */}
        {/* Left Ear */}
        <g className="origin-[34px_30px] transition-transform">
          <circle cx="34" cy="29" r="14" fill="url(#bearFur)" />
          <circle cx="34" cy="29" r="8" fill="url(#bearInner)" />
          <circle cx="34" cy="29" r="4.5" fill="#B8D8F5" opacity="0.5" />
        </g>

        {/* Right Ear */}
        <g className="origin-[86px_30px] transition-transform">
          <circle cx="86" cy="29" r="14" fill="url(#bearFur)" />
          <circle cx="86" cy="29" r="8" fill="url(#bearInner)" />
          <circle cx="86" cy="29" r="4.5" fill="#B8D8F5" opacity="0.5" />
        </g>

        {/* HEAD */}
        <circle cx="60" cy="50" r="30" fill="url(#bearFur)" />

        {/* BODY */}
        <ellipse cx="60" cy="85" rx="27" ry="23" fill="url(#bearFur)" />

        {/* FEET / CHUBBY PAWS */}
        <circle cx="38" cy="102" r="10.5" fill="url(#bearFur)" />
        <circle cx="38" cy="102" r="6" fill="url(#bearInner)" />
        {/* Tiny paw pads */}
        <circle cx="38" cy="102" r="3.2" fill="#B8D8F5" opacity="0.6" />

        <circle cx="82" cy="102" r="10.5" fill="url(#bearFur)" />
        <circle cx="82" cy="102" r="6" fill="url(#bearInner)" />
        <circle cx="82" cy="102" r="3.2" fill="#B8D8F5" opacity="0.6" />

        {/* SNOUT / MUZZLE */}
        <ellipse cx="60" cy="56" rx="14.5" ry="10" fill="url(#bearInner)" />

        {/* NOSE */}
        <ellipse cx="60" cy="51.5" rx="4.5" ry="3.5" fill="#4B3D33" />
        <ellipse cx="58.5" cy="50.5" rx="1.5" ry="1" fill="#FFFFFF" opacity="0.85" />

        {/* SWEET SMILE */}
        <path
          d="M55.5 56.5 C57.5 59.5, 62.5 59.5, 64.5 56.5"
          stroke="#4B3D33"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* BLUSHING CHEEKS WITH TINY HEARTS */}
        <g opacity="0.8">
          <ellipse cx="41" cy="55" rx="5.5" ry="3.5" fill="#B8D8F5" />
          <ellipse cx="79" cy="55" rx="5.5" ry="3.5" fill="#B8D8F5" />
          {/* Subtle blush heart marks */}
          <path d="M41 54.5 C41 53.5 39.5 53 39 54 C38.5 53 37 53.5 37 54.5 C37 56 39 57 39 57 C39 57 41 56 41 54.5 Z" fill="#80B9E8" opacity="0.75" />
          <path d="M83 54.5 C83 53.5 81.5 53 81 54 C80.5 53 79 53.5 79 54.5 C79 56 81 57 81 57 C81 57 83 56 83 54.5 Z" fill="#80B9E8" opacity="0.75" />
        </g>

        {/* EYES - Animated Blinking or Sparkling */}
        {isBlinking ? (
          /* Closed smiling eye arcs when blinking */
          <g stroke="#3D3028" strokeWidth="2.2" strokeLinecap="round" fill="none">
            <path d="M44 46 C46 49, 50 49, 52 46" />
            <path d="M68 46 C70 49, 74 49, 76 46" />
          </g>
        ) : (
          /* Glistening open eyes with catchlights & sparkles */
          <g>
            {/* Left Eye */}
            <circle cx="48" cy="45.5" r="4.2" fill="#3D3028" />
            <circle cx="46.5" cy="44" r="1.6" fill="#FFFFFF" />
            <circle cx="49.5" cy="47" r="0.8" fill="#FFFFFF" />

            {/* Right Eye */}
            <circle cx="72" cy="45.5" r="4.2" fill="#3D3028" />
            <circle cx="70.5" cy="44" r="1.6" fill="#FFFFFF" />
            <circle cx="73.5" cy="47" r="0.8" fill="#FFFFFF" />
          </g>
        )}

        {/* CUTE BLUE BOWTIE ON NECK */}
        <g transform="translate(60, 68)">
          <path d="M-6 -3 L-12 -6 L-12 6 L-6 3 Z" fill="url(#ribbonGrad)" stroke="#FFFFFF" strokeWidth="0.8" />
          <path d="M6 -3 L12 -6 L12 6 L6 3 Z" fill="url(#ribbonGrad)" stroke="#FFFFFF" strokeWidth="0.8" />
          <ellipse cx="0" cy="0" rx="3" ry="3" fill="#80B9E8" stroke="#FFFFFF" strokeWidth="1" />
        </g>

        {/* 3D GLOWING HEART HELD IN PAWS (Beats rhythmically) */}
        <g className="animate-heart-pulse origin-[60px_80px]">
          {/* Heart shape */}
          <path
            d="M60 92 C60 92, 42 80.5, 42 68 C42 61, 47.5 56, 54 56 C57.5 56, 60 58.2, 60 58.2 C60 58.2, 62.5 56, 66 56 C72.5 56, 78 61, 78 68 C78 80.5, 60 92, 60 92 Z"
            fill="url(#heartGrad)"
            stroke="#FFFFFF"
            strokeWidth="1.6"
            filter="url(#heartGlow)"
          />
          {/* Glossy reflection on upper left lobe */}
          <path
            d="M47 63 C48.5 59.5, 52 58.8, 54 58.8"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />
          {/* Tiny sparkle on heart */}
          <path
            d="M73 62 L74.2 65.2 L77.5 66.5 L74.2 67.8 L73 71 L71.8 67.8 L68.5 66.5 L71.8 65.2 Z"
            fill="#FFFFFF"
            opacity="0.95"
          />
        </g>

        {/* CHUBBY PAWS WRAPPING AROUND THE HEART */}
        <ellipse cx="45" cy="74.5" rx="8" ry="6.5" transform="rotate(24 45 74.5)" fill="url(#bearFur)" stroke="#FDF6F0" strokeWidth="0.8" />
        <ellipse cx="75" cy="74.5" rx="8" ry="6.5" transform="rotate(-24 75 74.5)" fill="url(#bearFur)" stroke="#FDF6F0" strokeWidth="0.8" />
      </svg>
    </motion.div>
  );
};
