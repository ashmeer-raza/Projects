import React from "react";

const ProjectProgress = ({ projects, activeProject }) => {
  return (
    <div className="absolute bottom-7 left-6 right-6 z-30 flex items-center justify-between sm:left-10 sm:right-10 lg:left-16 lg:right-16">
      {/* Current */}

      <div className="flex items-center gap-4">
        <span className="text-xs font-medium text-white">
          {String(activeProject + 1).padStart(2, "0")}
        </span>

        <div className="h-px w-16 bg-white/10 sm:w-28">
          <div
            className="h-full bg-white transition-all duration-300"
            style={{
              width: `${((activeProject + 1) / projects.length) * 100}%`,
            }}
          />
        </div>

        <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-700">
          {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      {/* Scroll text */}

      <span className="hidden text-[9px] uppercase tracking-[0.35em] text-zinc-700 sm:block">
        Horizontal / Scroll
      </span>
    </div>
  );
};

export default ProjectProgress;
