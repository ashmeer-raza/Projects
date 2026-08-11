import React from "react";
import SkillCategory from "./SkillCategory";
const categories = [
  {
    number: "01",
    title: "Languages",
    description:
      "Core programming languages and technologies I use to build applications and solve problems.",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "Java",
      "SQL",
      "HTML5",
      "CSS3",
    ],
  },
  {
    number: "02",
    title: "Frontend",
    description:
      "Building responsive, interactive and modern interfaces with component-driven architecture.",
    skills: [
      "React.js",
      "Next.js",
      "Redux",
      "Tailwind CSS",
      "Bootstrap",
      "Framer Motion",
      "GSAP",
    ],
  },
  {
    number: "03",
    title: "Backend",
    description:
      "Developing APIs, server-side applications and backend systems with scalable architecture.",
    skills: ["Node.js", "Express.js", "REST APIs", "Axios", "EJS"],
  },
  {
    number: "04",
    title: "Database",
    description:
      "Working with relational and NoSQL databases to manage and structure application data.",
    skills: ["MongoDB", "MySQL", "SQL", "Database Design", "CRUD"],
  },
  {
    number: "05",
    title: "Data & Tools",
    description:
      "Tools and libraries that support development, data analysis, version control and productivity.",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Git",
      "GitHub",
    ],
  },
];
const SkillsCategories = () => {
  return (
    <section className="skills-categories px-6 py-32 sm:px-10 lg:px-20">
      {" "}
      <div className="mx-auto max-w-7xl">
        {" "}
        {/* Heading */}{" "}
        <div className="skills-section-heading mb-20">
          {" "}
          <p className="mb-5 text-xs uppercase tracking-[0.3em] text-zinc-600">
            {" "}
            01 / Stack{" "}
          </p>{" "}
          <h2 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            {" "}
            Everything I use{" "}
            <span className="text-zinc-600"> to build. </span>{" "}
          </h2>{" "}
        </div>{" "}
        {/* Categories */}{" "}
        <div className="skills-list">
          {" "}
          {categories.map((category) => (
            <SkillCategory key={category.number} {...category} />
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};
export default SkillsCategories;
