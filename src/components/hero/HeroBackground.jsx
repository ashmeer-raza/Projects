import React from "react";

const HeroBackground = () => {
  return (
    <>
      {/* Subtle grid */}
      <div className="hero-grid pointer-events-none absolute inset-0" />

      {/* Center light */}
      <div className="hero-glow pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[130px]" />

      {/* Vertical lines */}
      <div className="pointer-events-none absolute bottom-0 left-[8%] top-0 w-px bg-white/[0.035]" />

      <div className="pointer-events-none absolute bottom-0 right-[8%] top-0 w-px bg-white/[0.035]" />

      {/* Mouse light */}
      <div className="hero-mouse-light pointer-events-none fixed left-0 top-0 z-10 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-[100px]" />
    </>
  );
};

export default HeroBackground;
