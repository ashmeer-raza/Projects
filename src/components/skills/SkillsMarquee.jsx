import React from "react";
const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "MySQL",
  "GSAP",
  "Tailwind CSS",
  "Redux",
  "REST APIs",
];
const SkillsMarquee = () => {
  return (
    <section className="skills-marquee overflow-hidden border-y border-white/10 py-8">
      {" "}
      <div className="skills-marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {" "}
        {[...skills, ...skills].map((skill, index) => (
          <React.Fragment key={`${skill}-${index}`}>
            {" "}
            <span className="text-3xl font-semibold tracking-tight text-zinc-600 sm:text-5xl">
              {" "}
              {skill}{" "}
            </span>{" "}
            <span className="text-xl text-violet-500"> ✦ </span>{" "}
          </React.Fragment>
        ))}{" "}
      </div>{" "}
    </section>
  );
};
export default SkillsMarquee;
