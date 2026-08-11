import React, { useEffect, useRef } from "react";

import { initIntroAnimation } from "../../animations/introAnimations";

const IntroScreen = ({ onComplete }) => {
  const introRef = useRef(null);

  useEffect(() => {
    const cleanup = initIntroAnimation(introRef.current, onComplete);

    return cleanup;
  }, [onComplete]);

  return (
    <main
      ref={introRef}
      className="intro-screen fixed inset-0 z-[9999] flex min-h-screen items-center justify-center overflow-hidden bg-[#050505] text-white"
    >
      {/* Background grid */}
      <div className="intro-grid absolute inset-0 opacity-[0.04]" />

      {/* Ambient glow */}
      <div className="intro-glow absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      {/* Top information */}
      <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-10 sm:top-10">
        <span className="intro-dot h-2 w-2 rounded-full bg-white" />

        <span className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">
          Portfolio
        </span>
      </div>

      {/* Year */}
      <div className="absolute right-6 top-6 text-[10px] uppercase tracking-[0.35em] text-zinc-600 sm:right-10 sm:top-10">
        2026
      </div>

      {/* Main typography */}
      <div className="relative z-10 overflow-hidden text-center">
        <p className="intro-small-text mb-6 text-xs uppercase tracking-[0.5em] text-zinc-500">
          Welcome to my
        </p>

        <h1 className="intro-title select-none text-[15vw] font-black uppercase leading-[0.8] tracking-[-0.08em] sm:text-[13vw] lg:text-[11rem]">
          Portfolio
        </h1>

        <div className="intro-line mx-auto mt-8 h-px w-0 bg-white/40" />

        <p className="intro-subtitle mt-6 text-xs uppercase tracking-[0.4em] text-zinc-600">
          Full Stack Developer
        </p>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between sm:bottom-10 sm:left-10 sm:right-10">
        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
          Digital experiences
        </span>

        <span className="intro-status text-[10px] uppercase tracking-[0.3em] text-zinc-600">
          Initializing
        </span>
      </div>

      {/* Exit curtain */}
      <div className="intro-curtain absolute inset-0 z-50 origin-bottom bg-white" />
    </main>
  );
};

export default IntroScreen;
