import React, { useState } from 'react'
import { motion, useScroll } from "motion/react"

function Home() {
  const [images, setImages] = useState([
    {url:"/Contact.png",top:"45%",left:"40%",isActive:false},
    {url:"/Hospital.png",top:"56%",left:"44%",isActive:false},
    {url:"/simon.png",top:"45%",left:"56%",isActive:false},
    {url:"/CarShowRoom.png",top:"45%",left:"50%",isActive:false},
    {url:"https://media.licdn.com/dms/image/v2/C560BAQHdN7EU0ufHXQ/company-logo_200_200/company-logo_200_200/0/1631437812688/obys_logo?e=2147483647&v=beta&t=wfpwoH2J_9eICve9JQ2Xkdbng3WHRTTsqxzynJgYruE",top:"60%",left:"50%",isActive:false},
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1 ? {...item, isActive:false} : {...item, isActive:true}
        )
      );
    }

    const numberInteger = Math.floor(data*100);
    switch(numberInteger) {
      case 0: imagesShow([]); break;
      case 1: imagesShow([0]); break;
      case 2: imagesShow([0,1]); break;
      case 3: imagesShow([0,1,2]); break;
      case 4: imagesShow([0,1,2,3]); break;
      case 6: imagesShow([0,1,2,3,4]); break;
      case 8: imagesShow([0,1,2,3,4,5]); break;
    }
  });

  const [mouseX, setMouseX] = useState(0);

  const handleMouseMove = (e) => {
    const centerX = window.innerWidth / 2;
    const offsetX = (e.clientX - centerX) / centerX;
    setMouseX(offsetX * 50);
  };

  return (
    <div 
      className="w-full relative flex flex-col md:flex-row mb-24 mt-32 md:mt-50"
      onMouseMove={handleMouseMove}
    >
      {/* Text Section */}
      <div className="max-w-screen-xl mx-auto text-center relative py-6 px-4 md:px-0">
       
        {/* Tagline */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[6vw] md:text-[3vw] font-semibold text-[#7443ff] mt-2"
        >
          Hey I am,
        </motion.p>

        {/* Big Name */}
        <motion.h1 
          style={{ x: mouseX }} 
          whileHover={{ scale: 1.1 }}
          initial={{ opacity: 0, scale: 1.3 }}  
          animate={{ opacity: 1, scale: 1 }}     
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 180 }}
          className="text-[14vw] md:text-[18vw] leading-none font-bold tracking-tight bg-zinc-300 select-none bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500 mt-4"
        >
          Rahul
        </motion.h1>

        {/* Skills */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-base md:text-xl font-semibold text-[#7443ff] mt-4"
        >
          Java &nbsp;|&nbsp; Spring Boot &nbsp;|&nbsp; Web Development
        </motion.p>

        {/* Scroll Images */}
        <div className='absolute top-0 w-full h-full'>
          {images.map((elem, index) => 
            elem.isActive && (
              <motion.img
                key={index}
                src={elem.url}
                style={{ top: elem.top, left: elem.left }}
                className='absolute w-24 md:w-40 rounded-lg -translate-x-[50%] -translate-y-[50%] cursor-pointer hover:scale-105 transition-transform duration-500'
                alt=""
              />
            )
          )}
        </div>
      </div>

      {/* Portfolio Photo */}
      <motion.div 
        initial={{ opacity: 0, y: 80, scale: 0.9 }} 
        animate={{ opacity: 1, y: 0, scale: 1 }} 
        transition={{ duration: 1, delay: 1.2, type: "spring", stiffness: 120 }}
        className="relative mt-6 md:mt-16 w-72 h-72 md:w-96 md:h-96 mx-auto group order-last md:order-none"
      >  
        <div className="absolute -inset-6 bg-violet-500 rounded-3xl blur-3xl opacity-40 group-hover:opacity-80 transition-all duration-700 ease-in-out"></div>
        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
          <img
            className="w-full h-full object-cover rounded-2xl border border-indigo-600"
            src="/p.JPG"
            alt="Portfolio"
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Home;
