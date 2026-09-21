import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';
import AIAssistant from './components/AIAssistant';
import { Sparkles, MessageSquareCode } from 'lucide-react';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060913] text-[#f8fafc] font-body selection:bg-purple-500/30 selection:text-purple-200 relative">
      
      {/* Top Navigation */}
      <Navbar 
        onOpenResume={() => setResumeOpen(true)}
        onOpenAI={() => setAiOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        <Hero 
          onOpenResume={() => setResumeOpen(true)}
          onOpenAI={() => setAiOpen(true)}
        />
        
        <Projects />
        
        <Skills />
        
        <Experience />
        
        <Certifications />
        
        <Contact />
      </main>

      {/* Footer */}
      <Footer 
        onOpenResume={() => setResumeOpen(true)}
        onOpenAI={() => setAiOpen(true)}
      />

      {/* Modals */}
      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />

      <AIAssistant 
        isOpen={aiOpen} 
        onClose={() => setAiOpen(false)}
        onOpenResume={() => setResumeOpen(true)}
      />

      {/* Floating Recruiter AI Assistant Button (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 no-print">
        <button
          onClick={() => setAiOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 text-white font-semibold text-xs sm:text-sm shadow-2xl shadow-purple-600/40 hover:scale-105 active:scale-95 transition-all duration-200 border border-white/20"
          title="Open Anwar AI Recruiter Assistant"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <Sparkles className="w-4 h-4 text-sky-200 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Ask Anwar AI</span>
        </button>
      </div>

    </div>
  );
}
