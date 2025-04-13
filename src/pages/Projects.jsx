import React from "react";
import { motion } from "framer-motion";
import "../styles.css";

const projects = {
  frontend: [
    {
      title: "Speed Typing Test",
      description: "Test your typing speed with a sleek UI and timer.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Sodi-Lepakshi/SpeedTypingTest",
      demo: "https://speed-typing-test-nine.vercel.app/",
    },
    {
      title: "Library Management System",
      description: "A digital library management system interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Sodi-Lepakshi/LMS",
      demo: "https://librarymanagement-lake.vercel.app/",
    },
  ],
  react: [
    {
      title: "Interview Readiness Analyser",
      description: "Analyse your preparation with this helpful tool.",
      tech: ["React.js", "Chart.js"],
      github: "https://github.com/Sodi-Lepakshi/Interview-readiness-analyser",
      demo: "https://interview-readiness-analyser.vercel.app/",
    },
    {
      title: "AI Code Explainer",
      description: "Paste code and get AI-generated explanations.",
      tech: ["React.js", "OpenAI API"],
      github: "https://github.com/Sodi-Lepakshi/AI-CodeExplainer",
      demo: "https://ai-code-explainer-rho.vercel.app/",
    },
  ],
  backend: [
    {
      title: "Event Management System",
      description: "Spring Boot-based backend for managing events.",
      tech: ["Spring Boot", "Java", "MySQL"],
      github: "https://github.com/Sodi-Lepakshi/EMS",
      demo: null,
    },
    {
      title: "University Portal",
      description: "Backend APIs for managing university data.",
      tech: ["Spring Boot", "Java", "PostgreSQL"],
      github: "https://github.com/Sodi-Lepakshi/University",
      demo: null,
    },
  ],
  fullstack: [
    {
      title: "QuickBite - Food Ordering App",
      description: "A full-stack food ordering application.",
      tech: ["React.js", "Spring Boot", "H2"],
      github: "https://github.com/Sodi-Lepakshi/QuickBite_Project",
      demo: "coming-soon",
    },
    {
      title: "Roomy - Hostel Booking System",
      description: "Book and check hostel availability with this system.",
      tech: ["React.js", "Spring Boot", "H2"],
      github: "https://github.com/Sodi-Lepakshi/roomy",
      demo: "coming-soon",
    },
  ],
};

const ProjectCard = ({ title, description, tech, github, demo }) => (
  <motion.div
    className="project-card"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="tech-stack">
      {tech.map((item, index) => (
        <span key={index} className="tech-item">
          {item}
        </span>
      ))}
    </div>
    <div className="project-links">
      <a href={github} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
      {demo === null ? null : demo === "coming-soon" ? (
        <span className="coming-soon">Live Demo: Coming soon...!!!</span>
      ) : (
        <a href={demo} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      )}
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>

      <div className="project-category">
        <h3>Frontend Projects</h3>
        <div className="projects-grid">
          {projects.frontend.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      <div className="project-category">
        <h3>React.js Projects</h3>
        <div className="projects-grid">
          {projects.react.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      <div className="project-category">
        <h3>Backend Projects</h3>
        <div className="projects-grid">
          {projects.backend.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      <div className="project-category">
        <h3>Full Stack Projects</h3>
        <div className="projects-grid">
          {projects.fullstack.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
