import React from "react";
import HeroButtons from "./HeroButtons";

const HeroContent = ({
  contentRef,
  eyebrowRef,
  titleRef,
  roleRef,
  buttonsRef,
}) => {
  return (
    <div ref={contentRef} className="hero-content relative max-w-5xl">
      {/* Eyebrow */}
      <div
        ref={eyebrowRef}
        className="hero-eyebrow mb-7 flex items-center gap-4"
      >
        <span className="h-px w-8 bg-white/50" />

        <span className="text-[10px] font-medium uppercase tracking-[0.4em] text-zinc-500">
          Software Engineer
        </span>
      </div>

      {/* Main Title */}
      <div className="overflow-hidden">
        <h1
          ref={titleRef}
          className="hero-title max-w-5xl font-ticdar text-[16vw] font-black uppercase leading-[0.78] tracking-[-0.075em] text-white sm:text-[13vw] lg:text-[10rem]"
        >
          Ashmeer
          <br />
          <span className="relative inline-block">
            Raza
            <span className="hero-title-dot text-zinc-500">.</span>
          </span>
        </h1>
      </div>

      {/* Role */}
      <div ref={roleRef} className="mt-8 overflow-hidden sm:mt-10">
        <p className="text-sm leading-relaxed text-zinc-500 sm:text-lg">
          Building digital products with{" "}
          <span className="text-zinc-200">code, creativity</span> and thoughtful
          interaction.
        </p>

        <div className="mt-3 flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/40" />

            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>

          <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-600">
            Open to opportunities
          </span>
        </div>
      </div>

      {/* Buttons */}
      <HeroButtons buttonsRef={buttonsRef} />
    </div>
  );
};

export default HeroContent;
