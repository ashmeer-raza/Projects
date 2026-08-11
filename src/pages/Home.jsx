import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Home = () => {
  const containerRef = useRef(null);
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const roleRef = useRef(null);
  const ctaRef = useRef(null);
  const glowRef = useRef(null);

  // Mouse move effect for background spotlight
  const handleMouseMove = (e) => {
    if (!glowRef.current || !containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    gsap.to(glowRef.current, {
      x: x,
      y: y,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split title characters for reveal effect
      const nameText = titleRef.current;
      if (nameText && !nameText.querySelector("span")) {
        const letters = nameText.innerText.split("");
        nameText.innerHTML = letters
          .map((char) => `<span class="inline-block opacity-0 translate-y-12">${char === " " ? "&nbsp;" : char}</span>`)
          .join("");
      }

      const charSpans = titleRef.current.querySelectorAll("span");

      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Entrance animation sequence
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.1 }
      )
        .to(
          charSpans,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.03,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        )
        .fromTo(
          roleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          ctaRef.current.children,
          { opacity: 0, y: 20, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15 },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-black px-6 text-center text-white"
    >
      {/* Dynamic Cursor Spotlight */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[100px]"
      />

      {/* Static Center Subtle Glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_65%)]" />

      <div className="relative z-10 flex max-w-4xl flex-col items-center justify-center space-y-5">
        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-sm font-semibold tracking-[0.3em] text-zinc-400 uppercase md:text-base"
        >
          Hi, I am
        </p>

        {/* Character-Staggered Title */}
        <h1
          ref={titleRef}
          className="font-ticdar text-5xl font-black tracking-tight text-white sm:text-7xl md:text-8xl leading-none"
        >
          Ashmeer Raza
        </h1>

        {/* Role */}
        <p
          ref={roleRef}
          className="text-lg font-medium text-zinc-400 sm:text-2xl md:text-3xl"
        >
          Software Developer
        </p>

        {/* Call to Action */}
        <div
          ref={ctaRef}
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
        >
          <button className="group relative rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-all duration-300 hover:bg-zinc-200 hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] active:scale-95">
            Connect Me
          </button>

          <button className="group relative rounded-full border border-white/20 bg-transparent px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10 active:scale-95">
            Hire me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;