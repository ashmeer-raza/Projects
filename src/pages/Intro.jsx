// src/pages/Intro.jsx

import React, { useLayoutEffect, useRef } from "react";
import { useNavigate } from "react-router";

import { initIntroAnimation } from "../animations/introAnimations";

const Intro = () => {
  const introRef = useRef(null);
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const cleanup = initIntroAnimation(introRef.current, () => {
      navigate("/home", { replace: true });
    });

    return cleanup;
  }, [navigate]);

  return (
    <main
      ref={introRef}
      className="intro-screen fixed inset-0 z-[9999] overflow-hidden bg-[#050505] text-white"
    >
      {/* Background */}
      <div className="intro-grid pointer-events-none absolute inset-0" />

      {/* Ambient glow */}
      <div className="intro-glow pointer-events-none absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[100px] sm:h-[400px] sm:w-[400px]" />

      {/* Top left */}
      <div className="absolute left-6 top-6 sm:left-10 sm:top-8">
        <div className="flex items-center gap-3">
          <span className="intro-dot h-1.5 w-1.5 rounded-full bg-white" />

          <span className="text-[9px] uppercase tracking-[0.35em] text-zinc-500 sm:text-[10px]">
            Portfolio
          </span>
        </div>
      </div>

      {/* Top right */}
      <div className="absolute right-6 top-6 sm:right-10 sm:top-8">
        <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-600 sm:text-[10px]">
          2026
        </span>
      </div>

      {/* Main content */}
      <div className="absolute inset-0 flex items-center justify-center px-6">
        <div className="w-full max-w-5xl text-center">
          {/* Welcome */}
          <div className="intro-welcome overflow-hidden">
            <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 sm:text-xs">
              Welcome to my
            </p>
          </div>

          {/* Main title */}
          <div className="intro-title-wrapper mt-5 overflow-hidden sm:mt-7">
            <h1 className="intro-title font-sans text-[17vw] font-bold uppercase leading-[0.85] tracking-[-0.06em] sm:text-[13vw] lg:text-[9rem]">
              Portfolio<span className="text-violet-500">.</span>
            </h1>
          </div>

          {/* Divider */}
          <div className="intro-line mx-auto mt-7 h-px w-0 bg-white/20 sm:mt-9" />

          {/* Role */}
          <div className="intro-role mt-5 overflow-hidden sm:mt-6">
            <p className="text-[9px] uppercase tracking-[0.35em] text-zinc-600 sm:text-xs">
              Full Stack Developer
            </p>
          </div>
        </div>
      </div>

      {/* Bottom left */}
      <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-10">
        <span className="text-[8px] uppercase tracking-[0.3em] text-zinc-700 sm:text-[9px]">
          Digital Experiences
        </span>
      </div>

      {/* Bottom right */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-10">
        <span className="intro-progress text-[9px] tracking-[0.2em] text-zinc-600">
          00%
        </span>
      </div>

      {/* Dark transition layer */}
      <div className="intro-transition pointer-events-none absolute inset-0 z-50 bg-[#050505]" />
    </main>
  );
};

export default Intro;
