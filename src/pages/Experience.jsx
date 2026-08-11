// src/pages/Experience.jsx
import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "Mindtrail Technologies",
      role: "Web Developer",
      date: "06/2024 – 05/2025",
      points: [
        "Developed & supported responsive web interfaces for mobile devices with React.js and Tailwind, enhancing UX.",
        "Implemented third party APIs for creating innovative features using dynamic data within various web applications.",
        "Designed semantic HTML and CSS code for better readability and future maintenance.",
        "Increased JavaScript performance by improving rendering speed and reducing page loading time.",
      ],
    },
    {
      company: "Octanet PVT Ltd",
      role: "Web Development Intern",
      date: "01/2024 – 02/2024",
      points: [
        "Designed responsive web interfaces, ensuring complete compatibility on all mobile devices.",
        "Applied complex JavaScript concepts and techniques for DOM manipulation and user-triggered event handling.",
        "Sustained high code quality by following best practices of clean and efficient code structure.",
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-5xl space-y-10 w-full">
      <h2 className="text-sm font-semibold tracking-[0.3em] text-zinc-400 uppercase">
        // Work Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-white/10 bg-zinc-900/40 p-8 backdrop-blur-md"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                <p className="text-zinc-400 font-medium">{exp.company}</p>
              </div>
              <span className="text-xs text-zinc-500 font-mono">
                {exp.date}
              </span>
            </div>
            <ul className="list-disc list-inside space-y-2 text-sm text-zinc-300">
              {exp.points.map((pt, pIdx) => (
                <li key={pIdx}>{pt}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
