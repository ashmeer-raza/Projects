import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useHeroAnimation = ({
  sectionRef,
  titleRef,
  introRef,
  descriptionRef,
  buttonsRef,
  lineRef,
}) => {
  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const title = titleRef.current;

      /*
      -----------------------------------------
      SPLIT TITLE
      -----------------------------------------
      */

      const text = title.innerHTML;

      title.innerHTML = text.replace(
        /(Ashmeer|Raza)/g,
        (word) => `
          <span class="hero-word inline-block overflow-hidden">
            ${word
              .split("")
              .map(
                (letter) =>
                  `<span class="hero-letter inline-block">${letter}</span>`,
              )
              .join("")}
          </span>
        `,
      );

      const letters = title.querySelectorAll(".hero-letter");

      /*
      -----------------------------------------
      INITIAL STATE
      -----------------------------------------
      */

      gsap.set(introRef.current, {
        opacity: 0,
        y: 20,
      });

      gsap.set(letters, {
        yPercent: 110,
        opacity: 0,
      });

      gsap.set(descriptionRef.current, {
        opacity: 0,
        y: 20,
      });

      gsap.set(buttonsRef.current, {
        opacity: 0,
        y: 20,
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      /*
      -----------------------------------------
      ENTRANCE
      -----------------------------------------
      */

      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl.to(introRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.7,
      })

        .to(
          letters,
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.035,
            ease: "power4.out",
          },
          "-=0.25",
        )

        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=0.45",
        )

        .to(
          buttonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.4",
        )

        .to(
          lineRef.current,
          {
            scaleX: 1,
            duration: 1,
            ease: "power3.inOut",
          },
          "-=0.35",
        );

      /*
      -----------------------------------------
      SCROLL
      -----------------------------------------
      */

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      scrollTimeline

        .to(
          ".hero-title",
          {
            y: -180,
            scale: 0.75,
            opacity: 0,
            ease: "none",
          },
          0,
        )

        .to(
          introRef.current,
          {
            y: -100,
            opacity: 0,
            ease: "none",
          },
          0,
        )

        .to(
          descriptionRef.current,
          {
            y: -80,
            opacity: 0,
            ease: "none",
          },
          0,
        )

        .to(
          buttonsRef.current,
          {
            y: -60,
            opacity: 0,
            ease: "none",
          },
          0,
        )

        .to(
          ".hero-grid",
          {
            y: 120,
            ease: "none",
          },
          0,
        );

      /*
      -----------------------------------------
      MOUSE MOVEMENT
      -----------------------------------------
      */

      const mouseMove = (event) => {
        const x = (event.clientX / window.innerWidth - 0.5) * 2;

        const y = (event.clientY / window.innerHeight - 0.5) * 2;

        gsap.to(".hero-mouse-light", {
          x: event.clientX,
          y: event.clientY,
          duration: 0.8,
          ease: "power3.out",
        });

        gsap.to(".hero-title", {
          x: x * 5,
          y: y * 3,
          duration: 1.2,
          ease: "power3.out",
        });
      };

      window.addEventListener("mousemove", mouseMove);

      /*
      -----------------------------------------
      CLEANUP
      -----------------------------------------
      */

      return () => {
        window.removeEventListener("mousemove", mouseMove);
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);
};
