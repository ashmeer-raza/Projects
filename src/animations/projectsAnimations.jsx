import { useLayoutEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useProjectsAnimation = ({
  sectionRef,
  trackRef,
  setActiveProject,
  projectsLength,
}) => {
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".project-card");

      const getDistance = () =>
        Math.max(0, track.scrollWidth - window.innerWidth);

      /*
      =========================================
      INITIAL CARD STATE
      =========================================
      */

      gsap.set(cards, {
        scale: 0.86,
        opacity: 0.35,
      });

      /*
      =========================================
      INTRO
      =========================================
      */

      gsap.fromTo(
        ".project-intro",
        {
          opacity: 0,
          x: 80,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power4.out",

          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            once: true,
          },
        },
      );

      /*
      =========================================
      HORIZONTAL SCROLL
      =========================================
      */

      gsap.to(track, {
        x: () => -getDistance(),

        ease: "none",

        scrollTrigger: {
          trigger: section,

          start: "top top",

          end: () => `+=${getDistance()}`,

          pin: true,

          scrub: 1.2,

          invalidateOnRefresh: true,

          onUpdate: (self) => {
            const progress = self.progress;

            const index = Math.min(
              projectsLength - 1,
              Math.max(0, Math.round(progress * (projectsLength - 1))),
            );

            setActiveProject(index);
          },
        },
      });

      /*
      =========================================
      CARD REVEAL
      =========================================
      */

      cards.forEach((card) => {
        gsap.to(card, {
          scale: 1,
          opacity: 1,

          scrollTrigger: {
            trigger: card,

            start: "left 80%",
            end: "left 30%",

            scrub: 1,
          },
        });
      });

      /*
      =========================================
      CARD TITLES
      =========================================
      */

      cards.forEach((card) => {
        const title = card.querySelector(".project-title");

        const number = card.querySelector(".project-number");

        gsap.fromTo(
          title,

          {
            y: 40,
            opacity: 0,
          },

          {
            y: 0,
            opacity: 1,

            scrollTrigger: {
              trigger: card,

              start: "left 75%",
              end: "left 45%",

              scrub: 1,
            },
          },
        );

        gsap.fromTo(
          number,

          {
            x: 80,
            opacity: 0,
          },

          {
            x: 0,
            opacity: 1,

            scrollTrigger: {
              trigger: card,

              start: "left 80%",
              end: "left 40%",

              scrub: 1,
            },
          },
        );
      });

      /*
      =========================================
      MOUSE MOVEMENT
      =========================================
      */

      const handleMouseMove = (event) => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2;

        const y = (event.clientY / window.innerHeight - 0.5) * 2;

        gsap.to(".project-number", {
          x: x * 12,
          y: y * 8,

          duration: 1.2,

          ease: "power3.out",

          overwrite: true,
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      /*
      =========================================
      REFRESH
      =========================================
      */

      const refresh = () => {
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", refresh);

      /*
      =========================================
      CLEANUP
      =========================================
      */

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);

        window.removeEventListener("resize", refresh);
      };
    }, section);

    return () => ctx.revert();
  }, [projectsLength, setActiveProject]);
};
