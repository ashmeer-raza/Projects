import React from "react";
const SkillCategory = ({ number, title, description, skills }) => {
  return (
    <article className="skill-category group relative border-t border-white/10 py-12 lg:py-16">
      {" "}
      <div className="grid gap-10 lg:grid-cols-[100px_1fr_1.2fr] lg:items-start">
        {" "}
        {/* Number */}{" "}
        <div className="skill-number text-sm text-zinc-600"> {number} </div>{" "}
        {/* Title */}{" "}
        <div>
          {" "}
          <h3 className="skill-category-title text-3xl font-semibold tracking-tight text-white transition-transform duration-700 group-hover:translate-x-3 sm:text-5xl">
            {" "}
            {title}{" "}
          </h3>{" "}
          <p className="mt-5 max-w-sm leading-7 text-zinc-500">
            {" "}
            {description}{" "}
          </p>{" "}
        </div>{" "}
        {/* Skills */}{" "}
        <div className="skill-items flex flex-wrap gap-3">
          {" "}
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="skill-item group/item relative overflow-hidden rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 transition-all duration-500 hover:border-white/30 hover:bg-white/[0.08]"
            >
              {" "}
              <span className="relative z-10 text-sm text-zinc-300 transition-colors duration-300 group-hover/item:text-white">
                {" "}
                {skill}{" "}
              </span>{" "}
              <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover/item:translate-x-0" />{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
      {/* Hover line */}{" "}
      <div className="skill-hover-line absolute bottom-0 left-0 h-px w-0 bg-white transition-all duration-700 group-hover:w-full" />{" "}
    </article>
  );
};
export default SkillCategory;
