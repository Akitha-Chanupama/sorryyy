import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Soft, romantic floating hearts
const HEARTS_CONFIG = [
  { id: 1, x: '8%', y: '14%', size: 22, duration: 8.5, delay: 0.2, opacity: 0.45, color: '#80B9E8' },
  { id: 2, x: '88%', y: '18%', size: 28, duration: 9.8, delay: 1.1, opacity: 0.5, color: '#B8D8F5' },
  { id: 3, x: '6%', y: '58%', size: 18, duration: 7.4, delay: 2.3, opacity: 0.4, color: '#B8D8F5' },
  { id: 4, x: '92%', y: '64%', size: 24, duration: 8.2, delay: 0.7, opacity: 0.55, color: '#80B9E8' },
  { id: 5, x: '18%', y: '84%', size: 16, duration: 6.9, delay: 1.8, opacity: 0.35, color: '#D6EBFF' },
  { id: 6, x: '82%', y: '88%', size: 20, duration: 7.7, delay: 2.9, opacity: 0.45, color: '#80B9E8' },
  { id: 7, x: '4%', y: '36%', size: 15, duration: 8.9, delay: 3.4, opacity: 0.3, color: '#D6EBFF' },
  { id: 8, x: '94%', y: '38%', size: 16, duration: 9.2, delay: 1.5, opacity: 0.35, color: '#B8D8F5' },
];

// Cute twinkling stars / sparkles
const STARS_CONFIG = [
  { id: 1, x: '14%', y: '8%', size: 14, delay: 0.5 },
  { id: 2, x: '84%', y: '9%', size: 16, delay: 1.4 },
  { id: 3, x: '24%', y: '26%', size: 12, delay: 2.1 },
  { id: 4, x: '76%', y: '28%', size: 13, delay: 0.9 },
  { id: 5, x: '10%', y: '72%', size: 15, delay: 1.7 },
  { id: 6, x: '88%', y: '78%', size: 12, delay: 2.5 },
];

// Translucent pastel floating bubbles
const BUBBLES_CONFIG = [
  { id: 1, x: '12%', y: '44%', size: 26, duration: 9, delay: 0.4 },
  { id: 2, x: '85%', y: '48%', size: 32, duration: 11, delay: 1.6 },
  { id: 3, x: '28%', y: '92%', size: 20, duration: 8, delay: 2.2 },
  { id: 4, x: '72%', y: '93%', size: 22, duration: 10, delay: 3.1 },
];

// Delicate forget-me-not flowers
const FLOWERS_CONFIG = [
  { id: 1, x: '5%', y: '22%', rotate: 12, size: 20 },
  { id: 2, x: '93%', y: '24%', rotate: -18, size: 22 },
  { id: 3, x: '11%', y: '90%', rotate: -25, size: 18 },
  { id: 4, x: '89%', y: '91%', rotate: 20, size: 20 },
];

