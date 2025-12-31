import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { 
  Code2, 
  Terminal, 
  Mail,
  Phone,
  Linkedin,
  Github,
  Sparkles,
  ArrowRight,
  ChevronUp,
  User
} from 'lucide-react';
import { 
  PERSONAL_INFO
} from './constants';

const ProfileImage = ({ className, imgClassName }: { className?: string, imgClassName?: string }) => {
  const [error, setError] = useState(false);
  const initials = PERSONAL_INFO.name ? PERSONAL_INFO.name.split(' ').map(n => n[0]).join('') : 'VS';

  return (
    <div className={`${className || ''} overflow-hidden bg-slate-900 flex items-center justify-center relative`}>
      {!error ? (
        <img 
          src={PERSONAL_INFO.profileImage} 
          alt={PERSONAL_INFO.name} 
          onError={() => setError(true)}
          className={`${imgClassName || ''} w-full h-full object-cover object-top transition-transform duration-700`}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50">
          <User className="w-1/3 h-1/3 text-slate-700 mb-1" />
          <span className="text-sm font-black text-slate-500 tracking-tighter">{initials}</span>
        </div>
      )}
    </div>
  );
};

const App: React.FC = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-brand-500/30 selection:text-brand-200" id="top">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent_70%)]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-6 bg-brand-500/20 rounded-full animate-pulse opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-400 to-blue-500 rounded-[2.5rem] md:rounded-[3.5rem] blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <ProfileImage 
                className="relative w-40 h-40 md:w-56 md:h-56 rounded-[2rem] md:rounded-[3rem] border-2 border-slate-800 bg-slate-900 shadow-2xl profile-glow" 
                imgClassName="scale-105 group-hover:scale-115"
              />
              
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center shadow-xl animate-bounce duration-[3000ms]">
                <Code2 className="w-6 h-6 text-brand-400" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center shadow-xl animate-bounce delay-700">
                <Terminal className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-brand-400 text-[10px] font-mono mb-8 backdrop-blur-sm shadow-lg">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span className="uppercase tracking-[0.2em]">Open for Opportunities</span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter leading-tight">
            <span className="block text-slate-500 text-2xl md:text-3xl font-medium mb-3 tracking-normal">Hello, I'm</span>
            <span className="bg-gradient-to-r from-white via-brand-300 to-blue-400 bg-clip-text text-transparent">
              Venkata Srujith
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            {PERSONAL_INFO.title}. Specializing in 
            <span className="text-brand-400 font-medium"> AI, ML </span> 
            and <span className="text-blue-400 font-medium"> Algorithm Optimization.</span> I build efficient solutions for complex problems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a 
              href="#contact" 
              className="group relative px-10 py-4 bg-brand-500 hover:bg-brand-400 text-[#020617] font-black rounded-2xl transition-all duration-500 overflow-hidden shadow-2xl shadow-brand-900/20"
            >
              <span className="relative z-10 flex items-center gap-2 uppercase tracking-wider text-xs">
                Contact Me <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
          </div>
          
          <div className="mt-20 flex justify-center gap-8">
            <a href={PERSONAL_INFO.github} className="group p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-slate-500 hover:text-white hover:border-brand-500/50 transition-all hover:-translate-y-1" target="_blank" rel="noreferrer"><Github className="w-6 h-6" /></a>
            <a href={PERSONAL_INFO.linkedin} className="group p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-slate-500 hover:text-white hover:border-brand-500/50 transition-all hover:-translate-y-1" target="_blank" rel="noreferrer"><Linkedin className="w-6 h-6" /></a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="group p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-slate-500 hover:text-white hover:border-brand-500/50 transition-all hover:-translate-y-1"><Mail className="w-6 h-6" /></a>
          </div>
        </div>
      </section>

      {/* 07. Contact Section */}
      <section id="contact" className="py-32 scroll-mt-32 relative overflow-hidden bg-slate-900/10 border-t border-slate-900/50">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block text-brand-500 font-mono font-black mb-8 uppercase tracking-[0.4em]">Get In Touch</div>
          <h2 className="text-6xl md:text-9xl font-black mb-16 tracking-tighter text-white">Let's Connect.</h2>
          
          <div className="grid sm:grid-cols-2 gap-10 mb-24 max-w-4xl mx-auto">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="group p-12 rounded-[4rem] bg-slate-900/60 border border-slate-800 hover:border-brand-400/50 transition-all flex flex-col items-center gap-8 backdrop-blur-md shadow-2xl">
              <div className="w-20 h-20 rounded-[2rem] bg-brand-500 text-[#020617] flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all shadow-xl shadow-brand-900/20"><Mail className="w-10 h-10" /></div>
              <div className="space-y-2">
                <h3 className="text-slate-500 text-[10px] font-mono font-black uppercase tracking-[0.3em]">Direct Email</h3>
                <p className="text-xl font-black text-slate-200 tracking-tight">{PERSONAL_INFO.email}</p>
              </div>
            </a>
            <div className="group p-12 rounded-[4rem] bg-slate-900/60 border border-slate-800 hover:border-blue-400/50 transition-all flex flex-col items-center gap-8 backdrop-blur-md shadow-2xl">
              <div className="w-20 h-20 rounded-[2rem] bg-blue-500 text-white flex items-center justify-center group-hover:scale-110 group-hover:-rotate-12 transition-all shadow-xl shadow-blue-900/20"><Phone className="w-10 h-10" /></div>
              <div className="space-y-2">
                <h3 className="text-slate-500 text-[10px] font-mono font-black uppercase tracking-[0.3em]">Mobile Contact</h3>
                <p className="text-xl font-black text-slate-200 tracking-tight">{PERSONAL_INFO.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 border-t border-slate-900/50 text-center relative overflow-hidden bg-slate-950">
        <div className="relative z-10">
          <div className="text-3xl font-black mb-6 tracking-tighter italic">VSB<span className="text-brand-500">.</span></div>
          <p className="text-slate-500 text-[10px] font-mono tracking-[0.3em] uppercase">Engineered by <span className="text-brand-400 font-black">Venkata Srujith Bellamkonda</span></p>
          <div className="mt-10 flex justify-center gap-6 opacity-30 hover:opacity-100 transition-opacity">
            <a href={PERSONAL_INFO.github} className="text-slate-500 hover:text-white transition-colors" target="_blank" rel="noreferrer"><Github className="w-5 h-5" /></a>
            <a href={PERSONAL_INFO.linkedin} className="text-slate-500 hover:text-white transition-colors" target="_blank" rel="noreferrer"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
      
      {/* Back to top button */}
      {showTopBtn && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-10 right-10 p-4 bg-brand-500/10 border border-brand-500/20 text-brand-400 rounded-2xl backdrop-blur-xl hover:bg-brand-500 hover:text-[#020617] transition-all z-40 shadow-2xl animate-in fade-in slide-in-from-bottom-5"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default App;