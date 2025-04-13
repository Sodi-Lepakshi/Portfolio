import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Added FaEnvelope for email icon
import "../styles.css";

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <p>© 2025 Lepakshi Sodi | All Rights Reserved</p>
      <div className="footer-social-links">
        <a
          href="https://linkedin.com/in/lepakshi-sodi" // Updated to your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Sodi-Lepakshi" // Updated to your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="footer-social-icon"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:lepakshisodi@gmail.com"
          className="footer-social-icon"
        >
          <FaEnvelope />
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;