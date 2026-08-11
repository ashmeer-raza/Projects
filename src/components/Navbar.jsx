import React, { useState } from "react";
import { NavLink } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  User, 
  Code2, 
  FolderGit2, 
  Briefcase, 
  Mail, 
  Menu, 
  X 
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const links = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Skills", path: "/skills", icon: Code2 },
    { name: "Projects", path: "/projects", icon: FolderGit2 },
    { name: "Experience", path: "/experience", icon: Briefcase },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <>
      {/* ================= DESKTOP VERTICAL NAVBAR ================= */}
      <nav className="fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 flex-col items-center gap-3 rounded-full border border-white/10 bg-black/80 p-3 backdrop-blur-md shadow-2xl md:flex">
        {links.map((link, index) => {
          const Icon = link.icon;
          return (
            <NavLink
              key={link.path}
              to={link.path}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={({ isActive }) =>
                `relative flex h-12 w-12 items-center justify-center rounded-full transition-colors duration-300 ${
                  isActive ? "text-black" : "text-zinc-400 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {/* Active Indicator (Glowing White Pill Behind Icon) */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.6)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  {/* Icon */}
                  <Icon className="relative z-10 h-5 w-5" />

                  {/* Tooltip Label (Appears on Hover towards Left) */}
                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, x: 10, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 10, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="pointer-events-none absolute right-16 rounded-md border border-white/10 bg-zinc-900/90 px-3 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-md whitespace-nowrap"
                      >
                        {link.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* ================= MOBILE FLOATING BUTTON & DRAWER ================= */}
      {/* Mobile Toggle Button (Fixed Right Middle) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-5 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/80 text-white shadow-xl backdrop-blur-md md:hidden active:scale-95"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 right-0 z-40 flex w-64 flex-col justify-center border-l border-white/10 bg-black/95 px-6 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              {links.map((link) => {
                const Icon = link.icon;
                return (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-4 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "bg-white text-black font-semibold shadow-[0_0_12px_rgba(255,255,255,0.4)]"
                          : "text-zinc-400 hover:bg-white/5 hover:text-white"
                      }`
                    }
                  >
                    <Icon className="h-5 w-5" />
                    <span>{link.name}</span>
                  </NavLink>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;