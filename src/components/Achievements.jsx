import React from 'react';
import { Award, Trophy, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Achievements() {
  const { achievements } = portfolioData;

  const getIcon = (type) => {
    switch (type) {
      case 'Academic Excellence':
        return <Award className="w-5 h-5 text-amber-600" />;
      case 'Milestone':
        return <Trophy className="w-5 h-5 text-emerald-600" />;
      default:
        return <Zap className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="achievements" className="py-20 md:py-28 border-t border-stone-200/80">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono-code text-xs font-semibold text-stone-500 uppercase tracking-widest">
            05 / Achievements & Milestones
          </span>
          <div className="h-px bg-stone-200 flex-1" />
        </div>

        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-editorial font-bold text-stone-900 leading-tight mb-2">
            Recognition & Academic Honors
          </h2>
          <p className="text-stone-600 text-sm max-w-xl">
            Key milestones marking academic dedication and proactive engineering development.
          </p>
        </div>

        {/* Achievements Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-200 shadow-xs hover:border-stone-400 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-stone-100 border border-stone-200">
                    {getIcon(item.type)}
                  </div>
                  <span className="font-mono-code text-xs font-semibold text-stone-500 bg-stone-100 px-2.5 py-1 rounded-full">
                    {item.year}
                  </span>
                </div>

                <div className="inline-block text-[11px] font-semibold text-stone-500 uppercase tracking-wider mb-2 font-mono-code">
                  {item.type}
                </div>

                <h3 className="text-lg font-bold text-stone-900 font-editorial mb-2">
                  {item.title}
                </h3>

                <p className="text-xs font-medium text-stone-500 mb-3">
                  {item.issuer}
                </p>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
