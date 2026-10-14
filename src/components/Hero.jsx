import React from 'react';
import { ArrowDown, ArrowUpRight, Mail, FileDown, MapPin, GraduationCap, Briefcase, Award, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, CodeChefIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenRecruiterFastTrack }) {
  const { personal } = portfolioData;

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Subtle background decorative shapes */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl -z-10 pointer-events-none animate-glow" />
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-slate-200/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          {/* Main Editorial Hero Typography */}
          <div className="lg:col-span-7">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs mb-6 hover:border-slate-300 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-slate-700 tracking-wide uppercase font-mono-code">
                {personal.statusBadge}
              </span>
            </div>

            <p className="text-sm md:text-base font-mono-code text-indigo-600 mb-2 font-medium tracking-wide flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Namaste, I'm {personal.name}</span>
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 font-heading leading-[1.08] mb-6">
              Transforming core engineering fundamentals into dependable, real-world software solutions.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl mb-8">
              IT Engineering student at <strong className="text-slate-900 font-medium">R. C. Patel Institute of Technology, Shirpur</strong> with a Diploma from <strong className="text-slate-900 font-medium">SMDR GP Dhule (88.65% Distinction)</strong>. Passionate about <strong className="text-indigo-600 font-semibold">Java, Python, Django</strong>, and full-stack development, with practical industry experience from a 3-month internship at <strong className="text-slate-900 font-medium">Passion Software Solutions</strong>.
            </p>

            {/* Tags strip */}
            <div className="flex flex-wrap items-center gap-2.5 text-xs font-medium text-slate-600 mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
                <GraduationCap className="w-3.5 h-3.5 text-indigo-600" />
                B.Tech in IT @ RCPIT Shirpur (2026 - Present)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
                <Briefcase className="w-3.5 h-3.5 text-emerald-600" />
                Intern @ Passion Software Solutions
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200">
                <MapPin className="w-3.5 h-3.5 text-slate-700" />
                {personal.location}
              </span>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-indigo-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 font-heading"
              >
                Explore Projects
                <ArrowDown className="w-4 h-4" />
              </a>

              {onOpenRecruiterFastTrack && (
                <button
                  onClick={onOpenRecruiterFastTrack}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold text-amber-900 bg-amber-50 hover:bg-amber-100 border border-amber-300 transition-all shadow-xs hover:shadow-sm hover:-translate-y-0.5 cursor-pointer font-heading"
                >
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Recruiter Fast-Track</span>
                </button>
              )}

              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 transition-all shadow-xs hover:shadow-sm hover:-translate-y-0.5"
              >
                <FileDown className="w-4 h-4 text-slate-600" />
                Download Resume
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-5 py-3.5 rounded-xl text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all"
              >
                Contact Me
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Social & Competitive Programming Quick Links */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-200">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-mono-code font-medium">
                Profiles:
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <a
                  href={personal.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-400 text-xs font-medium transition-all shadow-2xs hover:-translate-y-0.5"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-slate-900" />
                  <span>GitHub</span>
                </a>
                <a
                  href={personal.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-400 text-xs font-medium transition-all shadow-2xs hover:-translate-y-0.5"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={personal.socials.codechef}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-400 text-xs font-medium transition-all shadow-2xs hover:-translate-y-0.5"
                  title="CodeChef Profile"
                >
                  <CodeChefIcon className="w-3.5 h-3.5 text-[#5B4638]" />
                  <span>CodeChef (rcp_cc_767)</span>
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-400 text-xs font-medium transition-all shadow-2xs hover:-translate-y-0.5"
                  title="Send Email"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-800" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>

          {/* Profile Photo Editorial Portrait Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group max-w-xs sm:max-w-sm w-full animate-float">
              {/* Outer decorative borders and shadow */}
              <div className="absolute inset-0 bg-indigo-600 rounded-3xl translate-x-3 translate-y-3 -z-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 opacity-15 blur-xs" />
              
              <div className="bg-white p-3.5 rounded-3xl border border-slate-200 shadow-xl overflow-hidden relative">
                {/* Photo */}
                <div className="relative overflow-hidden rounded-2xl aspect-4/5 bg-slate-100">
                  <img
                    src={personal.profileImage}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Subtle gradient vignette at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent flex flex-col justify-end p-4 text-white">
                    <span className="font-heading text-xl font-bold tracking-tight">
                      {personal.name}
                    </span>
                    <span className="text-xs text-slate-200 font-mono-code">
                      IT Engineering Student
                    </span>
                  </div>
                </div>

                {/* Floating highlight badges */}
                <div className="pt-3 px-1 flex items-center justify-between text-xs text-slate-600 font-medium">
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 text-[11px]">
                    <Award className="w-3 h-3 text-emerald-600" />
                    88.65% Diploma Merit
                  </span>
                  <span className="text-[11px] font-mono-code text-slate-400">
                    RCPIT Shirpur
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Editorial Stats Highlight Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-slate-200 shadow-xs">
          {personal.stats.map((stat, i) => (
            <div key={i} className="p-3 border-l-2 border-indigo-400 pl-4">
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-0.5">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 font-mono-code">
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
