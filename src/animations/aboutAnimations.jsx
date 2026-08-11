import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initAboutAnimations = (container) => {
  if (!container) return;

  const ctx = gsap.context(() => {
    /* --------------------------------
       HERO
    -------------------------------- */

    const heroTimeline = gsap.timeline({
      defaults: {
        ease: "power4.out",
      },
    });

    heroTimeline
      .from(".about-label", {
        y: 30,
        opacity: 0,
        duration: 0.8,
      })
      .from(
        ".about-word",
        {
          yPercent: 120,
          opacity: 0,
          rotateX: 80,
          stagger: 0.12,
          duration: 1.2,
        },
        "-=0.4",
      )
      .from(
        ".about-description",
        {
          y: 40,
          opacity: 0,
          duration: 1,
        },
        "-=0.5",
      )
      .from(
        ".about-scroll",
        {
          opacity: 0,
          y: 20,
          duration: 0.8,
        },
        "-=0.5",
      );

    /* --------------------------------
       HERO PARALLAX
    -------------------------------- */

    gsap.to(".about-word", {
      yPercent: -10,
      stagger: 0.08,
      ease: "none",
      scrollTrigger: {
        trigger: ".about-hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    /* --------------------------------
       BACKGROUND PARALLAX
    -------------------------------- */

    gsap.to(".about-glow", {
      y: 200,
      ease: "none",
      scrollTrigger: {
        trigger: ".about-hero",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    /* --------------------------------
       INTRO
    -------------------------------- */

    gsap.from(".about-big-text", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".about-intro",
        start: "top 75%",
      },
    });

    gsap.from(".about-side", {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".about-intro",
        start: "top 80%",
      },
    });

    /* --------------------------------
       STATS
    -------------------------------- */

    gsap.from(".stat-card", {
      y: 80,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".about-stats",
        start: "top 80%",
      },
    });

    /* --------------------------------
       EDUCATION
    -------------------------------- */

    gsap.from(".education-line", {
      scaleY: 0,
      transformOrigin: "top",
      ease: "none",
      scrollTrigger: {
        trigger: ".about-education",
        start: "top 70%",
        end: "bottom 70%",
        scrub: true,
      },
    });

    gsap.from(".education-item", {
      x: 80,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".education-item",
        start: "top 80%",
      },
    });

    /* --------------------------------
       CAPABILITIES
    -------------------------------- */

    gsap.from(".capability-card", {
      y: 100,
      opacity: 0,
      stagger: 0.15,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".capabilities-list",
        start: "top 80%",
      },
    });

    /* --------------------------------
       CONTACT CARD
    -------------------------------- */

    gsap.from(".contact-card", {
      scale: 0.92,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".about-contact",
        start: "top 80%",
      },
    });

    /* --------------------------------
       CONTACT HEADING
    -------------------------------- */

    gsap.from(".contact-heading", {
      y: 80,
      opacity: 0,
      duration: 1.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".about-contact",
        start: "top 70%",
      },
    });

    /* --------------------------------
       CONTACT GLOW
    -------------------------------- */

    gsap.to(".contact-glow", {
      scale: 1.4,
      x: -100,
      y: 80,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    /* --------------------------------
       MAGNETIC BUTTON
    -------------------------------- */

    const button = container.querySelector(".magnetic-button");

    if (button) {
      const moveButton = (event) => {
        const rect = button.getBoundingClientRect();

        const x = event.clientX - rect.left - rect.width / 2;

        const y = event.clientY - rect.top - rect.height / 2;

        gsap.to(button, {
          x: x * 0.2,
          y: y * 0.2,
          duration: 0.4,
          ease: "power3.out",
        });
      };

      const resetButton = () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.4)",
        });
      };

      button.addEventListener("mousemove", moveButton);
      button.addEventListener("mouseleave", resetButton);

      return () => {
        button.removeEventListener("mousemove", moveButton);
        button.removeEventListener("mouseleave", resetButton);
      };
    }
  }, container);

  return () => ctx.revert();
};
