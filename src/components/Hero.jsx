import React, { useState, useEffect } from 'react';
import { personalInfo, stats } from '../data/portfolioData';
import anwarPhoto from '../assets/anwar-photo.jpg';
import { 
  ArrowRight, 
  Download, 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  Database, 
  Cpu, 
  FileText,
  MessageSquare
} from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function Hero({ onOpenResume, onOpenAI }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = personalInfo.roles;

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting && displayText === currentRole) {
      // Pause at full word
      timer = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(45);
      }, 2000);
    } else if (isDeleting && displayText === '') {
      // Finished deleting, move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(100);
    } else {
      // Typing or deleting characters
      timer = setTimeout(() => {
        const nextChar = isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1);
        setDisplayText(nextChar);
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, roles, typingSpeed]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Ambient Plasma Glows */}
      <div className="ambient-glow w-[500px] h-[500px] -top-20 -left-20 bg-purple-600/20" />
      <div className="ambient-glow w-[550px] h-[550px] top-1/3 -right-20 bg-sky-500/20" />
      <div className="ambient-glow w-[400px] h-[400px] bottom-0 left-1/3 bg-indigo-600/15" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Recruiter Hook & Narrative */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            
            {/* Availability Radar Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium backdrop-blur-md shadow-sm shadow-emerald-500/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Open to Immediate Opportunities & Internships</span>
              <span className="hidden sm:inline text-emerald-500/50">|</span>
              <span className="hidden sm:inline text-emerald-300 font-mono text-xs">Data Analyst & AI</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-gray-400 text-base sm:text-lg font-mono flex items-center gap-2">
                <span>Hello, I'm</span>
                <span className="text-purple-400 font-semibold tracking-wide">MOHAMED ANWAR S</span>
              </p>
              
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white leading-[1.15]">
                Empowering Business via <br />
                <span className="gradient-text">
                  {displayText}
                </span>
                <span className="text-purple-400 animate-pulse">|</span>
              </h1>
            </div>

            {/* High-Impact Recruiter Bio */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              Computer Science & Engineering graduate bridging the gap between <strong className="text-white font-medium">Power BI / SQL analytics</strong> and <strong className="text-white font-medium">production-ready full-stack AI</strong>. Proven experience analyzing <span className="text-purple-300 font-mono font-medium">50,000+ records</span>, building dual ML predictive models (<span className="text-sky-300 font-mono font-medium">92.8% accuracy</span>), and deploying real-time voice & cloud schedulers.
            </p>

            {/* Location & Key Tags */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 font-mono">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                Tamil Nadu, India
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Open to Relocation & Remote
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/5 border border-white/10">
                <Cpu className="w-3.5 h-3.5 text-sky-400" />
                FastAPI • React • Scikit-Learn • Power BI
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              {/* Projects CTA */}
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="btn-primary px-6 py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 w-full sm:w-auto group"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Recruiter Quick Pitch CTA */}
              <a
                href="#recruiter-pitch"
                onClick={(e) => scrollToSection(e, '#recruiter-pitch')}
                className="btn-secondary px-5 py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 w-full sm:w-auto hover:border-purple-500/50"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Recruiter 10-Sec Pitch</span>
              </a>

              {/* Resume Button */}
              <button
                onClick={onOpenResume}
                className="px-5 py-3.5 rounded-full text-sm font-semibold bg-white/5 hover:bg-white/10 text-gray-200 border border-white/10 flex items-center justify-center gap-2 w-full sm:w-auto transition-all duration-200"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>ATS Resume</span>
              </button>
            </div>

            {/* Social & Direct Contact Links */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs text-gray-400 font-mono mr-1">Direct Channels:</span>
              
              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-full bg-white/5 hover:bg-[#0077b5]/20 hover:text-[#0077b5] border border-white/10 text-gray-400 transition-all duration-200 hover:scale-110"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-full bg-white/5 hover:bg-purple-600/20 hover:text-purple-400 border border-white/10 text-gray-400 transition-all duration-200 hover:scale-110"
                title="GitHub Repositories"
              >
                <Github className="w-4 h-4" />
              </a>

              <a 
                href={`mailto:${personalInfo.email}`}
                aria-label="Email Direct"
                className="p-2.5 rounded-full bg-white/5 hover:bg-sky-500/20 hover:text-sky-400 border border-white/10 text-gray-400 transition-all duration-200 hover:scale-110"
                title="Email Mohamed Anwar"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a 
                href={`tel:${personalInfo.rawPhone}`}
                aria-label="Phone Call"
                className="p-2.5 rounded-full bg-white/5 hover:bg-emerald-500/20 hover:text-emerald-400 border border-white/10 text-gray-400 transition-all duration-200 hover:scale-110"
                title="Call +91 8072022294"
              >
                <Phone className="w-4 h-4" />
              </a>

              <a 
                href={personalInfo.whatsapp}
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="WhatsApp Message"
                className="p-2.5 rounded-full bg-white/5 hover:bg-[#25D366]/20 hover:text-[#25D366] border border-white/10 text-gray-400 transition-all duration-200 hover:scale-110"
                title="WhatsApp Direct Message"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: High-Tech Profile Headshot Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] flex items-center justify-center">
              
              {/* Rotating Plasma Ambient Rings */}
              <div className="absolute -inset-3 bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 rounded-3xl blur-2xl opacity-40 animate-pulse-glow" />
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/40 via-sky-500/30 to-emerald-500/30 rounded-3xl border border-white/20" />

              {/* Main Photo Card Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0d142c] border-2 border-white/15 shadow-2xl group">
                <img 
                  src={anwarPhoto} 
                  alt="Mohamed Anwar S - Data Analyst & AI Engineer" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Cyber Gradient Overlay at base */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060913] via-transparent to-transparent opacity-70" />

                {/* Center-Bottom Floating Pill */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#0a0f24]/90 backdrop-blur-md border border-white/15 rounded-xl p-3 shadow-lg shadow-black/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-purple-600/30 border border-purple-500/40 flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-purple-400" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white">Full-Stack Intelligence</h4>
                      <p className="text-[10px] text-gray-400 font-mono">14+ Certs • 3 Internships</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Active
                  </span>
                </div>
              </div>

              {/* Floating Live Badge: Top-Left (SQL & Data) */}
              <div className="absolute -top-5 -left-4 sm:-left-6 bg-[#0a0f24]/95 backdrop-blur-md border border-purple-500/30 rounded-2xl p-3 shadow-xl shadow-purple-500/10 flex items-center gap-3 animate-float">
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
                  <Database className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-mono">50,000+ Records</div>
                  <div className="text-[10px] text-purple-300/80">SQL Window/CTE &lt;150ms</div>
                </div>
              </div>

              {/* Floating Live Badge: Bottom-Right (ML Accuracy) */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-[#0a0f24]/95 backdrop-blur-md border border-sky-500/30 rounded-2xl p-3 shadow-xl shadow-sky-500/10 flex items-center gap-3 animate-float" style={{ animationDelay: '2.5s' }}>
                <div className="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-sky-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-mono">92.8% ML Accuracy</div>
                  <div className="text-[10px] text-sky-300/80">0.98 ROC-AUC Score</div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Bottom Key Metric Stats Strip */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((item, idx) => (
            <div 
              key={idx}
              className="glass-card rounded-2xl p-5 border border-white/10 hover:border-purple-500/30 flex flex-col space-y-1 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full pointer-events-none group-hover:from-purple-500/20 transition-all duration-300" />
              <span className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
                {item.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-gray-300">
                {item.label}
              </span>
              <span className="text-[11px] font-mono text-purple-400 flex items-center gap-1 pt-1">
                <span>{item.change}</span>
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
