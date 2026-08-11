import React from "react";

import HeroSection from "../components/hero/HeroSection";

import About from "./About";
import Skill from "./Skill";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";

const Home = () => {
  return (
    <main className="w-full overflow-hidden bg-[#050505] text-white">
      {/* HERO */}
      <HeroSection />

      {/* ABOUT */}
      <section
        id="about"
        className="min-h-screen border-t border-white/[0.06] px-6 py-24 sm:px-10 lg:px-16"
      >
        <About />
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="min-h-screen border-t border-white/[0.06] px-6 py-24 sm:px-10 lg:px-16"
      >
        <Skill />
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="min-h-screen border-t border-white/[0.06] px-6 py-24 sm:px-10 lg:px-16"
      >
        <Projects />
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="min-h-screen border-t border-white/[0.06] px-6 py-24 sm:px-10 lg:px-16"
      >
        <Experience />
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="min-h-screen border-t border-white/[0.06] px-6 py-24 sm:px-10 lg:px-16"
      >
        <Contact />
      </section>
    </main>
  );
};

export default Home;
