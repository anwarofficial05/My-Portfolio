import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { 
  Briefcase, 
  Target, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  Mail, 
  Phone, 
  Calendar, 
  MessageSquare,
  Award
} from 'lucide-react';

export default function RecruiterPitch({ onOpenResume, onOpenAI }) {
  const pillars = [
    {
      icon: Target,
      color: "from-purple-500 to-indigo-500",
      border: "border-purple-500/30",
      title: "Data Analytics + Production Full-Stack",
      highlight: "Dual-Threat Versatility",
      description: "Unlike pure analysts or pure developers, I integrate Power BI & SQL modeling with modern Python (FastAPI/Flask) and React 18 to build intelligent end-to-end data systems."
    },
    {
      icon: Zap,
      color: "from-sky-500 to-blue-500",
      border: "border-sky-500/30",
      title: "High-Performance Analytics & Machine Learning",
      highlight: "High-Performance Execution",
      description: "Engineered dual ML pipelines (Logistic Regression & Random Forest) for automated risk scoring, alongside 12 optimized SQL CTE & window queries."
    },
    {
      icon: Briefcase,
      color: "from-emerald-500 to-teal-500",
      border: "border-emerald-500/30",
      title: "3 Practical Technical Internships",
      highlight: "Demonstrated Industry Readiness",
      description: "Hands-on experience at Pluto Academy (Data Analytics), TVK Technologies (Python with Data Science), and Barola Technologies (Machine Learning) solving real organizational tasks."
    },
    {
      icon: ShieldCheck,
      color: "from-amber-500 to-orange-500",
      border: "border-amber-500/30",
      title: "Enterprise Architecture & 14+ Certs",
      highlight: "Rigorous Standards & Governance",
      description: "Experience building multi-tier RBAC, clinical protocol versioning, audit logging, and proactive Kubernetes workload scheduling backed by 14+ credentials from Tata, Deloitte & NVIDIA."
    }
  ];

  return (
    <section id="recruiter-pitch" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Executive Brief</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Why Hire <span className="gradient-text">Mohamed Anwar?</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg leading-relaxed">
            The 10-second summary for hiring managers, technical recruiters, and team leads looking for high-ownership talent in Data Analytics & AI.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className={`glass-card rounded-2xl p-6 sm:p-8 border ${pillar.border} relative group hover:-translate-y-1.5 transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white shadow-lg shadow-black/40 flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-purple-300 font-semibold">
                      {pillar.highlight}
                    </span>
                    <h3 className="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-purple-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recruiter Quick Action Callout Box */}
        <div className="glass-card rounded-3xl p-8 border border-white/15 bg-gradient-to-br from-[#0d142c] via-[#0a0f24] to-[#0f1738] shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Immediate Availability Notice</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                Ready to contribute on Day 1 to your Data or AI Team.
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Available for internships, trainee roles, and full-time positions across India (open to Bangalore, Chennai, Hyderabad, Mumbai, NCR) and Remote globally.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <a
                href={`mailto:${personalInfo.email}?subject=Interview%20Invitation%20-%20Data%20Analyst%20/%20AI%20Role&body=Hi%20Mohamed%20Anwar,%20we%20reviewed%20your%20portfolio%20and%20would%20like%20to%20schedule%20an%20interview.`}
                className="btn-primary py-3 px-5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-lg text-center"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Interview</span>
              </a>

              <button
                onClick={onOpenAI}
                className="btn-secondary py-3 px-5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 text-center"
              >
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>Ask Anwar AI Bot</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
