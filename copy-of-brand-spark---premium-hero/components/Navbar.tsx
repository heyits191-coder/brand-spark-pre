
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-6 md:py-8 flex justify-between items-center transition-all duration-1000 cubic-bezier(0.19, 1, 0.22, 1) ${
      scrolled ? 'translate-y-2' : 'translate-y-0'
    }`}>
      <div className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-700 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-white/50' : 'bg-transparent'
      }`}>
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="relative">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1D1D1F] group-hover:bg-[#9370DB] transition-all duration-500"></div>
            <div className="absolute inset-0 rounded-full bg-[#9370DB]/40 blur-[5px] scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
          </div>
          <span className="text-[14px] font-semibold tracking-tight text-[#1D1D1F]">Brand Spark</span>
        </div>
      </div>
      
      <div className={`hidden md:flex items-center space-x-1 px-8 py-2 rounded-full transition-all duration-700 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-white/50' : 'bg-transparent'
      }`}>
        <NavLink label="Work" />
        <NavLink label="Process" />
        <NavLink label="About" />
        <div className="w-[1px] h-4 bg-[#1D1D1F]/10 mx-4"></div>
        <button className="px-6 py-2.5 bg-[#1D1D1F] text-white text-[12px] font-bold rounded-full tracking-wide hover:bg-[#9370DB] hover:shadow-[0_10px_20px_rgba(147,112,219,0.2)] transition-all duration-500 transform hover:-translate-y-0.5 active:scale-95">
          Start Briefing
        </button>
      </div>

      <div className="md:hidden flex items-center p-4 bg-white/50 backdrop-blur-md rounded-full border border-white/40 shadow-sm">
        <div className="w-6 h-[1.5px] bg-[#1D1D1F] relative">
          <div className="absolute top-1.5 right-0 w-4 h-[1.5px] bg-[#1D1D1F]"></div>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ label: string }> = ({ label }) => (
  <a 
    href="#" 
    className="px-5 py-2 text-[12px] font-medium tracking-widest uppercase text-[#1D1D1F]/50 hover:text-[#1D1D1F] transition-all duration-500 relative group"
  >
    <span className="relative z-10">{label}</span>
    <span className="absolute bottom-1.5 left-5 right-5 h-[1.5px] bg-[#9370DB] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center opacity-40"></span>
  </a>
);

export default Navbar;
