// src/components/CustomScrollbar.jsx
import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const CustomScrollbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const { scrollYProgress } = useScroll();

  // Smooth out scroll position with spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });

  // Map progress (0-100%) to thumb translation
  const translateY = useTransform(smoothProgress, [0, 1], ["0%", "450%"]);

  // Detect scrolling to momentarily glow/highlight the bar
  useEffect(() => {
    let timer;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timer);
      timer = setTimeout(() => setIsScrolling(false), 800);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed right-2 top-1/2 z-50 h-64 -translate-y-1/2 flex items-center justify-center p-1 pointer-events-auto"
    >
      {/* Background Track Rail */}
      <div className="relative h-full w-[3px] rounded-full bg-white/10 backdrop-blur-md overflow-hidden">
        {/* Animated Progress Fill Line */}
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-white/40 via-white to-white/60 rounded-full"
          style={{ scaleY: smoothProgress, transformOrigin: "top" }}
        />
      </div>

      {/* Floating Interactive Thumb Indicator */}
      <motion.div
        className={`absolute w-2.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all duration-300 ${
          isHovered || isScrolling
            ? "h-10 bg-white opacity-100 scale-125"
            : "h-7 bg-white/70 opacity-60"
        }`}
        style={{
          top: "0%",
          translateY: useTransform(smoothProgress, (v) => `${v * 220}px`),
        }}
      />
    </div>
  );
};

export default CustomScrollbar;
