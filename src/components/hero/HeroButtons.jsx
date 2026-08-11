import React from "react";

const HeroButtons = () => {
  return (
    <div className="flex items-center gap-3">
      <a
        href="#projects"
        className="group relative overflow-hidden rounded-full bg-white px-7 py-3.5 text-xs font-medium text-black transition-transform duration-300 hover:scale-[1.03]"
      >
        <span className="relative z-10">View Work</span>

        <span className="absolute inset-0 translate-y-full bg-zinc-300 transition-transform duration-300 group-hover:translate-y-0" />
      </a>

      <a
        href="#contact"
        className="rounded-full border border-white/15 px-7 py-3.5 text-xs font-medium text-zinc-300 transition-all duration-300 hover:border-white/40 hover:bg-white/5 hover:text-white"
      >
        Contact
      </a>
    </div>
  );
};

export default HeroButtons;
