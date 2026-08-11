import React, { useRef } from "react";

import HeroBackground from "./HeroBackground";
import HeroButtons from "./HeroButtons";

import { useHeroAnimation } from "../../animations/heroAnimations";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const introRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const lineRef = useRef(null);

  useHeroAnimation({
    sectionRef,
    titleRef,
    introRef,
    descriptionRef,
    buttonsRef,
    lineRef,
  });

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#050505] text-white"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-16">
        {/* Small intro */}
        <div ref={introRef} className="mb-8 flex items-center gap-4 sm:mb-10">
          <span className="h-px w-8 bg-zinc-600" />

          <span className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">
            Software Engineer
          </span>
        </div>

        {/* Main heading */}
        <div className="overflow-hidden">
          <h1
            ref={titleRef}
            className="hero-title font-sans text-[17vw] font-semibold uppercase leading-[0.78] tracking-[-0.075em] sm:text-[13vw] lg:text-[10.5rem]"
          >
            Ashmeer
            <br />
            <span className="text-zinc-500">Raza</span>
          </h1>
        </div>

        {/* Bottom content */}
        <div className="mt-10 flex flex-col gap-8 sm:mt-14 lg:flex-row lg:items-end lg:justify-between">
          <div ref={descriptionRef} className="max-w-md">
            <p className="text-sm leading-7 text-zinc-500 sm:text-base">
              I design and build modern web experiences where technology meets
              thoughtful design.
            </p>
          </div>

          <div ref={buttonsRef}>
            <HeroButtons />
          </div>
        </div>

        {/* Bottom line */}
        <div ref={lineRef} className="mt-12 h-px w-full bg-white/10 sm:mt-16" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2">
        <div className="flex flex-col items-center gap-3">
          <span className="text-[8px] uppercase tracking-[0.4em] text-zinc-700">
            Scroll
          </span>

          <div className="hero-scroll h-10 w-px bg-gradient-to-b from-zinc-400 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
