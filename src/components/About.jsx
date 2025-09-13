import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function About() {

//heading ka animation
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 }); // 30% dikhne par trigger hoga 


  return (
    <div className="max-w-screen-xl mx-auto bg-zinc-900 min-h-screen py-10 px-6 lg:px-20">
      {/* Heading */}
      <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-screen-xl mx-auto mb-30 px-5 text-center"
          >
            <h1 className="text-5xl font-extrabold text-zinc-300">
              About <span className="text-indigo-600">Me</span>
            </h1>
            
          </motion.div>

      {/* About Section (Photo + Text) */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img
            src="./public/p.JPG"
            alt="Rahul"
            className="w-80 h-80 object-cover rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* About Text */}
        <motion.p
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-lg text-zinc-400 leading-relaxed"
        >
          Hi, I'm <span className="font-semibold text-indigo-600">Rahul</span> — 
          a Java Developer, tech enthusiast, and lifelong learner who is passionate 
          about coding, problem-solving, and continuous improvement. I specialize in 
          Java-based backend development with Spring Boot and love building robust, 
          real-world applications. Whether it's exploring new technologies, developing 
          full-stack solutions, or sharpening my skills through Data Structures and 
          Algorithms (DSA), I’m always driven to grow. I believe in writing clean, 
          efficient, and maintainable code, and my goal is to create tech that not 
          only works but genuinely makes a difference.
        </motion.p>
      </div>

      {/* Skills / Experience / Education as Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-20">
        {/* Skills Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.05 }}
          className="bg-zinc-400 rounded-2xl shadow-lg p-6 cursor-pointer 
                     hover:bg-indigo-50 transition-colors duration-300"
        >
          <h2 className="text-xl font-semibold text-black mb-4">Skills</h2>
          <ul className="text-black space-y-2">
            <li><strong>Programming:</strong> Java, OOPs, HTML, CSS, JS, Tailwind</li>
            <li><strong>Backend:</strong> Spring Boot, REST APIs, Microservices</li>
            <li><strong>Tools:</strong> IntelliJ, VS Code, GitHub, Canva, Premiere Pro</li>
          </ul>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="bg-zinc-400 rounded-2xl shadow-lg p-6 cursor-pointer 
                     text-black hover:bg-indigo-50  transition-colors duration-300"
        >
          <h2 className="text-xl font-semibold text-black  mb-4">Experience</h2>
          <ul className="text-zinc-700 space-y-2">
            <li><strong>Java Developer (2024–Present):</strong> REST APIs, Microservices</li>
            <li><strong>Frontend Developer (2023–2024):</strong> Responsive UIs, API integration</li>
            <li><strong>Video Editor (2022–2024):</strong> Canva, Premiere Pro, storytelling</li>
          </ul>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="bg-zinc-400 rounded-2xl shadow-lg p-6 cursor-pointer 
                     text-black hover:bg-indigo-50  transition-colors duration-300"
        >
          <h2 className="text-xl font-semibold text-black  mb-4">Education</h2>
          <ul className="text-zinc-700 space-y-2">
            <li><strong>2022 - Present:</strong> B.Tech CSE, PTU</li>
            <li><strong>2020:</strong> Class 12th, L.N.D College</li>
            <li><strong>2018:</strong> Class 10th, H.M.S Madhubhan</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
