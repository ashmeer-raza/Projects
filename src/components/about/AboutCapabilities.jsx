import React from "react";

const capabilities = [
  {
    number: "01",
    title: "Frontend Development",
    text: "Creating responsive, accessible and highly interactive interfaces using React, Tailwind CSS and modern UI patterns.",
    tags: ["React", "JavaScript", "Tailwind"],
  },
  {
    number: "02",
    title: "Backend Development",
    text: "Building structured APIs, authentication systems and scalable backend applications.",
    tags: ["Node.js", "Express", "REST API"],
  },
  {
    number: "03",
    title: "Database & Architecture",
    text: "Designing data-driven applications with efficient database structures and clean application architecture.",
    tags: ["MongoDB", "MySQL", "SQL"],
  },
  {
    number: "04",
    title: "Motion & Interaction",
    text: "Adding meaningful motion and immersive interactions that improve the overall user experience.",
    tags: ["GSAP", "ScrollTrigger", "Framer Motion"],
  },
];

const AboutCapabilities = () => {
  return (
    <section className="about-capabilities px-6 py-32 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-zinc-500">
            03 / What I Do
          </p>

          <h2 className="section-heading max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
            Turning ideas into
            <span className="text-zinc-600"> experiences.</span>
          </h2>
        </div>

        <div className="capabilities-list">
          {capabilities.map((item) => (
            <article
              key={item.number}
              className="capability-card group relative border-t border-white/10 py-10"
            >
              <div className="grid gap-8 md:grid-cols-[80px_1fr_1fr] md:items-start">
                <span className="text-sm text-zinc-600">{item.number}</span>

                <div>
                  <h3 className="text-2xl font-semibold text-white transition-transform duration-500 group-hover:translate-x-3 sm:text-4xl">
                    {item.title}
                  </h3>
                </div>

                <div>
                  <p className="leading-7 text-zinc-500">{item.text}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCapabilities;
