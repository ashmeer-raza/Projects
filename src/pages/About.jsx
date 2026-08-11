import React, { useLayoutEffect, useRef } from "react";

import AboutHero from "../components/about/AboutHero";
import AboutIntro from "../components/about/AboutIntro";
import AboutStats from "../components/about/AboutStats";
import AboutEducation from "../components/about/AboutEducation";
import AboutCapabilities from "../components/about/AboutCapabilities";
import AboutContact from "../components/about/AboutContact";

import { initAboutAnimations } from "../animations/aboutAnimations";

const About = () => {
  const aboutRef = useRef(null);

  useLayoutEffect(() => {
    const cleanup = initAboutAnimations(aboutRef.current);

    return cleanup;
  }, []);

  return (
    <main
      ref={aboutRef}
      className="relative overflow-hidden bg-[#050505] text-white"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="about-glow absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="about-glow absolute right-[5%] top-[45%] h-96 w-96 rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="about-grid absolute inset-0 opacity-[0.035]" />
      </div>

      <div className="relative z-10">
        <AboutHero />
        <AboutIntro />
        <AboutStats />
        <AboutEducation />
        <AboutCapabilities />
        <AboutContact />
      </div>
    </main>
  );
};

export default About;
