import React, { useEffect, useState } from "react";

function ScrollProgress() {
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "project", label: "Projects" },
    { id: "services", label: "Services" },
    { id: "thanks", label: "Thanks" },
    { id: "contact", label: "Contact" },
  ];

  const [scrollPercent, setScrollPercent] = useState(0);
  const [currentSection, setCurrentSection] = useState(sections[0].label);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);

      // current section
      const mid = scrollTop + window.innerHeight / 2;
      for (let sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (mid >= top && mid < bottom) {
            setCurrentSection(sec.label);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-full w-6 z-50 flex flex-col items-center">
      {/* Scroll bar background */}
      <div className="bg-zinc-300 w-2 rounded-full h-full relative overflow-hidden">
        {/* Filled part */}
        <div
          className="bg-indigo-600 w-full origin-top transition-all duration-150"
          style={{ height: `${scrollPercent}%` }}
        ></div>
      </div>

      {/* Section label */}
      <div className="text-xs mt-2 text-zinc-800 font-semibold bg-zinc-100 px-3 py-1 rounded shadow ml-5">
        {currentSection}
      </div>
    </div>
  );
}

export default ScrollProgress;
