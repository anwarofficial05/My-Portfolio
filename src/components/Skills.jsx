import React, { useState } from 'react';
import { skillsData, softSkills } from '../data/portfolioData';
import { 
  Sparkles, 
  BarChart3, 
  Code2, 
  Cpu, 
  Globe, 
  Wrench, 
  CheckCircle2,
  Layers
} from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('dataAnalytics');

  const tabs = [
    { key: 'dataAnalytics', label: 'Data Analytics & BI', icon: BarChart3 },
    { key: 'programming', label: 'Programming & SQL', icon: Code2 },
    { key: 'machineLearning', label: 'AI & Machine Learning', icon: Cpu },
    { key: 'frontend', label: 'Full-Stack & APIs', icon: Globe },
    { key: 'tools', label: 'Tools & Workflow', icon: Wrench },
  ];

  const currentCategory = skillsData[activeTab];

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
            A comprehensive overview of data analysis, database engineering, machine learning modeling, and modern web application development capabilities.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/40 scale-105'
                    : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative mb-16">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
            <div>
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                {currentCategory.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 font-mono mt-1">
                Verified through hands-on projects, deployments, and internship deliverables
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
              {currentCategory.skills.length} Core Competencies
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentCategory.skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-[#101938]/60 border border-white/10 rounded-2xl p-5 hover:border-purple-500/30 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-heading font-bold text-white text-base sm:text-lg group-hover:text-purple-300 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-purple-300 border border-white/10">
                      {skill.tag}
                    </span>
                  </div>
                  <span className="text-xs font-mono font-bold text-purple-400">
                    {skill.level}%
                  </span>
                </div>

                <p className="text-xs text-gray-300 leading-relaxed mb-3">
                  {skill.experience}
                </p>

                {/* Progress Bar */}
                <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-sky-400 transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills Banner */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/10">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base sm:text-lg font-heading font-bold text-white">
              Professional & Analytical Soft Skills
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {softSkills.map((soft, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 font-medium"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>{soft}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
