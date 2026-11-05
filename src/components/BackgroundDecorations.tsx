import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Soft, romantic floating hearts
const HEARTS_CONFIG = [
  { id: 1, x: '7%', y: '12%', size: 24, duration: 8.5, delay: 0.2, opacity: 0.5, color: '#80B9E8' },
  { id: 2, x: '88%', y: '16%', size: 30, duration: 9.8, delay: 1.1, opacity: 0.55, color: '#B8D8F5' },
  { id: 3, x: '5%', y: '54%', size: 20, duration: 7.4, delay: 2.3, opacity: 0.45, color: '#B8D8F5' },
  { id: 4, x: '92%', y: '60%', size: 26, duration: 8.2, delay: 0.7, opacity: 0.6, color: '#80B9E8' },
  { id: 5, x: '16%', y: '82%', size: 18, duration: 6.9, delay: 1.8, opacity: 0.4, color: '#D6EBFF' },
  { id: 6, x: '84%', y: '86%', size: 22, duration: 7.7, delay: 2.9, opacity: 0.5, color: '#80B9E8' },
  { id: 7, x: '3%', y: '34%', size: 16, duration: 8.9, delay: 3.4, opacity: 0.35, color: '#D6EBFF' },
  { id: 8, x: '95%', y: '36%', size: 18, duration: 9.2, delay: 1.5, opacity: 0.4, color: '#B8D8F5' },
];

// Twinkling stars / sparkles
const STARS_CONFIG = [
  { id: 1, x: '12%', y: '7%', size: 16, delay: 0.3 },
  { id: 2, x: '85%', y: '8%', size: 18, delay: 1.2 },
  { id: 3, x: '22%', y: '24%', size: 14, delay: 2.0 },
  { id: 4, x: '78%', y: '26%', size: 15, delay: 0.8 },
  { id: 5, x: '9%', y: '70%', size: 17, delay: 1.6 },
  { id: 6, x: '89%', y: '76%', size: 14, delay: 2.4 },
];

// Translucent pastel floating bubbles
const BUBBLES_CONFIG = [
  { id: 1, x: '10%', y: '42%', size: 28, duration: 9, delay: 0.4 },
  { id: 2, x: '86%', y: '46%', size: 34, duration: 11, delay: 1.6 },
  { id: 3, x: '26%', y: '90%', size: 22, duration: 8, delay: 2.2 },
  { id: 4, x: '74%', y: '92%', size: 24, duration: 10, delay: 3.1 },
];

// Delicate forget-me-not flowers
const FLOWERS_CONFIG = [
  { id: 1, x: '4%', y: '20%', rotate: 12, size: 22 },
  { id: 2, x: '94%', y: '22%', rotate: -18, size: 24 },
  { id: 3, x: '10%', y: '88%', rotate: -25, size: 20 },
  { id: 4, x: '90%', y: '89%', rotate: 20, size: 22 },
];

