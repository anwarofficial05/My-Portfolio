import React from 'react';
import { internships, volunteering, education } from '../data/portfolioData';
import { 
  Briefcase, 
  GraduationCap, 
  HeartHandshake, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Work & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Experience & <span className="gradient-text">Milestones</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
            Hands-on technical internships, engineering coursework, and community leadership demonstrating consistent problem-solving and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Technical Internships (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-white">Technical Internships</h3>
                <p className="text-xs text-gray-400 font-mono">3 Specialized Industry Internships</p>
              </div>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-5 before:w-0.5 before:bg-white/10">
              {internships.map((item, idx) => (
                <div key={idx} className="relative pl-12 group">
                  {/* Timeline Bullet Node */}
                  <div className="absolute left-3.5 top-5 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#060913] border-2 border-purple-400 group-hover:scale-125 group-hover:border-sky-400 transition-all duration-200" />

                  <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-purple-500/40 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h4 className="text-lg font-heading font-bold text-white group-hover:text-purple-300 transition-colors">
                        {item.role}
                      </h4>
                      <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" />
                        {item.period}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 font-mono mb-4">
                      <span className="text-white font-medium">{item.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-purple-400" />
                        {item.location}
                      </span>
                      <span>•</span>
                      <span className="text-sky-300">{item.badge}</span>
                    </div>

                    <p className="text-sm text-gray-300 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="space-y-2">
                      {item.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="flex items-start gap-2.5 text-xs text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Volunteering (4 Cols) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Education Card */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-sky-600/20 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">Education</h3>
                  <p className="text-xs text-gray-400 font-mono">Undergraduate Degree</p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6 border border-white/10 hover:border-sky-500/40 transition-all duration-300 space-y-4">
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 inline-block">
                  {education.graduationYear}
                </span>

                <div>
                  <h4 className="text-base sm:text-lg font-heading font-bold text-white">
                    {education.degree}
                  </h4>
                  <p className="text-sm text-purple-300 font-medium mt-1">
                    {education.institution}
                  </p>
                  <p className="text-xs text-gray-400 font-mono mt-1">
                    {education.location}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-white/10">
                  {education.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-1.5 flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Volunteering & Leadership Card */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-pink-600/20 border border-pink-500/30 flex items-center justify-center text-pink-400">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">Volunteering</h3>
                  <p className="text-xs text-gray-400 font-mono">Community Impact</p>
                </div>
              </div>

              {volunteering.map((v, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-6 border border-white/10 hover:border-pink-500/40 transition-all duration-300 space-y-3">
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30 inline-block">
                    {v.tag}
                  </span>

                  <div>
                    <h4 className="text-base font-heading font-bold text-white">
                      {v.role}
                    </h4>
                    <p className="text-sm text-pink-300 font-medium">
                      {v.organization}
                    </p>
                  </div>

                  <p className="text-xs text-gray-300 leading-relaxed">
                    {v.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
