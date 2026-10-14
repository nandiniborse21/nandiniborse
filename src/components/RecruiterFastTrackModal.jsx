import React, { useState } from 'react';
import { X, Check, Briefcase, Copy, Download, Mail, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, CodeChefIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function RecruiterFastTrackModal({ isOpen, onClose }) {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold font-heading">
                  Recruiter 60-Second Fast-Track Scorecard
                </h3>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-400/30 font-mono-code font-bold">
                  Verified Candidate
                </span>
              </div>
              <p className="text-xs text-slate-300 font-mono-code">
                Executive summary for quick hiring decision & evaluation
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white rounded-xl hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-slate-800 text-xs sm:text-sm">
          {/* Candidate Snapshot Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-3.5">
              <img
                src={personal.profileImage}
                alt={personal.name}
                className="w-14 h-14 rounded-2xl object-cover object-top border-2 border-indigo-500/30"
              />
              <div>
                <h4 className="text-base font-bold text-slate-900 font-heading">
                  {personal.name}
                </h4>
                <div className="text-xs text-slate-600">
                  IT Engineering Student @ RCPIT Shirpur (2026 - Present)
                </div>
                <div className="text-[11px] text-emerald-700 font-semibold font-mono-code">
                  Available for 2026/2027 Internships & Developer Roles
                </div>
              </div>
            </div>

            <div className="flex sm:flex-col gap-2">
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-indigo-600 text-white text-xs font-semibold transition-all shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume PDF</span>
              </a>
              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-800 text-xs font-medium transition-all"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied Email' : 'Copy Email'}</span>
              </button>
            </div>
          </div>

          {/* Academic Proof Grid */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono-code mb-2.5">
              Verified Academic Performance:
            </h5>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-[11px] text-slate-500 font-mono-code block mb-1">
                  Diploma in Computer Eng.
                </span>
                <div className="text-xl font-extrabold font-heading text-slate-900">
                  88.65%
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 mt-1 inline-block">
                  First Class Distinction
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-[11px] text-slate-500 font-mono-code block mb-1">
                  Secondary School (SSC 10th)
                </span>
                <div className="text-xl font-extrabold font-heading text-slate-900">
                  91.00%
                </div>
                <span className="text-[11px] font-semibold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md border border-indigo-200 mt-1 inline-block">
                  Top Tier Academic Merit
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <span className="text-[11px] text-slate-500 font-mono-code block mb-1">
                  Current Degree Program
                </span>
                <div className="text-xl font-extrabold font-heading text-slate-900">
                  B.Tech IT
                </div>
                <span className="text-[11px] text-slate-600 font-mono-code block mt-1">
                  RCPIT Shirpur (Autonomous)
                </span>
              </div>
            </div>
          </div>

          {/* Practical Industry Experience */}
          <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/80">
            <div className="flex items-center gap-2 mb-1.5 text-xs font-bold font-mono-code text-amber-900 uppercase">
              <Briefcase className="w-4 h-4 text-amber-700" />
              <span>Industry Experience Proof</span>
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Completed <strong>3-month curriculum internship at Passion Software Solutions, Jalgaon</strong> developing a live <strong>Attendance Management System</strong> in Python & Django with automated student percentage calculations and role-based faculty permissions.
            </p>
          </div>

          {/* Core Technical Stack */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono-code mb-2">
              Primary Technical Strengths:
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {['Python', 'Django', 'Java', 'C++', 'C', 'JavaScript', 'React.js', 'SQL', 'SQLite', 'Git & GitHub', 'OOP', 'DSA', 'DBMS', 'OS'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Verified Profiles */}
          <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="text-slate-500 font-mono-code">External Profiles:</span>
            <div className="flex items-center gap-3 font-semibold">
              <a
                href={personal.socials.codechef}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-indigo-600"
              >
                <CodeChefIcon className="w-3.5 h-3.5 text-[#5B4638]" />
                <span>CodeChef: rcp_cc_767</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-indigo-600"
              >
                <GithubIcon className="w-3.5 h-3.5 text-slate-900" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-700 hover:text-indigo-600"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Direct CTA */}
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="text-slate-600">
            Direct Reach: <strong className="text-slate-900">{personal.phone}</strong>
          </span>
          <a
            href={`mailto:${personal.email}?subject=Interview%20Discussion%20with%20Nandini%20Borse`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-sm"
          >
            <Mail className="w-4 h-4" />
            <span>Email for Interview</span>
          </a>
        </div>
      </div>
    </div>
  );
}
