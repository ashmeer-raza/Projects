import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export const initSkillsAnimations = (container) => {
  if (!container) return;
  const ctx = gsap.context(() => {
    /* ========================================= HERO INTRO ========================================= */ const heroTimeline =
      gsap.timeline({ defaults: { ease: "power4.out" } });
    heroTimeline
      .from(".skills-label", { y: 30, opacity: 0, duration: 0.8 })
      .from(
        ".skills-word",
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
        ".skills-description",
        { y: 40, opacity: 0, duration: 0.9 },
        "-=0.5",
      )
      .from(".skills-scroll", { y: 20, opacity: 0, duration: 0.7 }, "-=0.4");
    /* ========================================= HERO PARALLAX ========================================= */ gsap.to(
      ".skills-word",
      {
        yPercent: -12,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: ".skills-hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      },
    );
    /* ========================================= BACKGROUND PARALLAX ========================================= */ gsap.to(
      ".skills-glow-one",
      {
        y: 250,
        x: 100,
        ease: "none",
        scrollTrigger: {
          trigger: ".skills-hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      },
    );
    gsap.to(".skills-glow-two", {
      y: -200,
      x: -100,
      ease: "none",
      scrollTrigger: {
        trigger: ".skills-categories",
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
    /* ========================================= MARQUEE ========================================= */ gsap.to(
      ".skills-marquee-track",
      {
        xPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: ".skills-marquee",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      },
    );
    /* ========================================= SECTION HEADING ========================================= */ gsap.from(
      ".skills-section-heading",
      {
        y: 100,
        opacity: 0,
        duration: 1.1,
        ease: "power4.out",
        scrollTrigger: { trigger: ".skills-section-heading", start: "top 80%" },
      },
    );
    /* ========================================= CATEGORY CARDS ========================================= */ gsap.from(
      ".skill-category",
      {
        y: 100,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: { trigger: ".skills-list", start: "top 80%" },
      },
    );
    /* ========================================= SKILL PILLS ========================================= */ gsap.from(
      ".skill-item",
      {
        y: 30,
        opacity: 0,
        scale: 0.9,
        stagger: 0.04,
        duration: 0.6,
        ease: "back.out(1.5)",
        scrollTrigger: { trigger: ".skills-list", start: "top 75%" },
      },
    );
    /* ========================================= CATEGORY NUMBER ========================================= */ gsap.utils
      .toArray(".skill-number")
      .forEach((number) => {
        gsap.to(number, {
          y: -30,
          color: "#ffffff",
          ease: "none",
          scrollTrigger: {
            trigger: number,
            start: "top 85%",
            end: "top 35%",
            scrub: true,
          },
        });
      });
    /* ========================================= FOOTER CARD ========================================= */ gsap.from(
      ".skills-footer > div",
      {
        scale: 0.92,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: { trigger: ".skills-footer", start: "top 80%" },
      },
    );
    /* ========================================= FOOTER HEADING ========================================= */ gsap.from(
      ".skills-footer-title",
      {
        y: 80,
        opacity: 0,
        duration: 1,
        scrollTrigger: { trigger: ".skills-footer", start: "top 75%" },
      },
    );
    /* ========================================= FOOTER GLOW ========================================= */ gsap.to(
      ".skills-footer-glow",
      {
        scale: 1.5,
        x: -80,
        y: 80,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      },
    );
  }, container);
  return () => ctx.revert();
};
