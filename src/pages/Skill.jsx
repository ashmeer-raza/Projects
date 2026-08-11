import React, { useLayoutEffect, useRef } from "react";
import SkillsHero from "../components/skills/SkillsHero";
import SkillsMarquee from "../components/skills/SkillsMarquee";
import SkillsCategories from "../components/skills/SkillsCategories";
import SkillsFooter from "../components/skills/SkillsFooter";
import { initSkillsAnimations } from "../animations/skillsAnimations";
const Skill = () => {
  const skillsRef = useRef(null);
  useLayoutEffect(() => {
    const cleanup = initSkillsAnimations(skillsRef.current);
    return cleanup;
  }, []);
  return (
    <main
      ref={skillsRef}
      className="relative overflow-hidden bg-[#050505] text-white"
    >
      {" "}
      {/* Background */}{" "}
      <div className="pointer-events-none absolute inset-0">
        {" "}
        <div className="skills-grid absolute inset-0 opacity-[0.035]" />{" "}
        <div className="skills-glow skills-glow-one absolute left-[10%] top-[20%] h-80 w-80 rounded-full bg-violet-600/10 blur-[140px]" />{" "}
        <div className="skills-glow skills-glow-two absolute right-[5%] top-[60%] h-96 w-96 rounded-full bg-blue-600/10 blur-[150px]" />{" "}
      </div>{" "}
      <div className="relative z-10">
        {" "}
        <SkillsHero /> <SkillsMarquee /> <SkillsCategories />{" "}
        <SkillsFooter />{" "}
      </div>{" "}
    </main>
  );
};
export default Skill;
