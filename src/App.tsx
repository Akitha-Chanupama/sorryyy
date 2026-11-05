import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BackgroundDecorations } from './components/BackgroundDecorations';
import { Header } from './components/Header';
import { ApologyCard } from './components/ApologyCard';
import { HugInteraction } from './components/HugInteraction';
import { Footer } from './components/Footer';

interface TapHeart {
  id: number;
  x: number;
  y: number;
  emoji: string;
}

const TAP_EMOJIS = ['💙', '♡', '✨', '🧸'];

export const App: React.FC = () => {
  const [tapHearts, setTapHearts] = useState<TapHeart[]>([]);

  // Magical screen tap / click effect: spawns cute floating heart at touch point
  const spawnHeartAt = useCallback((clientX: number, clientY: number) => {
    const newHeart: TapHeart = {
      id: Date.now() + Math.random(),
      x: clientX,
      y: clientY,
      emoji: TAP_EMOJIS[Math.floor(Math.random() * TAP_EMOJIS.length)],
    };

    setTapHearts((prev) => [...prev.slice(-10), newHeart]);

    setTimeout(() => {
      setTapHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 900);
  }, []);

  const handleScreenClick = useCallback((e: React.MouseEvent<HTMLElement>) => {
    spawnHeartAt(e.clientX, e.clientY);
  }, [spawnHeartAt]);

  const handleTouchStart = useCallback((e: React.TouchEvent<HTMLElement>) => {
    if (e.touches && e.touches[0]) {
      spawnHeartAt(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, [spawnHeartAt]);

  return (
    <main
      onClick={handleScreenClick}
      onTouchStart={handleTouchStart}
      className="relative min-h-[100dvh] w-full dreamy-aurora overflow-x-hidden overflow-y-auto flex flex-col items-center justify-between px-3.5 sm:px-4 py-2 sm:py-3 safe-top safe-bottom antialiased cursor-default select-none"
    >
      {/* Dreamy animated sky elements & background decorations */}
      <BackgroundDecorations />

      {/* Interactive Screen Tap Hearts */}
      <AnimatePresence>
        {tapHearts.map((th) => (
          <motion.div
            key={th.id}
            initial={{ opacity: 1, scale: 0.6, x: th.x - 12, y: th.y - 12 }}
            animate={{ opacity: 0, scale: 1.3, y: th.y - 50 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
            className="fixed pointer-events-none z-50 text-base select-none filter drop-shadow-[0_2px_4px_rgba(128,185,232,0.4)]"
          >
            {th.emoji}
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main Content Shell - Mobile Native Frame */}
      <div className="relative z-10 w-full max-w-[410px] min-h-full flex flex-col justify-between items-center py-1 sm:py-2 mx-auto space-y-2 sm:space-y-3">
        {/* Top: Opening Note & Warm Greetings */}
        <Header />

        {/* Center: Heartfelt Apology Card with Postage Stamp & Secret Promise */}
        <ApologyCard />

        {/* Bottom: Adorable Blinking Teddy Bear & Interactive Choice Buttons */}
        <HugInteraction />

        {/* Bottommost: Delicate Romantic Footer */}
        <Footer />
      </div>
    </main>
  );
};

export default App;
