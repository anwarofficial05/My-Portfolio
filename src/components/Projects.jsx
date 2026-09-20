import React, { useState } from 'react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { 
  ExternalLink, 
  Sparkles, 
  Layers, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Database,
  Mic,
  Activity,
  Cpu
} from 'lucide-react';
import { Github } from './BrandIcons';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Data Analytics & ML', 'Full-Stack AI', 'Cloud & Systems'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'credit-risk':
        return Database;
      case 'jarvis-ai':
        return Mic;
      case 'medknow':
        return Activity;
      case 'kubernetes-scheduler':
        return Cpu;
      default:
        return Layers;
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 relative">
      {/* Background Glow */}
      <div className="ambient-glow w-[500px] h-[500px] top-1/4 -left-32 bg-purple-600/15" />
      <div className="ambient-glow w-[500px] h-[500px] bottom-1/4 -right-32 bg-sky-500/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Production Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Featured Projects & <span className="gradient-text">Deployments</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
            Real-world systems engineered with modern data analytics, machine learning pipelines, and responsive web platforms. All projects are deployed live.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/25 border border-purple-400/40'
                  : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat} {cat === 'All' && `(${projects.length})`}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const Icon = getProjectIcon(project.id);
            return (
              <div
                key={project.id}
                className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Subtle Glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-purple-500/10 via-transparent to-transparent rounded-bl-full pointer-events-none group-hover:from-purple-500/20 transition-all duration-300" />

                <div className="space-y-5">
                  {/* Card Header: Category & Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono text-purple-300/90 font-medium">
                        {project.category}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>Live App</span>
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-gray-300 text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {project.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="bg-[#101938]/80 border border-white/5 rounded-xl p-2.5 text-left">
                        <span className="block text-sm font-heading font-bold text-white font-mono">
                          {m.value}
                        </span>
                        <span className="block text-[11px] text-gray-400">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-gray-300 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {/* Live Demo Link */}
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center gap-1.5 shadow-md"
                      title="Open Live Deployment"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>

                    {/* GitHub Repo */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/15 text-gray-300 hover:text-white border border-white/10 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Architecture & Details Modal Trigger */}
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs sm:text-sm font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 hover:underline underline-offset-2 transition-all"
                  >
                    <span>Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Deep-Dive Architecture Modal */}
      {activeModalProject && (
        <ProjectModal 
          project={activeModalProject} 
          onClose={() => setActiveModalProject(null)} 
        />
      )}
    </section>
  );
}
