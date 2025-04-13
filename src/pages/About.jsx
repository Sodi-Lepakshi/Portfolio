import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../styles.css";

const About = () => {
  return (
    <div className="about-container">
      <motion.div
        className="about-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>About Me</h2>
        <p>
          I'm Lepakshi Sodi, an aspiring Java Full-Stack Developer with a passion for building interactive and efficient applications. I have experience in React.js, Java, Spring Boot, and databases like H2 and MongoDB.
        </p>
        <p>
          My goal is to create impactful web solutions that combine functionality with great user experience.
        </p>
        <Link to="/projects" className="view-work-btn">
          View My Work
        </Link>
      </motion.div>
      <motion.div
  className="about-image"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
  <img
    src="/profile.jpg"
    alt="Lepakshi Sodi"
    onError={(e) => (e.target.src = "https://via.placeholder.com/250?text=Profile+Image")}
  />
</motion.div>
    </div>
  );
};

export default About;