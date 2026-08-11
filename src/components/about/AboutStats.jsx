import React from "react";

const stats = [
  {
    number: "01",
    label: "Computer Engineering",
    description: "Academic Foundation",
  },
  {
    number: "MERN",
    label: "Full Stack",
    description: "Primary Development Stack",
  },
  {
    number: "∞",
    label: "Curiosity",
    description: "Always Learning",
  },
  {
    number: "24/7",
    label: "Problem Solving",
    description: "Mindset",
  },
];

const AboutStats = () => {
  return (
    <section className="about-stats border-y border-white/10 px-6 py-24 sm:px-10 lg:px-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="stat-card group border-white/10 p-8 lg:border-r last:border-r-0"
          >
            <span className="mb-12 block text-xs text-zinc-600">
              0{index + 1}
            </span>

            <div className="stat-number text-5xl font-bold tracking-tight text-white transition-transform duration-500 group-hover:-translate-y-2">
              {stat.number}
            </div>

            <h3 className="mt-4 text-lg font-medium text-zinc-200">
              {stat.label}
            </h3>

            <p className="mt-2 text-sm text-zinc-500">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutStats;
