import React, { useRef } from 'react'
import Card from './Service'
import { motion, useInView } from 'motion/react'

function Services() {

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 }); // element ka 30% dikhne par trigger


  return (
    <div className='w-full bg-zinc-900 py-15 mt-10'>
      {/* 🔹 Section Heading with Animation */}
           <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-screen-xl mx-auto mb-12 px-5  text-center"
              >
                <h1 className="text-5xl font-extrabold text-zinc-300">
                  My <span className="text-indigo-600">Services</span>
                </h1>
                <p className="mt-4 text-lg text-zinc-300 max-w-2xl mx-auto">
                 Here’s what I can do for you.
                </p>
              </motion.div>
          



      {/* Service Cards */}  
      <div className='max-w-screen-xl mx-auto flex gap-6 px-5 flex-col md:flex-row'>
        {/* Frontend Card */}
        <Card 
          title="Frontend Development"
          desc="I create clean, responsive, and user-friendly websites using React.js, Tailwind CSS, and JavaScript. I focus on smooth animations, reusable components, and fast performance across all devices. I also make sure websites are accessible for everyone and visually appealing, turning ideas into dynamic and high-performing web applications."
          hovers="true"
          delay={0.1}
        />

        {/* Backend Card */}
        <Card 
          
          title="Backend Development"
          desc="I build strong and scalable backend systems using Java and Spring Boot. I work on collections, exception handling, and multi-threading to write efficient and reliable code. I design REST APIs and microservices for maintainable applications, integrate databases using JPA/Hibernate, and optimize performance for fast servers. I also focus on security and connect backend with frontend for complete full-stack solutions."
          hovers="true"
          delay={0.1}
        />

        {/* Video Editing Card */}
        <Card 
          title="Video Editing"
          desc="I provide professional video editing and design services using Adobe Premiere Pro and Canva Pro. I create engaging content for social media, branding, and advertisements with smooth transitions, color grading, and audio improvements. My goal is to tell stories visually and help brands and individuals communicate their message effectively across platforms like Instagram, YouTube, and LinkedIn."
          hovers="true"
          delay={0.1}
        />
      </div>
    </div>
  )
}

export default Services
