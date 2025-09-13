import React from 'react'
import { motion } from 'motion/react'
import { GoArrowRight } from "react-icons/go"

function Service({ title, desc, hovers = "false", delay = 0 }) {

    
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      viewport={{ once: true }}
      whileHover={{
        backgroundColor: hovers === "true" && "#7443ff",
        scale: 1.05,
        padding: "25px",
        transition: { type: "spring", stiffness: 200, damping: 15 } // ✅ yahan daalna hai
      }}
      className="bg-zinc-800 p-6 mt-10 rounded-2xl shadow-lg min-h-[22rem] flex flex-col justify-between text-left text-zinc-200"
    >
      <div>
        <div className="flex justify-between items-center">
          <motion.h3 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: delay + 0.2 }}
            className="text-lg font-semibold"
          >
            {title}
          </motion.h3>
          <GoArrowRight size={22}/>
        </div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
          className="text-3xl font-bold mt-4"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
          className="text-sm mt-4 leading-relaxed text-zinc-300"
        >
          {desc}
        </motion.p>
      </div>
    </motion.div>
  )
}

export default Service
