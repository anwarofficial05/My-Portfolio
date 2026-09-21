import React from 'react';
import { personalInfo, projects, internships, education, certifications, volunteering } from '../data/portfolioData';
import { X, Printer, Download, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div 
        className="w-full max-w-4xl bg-[#0a0f24] border border-purple-500/30 rounded-3xl shadow-2xl my-8 overflow-hidden relative flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls Bar */}
        <div className="px-6 py-4 bg-[#0d142c] border-b border-white/10 flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
            <span className="font-heading font-bold text-white text-sm">ATS-Compliant Resume Preview</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Mohamed_Anwar_S_Resume.pdf"
              download="Mohamed_Anwar_S_Resume.pdf"
              className="btn-primary px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2"
              title="Download Resume PDF"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={handlePrint}
              className="btn-secondary px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2"
              title="Print Resume"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#070b18] text-gray-200 resume-print-area font-body text-xs sm:text-sm leading-relaxed space-y-6">
          
          {/* Header */}
          <div className="text-center border-b border-gray-700 pb-4 space-y-1.5">
            <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-wide">
              {personalInfo.name}
            </h1>
            <p className="text-xs text-gray-300 font-mono">
              {personalInfo.location} | {personalInfo.rawPhone} | {personalInfo.email}
            </p>
            <p className="text-xs text-purple-400 font-mono flex items-center justify-center gap-4 flex-wrap pt-1">
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">
                linkedin.com/in/mohamed-anwar-531552371
              </a>
              <span>•</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:underline">
                github.com/anwarofficial05
              </a>
              <span>•</span>
              <a href="https://md-anwar-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer" className="hover:underline text-sky-400">
                Portfolio: md-anwar-portfolio.netlify.app
              </a>
            </p>
          </div>

          {/* Executive Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs sm:text-sm font-heading font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-1 text-purple-400">
              Executive Summary
            </h2>
            <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
              {personalInfo.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs sm:text-sm font-heading font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-1 text-purple-400">
              Technical Skills
            </h2>
            <div className="space-y-1 text-xs sm:text-sm">
              <p><strong className="text-white">Data Analytics & Visualization:</strong> Power BI, Tableau, Microsoft Excel, Data Cleaning, CTEs, Window Functions</p>
              <p><strong className="text-white">Programming & Databases:</strong> Python, Java, SQL (MySQL, SQLite, PostgreSQL), C, SQLAlchemy</p>
              <p><strong className="text-white">Frontend & Web:</strong> HTML5, CSS3, JavaScript, React 18, Tailwind CSS, FastAPI, Flask</p>
              <p><strong className="text-white">Machine Learning & AI:</strong> Scikit-Learn, LSTM, XGBoost, Logistic Regression, Random Forest, Agentic AI, Prompt Engineering</p>
              <p><strong className="text-white">Design & Tools:</strong> VS Code, Canva, Miro, Git/GitHub, AI Prompting Tools</p>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="space-y-1.5">
            <h2 className="text-xs sm:text-sm font-heading font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-1 text-purple-400">
              Soft Skills
            </h2>
            <p className="text-xs text-gray-300">
              Problem Solving & Analytical Thinking • Teamwork & Communication • Time Management & Adaptability • Creativity & Innovation • Attention to Detail • Continuous Learning
            </p>
          </div>

          {/* Personal Projects */}
          <div className="space-y-4">
            <h2 className="text-xs sm:text-sm font-heading font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-1 text-purple-400">
              Personal Projects
            </h2>

            {projects.map((proj, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <h3 className="text-sm font-heading font-bold text-white">
                    {proj.title}
                  </h3>
                  <a href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-sky-400 hover:underline font-mono">
                    Live Demo Link
                  </a>
                </div>
                <ul className="list-disc list-inside space-y-1 text-xs text-gray-300">
                  {proj.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="leading-relaxed">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Internships */}
          <div className="space-y-3">
            <h2 className="text-xs sm:text-sm font-heading font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-1 text-purple-400">
              Internships
            </h2>
            {internships.map((int, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-white">
                    {int.role} – <span className="font-medium text-gray-300">{int.company}</span>
                  </h3>
                  <span className="text-xs font-mono text-purple-300">{int.period}</span>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">{int.description}</p>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-1.5">
            <h2 className="text-xs sm:text-sm font-heading font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-1 text-purple-400">
              Education
            </h2>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-sm font-bold text-white">{education.degree}</h3>
                <p className="text-xs text-gray-300">{education.institution}</p>
              </div>
              <span className="text-xs font-mono text-sky-300">{education.graduationYear}</span>
            </div>
          </div>

          {/* Certifications & Accomplishments */}
          <div className="space-y-1.5">
            <h2 className="text-xs sm:text-sm font-heading font-bold text-white uppercase tracking-wider border-b border-gray-700 pb-1 text-purple-400">
              Certifications & Accomplishments
            </h2>
            <p className="text-xs text-gray-300 leading-relaxed">
              <strong className="text-white">Certifications:</strong> Tata GenAI Powered Data Analytics Job Simulation, Deloitte Data Analytics Job Simulation, TCS iON Master Data Management, Cisco Python Essentials, NVIDIA AI, Deloitte Cyber Job Simulation, IBM AI Fundamentals, Tata Data Visualisation, Power BI Workshop Certification, Claude/Claude Cowork/Claude Code/AI Fluency Certifications (Anthropic), Agentic AI Mastery (Infosys Springboard), SQL Case Study – SQL Workshop (Infosys Springboard), SAP Certifications, Microsoft Badges.
            </p>
            <p className="text-xs text-gray-300 leading-relaxed pt-1">
              <strong className="text-white">Leadership & Volunteering:</strong> Volunteer Canva Designer – Udhiram Kodu Trust: Designed posters, social media creatives, and awareness campaign materials; contributed to branding and digital outreach initiatives for community service activities.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
