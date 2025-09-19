import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <div className="max-w-screen-xl mx-auto bg-zinc-900 min-h-screen pt-20 md:pt-32 pb-10 px-6 lg:px-20">
      {/* Heading */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-screen-xl mx-auto mb-16 px-5 text-center"
      >
        <h1 className="text-5xl font-extrabold text-zinc-300">
          About <span className="text-indigo-600">Me</span>
        </h1>
      </motion.div>

      {/* About Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img
            src="/about-photo.jpg"
            alt="Rahul"
            className="w-64 h-72 md:w-80 md:h-96 object-cover rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* About Text */}
        <motion.p
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-base md:text-lg text-zinc-400 leading-relaxed"
        >
          Hi, I'm <span className="font-semibold text-indigo-600">Rahul</span> — 
          a passionate Java developer and tech enthusiast. I love coding, solving problems, and learning new technologies. I specialize in Java and Spring Boot, building applications that are reliable and useful in the real world. I also enjoy improving my skills in Data Structures and Algorithms (DSA) and exploring full-stack development. My focus is on writing clean, efficient, and maintainable code. I aim to create technology that not only works but also helps people and makes a positive impact.
        </motion.p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 mt-16">
        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.05 }}
          className="bg-zinc-400 rounded-2xl shadow-lg p-6 cursor-pointer hover:bg-indigo-50 transition-colors duration-300"
        >
          <h2 className="text-xl font-semibold text-black mb-4">Skills</h2>
          <ul className="text-black space-y-2">
            <li><strong>Programming:</strong> Core Java, OOPs Concepts, HTML, CSS, JavaScript, Tailwind CSS</li>
            <li><strong>Backend:</strong> Java (Collections, Exception Handling, Multi-threading),
Spring Boot (REST APIs, JPA/Hibernate)</li>
            <li><strong>Frameworks/Tools:</strong> React.js, Git & GitHub, IntelliJ IDEA, VS Code</li>
          </ul>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="bg-zinc-400 rounded-2xl shadow-lg p-6 cursor-pointer hover:bg-indigo-50 transition-colors duration-300"
        >
          <h2 className="text-xl font-semibold text-black mb-4">Experience</h2>
       <ul className="text-zinc-700 space-y-2">
  <li>
    <strong>Java Developer (2024–Present):</strong> Backend development with Java & Spring Boot, building REST APIs and database-driven applications with clean, scalable code.
  </li>
  <li>
    <strong>Frontend Developer (2023–Present):</strong> Designed responsive UIs using HTML, CSS, JavaScript,React.js & Tailwind CSS, integrated with backend APIs for user-friendly web apps.
  </li>
  <li>
    <strong>Video Editor (2022–2024):</strong> Edited videos using Canva & Premiere Pro, focusing on creative storytelling.
  </li>
</ul>

        </motion.div>

       {/* Education */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.4 }}
  whileHover={{ scale: 1.05 }}
  className="bg-zinc-400 rounded-2xl shadow-lg p-6 cursor-pointer hover:bg-indigo-50 transition-colors duration-300"
>
  <h2 className="text-xl font-semibold text-black mb-4">Education</h2>
  <ul className="text-zinc-700 space-y-2">
    <li>
      <strong>2022 - Present:</strong> B.Tech CSE, PTU — 8.23/10 CGPA
    </li>
    <li>
      <strong>2020:</strong> Class 12th, L.N.D College — 83.4%
    </li>
    <li>
      <strong>2018:</strong> Class 10th, H.M.S Madhubhan — 71.8%
    </li>
  </ul>
</motion.div>

      </div>
    </div>
  );
}

export default About;
