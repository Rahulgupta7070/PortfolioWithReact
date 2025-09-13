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
          desc="Crafting pixel-perfect, responsive, and user-friendly interfaces with modern tools like React.js, Tailwind CSS, and JavaScript. I focus on:

Smooth animations & transitions for a polished, interactive feel.

Reusable components for faster development and maintainable code.

Cross-device compatibility to ensure perfect performance on all screen sizes.

Optimized performance with minimal load times and efficient rendering.

Accessibility to make websites usable for everyone.

Turning ideas into dynamic, visually appealing, and high-performance websites that delight users."
          hovers="true"
          delay={0.1}
        />

        {/* Backend Card */}
        <Card 
          
          title="Backend Development"
          desc="Backend Development
Providing robust and scalable backend solutions using Java and Spring Boot. Key focus areas:
Collections, Exception Handling & Multi-threading for efficient and reliable code.
REST APIs & Microservices design for modular and maintainable applications.
Database integration using JPA/Hibernate for seamless data management.
Performance optimization to ensure fast and responsive server-side operations.
Secure and enterprise-grade systems with scalable architecture.
Enabling end-to-end full-stack development by connecting backend with frontend efficiently."
          hovers="true"
          delay={0.1}
        />

        {/* Video Editing Card */}
        <Card 
          title="Video Editing"
          desc="Video Editing
Offering premium video editing and Canva Pro design services for social media, branding, and content creation. Key highlights:
Professional video editing using Adobe Premiere Pro and Canva Pro.
Engaging content creation for social media, advertisements, and branding campaigns.
Creative visual storytelling to make videos more impactful and memorable.
Optimized formats for multiple platforms including Instagram, YouTube, and LinkedIn.
Attention to detail with smooth transitions, color grading, and audio enhancements.
Helping brands and individuals communicate their message effectively through visually stunning videos."
          hovers="true"
          delay={0.1}
        />
      </div>
    </div>
  )
}

export default Services
