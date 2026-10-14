import React from 'react';
import { GraduationCap, Award, CheckCircle, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 md:py-28 border-t border-stone-200/80 bg-stone-50/50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono-code text-xs font-semibold text-stone-500 uppercase tracking-widest">
            02 / Academic Journey
          </span>
          <div className="h-px bg-stone-200 flex-1" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-stone-900 leading-tight mb-2">
              Education & Academic Milestones
            </h2>
            <p className="text-stone-600 text-sm max-w-xl">
              A structured progression from foundational computer engineering principles to advanced Information Technology disciplines.
            </p>
          </div>
        </div>

        {/* Timeline Cards */}
        <div className="space-y-8">
          {education.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-xs hover:border-stone-400 transition-all duration-200 relative overflow-hidden"
            >
              {/* Top Accent Strip */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-5">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-stone-900 text-[#FAF9F5]">
                      <GraduationCap className="w-3.5 h-3.5" />
                      {item.duration}
                    </span>

                    {item.score ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        <Award className="w-3.5 h-3.5" />
                        Score: {item.score} ({item.status})
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-800 border border-amber-200">
                        <BookOpen className="w-3.5 h-3.5" />
                        {item.status}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-editorial text-stone-900 pt-1">
                    {item.degree}
                  </h3>

                  <div className="flex flex-wrap items-center gap-2 text-sm text-stone-600 font-medium">
                    <span className="text-stone-900 font-semibold">{item.institution}</span>
                    <span className="text-stone-300">•</span>
                    <span className="text-xs text-stone-500 font-mono-code">{item.affiliation}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed mb-6 max-w-3xl">
                {item.description}
              </p>

              {/* Coursework & Focus Areas */}
              <div>
                <h4 className="text-xs uppercase tracking-wider font-mono-code text-stone-400 font-semibold mb-3">
                  Core Subject Areas & Competencies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.keyAreas.map((area, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-stone-100/90 text-stone-700 border border-stone-200"
                    >
                      <CheckCircle className="w-3 h-3 text-stone-400" />
                      {area}
                    </span>
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
