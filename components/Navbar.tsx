
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Stats', href: '#coding' },
    { name: 'Stack', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certs', href: '#certification' },
    { name: 'Contact', href: '#contact' }
  ];

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
        
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="px-5 py-2 text-[10px] font-black text-slate-500 hover:text-brand-400 transition-all uppercase tracking-[0.2em] rounded-xl hover:bg-slate-800/50"
            >
              {link.name}
            </a>
          ))}
        </div>

        <button 
          className="lg:hidden p-3 text-slate-300 hover:text-brand-400 bg-slate-900/50 border border-slate-800 rounded-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-[#020617]/95 backdrop-blur-2xl border-b border-slate-800 overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-[600px] py-10 shadow-2xl' : 'max-h-0 py-0'}`}>
        <div className="px-6 space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-3xl font-black text-slate-300 hover:text-brand-400 transition-colors uppercase tracking-tight"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
