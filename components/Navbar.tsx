import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#020617]/90 backdrop-blur-xl py-3 border-b border-slate-800/50' : 'bg-transparent py-8'}`}>
      <div 
        className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-brand-400 to-blue-500 transition-all duration-150" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#top" className="group flex items-center gap-1.5 text-2xl font-black italic tracking-tighter">
          <span className="bg-gradient-to-br from-brand-400 to-blue-600 bg-clip-text text-transparent">
            VSB<span className="text-white group-hover:text-brand-400 transition-colors">.</span>
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;