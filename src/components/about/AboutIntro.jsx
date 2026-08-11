import React from "react";

const AboutIntro = () => {
  return (
    <section className="about-intro px-6 py-32 sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.5fr]">
        {/* Left */}
        <div className="about-side">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            01 / Who I Am
          </p>
        </div>

        {/* Right */}
        <div>
          <h2 className="about-big-text text-3xl font-medium leading-tight text-zinc-200 sm:text-5xl lg:text-6xl">
            I enjoy turning complex problems into
            <span className="text-zinc-500">
              {" "}
              simple, elegant and scalable digital products.
            </span>
          </h2>

          <div className="mt-12 grid gap-8 text-base leading-8 text-zinc-400 sm:grid-cols-2">
            <p>
              I’m a Computer Engineering graduate and Full Stack Developer
              passionate about modern web technologies and interactive
              experiences.
            </p>

            <p>
              My approach combines clean architecture, responsive interfaces,
              API development and smooth animations to create products that feel
              fast, intuitive and polished.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
