import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { TeddyBear } from './TeddyBear';
import { Heart, Sparkles, Check, Phone } from 'lucide-react';
import { sendResponseNotification } from '../services/notificationService';
import { CONFIG } from '../config';

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

  // Decision State
  const [userChoice, setUserChoice] = useState<'forgive' | 'angry' | null>(null);
  const [angryTapCount, setAngryTapCount] = useState(0);
  const [isSending, setIsSending] = useState(false);
  const [emailStatusMessage, setEmailStatusMessage] = useState<string | null>(null);

  // Trigger heart burst particles
  const triggerBurst = useCallback(() => {
    setIsHugging(true);
    setHugCount((prev) => prev + 1);

    const newHearts: BurstHeart[] = Array.from({ length: 24 }).map((_, i) => {
      const angle = (i / 24) * 360 + (Math.random() * 20 - 10);
      const rad = (angle * Math.PI) / 180;
      const distance = 40 + Math.random() * 70;
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

    setTimeout(() => {
      setIsHugging(false);
    }, 1200);
  }, []);

  // Choice 1: "I forgive you and I love you 💙"
  const handleForgive = async () => {
    setUserChoice('forgive');
    triggerBurst();
    setIsSending(true);

    const res = await sendResponseNotification({
      choice: 'forgive',
      choiceText: 'I forgive you and I love you 💙',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });

    setIsSending(false);
    setEmailStatusMessage(res.message);
  };

  // Choice 2: "No, I'm still angry with you 😤"
  const handleAngry = async () => {
    // Playful gentle hesitation: if she taps once, prompt cute confirmation
    if (angryTapCount === 0) {
      setAngryTapCount(1);
      return;
    }

    // On second tap, confirm and send
    setUserChoice('angry');
    setIsSending(true);

    const res = await sendResponseNotification({
      choice: 'angry',
      choiceText: "No, I'm still angry with you 😤",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });

    setIsSending(false);
    setEmailStatusMessage(res.message);
  };

  return (
    <div className="relative flex flex-col items-center justify-center my-auto w-full select-none shrink-0">
      {/* Center Stage: Teddy Bear with Animated Hearts */}
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
                  width: `${h.scale * 20}px`,
                  height: `${h.scale * 20}px`,
                  filter: 'drop-shadow(0 2px 5px rgba(86,145,190,0.35))',
                }}
              />
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Floating blue hearts around teddy bear when hugged */}
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
          </>
        )}

        {/* Teddy Bear Component (Tappable for hugs!) */}
        <TeddyBear isHugging={isHugging} onBearTap={triggerBurst} />
      </div>

      {/* Dynamic Feedback Message depending on her choice */}
      <div className="min-h-[26px] flex items-center justify-center my-0.5 text-center px-2">
        <AnimatePresence mode="wait">
          {userChoice === 'forgive' ? (
            <motion.div
              key="forgive-response"
              initial={{ opacity: 0, y: 4, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.92 }}
              className="px-3 py-0.5 rounded-full bg-white/95 border border-[#B8D8F5] shadow-xs text-[#35658F] text-[11.5px] sm:text-[12.5px] font-semibold flex items-center gap-1.5 backdrop-blur-xs"
            >
              <Sparkles className="w-3 h-3 text-[#80B9E8] animate-spin" style={{ animationDuration: '6s' }} />
              <span>You made my day! Call me after lectures! 💙</span>
            </motion.div>
          ) : userChoice === 'angry' ? (
            <motion.div
              key="angry-response"
              initial={{ opacity: 0, y: 4, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.92 }}
              className="px-3 py-0.5 rounded-full bg-white/95 border border-[#B8D8F5] shadow-xs text-[#35658F] text-[11px] sm:text-[12px] font-semibold flex items-center gap-1 backdrop-blur-xs"
            >
              <span>I understand baby 🥺 Please call me when lectures end! 💙</span>
            </motion.div>
          ) : angryTapCount === 1 ? (
            <motion.div
              key="angry-confirm"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-[11px] text-[#477FAF] font-semibold flex items-center gap-1"
            >
              <span>Are you really sure? 🥺 Teddy is so sad! Tap again if you are...</span>
            </motion.div>
          ) : hugCount > 0 ? (
            <motion.div
              key="hug-delivered"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-3 py-0.5 rounded-full bg-white/95 border border-[#B8D8F5] shadow-xs text-[#35658F] text-[11.5px] font-semibold flex items-center gap-1"
            >
              <span>One big warm hug, just for you! 💙</span>
            </motion.div>
          ) : (
            <motion.p
              key="prompt-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[11.5px] sm:text-[12.5px] text-[#60778C] font-medium font-sans flex items-center gap-1"
            >
              <span>Will you forgive me?</span>
              <span className="text-xs">🥺</span>
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* The Two Choice Buttons (Mobile Friendly Stack / Grid) */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-1.5 w-full max-w-[340px] px-1">
        {/* Button 1: "I forgive you and I love you 💙" */}
        <motion.button
          type="button"
          onClick={handleForgive}
          whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          className={`relative overflow-hidden w-full sm:w-auto flex-1 px-4 py-2 rounded-full font-semibold text-[11.5px] sm:text-[12px] tracking-wide shadow-btn-shadow transition-all duration-300 flex items-center justify-center gap-1.5 touch-manipulation cursor-pointer ${
            userChoice === 'forgive'
              ? 'bg-[#477FAF] text-white ring-2 ring-white'
              : 'bg-gradient-to-r from-[#80B9E8] via-[#68A7DC] to-[#477FAF] text-white'
          }`}
          aria-label="I forgive you and I love you"
        >
          <span className="absolute -inset-full w-[250%] h-[250%] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none animate-light-ray" />
          <span className="relative z-10 flex items-center justify-center gap-1">
            {userChoice === 'forgive' && <Check className="w-3.5 h-3.5" />}
            <span>I forgive you and I love you</span>
            <span className="text-xs">💙</span>
          </span>
        </motion.button>

        {/* Button 2: "No, I'm still angry with you 😤" */}
        <motion.button
          type="button"
          onClick={handleAngry}
          whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          animate={angryTapCount === 1 ? { x: [-3, 3, -3, 3, 0] } : {}}
          className={`relative w-full sm:w-auto px-3.5 py-2 rounded-full font-semibold text-[11px] sm:text-[11.5px] tracking-wide transition-all duration-300 flex items-center justify-center gap-1 touch-manipulation cursor-pointer border ${
            userChoice === 'angry'
              ? 'bg-[#D6EBFF] text-[#35658F] border-[#80B9E8]'
              : angryTapCount === 1
              ? 'bg-[#FFF0F0] text-[#D05050] border-[#FFB8B8]'
              : 'bg-white/85 text-[#60778C] border-[#B8D8F5] hover:bg-white'
          }`}
          aria-label="No, I'm still angry with you"
        >
          <span>{angryTapCount === 1 && userChoice !== 'angry' ? "Really still angry? 🥺" : "No, I'm still angry with you"}</span>
          <span className="text-xs">{angryTapCount === 1 ? "🥺" : "😤"}</span>
        </motion.button>
      </div>

      {/* Hug / Call Action Row beneath response */}
      <div className="flex items-center justify-center gap-3 mt-1.5 text-[10.5px]">
        {/* Tap for a hug option */}
        <button
          type="button"
          onClick={triggerBurst}
          className="text-[#477FAF] hover:text-[#35658F] font-medium flex items-center gap-1 py-0.5 px-2 rounded-full hover:bg-white/60 transition-colors cursor-pointer touch-manipulation"
        >
          <span>Tap for a hug</span>
          <span className="text-xs">🧸</span>
          {hugCount > 0 && <span className="font-bold text-[#80B9E8]">({hugCount})</span>}
        </button>

        {/* Optional Direct Call Shortcut if phone number configured */}
        {CONFIG.phoneNumber && (
          <a
            href={`tel:${CONFIG.phoneNumber}`}
            className="text-[#477FAF] hover:text-[#35658F] font-medium flex items-center gap-1 py-0.5 px-2 rounded-full hover:bg-white/60 transition-colors cursor-pointer"
          >
            <Phone className="w-2.5 h-2.5 text-[#80B9E8]" />
            <span>Call him 📞</span>
          </a>
        )}
      </div>

      {/* Discreet email delivery status indicator */}
      {isSending ? (
        <p className="text-[9.5px] text-[#477FAF] mt-0.5 animate-pulse">
          Sending response... ✉️
        </p>
      ) : emailStatusMessage ? (
        <p className="text-[9.5px] text-[#477FAF]/80 mt-0.5">
          {emailStatusMessage}
        </p>
      ) : null}
    </div>
  );
};
