import React from "react";

const ProjectCard = ({ project, index }) => {
  const isFeatured = project.type === "featured";

  return (
    <article
      className={`
        project-card
        group
        relative
        h-[70vh]
        w-[88vw]
        shrink-0
        overflow-hidden
        border
        border-white/10
        bg-[#0a0a0a]
        sm:w-[70vw]
        lg:h-[72vh]
        lg:w-[62vw]
        ${isFeatured ? "border-white/20" : ""}
      `}
    >
      {/*          BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div className="project-grid absolute inset-0 opacity-20" />

        <div
          className="
            absolute
            -right-20
            -top-20
            h-72
            w-72
            rounded-full
            bg-white/[0.025]
            blur-[100px]
            transition-all
            duration-700
            group-hover:bg-white/[0.05]
          "
        />
      </div>

      {/* =================================
          TOP
      ================================= */}

      <div className="relative z-10 flex items-start justify-between p-6 sm:p-8 lg:p-10">
        <div>
          <span className="text-[10px] font-medium tracking-[0.3em] text-zinc-600">
            PROJECT
          </span>

          <div className="mt-2 flex items-center gap-3">
            <span className="text-sm font-medium text-white">{project.id}</span>

            <span className="h-px w-8 bg-white/20" />

            <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-600">
              {project.year}
            </span>
          </div>
        </div>

        <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-600">
          {project.category}
        </span>
      </div>

      {/* =================================
          HUGE NUMBER
      ================================= */}

      <div className="pointer-events-none absolute right-5 top-20">
        <span className="project-number text-[clamp(8rem,20vw,18rem)] font-semibold leading-none tracking-[-0.1em] text-white/[0.035]">
          {project.id}
        </span>
      </div>

      {/* =================================
          CONTENT
      ================================= */}

      <div className="relative z-10 flex h-[calc(100%-90px)] flex-col justify-end p-6 sm:p-8 lg:p-10">
        <div className="max-w-3xl">
          {/* Category */}

          <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-zinc-600">
            {project.category}
          </p>

          {/* TITLE */}

          <h3 className="project-title max-w-2xl text-[clamp(2.7rem,6vw,6rem)] font-semibold leading-[0.88] tracking-[-0.065em] text-white">
            {project.title}
          </h3>

          {/* DESCRIPTION */}

          <p className="mt-6 max-w-xl text-sm leading-6 text-zinc-500 sm:text-base">
            {project.description}
          </p>

          {/* =================================
              BOTTOM
          ================================= */}

          <div className="mt-8 flex flex-col gap-6 border-t border-white/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
            {/* TECH */}

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="
                    border
                    border-white/10
                    px-3
                    py-1.5
                    text-[9px]
                    uppercase
                    tracking-[0.15em]
                    text-zinc-500
                    transition-colors
                    duration-300
                    group-hover:border-white/20
                    group-hover:text-zinc-300
                  "
                >
                  {technology}
                </span>
              ))}
            </div>

            {/* GITHUB */}

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="
                project-link
                group/link
                flex
                shrink-0
                items-center
                gap-3
                text-[10px]
                font-medium
                uppercase
                tracking-[0.25em]
                text-white
              "
            >
              <span>View Code</span>

              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/15
                  text-sm
                  transition-all
                  duration-300
                  group-hover/link:border-white/50
                  group-hover/link:bg-white
                  group-hover/link:text-black
                "
              >
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* =================================
          FEATURED LABEL
      ================================= */}

      {isFeatured && (
        <div className="absolute left-0 top-1/2 z-20 -translate-y-1/2 -rotate-90">
          <span className="text-[8px] uppercase tracking-[0.5em] text-zinc-600">
            Featured Project
          </span>
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