export const BackgroundDecorations: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  // Floating heart SVG path
  const heartPath = "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z";

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden z-0 select-none" aria-hidden="true">
      {/* Soft fluffy clouds in the sky */}
      {/* Top Left Cloud */}
      <motion.div
        className="absolute -top-6 -left-12 opacity-80"
        initial={{ x: -10 }}
        animate={shouldReduceMotion ? {} : { x: [0, 18, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="220" height="110" viewBox="0 0 220 110" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="65" cy="70" rx="50" ry="32" fill="white" fillOpacity="0.85" />
          <ellipse cx="115" cy="55" rx="55" ry="38" fill="white" fillOpacity="0.95" />
          <ellipse cx="165" cy="68" rx="45" ry="30" fill="white" fillOpacity="0.8" />
          <ellipse cx="105" cy="78" rx="70" ry="25" fill="#F0F7FF" fillOpacity="0.9" />
        </svg>
      </motion.div>

      {/* Top Right Cloud */}
      <motion.div
        className="absolute -top-4 -right-16 opacity-75"
        initial={{ x: 10 }}
        animate={shouldReduceMotion ? {} : { x: [0, -16, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <svg width="240" height="120" viewBox="0 0 240 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="75" rx="45" ry="28" fill="white" fillOpacity="0.8" />
          <ellipse cx="120" cy="60" rx="60" ry="40" fill="white" fillOpacity="0.92" />
          <ellipse cx="180" cy="72" rx="48" ry="30" fill="white" fillOpacity="0.85" />
          <ellipse cx="130" cy="80" rx="75" ry="24" fill="#F0F7FF" fillOpacity="0.85" />
        </svg>
      </motion.div>

      {/* Mid Subtle Cloud Left */}
      <motion.div
        className="absolute top-[48%] -left-14 opacity-50"
        initial={{ x: 0 }}
        animate={shouldReduceMotion ? {} : { x: [0, 14, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="180" height="90" viewBox="0 0 180 90" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="55" r="30" fill="white" fillOpacity="0.75" />
          <circle cx="95" cy="45" r="38" fill="white" fillOpacity="0.8" />
          <circle cx="140" cy="56" r="28" fill="white" fillOpacity="0.7" />
        </svg>
      </motion.div>

      {/* Mid Subtle Cloud Right */}
      <motion.div
        className="absolute top-[52%] -right-12 opacity-50"
        initial={{ x: 0 }}
        animate={shouldReduceMotion ? {} : { x: [0, -12, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <svg width="170" height="85" viewBox="0 0 170 85" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="45" cy="50" r="28" fill="white" fillOpacity="0.7" />
          <circle cx="85" cy="42" r="34" fill="white" fillOpacity="0.8" />
          <circle cx="125" cy="52" r="26" fill="white" fillOpacity="0.7" />
        </svg>
      </motion.div>

      {/* Floating Blue Hearts */}
      {HEARTS_CONFIG.map((h) => (
        <motion.div
          key={`heart-${h.id}`}
          className="absolute"
          style={{ left: h.x, top: h.y }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -14, 0],
                  rotate: [0, h.id % 2 === 0 ? 6 : -6, 0],
                  scale: [1, 1.05, 1],
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
            style={{ opacity: h.opacity, filter: 'drop-shadow(0 2px 5px rgba(128, 185, 232, 0.35))' }}
          >
            <path d={heartPath} />
          </svg>
        </motion.div>
      ))}

      {/* Sparkling Stars */}
      {STARS_CONFIG.map((star) => (
        <motion.div
          key={`star-${star.id}`}
          className="absolute"
          style={{ left: star.x, top: star.y }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [0.8, 1.25, 0.8],
                  opacity: [0.35, 0.95, 0.35],
                  rotate: [0, 45, 90],
                }
          }
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: star.delay,
          }}
        >
          <svg width={star.size} height={star.size} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 0L14.2 9.8L24 12L14.2 14.2L12 24L9.8 14.2L0 12L9.8 9.8L12 0Z"
              fill="#80B9E8"
              opacity="0.8"
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
            background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.85) 0%, rgba(214,235,255,0.4) 60%, rgba(184,216,245,0.6) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.7)',
            boxShadow: '0 2px 8px rgba(128, 185, 232, 0.2)',
          }}
          animate={
            shouldReduceMotion
              ? {}
              : {
                  y: [0, -18, 0],
                  x: [0, b.id % 2 === 0 ? 5 : -5, 0],
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
          className="absolute opacity-65"
          style={{
            left: f.x,
            top: f.y,
            transform: `rotate(${f.rotate}deg)`,
          }}
        >
          <svg width={f.size} height={f.size} viewBox="0 0 32 32" fill="none">
            {/* 5 rounded blue petals */}
            <circle cx="16" cy="7" r="5" fill="#80B9E8" />
            <circle cx="24.5" cy="13.2" r="5" fill="#80B9E8" />
            <circle cx="21.3" cy="23.2" r="5" fill="#80B9E8" />
            <circle cx="10.7" cy="23.2" r="5" fill="#80B9E8" />
            <circle cx="7.5" cy="13.2" r="5" fill="#80B9E8" />
            {/* Center pistil */}
            <circle cx="16" cy="16" r="3.5" fill="#FFF8DB" stroke="#80B9E8" strokeWidth="1" />
          </svg>
        </div>
      ))}
    </div>
  );
};
