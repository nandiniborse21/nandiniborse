import React, { useState } from 'react';
import { CheckCircle, ArrowUpRight, Sparkles, Play, Users } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Projects({ onOpenYogaSimulator, onOpenAttendanceSimulator }) {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filterOptions = ['All Projects', 'Capstone Project', 'Internship Project'];

  const filteredProjects = activeFilter === 'All Projects'
    ? projects
    : activeFilter === 'Capstone Project'
      ? projects.filter(p => p.id === 'yoga-recommendation-system')
      : projects.filter(p => p.id === 'attendance-management-system');

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-slate-200 bg-slate-50/60">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono-code text-xs font-semibold text-indigo-600 uppercase tracking-widest">
            04 / Featured Projects
          </span>
          <div className="h-px bg-slate-200 flex-1" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 leading-tight mb-2">
              Software & Engineering Projects
            </h2>
            <p className="text-slate-600 text-sm max-w-xl">
              Practical applications built across the full development stack—featuring in-browser interactive simulators for her capstone and internship projects.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeFilter === filter
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:text-slate-950 border border-slate-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isYoga = project.id === 'yoga-recommendation-system';
            const isAttendance = project.id === 'attendance-management-system';

            return (
              <div
                key={project.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:border-indigo-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-7 sm:p-8">
                  {/* Header tags */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 font-mono-code">
                      {project.category}
                    </span>

                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
                        <Sparkles className="w-3 h-3 text-indigo-600" />
                        Featured Build
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl font-bold font-heading text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono-code text-slate-500 mb-4">
                    {project.tagline}
                  </p>

                  {/* Interactive Simulator Callout Banner */}
                  {isYoga && (
                    <div className="mb-5 p-3 rounded-2xl bg-indigo-50/80 border border-indigo-200/80 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs font-semibold text-indigo-900">
                        <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
                        <span>Interactive Capstone Simulator Available</span>
                      </div>
                      <button
                        onClick={onOpenYogaSimulator}
                        className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-xs transition-transform hover:scale-105 flex items-center gap-1.5 shrink-0"
                      >
                        <Play className="w-3 h-3 fill-white" />
                        <span>Try Simulator</span>
                      </button>
                    </div>
                  )}

                  {isAttendance && (
                    <div className="mb-5 p-3 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-950">
                        <Users className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>Faculty Portal Workflow Demo Available</span>
                      </div>
                      <button
                        onClick={onOpenAttendanceSimulator}
                        className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-transform hover:scale-105 flex items-center gap-1.5 shrink-0"
                      >
                        <Play className="w-3 h-3 fill-white" />
                        <span>Open Demo</span>
                      </button>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-6 space-y-1.5">
                    <h4 className="text-[11px] font-mono-code uppercase tracking-wider text-slate-400 font-semibold mb-2">
                      Key Highlights:
                    </h4>
                    {project.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links Bar */}
                <div className="px-7 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 hover:text-indigo-600 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>

                  {isYoga ? (
                    <button
                      onClick={onOpenYogaSimulator}
                      className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 hover:underline"
                    >
                      <span>Launch In-Browser Simulator</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  ) : isAttendance ? (
                    <button
                      onClick={onOpenAttendanceSimulator}
                      className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:underline"
                    >
                      <span>Launch Faculty Simulator</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:underline"
                    >
                      <span>Project Details</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
