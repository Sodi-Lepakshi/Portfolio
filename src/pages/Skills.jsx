import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaMicrophone, FaComments, FaUserCheck, FaClock } from "react-icons/fa";
import "../styles.css";

const technicalSkills = [
  { name: "Java", proficiency: 85 },
  { name: "Spring Boot", proficiency: 80 },
  { name: "React.js", proficiency: 90 },
  { name: "JavaScript", proficiency: 85 },
  { name: "HTML", proficiency: 95 },
  { name: "CSS", proficiency: 90 },
  { name: "MongoDB", proficiency: 75 },
  { name: "H2 Database", proficiency: 70 },
  { name: "SQL", proficiency: 80 },
  { name: "Git", proficiency: 85 },
  { name: "Bootstrap", proficiency: 80 },
];

const personalTraits = [
  { name: "Public Speaking", icon: <FaMicrophone /> },
  { name: "Good Communicator", icon: <FaComments /> },
  { name: "Self-Discipline", icon: <FaUserCheck /> },
  { name: "Consistent", icon: <FaClock /> },
];

const Skills = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelectorAll(".skill-item").forEach((item) => {
        item.style.animation = "none";
      });
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="skills-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h2>

      <div className="technical-skills">
        <div className="skills-circle">
          <div className="core-orb" />
          {technicalSkills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              initial={{
                opacity: 0,
                x: 220 * Math.cos((index * 2 * Math.PI) / technicalSkills.length),
                y: 220 * Math.sin((index * 2 * Math.PI) / technicalSkills.length),
              }}
              animate={{
                opacity: 1,
                rotate: (index * 360) / technicalSkills.length,
                x: 220 * Math.cos((index * 2 * Math.PI) / technicalSkills.length),
                y: 220 * Math.sin((index * 2 * Math.PI) / technicalSkills.length),
              }}
              transition={{ duration: 5, ease: "easeOut" }}
              whileHover={{ boxShadow: "0 0 20px #00d4ff" }} // Glow effect without scaling text
            >
              <span className="skill-name">{skill.name}</span>
              <span className="proficiency-label">{skill.proficiency}%</span>
            </motion.div>
          ))}
          {technicalSkills.map((_, index) => (
            <motion.div
              key={`line-${index}`}
              className="connection-line"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                rotate: (index * 360) / technicalSkills.length,
                x: 110 * Math.cos((index * 2 * Math.PI) / technicalSkills.length),
                y: 110 * Math.sin((index * 2 * Math.PI) / technicalSkills.length),
              }}
              transition={{ duration: 5, ease: "easeOut" }}
            />
          ))}
        </div>
      </div>

      <div className="section-divider" />

      <motion.div
        className="personal-traits"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h3>Personal Traits</h3>
        <div className="traits-grid">
          {personalTraits.map((trait, index) => (
            <motion.div
              key={index}
              className="trait-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0, 212, 255, 0.3)" }}
            >
              <motion.span
                className="trait-icon"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.3 }}
              >
                {trait.icon}
              </motion.span>
              <span>{trait.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;