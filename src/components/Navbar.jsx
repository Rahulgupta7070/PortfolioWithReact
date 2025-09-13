import React, { useState, useEffect } from 'react';
import Button from './Button';

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);

  const menuItems = [
    { name: "Home", target: "home" },
    { name: "About", target: "about" },
    { name: "Project", target: "project" },
    { name: "", target: "" },
    { name: "Service", target: "services" },
    { name: "Contact", target: "contact" },
  ];

  // Show welcome message for 3 seconds on load
  useEffect(() => {
    setShowWelcome(true);
    const timer = setTimeout(() => setShowWelcome(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (id, index) => {
    setActiveIndex(index);
    const el = document.getElementById(id);
    const navbar = document.getElementById("navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;
    const currentScroll = window.scrollY;

    if (el) {
      const topPos = el.offsetTop - navbarHeight;
      if (id === "home" && currentScroll <= 5) return;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  };

  return (
    <div
      id="navbar"
      className="fixed top-0 left-28 w-full max-w-screen-xl mx-auto py-3 px-4
             bg-zinc-700 shadow-md flex items-center justify-between 
             border-b border-violet-500 rounded-md z-50"
    >
      {/* Left Section */}
      <div className="flex items-center relative">
        <img 
          src="/logo1.png" 
          alt="icon" 
          className="w-8 h-8 rounded-full border-2 border-violet-500 
                     transform transition-transform duration-300 hover:scale-120"
        />

        <div className="font-medium flex gap-10 ml-10 text-zinc-300">
          {menuItems.map((elem, index) =>
            elem.name.length === 0 ? (
              <span key={index} className="w-[1px] h-6 bg-zinc-300"></span>
            ) : (
              <button
                key={index}
                onClick={() => handleScroll(elem.target, index)}
                className={`text-md flex items-center gap-1 cursor-pointer 
                           transition-colors duration-300 
                           ${activeIndex === index ? "text-indigo-300 font-semibold" : "hover:text-indigo-300"}`}
              >
                {activeIndex === index && (
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full bg-green-500"
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                  />
                )}
                {elem.name}
              </button>
            )
          )}
        </div>

        {/* Welcome message overlay */}
        {showWelcome && (
          <div className="absolute left-0 -bottom-10 bg-indigo-600 text-white px-4 py-1 rounded-md shadow-lg animate-fade-in-out">
            Welcome, Rahul!
          </div>
        )}
      </div>

      {/* Right Section */}
    
                <Button  />
      
    </div>
  );
}

export default Navbar;
