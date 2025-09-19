// Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "motion/react";
import { SiLeetcode } from "react-icons/si";
function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300  mt-20 ">
      <div className="max-w-screen-xl mx-auto px-5 py-30 flex flex-col items-center gap-10">

        {/* Motion Thank You Note */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-indigo-600 mb-2">Thank You for Visiting!</h2>
          <p className="text-zinc-300 max-w-xl mt-2">
            I appreciate your time and interest in my work. 
            Feel free to connect with me on social media or send me a message. 
            Let’s create something amazing together! 🚀
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex gap-6 text-2xl text-zinc-300"
        >
          <a href="https://github.com/Rahulgupta7070" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors duration-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/kumarrahulgupta/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a href="https://leetcode.com/u/Rahulll_1_29/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors duration-300">
            < SiLeetcode/>
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors duration-300">
            <FaTwitter />
          </a>
        </motion.div>

        {/* Contact & CV */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col items-center gap-2 text-sm text-zinc-300"
        >
          <p>Email: <a href="mailto:krrahul87099@gmail.com" className="hover:text-indigo-500">krrahul87099@gmail.com</a></p>
          <p>Phone: <a href="tel:7070629414" className="hover:text-indigo-500">7070629414</a></p>
          <a href="/RahulCv.pdf" download className="hover:text-indigo-500 underline mt-6">
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Copyright strip */}
      <div className="bg-zinc-500 text-white text-center text-sm py-4">
        &copy; {new Date().getFullYear()} Rahul Kumar. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
