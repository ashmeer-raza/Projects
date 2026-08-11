import gsap from "gsap";

export const initIntroAnimation = (container, onComplete) => {
  if (!container) return;

  const ctx = gsap.context(() => {

    gsap.set(".intro-welcome", {
      y: 25,
      opacity: 0,
    });

    gsap.set(".intro-title", {
      yPercent: 110,
      opacity: 0,
      scale: 0.96,
    });

    gsap.set(".intro-line", {
      width: 0,
      opacity: 0,
    });

    gsap.set(".intro-role", {
      y: 20,
      opacity: 0,
    });

    gsap.set(".intro-dot", {
      scale: 0,
    });

    gsap.set(".intro-progress", {
      opacity: 0,
    });

    const tl = gsap.timeline({
      defaults: {
        ease: "power4.out",
      },

      onComplete: () => {
        if (onComplete) {
          onComplete();
        }
      },
    });

    // Welcome
    tl.to(".intro-dot", {
      scale: 1,
      duration: 0.4,
      ease: "back.out(2)",
    })

      .to(
        ".intro-welcome",
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
        },
        "-=0.2"
      )

      // Portfolio
      .to(
        ".intro-title",
        {
          yPercent: 0,
          opacity: 1,
          scale: 1,
          duration: 1.1,
          ease: "power4.out",
        },
        "-=0.15"
      )

      // Line
      .to(
        ".intro-line",
        {
          width: "65%",
          opacity: 1,
          duration: 0.7,
          ease: "power3.inOut",
        },
        "-=0.35"
      )

      // Role
      .to(
        ".intro-role",
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
        },
        "-=0.35"
      )

      // Progress
      .to(
        ".intro-progress",
        {
          opacity: 1,
          duration: 0.3,
        },
        "-=0.3"
      );

    const progress = {
      value: 0,
    };

    tl.to(
      progress,
      {
        value: 100,
        duration: 2.1,
        ease: "none",

        onUpdate: () => {
          const element =
            container.querySelector(".intro-progress");

          if (element) {
            element.textContent =
              `${String(Math.round(progress.value)).padStart(2, "0")}%`;
          }
        },
      },
      "-=0.1"
    )

      // Subtle white/gray breathing
      .to(
        ".intro-title",
        {
          scale: 1.025,
          duration: 0.8,
          ease: "sine.inOut",
        },
        "-=1.2"
      )

      // Exit
      .to(".intro-title", {
        yPercent: -100,
        opacity: 0,
        duration: 0.7,
        ease: "power4.in",
      })

      .to(
        ".intro-welcome, .intro-role, .intro-line",
        {
          opacity: 0,
          y: -20,
          duration: 0.4,
        },
        "-=0.5"
      )

      // Black transition
      .fromTo(
        ".intro-transition",
        {
          yPercent: 100,
        },
        {
          yPercent: 0,
          duration: 0.65,
          ease: "power4.inOut",
        },
        "-=0.15"
      )

      .to(".intro-screen", {
        opacity: 0,
        duration: 0.15,
        pointerEvents: "none",
      });

  }, container);

  return () => ctx.revert();
};