export const BackgroundDecorations: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const heartPath = "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0 select-none" aria-hidden="true">
      {/* Soft Ambient Radial Light Orbs */}
      <div className="absolute top-[10%] left-[15%] w-64 h-64 bg-[#D6EBFF]/60 rounded-full blur-3xl" />
      <div className="absolute top-[40%] right-[10%] w-72 h-72 bg-[#B8D8F5]/50 rounded-full blur-3xl" />
      <div className="absolute bottom-[10%] left-[30%] w-80 h-80 bg-[#D6EBFF]/60 rounded-full blur-3xl" />

      {/* Top Left Fluffy Cloud */}
      <motion.div
        className="absolute -top-6 -left-12 opacity-85"
        initial={{ x: -10 }}
        animate={shouldReduceMotion ? {} : { x: [0, 22, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="240" height="120" viewBox="0 0 240 120" fill="none">
          <ellipse cx="70" cy="75" rx="55" ry="34" fill="white" fillOpacity="0.88" />
          <ellipse cx="125" cy="58" rx="60" ry="42" fill="white" fillOpacity="0.96" />
          <ellipse cx="180" cy="72" rx="50" ry="32" fill="white" fillOpacity="0.85" />
          <ellipse cx="115" cy="85" rx="75" ry="26" fill="#F0F7FF" fillOpacity="0.9" />
        </svg>
      </motion.div>

      {/* Top Right Fluffy Cloud */}
      <motion.div
        className="absolute -top-4 -right-16 opacity-80"
        initial={{ x: 10 }}
        animate={shouldReduceMotion ? {} : { x: [0, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg width="250" height="125" viewBox="0 0 250 125" fill="none">
          <ellipse cx="65" cy="80" rx="48" ry="30" fill="white" fillOpacity="0.85" />
          <ellipse cx="130" cy="62" rx="65" ry="42" fill="white" fillOpacity="0.95" />
          <ellipse cx="190" cy="76" rx="52" ry="32" fill="white" fillOpacity="0.88" />
          <ellipse cx="140" cy="86" rx="80" ry="26" fill="#F0F7FF" fillOpacity="0.9" />
        </svg>
      </motion.div>

      {/* Mid Subtle Cloud Left */}
      <motion.div
        className="absolute top-[48%] -left-14 opacity-55"
        initial={{ x: 0 }}
        animate={shouldReduceMotion ? {} : { x: [0, 16, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="190" height="95" viewBox="0 0 190 95" fill="none">
          <circle cx="55" cy="60" r="32" fill="white" fillOpacity="0.8" />
          <circle cx="105" cy="48" r="40" fill="white" fillOpacity="0.88" />
          <circle cx="150" cy="60" r="30" fill="white" fillOpacity="0.75" />
        </svg>
      </motion.div>

      {/* Mid Subtle Cloud Right */}
      <motion.div
        className="absolute top-[52%] -right-12 opacity-55"
        initial={{ x: 0 }}
        animate={shouldReduceMotion ? {} : { x: [0, -14, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <svg width="180" height="90" viewBox="0 0 180 90" fill="none">
          <circle cx="50" cy="54" r="30" fill="white" fillOpacity="0.75" />
          <circle cx="95" cy="45" r="36" fill="white" fillOpacity="0.85" />
          <circle cx="135" cy="56" r="28" fill="white" fillOpacity="0.75" />
        </svg>
      </motion.div>

      {/* Floating Blue Hearts with depth & soft glow */}
      {HEARTS_CONFIG.map((h) => (
        <motion.div
          key={`heart-${h.id}`}
          className="absolute"
          style={{ left: h.x, top: h.y }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -16, 0],
                  rotate: [0, h.id % 2 === 0 ? 8 : -8, 0],
                  scale: [1, 1.08, 1],
                }
          }
          transition={{
            duration: h.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: h.delay,
          }}
        >
          <svg
            width={h.size}
            height={h.size}
            viewBox="0 0 24 24"
            fill={h.color}
            style={{ opacity: h.opacity, filter: 'drop-shadow(0 3px 6px rgba(128, 185, 232, 0.4))' }}
          >
            <path d={heartPath} />
          </svg>
        </motion.div>
      ))}

      {/* Sparkling Twinkling Stars */}
      {STARS_CONFIG.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute"
          style={{ left: star.x, top: star.y }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [0.8, 1.3, 0.8],
                  opacity: [0.35, 1, 0.35],
                  rotate: [0, 90, 180],
                }
          }
          transition={{
            duration: 3.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        >
          <svg width={star.size} height={star.size} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z"
              fill="#80B9E8"
              opacity="0.85"
            />
            <circle cx="12" cy="12" r="3" fill="#FFFFFF" />
          </svg>
        </motion.div>
      ))}

      {/* Floating Translucent Bubbles */}
      {BUBBLES_CONFIG.map((b) => (
        <motion.div
          key={`bubble-${b.id}`}
          className="absolute rounded-full"
          style={{
            left: b.x,
            top: b.y,
            width: b.size,
            height: b.size,
            background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.9) 0%, rgba(214,235,255,0.45) 60%, rgba(184,216,245,0.65) 100%)',
            border: '1.2px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 3px 10px rgba(128, 185, 232, 0.25)',
          }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -20, 0],
                  x: [0, b.id % 2 === 0 ? 6 : -6, 0],
                }
          }
          transition={{
            duration: b.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: b.delay,
          }}
        />
      ))}

      {/* Delicate Forget-Me-Not Flowers */}
      {FLOWERS_CONFIG.map((f) => (
        <div
          key={`flower-${f.id}`}
          className="absolute opacity-75"
          style={{
            left: f.x,
            top: f.y,
            transform: `rotate(${f.rotate}deg)`,
          }}
        >
          <svg width={f.size} height={f.size} viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="7" r="5" fill="#80B9E8" />
            <circle cx="24.5" cy="13.2" r="5" fill="#80B9E8" />
            <circle cx="21.3" cy="23.2" r="5" fill="#80B9E8" />
            <circle cx="10.7" cy="23.2" r="5" fill="#80B9E8" />
            <circle cx="7.5" cy="13.2" r="5" fill="#80B9E8" />
            <circle cx="16" cy="16" r="3.5" fill="#FFF8DB" stroke="#80B9E8" strokeWidth="1.2" />
          </svg>
        </div>
      ))}
    </div>
  );
};
