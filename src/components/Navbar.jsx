import React, { useState, useEffect } from 'react';
import Button from './Button';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", target: "home" },
    { name: "About", target: "about" },
    { name: "Project", target: "project" },
    { name: "", target: "" }, // divider
    { name: "Service", target: "services" },
    { name: "Contact", target: "contact" },
  ];

  // Show welcome message for 3 seconds
  useEffect(() => {
    setShowWelcome(true);
    const timer = setTimeout(() => setShowWelcome(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleScroll = (id, index) => {
    setActiveIndex(index);
    setIsMobileMenuOpen(false); // close menu on click
    const el = document.getElementById(id);
    const navbar = document.getElementById("navbar");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    if (el) {
      const topPos = el.offsetTop - navbarHeight;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  };

  return (
    <div
      id="navbar"
      className="fixed top-0 left-0 w-full py-3 px-4
                 bg-zinc-700 shadow-md flex flex-col md:flex-row items-center justify-between 
                 border-b border-violet-500 z-50"
    >
      {/* Left Section */}
      <div className="flex items-center w-full md:w-auto justify-between md:justify-start relative">
        {/* Logo */}
        <img 
          src="/logo1.png" 
          alt="icon" 
          className="w-8 h-8 mr-2 rounded-full border-2 border-violet-500 
                     transform transition-transform duration-300 hover:scale-110"
        />

        {/* Hamburger for mobile */}
        <button 
          className="md:hidden mx-4 text-white text-xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu Items */}
        <div className={`font-medium flex flex-col md:flex-row gap-4 md:gap-10 mt-2 md:mt-0
                         ${isMobileMenuOpen ? "block" : "hidden md:flex"} text-zinc-300 justify-center md:justify-start`}>
          {menuItems.map((elem, index) =>
            elem.name.length === 0 ? (
              <span key={index} className="hidden md:block w-[1px] h-6 bg-zinc-300"></span>
            ) : (
              <button
                key={index}
                onClick={() => handleScroll(elem.target, index)}
                className={`text-sm md:text-md flex items-center gap-1 cursor-pointer 
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

        {/* Welcome message */}
        {showWelcome && (
          <div className="absolute left-0 -bottom-10 bg-indigo-600 text-white px-4 py-1 rounded-md shadow-lg animate-fade-in-out">
            Welcome, Rahul!
          </div>
        )}
      </div>

      {/* Right Section - Button only on desktop */}
      <div className="mt-2 md:mt-0 hidden md:block">
        <Button />
      </div>
    </div>
  );
}

export default Navbar;
