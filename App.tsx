
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
  Zap,
  ArrowRight,
  ChevronUp,
  User
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  SKILLS, 
  PROJECTS, 
  ACHIEVEMENTS, 
  EDUCATION, 
  CERTIFICATIONS, 
  CODING_PROFILES 
} from './constants';

// Robust Image component with fallback logic
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
      {/* Coder Tag overlay similar to the sleeve in the photo */}
      <div className="absolute top-1/2 -right-1 translate-y-[-50%] z-20 hidden md:block">
        <div className="coder-text text-[10px] font-black tracking-[0.3em] uppercase bg-black/60 backdrop-blur-md px-1 py-4 text-brand-400 border border-brand-400/30 rounded-l-md transform rotate-180">
          CODER
        </div>
      </div>
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
        {/* Abstract Background Elements */}
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
              
              {/* Floating Decorative Elements */}
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
            <span className="uppercase tracking-[0.2em]">Ready for Next Challenge</span>
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
              href="#projects" 
              className="group relative px-10 py-4 bg-brand-500 hover:bg-brand-400 text-[#020617] font-black rounded-2xl transition-all duration-500 overflow-hidden shadow-2xl shadow-brand-900/20"
            >
              <span className="relative z-10 flex items-center gap-2 uppercase tracking-wider text-xs">
                View My Work <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <a 
              href="#contact" 
              className="px-10 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-300 font-bold rounded-2xl border border-slate-800 transition-all duration-300 backdrop-blur-sm text-xs uppercase tracking-wider"
            >
              Hire Me
            </a>
          </div>
          
          <div className="mt-20 flex justify-center gap-8">
            <a href={PERSONAL_INFO.github} className="group p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-slate-500 hover:text-white hover:border-brand-500/50 transition-all hover:-translate-y-1" target="_blank" rel="noreferrer"><Github className="w-6 h-6" /></a>
            <a href={PERSONAL_INFO.linkedin} className="group p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-slate-500 hover:text-white hover:border-brand-500/50 transition-all hover:-translate-y-1" target="_blank" rel="noreferrer"><Linkedin className="w-6 h-6" /></a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="group p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-slate-500 hover:text-white hover:border-brand-500/50 transition-all hover:-translate-y-1"><Mail className="w-6 h-6" /></a>
          </div>
        </div>
      </section>

      {/* 01. About Me */}
      <section id="about" className="py-32 scroll-mt-32 relative overflow-hidden border-t border-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-3/5">
              <div className="flex items-center gap-4 mb-10">
                <span className="text-brand-500 font-mono text-xl font-bold">01.</span>
                <h2 className="text-4xl font-black tracking-tight uppercase">About Me</h2>
                <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
              </div>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>{PERSONAL_INFO.objective}</p>
                <p>
                  Specializing in <span className="text-slate-200 font-semibold">Data Structures & Algorithms</span>, I find joy in optimizing 
                  code and building scalable solutions. Currently pursuing my B.Tech with a focus on cutting-edge AI technologies.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6">
                {ACHIEVEMENTS.map((ach, idx) => (
                  <div key={idx} className="group p-5 rounded-2xl bg-slate-900/40 border border-slate-800/50 hover:border-brand-500/30 transition-all backdrop-blur-sm">
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mb-1 group-hover:text-brand-400 transition-colors">{ach.title}</p>
                    <p className="text-lg font-black text-slate-200 italic">{ach.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-2/5 relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-500/10 to-blue-500/10 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-60 transition duration-1000" />
              <div className="relative rounded-[2.5rem] overflow-hidden border-2 border-slate-800 p-2 bg-slate-900 shadow-2xl">
                <ProfileImage 
                  className="rounded-[2rem] w-full aspect-square" 
                  imgClassName="hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. Coding Stats */}
      <section id="coding" className="py-32 bg-slate-900/20 scroll-mt-32 border-y border-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-brand-500 font-mono text-xl font-bold">02.</span>
            <h2 className="text-4xl font-black tracking-tight uppercase">Coding Stats</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {CODING_PROFILES.map((profile, idx) => (
              <a 
                key={idx} 
                href={profile.url} 
                target="_blank" 
                rel="noreferrer"
                className="group relative flex flex-col p-8 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-brand-500/50 transition-all duration-500 hover:-translate-y-3 backdrop-blur-md shadow-xl"
              >
                <div className={`w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${profile.textColor}`}>
                   {profile.platform === 'LeetCode' && <Trophy className="w-7 h-7" />}
                   {profile.platform === 'CodeChef' && <Activity className="w-7 h-7" />}
                   {profile.platform === 'Codeforces' && <Zap className="w-7 h-7" />}
                   {profile.platform === 'HackerRank' && <Terminal className="w-7 h-7" />}
                   {profile.platform === 'GeeksforGeeks' && <Code2 className="w-7 h-7" />}
                </div>
                <h3 className="text-xl font-black text-slate-100 mb-1 tracking-tight">{profile.platform}</h3>
                <div className="mt-auto">
                  <p className="text-3xl font-black text-brand-400">{profile.solved}</p>
                  <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-1">{profile.info}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 03. Skills */}
      <section id="skills" className="py-32 scroll-mt-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-brand-500 font-mono text-xl font-bold">03.</span>
            <h2 className="text-4xl font-black tracking-tight uppercase">Tech Stack</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map((cat, idx) => (
              <div key={idx} className="relative group p-10 rounded-[3rem] bg-slate-900/30 border border-slate-800 hover:border-brand-500/30 transition-all backdrop-blur-sm">
                <div className="flex items-center gap-5 mb-10">
                  <div className="p-4 rounded-2xl bg-slate-950 text-brand-400 border border-slate-800 shadow-lg">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-black tracking-tight">{cat.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {cat.items.map((skill, sIdx) => (
                    <span key={sIdx} className="px-5 py-2 text-[10px] font-black tracking-widest uppercase bg-slate-950/80 text-slate-400 border border-slate-800 rounded-xl hover:text-brand-400 hover:border-brand-500/50 transition-colors">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04. Projects */}
      <section id="projects" className="py-32 bg-slate-900/10 scroll-mt-32 border-t border-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-brand-500 font-mono text-xl font-bold">04.</span>
            <h2 className="text-4xl font-black tracking-tight uppercase">Featured Work</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {PROJECTS.map((proj, idx) => (
              <div key={idx} className="group relative flex flex-col rounded-[3rem] bg-slate-900/40 border border-slate-800/80 overflow-hidden hover:border-brand-500/30 transition-all shadow-2xl">
                <div className="h-72 relative overflow-hidden bg-slate-950">
                  <img src={`https://picsum.photos/seed/srujith-p${idx}/1200/800`} alt={proj.title} className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                  <div className="absolute top-8 right-8 z-20">
                    <a href={proj.github} target="_blank" rel="noreferrer" className="p-4 bg-slate-950/90 backdrop-blur-md rounded-2xl border border-slate-800 hover:bg-brand-500 transition-all text-white hover:text-[#020617] shadow-xl"><Github className="w-6 h-6" /></a>
                  </div>
                  <div className="absolute bottom-8 left-10 z-20">
                    <span className="px-4 py-1.5 bg-brand-500 text-[10px] font-black uppercase tracking-widest text-[#020617] rounded-xl shadow-lg">{proj.tech}</span>
                  </div>
                </div>
                <div className="p-12 flex-1">
                  <h3 className="text-3xl font-black mb-8 flex items-center justify-between group-hover:text-brand-400 transition-colors tracking-tight">{proj.title}<ExternalLink className="w-6 h-6 text-slate-700" /></h3>
                  <ul className="space-y-5 mb-12">
                    {proj.description.map((desc, dIdx) => (
                      <li key={dIdx} className="text-slate-400 text-base leading-relaxed flex gap-4"><ChevronRight className="w-5 h-5 text-brand-500 shrink-0 mt-1" />{desc}</li>
                    ))}
                  </ul>
                  {proj.impact && <div className="p-6 rounded-2xl bg-brand-500/5 border border-brand-500/10 text-sm text-brand-200 leading-relaxed italic"><span className="font-black uppercase mr-2 text-brand-400 tracking-wider">Project Impact:</span> {proj.impact}</div>}
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
            <span className="text-brand-500 font-mono text-xl font-bold">05.</span>
            <h2 className="text-4xl font-black tracking-tight uppercase">Education</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 gap-16">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="group relative pl-16 border-l-2 border-slate-800/50 pb-16 last:pb-0">
                <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-[#020617] border-2 border-slate-800 group-hover:border-brand-500 transition-colors flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800 group-hover:bg-brand-500 transition-colors" />
                </div>
                <span className="text-xs font-mono font-black text-brand-500 mb-4 block uppercase tracking-[0.2em]">{edu.period}</span>
                <h3 className="text-2xl font-black mb-2 text-slate-100 group-hover:text-brand-400 transition-colors tracking-tight">{edu.institution}</h3>
                <p className="text-slate-400 text-xl font-light italic mb-6">{edu.degree}</p>
                <div className="flex items-center gap-4">
                   <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-sm font-black text-slate-200 shadow-lg"><Award className="w-5 h-5 text-brand-500" /> {edu.score}</div>
                   <div className="text-xs text-slate-600 font-bold uppercase tracking-widest">{edu.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 06. Certifications */}
      <section id="certification" className="py-32 bg-slate-900/20 scroll-mt-32 border-t border-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-16">
            <span className="text-brand-500 font-mono text-xl font-bold">06.</span>
            <h2 className="text-4xl font-black tracking-tight uppercase">Certifications</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-slate-800 to-transparent" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="group p-10 rounded-[2.5rem] bg-slate-950 border border-slate-800/80 hover:border-brand-500/40 transition-all backdrop-blur-md shadow-xl hover:-translate-y-2">
                <div className="flex justify-between items-start mb-10">
                  <div className="p-4 rounded-2xl bg-slate-900 text-brand-500 group-hover:scale-110 transition-transform shadow-lg border border-slate-800"><Award className="w-7 h-7" /></div>
                  {cert.status && <span className="px-3 py-1.5 text-[9px] font-black uppercase tracking-widest bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-lg shadow-sm">{cert.status}</span>}
                </div>
                <h4 className="text-xl font-black leading-snug group-hover:text-brand-400 transition-colors tracking-tight">{cert.name}</h4>
                <p className="text-[10px] font-mono font-bold text-slate-500 mt-4 uppercase tracking-[0.2em]">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07. Contact */}
      <section id="contact" className="py-32 scroll-mt-32 relative overflow-hidden">
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
          <div className="mt-10 flex justify-center gap-6 opacity-30">
            <div className="w-1 h-1 rounded-full bg-brand-500" />
            <div className="w-1 h-1 rounded-full bg-brand-500" />
            <div className="w-1 h-1 rounded-full bg-brand-500" />
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      {showTopBtn && (
        <a href="#top" className="fixed bottom-28 right-8 bg-slate-900/80 backdrop-blur-md border border-slate-800 p-4 rounded-3xl text-brand-400 z-40 hover:bg-brand-500 hover:text-[#020617] transition-all shadow-2xl hover:-translate-y-2">
          <ChevronUp className="w-6 h-6" />
        </a>
      )}

      {/* AI Assistant */}
      <GeminiChat />
    </div>
  );
};

export default App;
