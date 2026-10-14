import React from 'react';
import { Briefcase, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const { experience } = portfolioData;

  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono-code text-xs font-semibold text-stone-500 uppercase tracking-widest">
            02 / Industry Experience
          </span>
          <div className="h-px bg-stone-200 flex-1" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-stone-900 leading-tight mb-2">
              Work Experience & Internship
            </h2>
            <p className="text-stone-600 text-sm max-w-xl">
              Practical industry training applying backend technologies to real-world software workflows.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs hover:border-stone-400 transition-all duration-200 relative overflow-hidden"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-stone-900 text-[#FAF9F5]">
                      <Briefcase className="w-3.5 h-3.5" />
                      {exp.type}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-editorial text-stone-900">
                    {exp.role}
                  </h3>
                  <div className="text-sm font-semibold text-stone-700 mt-0.5">
                    {exp.company}
                  </div>
                </div>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed mb-6 max-w-3xl">
                {exp.description}
              </p>

              <div>
                <h4 className="text-xs uppercase tracking-wider font-mono-code text-stone-400 font-semibold mb-3">
                  Core Contributions & Technologies Used:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {exp.keyLearnings.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-stone-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
