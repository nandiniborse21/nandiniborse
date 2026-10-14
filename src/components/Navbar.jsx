import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileDown, ArrowLeft, Terminal, Sparkles, Command } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ 
  onBackToFrontPage,
  onOpenRecruiterFastTrack,
  onOpenCommandPalette,
  onOpenTerminal
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Milestones', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-xs' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
        {/* Brand / Logo + Back button */}
        <div className="flex items-center gap-3">
          {onBackToFrontPage && (
            <button
              onClick={onBackToFrontPage}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 text-xs font-medium transition-all"
              title="Return to Welcome Screen"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}

          <a 
            href="#" 
            className="group flex items-center gap-3 transition-transform hover:scale-[1.01]"
          >
            <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-heading text-lg font-bold tracking-tight shadow-sm transition-transform group-hover:rotate-3 overflow-hidden">
              NB
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-slate-900 tracking-tight text-sm font-heading">
                {portfolioData.personal.name}
              </span>
              <span className="text-xs text-slate-500 font-mono-code tracking-wider">
                IT Engineering @ RCPIT
              </span>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-600 after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Header Actions */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Quick Search Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all font-mono-code"
            title="Press Ctrl + K for Command Palette"
          >
            <Command className="w-3.5 h-3.5 text-indigo-600" />
            <span className="hidden md:inline">Quick Search</span>
            <kbd className="text-[10px] bg-white px-1.5 py-0.2 rounded border border-slate-300 text-slate-500">⌘K</kbd>
          </button>

          {/* Developer CLI Terminal Button */}
          <button
            onClick={onOpenTerminal}
            className="p-2 rounded-full text-slate-600 hover:text-indigo-600 hover:bg-slate-100 border border-slate-200 transition-all"
            title="Open Interactive Terminal"
          >
            <Terminal className="w-3.5 h-3.5" />
          </button>

          {/* Recruiter Fast Track Button */}
          <button
            onClick={onOpenRecruiterFastTrack}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition-all shadow-2xs hover:scale-105"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Recruiter View</span>
          </button>

          <a
            href={portfolioData.personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all"
          >
            <FileDown className="w-3.5 h-3.5 text-slate-600" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-slate-900 hover:bg-indigo-600 transition-all shadow-sm hover:shadow"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 text-slate-700 hover:text-slate-950 focus:outline-hidden"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-6 py-6 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {onBackToFrontPage && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onBackToFrontPage();
                }}
                className="flex items-center gap-2 text-xs font-semibold text-indigo-600 py-1"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Return to Intro Screen
              </button>
            )}

            <div className="flex gap-2 py-2 border-b border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRecruiterFastTrack();
                }}
                className="flex-1 py-2 px-3 rounded-xl bg-indigo-50 text-indigo-700 font-bold text-xs flex items-center justify-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Recruiter View
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="py-2 px-3 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5" />
                CLI
              </button>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 hover:text-indigo-600 py-1"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-200 flex flex-col gap-2.5">
              <a
                href={portfolioData.personal.resumeUrl}
                download
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-800 bg-slate-100 border border-slate-200"
              >
                <FileDown className="w-4 h-4" />
                Download Resume
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800"
              >
                Get in Touch
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
