import React, { useRef } from "react";

import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroMeta from "./HeroMeta";

import { useHeroAnimation } from "../../animations/heroAnimations";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const eyebrowRef = useRef(null);
  const roleRef = useRef(null);
  const buttonsRef = useRef(null);
  const metaRef = useRef(null);
  const scrollRef = useRef(null);

  useHeroAnimation({
    sectionRef,
    contentRef,
    titleRef,
    eyebrowRef,
    roleRef,
    buttonsRef,
    metaRef,
    scrollRef,
  });

  return (
    <section
      ref={sectionRef}
      id="home"
      className="hero relative min-h-screen w-full overflow-hidden bg-[#050505] text-white"
    >
      {/* Background */}
      <HeroBackground />

      {/* Main Content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-[1600px] items-center px-6 py-24 sm:px-10 lg:px-16">
        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          {/* Hero Content */}
          <HeroContent
            contentRef={contentRef}
            eyebrowRef={eyebrowRef}
            titleRef={titleRef}
            roleRef={roleRef}
            buttonsRef={buttonsRef}
          />

          {/* Right Metadata */}
          <HeroMeta metaRef={metaRef} />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-600">
          Scroll
        </span>

        <div className="hero-scroll-line h-12 w-px overflow-hidden bg-white/10">
          <div className="h-full w-full origin-top scale-y-0 bg-white" />
        </div>
      </div>

      {/* Corner Labels */}
      <div className="absolute left-6 top-28 z-20 sm:left-10 lg:left-16">
        <span className="text-[9px] uppercase tracking-[0.35em] text-zinc-700">
          Based in India
        </span>
      </div>

      <div className="absolute right-6 top-28 z-20 sm:right-10 lg:right-16">
        <span className="text-[9px] uppercase tracking-[0.35em] text-zinc-700">
          Available for work
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
