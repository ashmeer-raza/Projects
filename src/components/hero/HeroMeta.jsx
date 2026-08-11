import React from "react";

const HeroMeta = ({ metaRef }) => {
  const technologies = ["React", "Node", "Next.js", "TypeScript", "MongoDB"];

  return (
    <aside
      ref={metaRef}
      className="hero-meta hidden w-48 flex-col gap-10 lg:flex"
    >
      {/* Location */}
      <div>
        <p className="mb-2 text-[9px] uppercase tracking-[0.35em] text-zinc-700">
          Location
        </p>

        <p className="text-sm text-zinc-400">Pune, India</p>
      </div>

      {/* Stack */}
      <div>
        <p className="mb-3 text-[9px] uppercase tracking-[0.35em] text-zinc-700">
          Stack
        </p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="border border-white/[0.08] px-2.5 py-1 text-[9px] uppercase tracking-wider text-zinc-500 transition-colors duration-300 hover:border-white/30 hover:text-white"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>

      {/* Social */}
      <div>
        <p className="mb-3 text-[9px] uppercase tracking-[0.35em] text-zinc-700">
          Connect
        </p>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center border border-white/10 text-[10px] font-medium text-zinc-500 transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:text-white"
          >
            GH
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center border border-white/10 text-[10px] font-medium text-zinc-500 transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:text-white"
          >
            IN
          </a>

          <a
            href="#contact"
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center border border-white/10 text-[10px] font-medium text-zinc-500 transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:text-white"
          >
            @
          </a>
        </div>
      </div>
    </aside>
  );
};

export default HeroMeta;
