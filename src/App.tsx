import React from 'react';
import { BackgroundDecorations } from './components/BackgroundDecorations';
import { Header } from './components/Header';
import { ApologyCard } from './components/ApologyCard';
import { HugInteraction } from './components/HugInteraction';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <main className="relative min-h-[100dvh] h-[100dvh] w-full dreamy-bg overflow-x-hidden overflow-y-auto sm:overflow-y-hidden flex flex-col items-center justify-between px-3 sm:px-4 py-2 sm:py-3.5 antialiased">
      {/* Dreamy animated sky elements & background decorations */}
      <BackgroundDecorations />

      {/* Main Single-Screen Content Shell */}
      <div className="relative z-10 w-full max-w-[420px] flex-1 flex flex-col justify-between items-center my-auto">
        {/* Top: Opening Note & Warm Greetings */}
        <Header />

        {/* Center: Heartfelt Apology Card */}
        <ApologyCard />

        {/* Bottom: Adorable Teddy Bear & Interactive Hug Button */}
        <HugInteraction />

        {/* Bottommost: Delicate Romantic Footer */}
        <Footer />
      </div>
    </main>
  );
};

export default App;
