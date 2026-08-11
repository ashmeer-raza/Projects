import React, { useRef, useState } from "react";

import ProjectCard from "./ProjectCard";
import ProjectProgress from "./ProjectProgress";

import { useProjectsAnimation } from "../../animations/projectsAnimations";

const ProjectsSection = ({ projects }) => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  const [activeProject, setActiveProject] = useState(0);

  useProjectsAnimation({
    sectionRef,
    trackRef,
    setActiveProject,
    projectsLength: projects.length,
  });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white"
    >
      {/* =================================
          TOP HEADER
      ================================= */}

      <header className="absolute left-0 right-0 top-0 z-30 px-6 pt-8 sm:px-10 lg:px-16 lg:pt-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-white/40" />

            <span className="text-[10px] font-medium uppercase tracking-[0.35em] text-zinc-500">
              Selected Projects
            </span>
          </div>

          <span className="hidden text-[10px] uppercase tracking-[0.3em] text-zinc-700 sm:block">
            2024 — 2026
          </span>
        </div>
      </header>

      {/* =================================
          PROJECT TRACK
      ================================= */}

      <div className="flex min-h-screen items-center">
        <div
          ref={trackRef}
          className="projects-track flex h-screen items-center gap-5 px-6 pt-16 sm:gap-8 sm:px-10 lg:gap-10 lg:px-16"
        >
          {/* INTRO PANEL */}

          <div className="project-intro flex h-[65vh] w-[75vw] shrink-0 flex-col justify-center sm:w-[45vw] lg:w-[35vw]">
            <span className="mb-5 text-[10px] uppercase tracking-[0.4em] text-zinc-600">
              01 / 07
            </span>

            <h2 className="max-w-lg text-[clamp(3.5rem,7vw,7rem)] font-semibold leading-[0.85] tracking-[-0.065em]">
              Things
              <br />
              <span className="text-zinc-600">I built.</span>
            </h2>

            <p className="mt-8 max-w-sm text-sm leading-6 text-zinc-500">
              A selection of practical projects, experiments and applications
              built across different areas of development.
            </p>

            <div className="mt-10 flex items-center gap-3 text-[9px] uppercase tracking-[0.3em] text-zinc-700">
              <span className="h-px w-10 bg-zinc-700" />
              Scroll horizontally
            </div>
          </div>

          {/* PROJECTS */}

          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}

          {/* END PANEL */}

          <div className="flex h-[65vh] w-[45vw] shrink-0 items-center justify-center">
            <div className="text-center">
              <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-700">
                End of selection
              </span>

              <div className="mx-auto mt-6 h-px w-20 bg-white/10" />
            </div>
          </div>
        </div>
      </div>

      {/* =================================
          PROGRESS
      ================================= */}

      <ProjectProgress projects={projects} activeProject={activeProject} />
    </section>
  );
};

export default ProjectsSection;
