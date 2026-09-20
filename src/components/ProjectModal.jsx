import React from 'react';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Target, 
  Zap, 
  BarChart3,
  Workflow
} from 'lucide-react';
import { Github } from './BrandIcons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div 
        className="w-full max-w-3xl bg-[#0a0f24] border border-purple-500/30 rounded-3xl shadow-2xl shadow-purple-500/20 my-8 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#0d142c] border-b border-white/10 relative">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            title="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>{project.category}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight pr-8">
            {project.title}
          </h3>

          <p className="mt-2 text-gray-300 text-sm sm:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Action Links Bar */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2"
            >
              <span>Launch Live App</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          
          {/* Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="bg-[#101938] border border-white/10 rounded-2xl p-3.5 text-center">
                <span className="block text-base sm:text-lg font-heading font-bold text-white tracking-tight">
                  {m.value}
                </span>
                <span className="block text-[11px] text-gray-400 font-mono mt-0.5">
                  {m.label}
                </span>
              </div>
            ))}
          </div>

          {/* Problem & Solution */}
          {project.architecture && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#101938]/60 border border-white/10 rounded-2xl p-4 sm:p-5 space-y-2">
                <div className="flex items-center gap-2 text-purple-400 text-xs font-mono uppercase tracking-wider font-semibold">
                  <Target className="w-4 h-4" />
                  <span>The Engineering Problem</span>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {project.architecture.problem}
                </p>
              </div>

              <div className="bg-[#101938]/60 border border-white/10 rounded-2xl p-4 sm:p-5 space-y-2">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider font-semibold">
                  <Zap className="w-4 h-4" />
                  <span>The Engineered Solution</span>
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {project.architecture.solution}
                </p>
              </div>
            </div>
          )}

          {/* Pipeline Flowchart */}
          {project.architecture?.pipeline && (
            <div className="bg-[#080d1f] border border-purple-500/20 rounded-2xl p-4 sm:p-5 space-y-2">
              <div className="flex items-center gap-2 text-sky-400 text-xs font-mono uppercase tracking-wider font-semibold">
                <Workflow className="w-4 h-4" />
                <span>System Pipeline & Architecture</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 font-mono bg-black/40 p-3 rounded-xl border border-white/5 overflow-x-auto">
                {project.architecture.pipeline}
              </p>
            </div>
          )}

          {/* Key Resume Achievements */}
          <div className="space-y-3">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-400" />
              <span>Key Technical Highlights & Implementation Details</span>
            </h4>
            <div className="space-y-2.5">
              {project.highlights.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-[#101938]/40 p-3 rounded-xl border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono text-gray-400 uppercase tracking-wider">
              Technologies & Frameworks
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-purple-300"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-[#0d142c] border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-gray-400 font-mono">Live Demo Verified Active</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/15 text-white transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
