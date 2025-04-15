import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
import "../styles.css";

const Home = () => {
  return (
    <div className="home-container">
      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h1>
          Hi, I'm{" "}
          <TypeAnimation
            sequence={["Lepakshi Sodi", 2000]}
            wrapper="span"
            repeat={1}
            className="highlight-name"
          />
        </h1>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
        Java Full-Stack Developer
      </motion.p>
      <motion.p className="tagline" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.8 }}>
        Crafting impactful web solutions with creativity and precision.
      </motion.p>
      <div className="cta-buttons">
      <motion.a
  href="/resume_portfolio.pdf"
  download="Lepakshi_Sodi_Resume.pdf"
  className="resume-btn"
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(0, 212, 255, 0.7)" }}
  whileTap={{ scale: 0.95 }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5, duration: 0.8 }}
>
  Download Resume
</motion.a>

  <motion.div
    whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(0, 212, 255, 0.7)" }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.7, duration: 0.8 }}
  >
    <Link to="/projects" className="view-work-btn">
      View My Work
    </Link>
  </motion.div>
</div>
</div>
  );
};

export default Home;