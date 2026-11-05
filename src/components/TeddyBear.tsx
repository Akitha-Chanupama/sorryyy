import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface TeddyBearProps {
  isHugging?: boolean;
  className?: string;
}

export const TeddyBear: React.FC<TeddyBearProps> = ({ isHugging = false, className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      animate={
        shouldReduceMotion
          ? {}
          : isHugging
          ? {
              scale: [1, 1.15, 0.95, 1.08, 1],
              rotate: [0, -5, 5, -2, 0],
              y: [0, -14, 0, -4, 0],
            }
          : {
              y: [0, -5, 0],
              rotate: [0, 0.8, -0.8, 0],
            }
      }
      transition={
        isHugging
          ? { duration: 0.85, ease: "easeInOut" }
          : { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[84px] h-[84px] sm:w-[98px] sm:h-[98px] filter drop-shadow-[0_8px_18px_rgba(86,145,190,0.25)] transition-all"
      >
        <defs>
          {/* Fur Gradient - Warm soft mocha cream */}
          <linearGradient id="bearFur" x1="20" y1="20" x2="100" y2="110" gradientUnits="userSpaceOnUse">
            <stop stopColor="#EAD8C7" />
            <stop offset="0.6" stopColor="#DEC7B2" />
            <stop offset="1" stopColor="#CFB29A" />
          </linearGradient>

          {/* Inner Ear / Muzzle Gradient */}
          <linearGradient id="bearInner" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#F9F4EE" />
            <stop offset="1" stopColor="#EAD8C7" />
          </linearGradient>

          {/* Blue Heart Gradient */}
          <linearGradient id="heartGrad" x1="45" y1="55" x2="75" y2="95" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A8D4F7" />
            <stop offset="0.5" stopColor="#80B9E8" />
            <stop offset="1" stopColor="#5B9FD4" />
          </linearGradient>

          {/* Heart Glow */}
          <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ears */}
        {/* Left Ear */}
        <circle cx="34" cy="30" r="14" fill="url(#bearFur)" />
        <circle cx="34" cy="30" r="8" fill="url(#bearInner)" />
        <circle cx="34" cy="30" r="5" fill="#D6EBFF" opacity="0.45" />

        {/* Right Ear */}
        <circle cx="86" cy="30" r="14" fill="url(#bearFur)" />
        <circle cx="86" cy="30" r="8" fill="url(#bearInner)" />
        <circle cx="86" cy="30" r="5" fill="#D6EBFF" opacity="0.45" />

        {/* Head */}
        <circle cx="60" cy="50" r="30" fill="url(#bearFur)" />

        {/* Body */}
        <ellipse cx="60" cy="85" rx="28" ry="24" fill="url(#bearFur)" />

        {/* Feet / Paws */}
        <circle cx="38" cy="102" r="10" fill="url(#bearFur)" />
        <circle cx="38" cy="102" r="6" fill="url(#bearInner)" />
        <circle cx="82" cy="102" r="10" fill="url(#bearFur)" />
        <circle cx="82" cy="102" r="6" fill="url(#bearInner)" />

        {/* Snout / Muzzle */}
        <ellipse cx="60" cy="56" rx="14" ry="10" fill="url(#bearInner)" />

        {/* Nose */}
        <ellipse cx="60" cy="52" rx="4.5" ry="3.5" fill="#4B3D33" />
        <ellipse cx="58.5" cy="51" rx="1.5" ry="1" fill="#FFFFFF" opacity="0.8" />

        {/* Sweet Smile */}
        <path
          d="M56 57 C58 60, 62 60, 64 57"
          stroke="#4B3D33"
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Rosy Pastel Cheeks */}
        <ellipse cx="42" cy="55" rx="5" ry="3.2" fill="#B8D8F5" opacity="0.75" />
        <ellipse cx="78" cy="55" rx="5" ry="3.2" fill="#B8D8F5" opacity="0.75" />

        {/* Eyes with Double Catchlights */}
        {/* Left Eye */}
        <circle cx="48" cy="46" r="3.8" fill="#3D3028" />
        <circle cx="46.8" cy="44.8" r="1.4" fill="#FFFFFF" />
        <circle cx="49.2" cy="47.2" r="0.7" fill="#FFFFFF" />

        {/* Right Eye */}
        <circle cx="72" cy="46" r="3.8" fill="#3D3028" />
        <circle cx="70.8" cy="44.8" r="1.4" fill="#FFFFFF" />
        <circle cx="73.2" cy="47.2" r="0.7" fill="#FFFFFF" />

        {/* Heart held in paws */}
        <g transform="translate(60, 80) scale(0.95) translate(-60, -80)">
          {/* Heart shape */}
          <path
            d="M60 92 C60 92, 43 81, 43 69 C43 62.5, 48 57.5, 54.5 57.5 C57.5 57.5, 60 59.5, 60 59.5 C60 59.5, 62.5 57.5, 65.5 57.5 C72 57.5, 77 62.5, 77 69 C77 81, 60 92, 60 92 Z"
            fill="url(#heartGrad)"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />
          {/* Heart Highlight Reflection */}
          <path
            d="M48 64 C49.5 61, 52.5 60.5, 54 60.5"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
        </g>

        {/* Paws holding the heart */}
        {/* Left Paw */}
        <ellipse cx="45" cy="74" rx="7.5" ry="6" transform="rotate(22 45 74)" fill="url(#bearFur)" />
        {/* Right Paw */}
        <ellipse cx="75" cy="74" rx="7.5" ry="6" transform="rotate(-22 75 74)" fill="url(#bearFur)" />

        {/* Cute Little Sparkle next to Heart */}
        <path
          d="M74 61 L75.5 65.5 L80 67 L75.5 68.5 L74 73 L72.5 68.5 L68 67 L72.5 65.5 Z"
          fill="#FFFFFF"
          opacity="0.9"
        />
      </svg>
    </motion.div>
  );
};
