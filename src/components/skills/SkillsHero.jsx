import React from "react";
const SkillsHero = () => {
  return (
    <section className="skills-hero relative flex min-h-screen items-center px-6 py-32 sm:px-10 lg:px-20">
      {" "}
      <div className="mx-auto w-full max-w-7xl">
        {" "}
        {/* Small label */}{" "}
        <div className="skills-label mb-10 flex items-center gap-4">
          {" "}
          <span className="h-px w-12 bg-white/40" />{" "}
          <span className="text-xs uppercase tracking-[0.35em] text-zinc-500">
            {" "}
            Technical Expertise{" "}
          </span>{" "}
        </div>{" "}
        {/* Main heading */}{" "}
        <h1 className="skills-title max-w-6xl text-[16vw] font-black leading-[0.78] tracking-[-0.08em] sm:text-[12vw] lg:text-[10rem]">
          {" "}
          <span className="skills-word block"> Tools </span>{" "}
          <span className="skills-word block text-zinc-600"> I </span>{" "}
          <span className="skills-word block">
            {" "}
            Build<span className="text-violet-500">.</span>{" "}
          </span>{" "}
        </h1>{" "}
        {/* Bottom information */}{" "}
        <div className="mt-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          {" "}
          <p className="skills-description max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            {" "}
            A collection of technologies, frameworks and tools I use to
            transform ideas into scalable digital experiences.{" "}
          </p>{" "}
          <div className="skills-scroll flex items-center gap-4 text-xs uppercase tracking-[0.3em] text-zinc-600">
            {" "}
            <span className="h-10 w-px bg-zinc-700" /> Explore stack{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default SkillsHero;
