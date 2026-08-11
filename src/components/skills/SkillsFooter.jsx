import React from "react";
const SkillsFooter = () => {
  return (
    <section className="skills-footer px-6 pb-32 pt-10 sm:px-10 lg:px-20">
      {" "}
      <div className="mx-auto max-w-7xl">
        {" "}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] px-8 py-16 sm:px-16 sm:py-24">
          {" "}
          <div className="skills-footer-glow absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />{" "}
          <p className="relative mb-6 text-xs uppercase tracking-[0.3em] text-zinc-600">
            {" "}
            Always learning{" "}
          </p>{" "}
          <h2 className="skills-footer-title relative max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl">
            {" "}
            The stack evolves. <br />{" "}
            <span className="text-zinc-600"> So do I. </span>{" "}
          </h2>{" "}
          <p className="relative mt-8 max-w-xl leading-7 text-zinc-500">
            {" "}
            Technology never stops changing. I continuously explore new tools,
            patterns and technologies to become a better engineer.{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default SkillsFooter;
