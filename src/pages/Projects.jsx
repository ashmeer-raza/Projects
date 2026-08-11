import React from "react";
import ProjectsSection from "../components/projects/ProjectSection";

const projects = [
  {
    id: "01",
    title: "Fake Currency Detection",
    shortTitle: "Fake Currency",
    category: "Deep Learning",
    year: "2024 — 2025",

    description:
      "A deep learning system for detecting counterfeit currency using CNN architectures and real-time image analysis.",

    technologies: ["Python", "TensorFlow", "CNN", "OpenCV"],

    github: "https://github.com/ashmeer-raza",

    type: "featured",
  },

  {
    id: "02",
    title: "SkyDart",
    shortTitle: "SkyDart",
    category: "Web Application",
    year: "2026",

    description:
      "A modern web application focused on responsive interfaces, smooth interactions and a clean user experience.",

    technologies: ["React", "JavaScript", "Tailwind CSS"],

    github: "https://github.com/ashmeer-raza/SkyDart",

    type: "web",
  },

  {
    id: "03",
    title: "Finance Dashboard",
    shortTitle: "Finance",
    category: "Dashboard",
    year: "2026",

    description:
      "A responsive finance dashboard designed to present financial information through a structured and intuitive interface.",

    technologies: ["React", "JavaScript", "Tailwind CSS"],

    github: "https://github.com/ashmeer-raza/Finance-Dashboard",

    type: "dashboard",
  },

  {
    id: "04",
    title: "React Mini Project",
    shortTitle: "React Mini",
    category: "React Collection",
    year: "2026",

    description:
      "A collection of React-based mini projects created to explore reusable components, state management and UI interactions.",

    technologies: ["React", "JavaScript", "CSS"],

    github: "https://github.com/ashmeer-raza/React-Mini-Project",

    type: "code",
  },

  {
    id: "05",
    title: "Data Fetching with React",
    shortTitle: "Data Fetching",
    category: "API Integration",
    year: "2026",

    description:
      "A React project focused on fetching, handling and displaying dynamic data from external APIs.",

    technologies: ["React", "Axios", "REST API"],

    github: "https://github.com/ashmeer-raza/Data-Fetching-with-React",

    type: "api",
  },

  {
    id: "06",
    title: "Notes App",
    shortTitle: "Notes App",
    category: "Productivity",
    year: "2026",

    description:
      "A clean notes application for creating, organizing and managing personal notes through a responsive interface.",

    technologies: ["React", "JavaScript", "Tailwind CSS"],

    github: "https://github.com/ashmeer-raza/Notes-App",

    type: "notes",
  },

  {
    id: "07",
    title: "Projects",
    shortTitle: "Projects",
    category: "Web Development",
    year: "2026",

    description:
      "A project collection showcasing experiments, frontend development work and practical web development concepts.",

    technologies: ["React", "JavaScript", "CSS"],

    github: "https://github.com/ashmeer-raza/Projects",

    type: "web",
  },
];

const Projects = () => {
  return <ProjectsSection projects={projects} />;
};

export default Projects;
