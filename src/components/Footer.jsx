import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Mail, MessageSquare, Heart } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function Footer({ onOpenResume, onOpenAI }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050811] border-t border-white/10 pt-16 pb-12 relative z-10 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-center">
          
          {/* Brand & Monogram (6 Cols) */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-sky-500 flex items-center justify-center font-heading font-extrabold text-white text-base">
                MA
              </div>
              <span className="font-heading font-bold text-white text-lg tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-gray-400 text-xs sm:text-sm max-w-md leading-relaxed font-light">
              Aspiring Data Analyst & Full-Stack AI Engineer. Transforming complex data into executive business intelligence and responsive high-throughput systems.
            </p>
          </div>

          {/* Quick Links & Actions (6 Cols) */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-center space-y-4">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400">
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <span>•</span>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <span>•</span>
              <a href="#experience" className="hover:text-white transition-colors">Experience</a>
              <span>•</span>
              <button onClick={onOpenResume} className="hover:text-purple-300 transition-colors">
                Resume
              </button>
              <span>•</span>
              <button onClick={onOpenAI} className="hover:text-sky-300 transition-colors text-sky-400 font-semibold">
                Anwar AI
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-all hover:scale-110"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-all hover:scale-110"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-all hover:scale-110"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-all hover:scale-110"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400">
          <p className="flex items-center gap-1 text-center sm:text-left">
            <span>© 2026 Mohamed Anwar S. Built with React & Tailwind CSS.</span>
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all group"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
