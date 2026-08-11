import React from "react";

const AboutHero = () => {
  return (
    <section className="about-hero relative flex min-h-screen items-center px-6 py-32 sm:px-10 lg:px-20">
      <div className="mx-auto w-full max-w-7xl">
        {/* Small label */}
        <div className="about-label mb-8 flex items-center gap-4 overflow-hidden">
          <span className="h-px w-12 bg-white/40" />

          <span className="text-xs font-medium uppercase tracking-[0.35em] text-zinc-400">
            About Me
          </span>
        </div>

        {/* Main heading */}
        <h1 className="about-title max-w-6xl text-[15vw] font-black leading-[0.78] tracking-[-0.07em] sm:text-[12vw] lg:text-[10rem]">
          <span className="about-word block">Building</span>

          <span className="about-word block text-zinc-500">Digital</span>

          <span className="about-word block">
            Experiences<span className="text-violet-500">.</span>
          </span>
        </h1>

        {/* Bottom content */}
        <div className="mt-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="about-description max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            I’m a Full Stack Developer focused on building modern, scalable and
            immersive web experiences where engineering meets thoughtful design.
          </p>

          <div className="about-scroll flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
            <span className="h-10 w-px bg-zinc-700" />
            Scroll to explore
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
