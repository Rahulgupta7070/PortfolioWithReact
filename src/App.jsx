import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';

function App() {

  const [loading, setLoading] = useState(true);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setPercentage(count);
      if (count >= 100) {
        clearInterval(interval);
        setTimeout(() => setLoading(false), 500); // small delay before showing portfolio
      }
    }, 25); // 25ms interval → approx 2.5 seconds to reach 100%
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-indigo-800 text-white">
        <h1 className="text-[5vw] font-bold mb-8 animate-pulse">Welcome to My Portfolio</h1>

        {/* Circle Loader */}
        <div className="relative w-32 h-32">
          <div className="w-32 h-32 border-4 border-t-blue-500 border-b-blue-500 border-l-transparent border-r-transparent rounded-full animate-spin"></div>

          {/* Percentage in center */}
          <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xl">
            {percentage}%
          </div>
        </div>

        <p className="mt-6 animate-bounce text-lg">Loading your awesome portfolio...</p>
      </div>
    );
  }

  // Main App
  return (
    <div className="w-full bg-zinc-900 font-['satoshi'] text-white overflow-x-hidden">
      <ScrollProgress/>
      <Navbar />

      <div id="home" className="scroll-mt-[56px]"><Home/></div>
      <div id="about" className="min-h-screen scroll-mt-[56px]"><About/></div>
      <div id="project" className="min-h-screen scroll-mt-[56px]"><Projects /></div>
      <div id="services" className="min-h-screen scroll-mt-[56px]"><Services/></div>
      <div id="contact" className="min-h-screen scroll-mt-[56px]"><Contact/></div>
      <div id="thanks" className="scroll-mt-[56px]"><Footer /></div>
    </div>
  );
}

export default App;
