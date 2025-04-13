import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser"; // Import EmailJS
import "../styles.css";

const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State to manage submission status
  const [status, setStatus] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS configuration (replace with your own IDs)
    const serviceId = "service_4blq767"; // Replace with your EmailJS Service ID
    const templateId = "template_n7kgoah"; // Replace with your EmailJS Template ID
    const userId = "Skb55Ff85lvclie_a"; // Replace with your EmailJS User ID

    // Send the email using EmailJS
    emailjs
      .send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        userId
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      })
      .catch((error) => {
        console.log("FAILED...", error);
        setStatus("Failed to send message. Please try again.");
      });
  };

  return (
    <div className="contact-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Feel free to reach out for collaborations or any inquiries.
      </motion.p>
      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </motion.form>
      {status && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ color: status.includes("successfully") ? "green" : "red", marginTop: "10px" }}
        >
          {status}
        </motion.p>
      )}
      <div className="social-links">
        <a
          href="http://www.linkedin.com/in/lepakshi-sodi"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Sodi-Lepakshi"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaGithub />
        </a>
        <a href="mailto:lepakshisodi@gmail.com" className="social-icon">
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default Contact;