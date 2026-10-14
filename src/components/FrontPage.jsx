import React from 'react';
import { ArrowRight, FileDown, Sparkles, Award, Briefcase, GraduationCap, Code2, Bot, Mail, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon, CodeChefIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function FrontPage({ 
  onEnter, 
  onOpenChat,
  onOpenRecruiterFastTrack,
  onOpenTerminal
}) {
  const { personal } = portfolioData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 text-white flex flex-col justify-between p-6 sm:p-10 relative overflow-hidden select-none">
      {/* Animated ambient background lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none animate-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none animate-glow [animation-delay:2s]" />

      {/* Top Header Strip */}
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-indigo-600/30 border border-indigo-400/30 flex items-center justify-center font-heading font-bold text-base text-indigo-300">
            NB
          </div>
          <div>
            <div className="text-xs font-bold tracking-wide uppercase font-mono-code text-slate-300">
              Interactive Portfolio
            </div>
            <div className="text-[11px] text-slate-400">
              Graduating Batch 2029
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onOpenRecruiterFastTrack && (
            <button
              onClick={onOpenRecruiterFastTrack}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-amber-400/10 text-amber-300 border border-amber-400/30 hover:bg-amber-400/20 transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Recruiter 60-Sec Scorecard</span>
            </button>
          )}

          <span className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Active for Internships
          </span>
        </div>
      </div>

      {/* Main Intro Card */}
      <div className="max-w-4xl mx-auto w-full my-auto py-8 z-10 flex flex-col items-center text-center">
        {/* Profile Image with Glowing Aura */}
        <div className="relative mb-6 group">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-emerald-400 to-indigo-600 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500 animate-glow" />
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-3 border-white shadow-2xl">
            <img
              src={personal.profileImage}
              alt={personal.name}
              className="w-full h-full object-cover object-top filter contrast-[1.03]"
            />
          </div>
          <div className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center text-[10px]" title="Online & Available">
            ✓
          </div>
        </div>

        {/* Name & Headline */}
        <div className="space-y-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-xs font-mono-code text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Welcome to My Digital Space</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight font-heading text-white">
            {personal.name}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            IT Engineering Student at <strong className="text-white font-medium">R C Patel Institute of Technology, Shirpur</strong>
          </p>
        </div>

        {/* Quick Highlights Pills */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl w-full mb-8">
          <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50 backdrop-blur-xs flex flex-col items-center text-center">
            <Award className="w-4 h-4 text-emerald-400 mb-1" />
            <span className="text-sm font-bold text-white">88.65%</span>
            <span className="text-[10px] text-slate-400 font-mono-code">Diploma Distinction</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50 backdrop-blur-xs flex flex-col items-center text-center">
            <GraduationCap className="w-4 h-4 text-indigo-400 mb-1" />
            <span className="text-sm font-bold text-white">91.00%</span>
            <span className="text-[10px] text-slate-400 font-mono-code">SSC Academic Merit</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50 backdrop-blur-xs flex flex-col items-center text-center">
            <Briefcase className="w-4 h-4 text-amber-400 mb-1" />
            <span className="text-sm font-bold text-white">3 Months</span>
            <span className="text-[10px] text-slate-400 font-mono-code">Django Internship</span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-800/60 border border-slate-700/50 backdrop-blur-xs flex flex-col items-center text-center">
            <Code2 className="w-4 h-4 text-sky-400 mb-1" />
            <span className="text-sm font-bold text-white">CodeChef</span>
            <span className="text-[10px] text-slate-400 font-mono-code">rcp_cc_767</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-xl">
          <button
            onClick={onEnter}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl text-sm font-bold text-slate-950 bg-white hover:bg-slate-100 transition-all shadow-xl hover:shadow-2xl hover:scale-105 group font-heading cursor-pointer"
          >
            <span>Explore Full Portfolio</span>
            <ArrowRight className="w-4 h-4 text-indigo-600 group-hover:translate-x-1 transition-transform" />
          </button>

          {onOpenRecruiterFastTrack && (
            <button
              onClick={onOpenRecruiterFastTrack}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-xs font-bold text-amber-300 bg-amber-950/40 hover:bg-amber-900/60 border border-amber-600/40 transition-all hover:scale-105 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>60-Sec Scorecard</span>
            </button>
          )}

          {onOpenTerminal && (
            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-xs font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700 border border-slate-700 transition-all hover:scale-105 cursor-pointer"
            >
              <Terminal className="w-4 h-4 text-emerald-400" />
              <span>Interactive CLI</span>
            </button>
          )}

          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-xs font-semibold text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700 transition-all hover:scale-105"
          >
            <FileDown className="w-4 h-4 text-slate-300" />
            <span>Resume</span>
          </a>

          <button
            onClick={onOpenChat}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-xs font-semibold text-indigo-300 bg-indigo-950/60 hover:bg-indigo-900/80 border border-indigo-700/50 transition-all hover:scale-105 cursor-pointer"
          >
            <Bot className="w-4 h-4 text-indigo-400" />
            <span>AI Assistant</span>
          </button>
        </div>
      </div>

      {/* Footer Social Strip */}
      <div className="max-w-6xl mx-auto w-full pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 z-10 text-xs text-slate-400 font-mono-code">
        <div>
          © {CURRENT_YEAR} {personal.name} • IT Engineering Portfolio
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personal.socials.github}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personal.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={personal.socials.codechef}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            title="CodeChef"
          >
            <CodeChefIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-slate-400 hover:text-white transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
