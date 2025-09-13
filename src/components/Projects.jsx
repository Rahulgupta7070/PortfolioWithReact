// Products.jsx
import React, { useRef, useState } from 'react';
import Product from './Project';
import { motion, useInView } from 'motion/react';

function Projects() {
  const product = [
    { title: "Car Showroom Management System  ", desc: "Built a Java console app for car showroom management using core OOP principles", live: true, case:true, liveLink: "https://www.linkedin.com/in/kumarrahulgupta/",
    caseLink: "https://github.com/Rahulgupta7070/Car-Showrooms-Management-System/tree/main/src" },
    { title: "Hospital Management System", desc: "Built a Java console app for hospital management using OOP and JDBC with MySQL.", live: true, case: true, liveLink: "https://example.com/hospital",
    caseLink: "https://github.com/Rahulgupta7070/Hospital-Management-System/tree/main/src/HospitalManagementSystem" },
    { title: "Obys Agency", desc: "Cloned Obys Agency site using HTML, CSS, JS with GSAP and Locomotive Scroll for smooth animations and effects.", live: true, case: true, liveLink: "https://obys-agency-rho-jet.vercel.app/",
    caseLink: "https://github.com/Rahulgupta7070/Obys-Agency" },
    { title: "Simon Says Game", desc: "Frontend ka look & feel decide karna important hai, kyunki project ka UI/UX hi sabse pehle impress karta hai.", live: true, case: true, liveLink: "https://example.com/hospital",
    caseLink: "https://github.com/Rahulgupta7070/Simon-Says-Game" },
    { title: "Smart Contact Manager", desc: "Spring Boot, Thymeleaf, MySQL, Hibernate, Spring Security ,Built a secure full-stack contact manager with login/registration, role-based access, and responsive UI. · Integrated MySQL using Hibernate.", live: true, case: true , liveLink: "https://example.com/hospital",
    caseLink: "https://github.com/Rahulgupta7070/SmartContactManager/tree/main/src"},
    { title: "Portfolio ", desc: "Portfolio site using HTML, CSS, JS ", live: true, case: true, liveLink: "https://portfolio-jade-chi-27.vercel.app/#contact",
    caseLink: "https://github.com/Rahulgupta7070/portfolio" }
  ];

  const [pos, setPos] = useState(0);

  const mover = (index) => {
    setPos(index * 20);
  };

  //heading ka animation
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 }); //30% pe hoga animation

  const images = [
    "/CarShowRoom.png",
     "/Hospital.png",
     "https://media.licdn.com/dms/image/v2/C560BAQHdN7EU0ufHXQ/company-logo_200_200/company-logo_200_200/0/1631437812688/obys_logo?e=2147483647&v=beta&t=wfpwoH2J_9eICve9JQ2Xkdbng3WHRTTsqxzynJgYruE",
    "/simon.png",
       "/Contact.png",
       "/AboutMe.png"
    
  ];

  return (
    <div className='mt-20'>
      <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-screen-xl mx-auto mb-12 px-5 text-center"
    >
      <h1 className="text-5xl font-extrabold text-zinc-300">
        My <span className="text-indigo-600">Projects</span>
      </h1>
      <p className="mt-4 text-lg text-zinc-300 max-w-2xl mx-auto">
        A showcase of my recent work and experiments.
      </p>
    </motion.div>


    <div className="mt-20 relative">

      {product.map((elem, index) => (
        <Product key={index} val={elem} mover={mover} count={index} />
      ))}

      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + 'rem' }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
          className="window absolute w-[25rem] h-[20rem] left-[48%] rounded-md overflow-hidden"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              animate={{
                y: -pos + 'rem',
                backgroundColor: pos === index * 20 ? '#7443ff' : 'transparent'
              }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.3 }}
              className="w-full h-full relative"
            >
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover mix-blend-overlay transition-colors duration-300"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
    </div>
  );
}

export default Projects;
