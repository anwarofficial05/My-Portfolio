import React, { useState } from 'react';
import { certifications } from '../data/portfolioData';
import { 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Database, 
  Cpu, 
  ShieldCheck, 
  Brain, 
  BarChart3, 
  TrendingUp,
  PieChart,
  Code2
} from 'lucide-react';

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Data Analytics & AI',
    'Artificial Intelligence',
    'Enterprise Data',
    'Programming'
  ];

  const filteredCerts = selectedCategory === 'All'
    ? certifications
    : certifications.filter(c => c.category === selectedCategory || (selectedCategory === 'Enterprise Data' && c.category === 'Enterprise Data'));

  const getCertIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles': return Sparkles;
      case 'BarChart3': return BarChart3;
      case 'Database': return Database;
      case 'Cpu': return Cpu;
      case 'Code2': return Code2;
      case 'ShieldCheck': return ShieldCheck;
      case 'Brain': return Brain;
      case 'PieChart': return PieChart;
      case 'TrendingUp': return TrendingUp;
      default: return Award;
    }
  };

  return (
    <section id="certifications" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Continuous Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
            14+ validated credentials across Generative AI, Data Analytics job simulations, Master Data Management, and Machine Learning from world-class tech firms.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 border border-purple-400/40'
                  : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {cat} {cat === 'All' && `(${certifications.length})`}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert, idx) => {
            const Icon = getCertIcon(cert.icon);
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-purple-300 border border-white/10">
                      {cert.tag}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                      {cert.issuer}
                    </span>
                    <h3 className="text-base font-heading font-bold text-white group-hover:text-purple-300 transition-colors mt-1">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs text-emerald-400 font-mono">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Credential</span>
                  </span>
                  <span className="text-gray-400">{cert.category}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
