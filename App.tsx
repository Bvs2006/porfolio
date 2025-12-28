
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import GeminiChat from './components/GeminiChat';
import { 
  Code2, 
  Terminal, 
  Database, 
  Cpu, 
  Trophy, 
  BookOpen, 
  Award,
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Globe,
  Activity,
  BarChart3,
  Zap,
  ArrowRight,
  Download,
  ChevronUp,
  User
} from 'lucide-react';
import { PERSONAL_INFO, SKILLS, PROJECTS, ACHIEVEMENTS, EDUCATION, CERTIFICATIONS, CODING_PROFILES } from './constants';

// Robust Image component with fallback logic
const ProfileImage = ({ className, imgClassName }: { className?: string, imgClassName?: string }) => {
  const [error, setError] = useState(false);
  const initials = PERSONAL_INFO.name.split(' ').map(n => n[0]).join('');

  return (
    <div className={`${className} overflow-hidden bg-slate-900 flex items-center justify-center`}>
      {!error ? (
        <img 
          src="./profile.png" 
          alt={PERSONAL_INFO.name} 
          onError={() => setError(true)}
          className={`${imgClassName} w-full h-full object-cover object-top transition-transform duration-500`}
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
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200" id="top">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.08),transparent_70%)]" />
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-600/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse delay-700 pointer-events-none" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              {/* Radar Pulse Effect */}
              <div className="absolute -inset-4 bg-cyan-500/20 rounded-full animate-ping opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              
              <ProfileImage 
                className="relative w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-slate-900" 
                imgClassName="scale-110 group-hover:scale-125"
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/50 border border-slate-800 text-cyan-400 text-xs font-mono mb-8 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest">Available for Internships</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-none">
            <span className="block text-slate-400 text-3xl md:text-4xl font-normal mb-2">Hello, I'm</span>
            <span className="bg-gradient-to-r from-white via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Venkata Srujith
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            An AI & Machine Learning student at Aditya University. Bridging the gap between 
            <span className="text-cyan-400 font-medium"> complex algorithms </span> 
            and <span className="text-blue-400 font-medium"> elegant user experiences.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#projects" 
              className="group relative px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-2xl transition-all duration-500 overflow-hidden shadow-2xl shadow-cyan-900/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative flex items-center gap-2">
                Explore Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a 
              href="#contact" 
              className="px-10 py-4 bg-slate-900/50 hover:bg-slate-800 text-slate-300 font-bold rounded-2xl border border-slate-800 transition-all duration-300 backdrop-blur-sm"
            >
              Get in Touch
            </a>
          </div>
          
          <div className="mt-20 flex justify-center gap-10">
            <a href={PERSONAL_INFO.github} className="text-slate-500 hover:text-white transition-all hover:scale-125" target="_blank" rel="noreferrer"><Github className="w-7 h-7" /></a>
            <a href={PERSONAL_INFO.linkedin} className="text-slate-500 hover:text-white transition-all hover:scale-125" target="_blank" rel="noreferrer"><Linkedin className="w-7 h-7" /></a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-500 hover:text-white transition-all hover:scale-125"><Mail className="w-7 h-7" /></a>
          </div>
        </div>
      </section>

      {/* 01. About Me */}
      <section id="about" className="py-32 scroll-mt-32 relative overflow-hidden border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-3/5">
              <div className="flex items-center gap-4 mb-10">
                <span className="text-cyan-500 font-mono text-xl font-bold">01.</span>
                <h2 className="text-4xl font-black tracking-tight">About Me</h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
              </div>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed font-light">
                <p>{PERSONAL_INFO.objective}</p>
                <p>
                  Specializing in <span className="text-slate-200">Data Structures & Algorithms</span>, I find joy in optimizing 
                  code and building scalable solutions. My recent focus has been on 
                  <span className="text-slate-200"> AI-driven educational tools </span> 
                  and console-based game engineering.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {ACHIEVEMENTS.map((ach, idx) => (
                  <div key={idx} className="group p-5 rounded-2xl bg-slate-900/40 border border-slate-800 hover:border-cyan-500/30 transition-all">
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1 group-hover:text-cyan-400 transition-colors">{ach.title}</p>
                    <p className="text-lg font-black text-slate-200 group-hover:scale-105 transition-transform origin-left italic">{ach.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-2/5 relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-[2rem] blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000" />
              <div className="relative rounded-[2rem] overflow-hidden border-2 border-slate-800 p-2 bg-slate-900 shadow-2xl shadow-cyan-900/10">
                <ProfileImage 
                  className="rounded-[1.5rem] w-full aspect-square" 
                  imgClassName="hover:scale-[1.02]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/5 rounded-full blur-xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* 02. Problem Solving (Stats) */}
      <section id="coding" className="py-32 bg-slate-900/30 scroll-mt-32 border-y border-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-cyan-500 font-mono text-xl font-bold">02.</span>
            <h2 className="text-4xl font-black tracking-tight">Coding Stats</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {CODING_PROFILES.map((profile, idx) => (
              <a 
                key={idx} 
                href={profile.url} 
                target="_blank" 
                rel="noreferrer"
                className="group relative flex flex-col p-6 rounded-3xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${profile.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity`} />
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all ${profile.textColor}`}>
                    {profile.platform === 'LeetCode' && <Trophy className="w-6 h-6" />}
                    {profile.platform === 'CodeChef' && <Activity className="w-6 h-6" />}
                    {profile.platform === 'Codeforces' && <Zap className="w-6 h-6" />}
                    {profile.platform === 'HackerRank' && <Terminal className="w-6 h-6" />}
                    {profile.platform === 'GeeksforGeeks' && <Code2 className="w-6 h-6" />}
                  </div>
                  <h3 className="text-xl font-black text-slate-100 mb-1">{profile.platform}</h3>
                  <div className="mt-auto">
                    <p className="text-3xl font-black text-cyan-400 group-hover:tracking-wider transition-all">{profile.solved}</p>
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-1">{profile.info}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 03. Tech Stack */}
      <section id="skills" className="py-32 scroll-mt-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-cyan-500 font-mono text-xl font-bold">03.</span>
            <h2 className="text-4xl font-black tracking-tight">Tech Stack</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map((cat, idx) => (
              <div key={idx} className="relative group p-8 rounded-[2.5rem] bg-slate-900/20 border border-slate-800 hover:border-slate-700 transition-all duration-500">
                <div className="flex items-center gap-5 mb-8">
                  <div className="p-4 rounded-2xl bg-slate-950 text-cyan-400 border border-slate-800 group-hover:border-cyan-500/50 transition-all group-hover:-rotate-3">
                    {idx === 0 && <Terminal className="w-6 h-6" />}
                    {idx === 1 && <Globe className="w-6 h-6" />}
                    {idx === 2 && <Database className="w-6 h-6" />}
                    {idx === 3 && <Cpu className="w-6 h-6" />}
                    {idx === 4 && <BookOpen className="w-6 h-6" />}
                  </div>
                  <h3 className="text-xl font-black tracking-tight">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {cat.items.map((skill, sIdx) => (
                    <span key={sIdx} className="px-4 py-1.5 text-xs font-semibold bg-slate-950 text-slate-400 border border-slate-800 rounded-full hover:text-cyan-400 transition-all cursor-default">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. Projects */}
      <section id="projects" className="py-32 bg-slate-900/10 scroll-mt-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-cyan-500 font-mono text-xl font-bold">04.</span>
            <h2 className="text-4xl font-black tracking-tight">Featured Work</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
          </div>
          <div className="grid lg:grid-cols-2 gap-10">
            {PROJECTS.map((proj, idx) => (
              <div key={idx} className="group relative flex flex-col rounded-[2.5rem] bg-slate-900/40 border border-slate-800 overflow-hidden hover:border-cyan-500/30 transition-all duration-500">
                <div className="h-64 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-80" />
                  <img src={`https://picsum.photos/seed/proj-${idx}/1200/600`} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-6 right-6 z-20">
                    <a href={proj.github} target="_blank" rel="noreferrer" className="p-3 bg-slate-950/80 backdrop-blur-md rounded-full hover:bg-cyan-600 transition-all text-white border border-slate-800"><Github className="w-5 h-5" /></a>
                  </div>
                  <div className="absolute bottom-6 left-8 z-20">
                    <span className="px-3 py-1 bg-cyan-600 text-[10px] font-black uppercase tracking-widest text-white rounded-lg">{proj.tech}</span>
                  </div>
                </div>
                <div className="p-10 flex-1">
                  <h3 className="text-3xl font-black mb-6 flex items-center justify-between group-hover:text-cyan-400 transition-colors">{proj.title}<ExternalLink className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0" /></h3>
                  <ul className="space-y-4 mb-10">
                    {proj.description.map((desc, dIdx) => (
                      <li key={dIdx} className="text-slate-400 text-sm leading-relaxed flex gap-3 font-light"><ChevronRight className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />{desc}</li>
                    ))}
                  </ul>
                  {proj.impact && <div className="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/10 text-xs text-cyan-200/80 leading-relaxed italic"><span className="font-black uppercase mr-2 text-cyan-400">Impact:</span> {proj.impact}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. Education */}
      <section id="education" className="py-32 scroll-mt-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-cyan-500 font-mono text-xl font-bold">05.</span>
            <h2 className="text-4xl font-black tracking-tight">Education</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="group relative pl-12 border-l border-slate-800 pb-12 last:pb-0">
                <div className="absolute -left-[13px] top-0 w-6 h-6 rounded-full bg-slate-950 border-2 border-slate-800 group-hover:border-cyan-500 transition-colors flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-slate-800 group-hover:bg-cyan-500 transition-colors" />
                </div>
                <span className="text-xs font-mono font-bold text-cyan-500 mb-3 block uppercase tracking-widest">{edu.period}</span>
                <h3 className="text-2xl font-black mb-1 text-slate-100 group-hover:text-cyan-400 transition-colors">{edu.institution}</h3>
                <p className="text-slate-400 text-lg font-light italic mb-4">{edu.degree}</p>
                <div className="flex flex-wrap gap-6">
                   <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/50 border border-slate-800 text-sm font-bold text-slate-300"><Award className="w-4 h-4 text-cyan-500" /> {edu.score}</div>
                   <div className="flex items-center gap-2 text-sm font-mono text-slate-500"><Globe className="w-4 h-4" /> {edu.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. Certifications */}
      <section id="certification" className="py-32 bg-slate-900/20 scroll-mt-32 border-t border-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-cyan-500 font-mono text-xl font-bold">06.</span>
            <h2 className="text-4xl font-black tracking-tight">Certifications</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="group p-8 rounded-[2rem] bg-slate-950 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3.5 rounded-2xl bg-slate-900 text-cyan-500 group-hover:scale-110 transition-transform"><Award className="w-6 h-6" /></div>
                  {cert.status && <span className="px-2.5 py-1 text-[9px] font-black uppercase tracking-widest bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-lg">{cert.status}</span>}
                </div>
                <h4 className="text-lg font-black leading-snug group-hover:text-cyan-400 transition-colors">{cert.name}</h4>
                <p className="text-xs font-mono text-slate-500 mt-2 uppercase tracking-tighter">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. Contact */}
      <section id="contact" className="py-32 scroll-mt-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(6,182,212,0.1),transparent_50%)]" />
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="inline-block text-cyan-500 font-mono font-bold mb-6">07. What's Next?</div>
          <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter text-white">Get In Touch</h2>
          <p className="text-slate-400 text-xl mb-16 max-w-2xl mx-auto leading-relaxed font-light">
            I'm currently seeking <span className="text-cyan-400">internship opportunities</span> and collaborative coding projects. If you have a question or just want to say hi, my inbox is always open!
          </p>
          <div className="grid sm:grid-cols-2 gap-8 mb-20 max-w-3xl mx-auto">
            <a href={`mailto:${PERSONAL_INFO.email}`} className="group p-10 rounded-[3rem] bg-slate-900/50 border border-slate-800 hover:border-cyan-400 transition-all duration-500 flex flex-col items-center gap-6">
              <div className="w-16 h-16 rounded-3xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-all duration-500"><Mail className="w-8 h-8" /></div>
              <div className="space-y-1"><h3 className="text-slate-500 text-[10px] font-mono font-bold uppercase tracking-[0.2em]">Send Email</h3><p className="text-lg font-black text-slate-200">{PERSONAL_INFO.email}</p></div>
            </a>
            <div className="group p-10 rounded-[3rem] bg-slate-900/50 border border-slate-800 hover:border-blue-400 transition-all duration-500 flex flex-col items-center gap-6">
              <div className="w-16 h-16 rounded-3xl bg-blue-500/10 text-blue-400 flex items-center justify-center group-hover:scale-110 transition-all duration-500"><Phone className="w-8 h-8" /></div>
              <div className="space-y-1"><h3 className="text-slate-500 text-[10px] font-mono font-bold uppercase tracking-[0.2em]">Phone Call</h3><p className="text-lg font-black text-slate-200">{PERSONAL_INFO.phone}</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-900/50 text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        <p className="text-slate-500 text-xs font-mono tracking-[0.1em] uppercase">Crafted with passion by <span className="text-cyan-400 font-black">Venkata Srujith</span></p>
        <p className="text-slate-700 text-[10px] mt-4 font-mono">&copy; {new Date().getFullYear()} Aditya University. All rights reserved.</p>
      </footer>

      {/* Utility: Back to Top */}
      {showTopBtn && (
        <a href="#top" className="fixed bottom-24 right-6 bg-slate-900/50 backdrop-blur-md border border-slate-700 p-3 rounded-full text-cyan-400 shadow-2xl z-40 hover:bg-cyan-600 hover:text-white transition-all duration-300">
          <ChevronUp className="w-6 h-6" />
        </a>
      )}

      {/* AI Assistant */}
      <GeminiChat />
    </div>
  );
};

export default App;
