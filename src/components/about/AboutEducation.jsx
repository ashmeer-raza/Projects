import React from "react";

const AboutEducation = () => {
  return (
    <section className="about-education px-6 py-32 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-zinc-500">
            02 / Background
          </p>

          <h2 className="section-heading text-5xl font-bold tracking-tight sm:text-7xl">
            Education
          </h2>
        </div>

        <div className="relative border-l border-white/10 pl-8 sm:pl-12">
          <div className="education-line absolute left-[-1px] top-0 h-full w-px origin-top bg-white/50" />

          <div className="education-item relative max-w-4xl pb-16">
            <span className="absolute -left-[37px] top-2 h-3 w-3 rounded-full border-2 border-white bg-[#050505] sm:-left-[49px]" />

            <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row">
              <span className="text-sm uppercase tracking-widest text-zinc-500">
                2021 — 2025
              </span>

              <span className="text-sm text-zinc-600">Pune, India</span>
            </div>

            <h3 className="text-3xl font-semibold text-white sm:text-5xl">
              Bachelor of Engineering
            </h3>

            <p className="mt-3 text-xl text-zinc-400">Computer Engineering</p>

            <p className="mt-6 max-w-2xl leading-7 text-zinc-500">
              Savitribai Phule Pune University. Built a strong foundation in
              software development, databases, algorithms, computer networks and
              modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEducation;
