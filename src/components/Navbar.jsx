import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Download, 
  Send, 
  Menu, 
  X, 
  Sparkles, 
  Code2, 
  BarChart3, 
  Briefcase, 
  Award, 
  MessageSquareCode
} from 'lucide-react';

export default function Navbar({ onOpenResume, onOpenAI }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Background blur trigger
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll progress
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Active section detection
      const sections = ['hero', 'projects', 'skills', 'experience', 'certifications', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 180 && rect.bottom >= 180) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Certifications', href: '#certifications', id: 'certifications' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple-500 via-sky-400 to-emerald-400 z-50 origin-left transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Main Navbar */}
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav py-3.5 shadow-lg shadow-black/40' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-sky-500 flex items-center justify-center font-heading font-extrabold text-white text-lg shadow-lg shadow-purple-500/25 group-hover:scale-105 group-hover:shadow-purple-500/40 transition-all duration-300">
              MA
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-white tracking-tight text-base sm:text-lg flex items-center gap-1.5">
                Mohamed Anwar
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
              </span>
              <span className="text-[11px] text-gray-400 tracking-wider font-mono">Data Analyst • AI Eng</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0a0f24]/70 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? 'bg-purple-600/30 text-purple-300 border border-purple-500/40 shadow-sm shadow-purple-500/20'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* AI Assistant Quick Pill */}
            <button
              onClick={onOpenAI}
              className="px-3.5 py-2 rounded-full text-xs font-semibold bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 flex items-center gap-1.5 transition-all duration-200 hover:scale-105 shadow-sm shadow-sky-500/10"
              title="Chat with Anwar AI Recruiter Assistant"
            >
              <Sparkles className="w-3.5 h-3.5 animate-spin text-sky-400" style={{ animationDuration: '4s' }} />
              <span>Anwar AI</span>
            </button>

            {/* Resume Download Link */}
            <a
              href="/Mohamed_Anwar_S_Resume.pdf"
              download="Mohamed_Anwar_S_Resume.pdf"
              className="btn-secondary px-3.5 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5"
              title="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5 text-purple-400" />
              <span>Resume</span>
            </a>

            {/* Hire Me / Contact CTA */}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="btn-primary px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={onOpenAI}
              className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/30"
              aria-label="Anwar AI Assistant"
            >
              <Sparkles className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-white/5 text-gray-300 hover:text-white border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden glass-nav border-t border-white/10 px-4 pt-3 pb-5 mt-2 space-y-2 animate-fadeIn">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  activeSection === link.id
                    ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
              <a
                href="/Mohamed_Anwar_S_Resume.pdf"
                download="Mohamed_Anwar_S_Resume.pdf"
                className="btn-secondary w-full py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Resume</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="btn-primary w-full py-2.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5"
              >
                <Send className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
