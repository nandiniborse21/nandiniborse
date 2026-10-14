import React, { useState, useEffect } from 'react';
import { Search, X, Sparkles, Terminal, Award, FileDown, Mail, Code2, Users, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function CommandPalette({
  isOpen,
  onClose,
  onOpenYogaSimulator,
  onOpenAttendanceSimulator,
  onOpenTerminal,
  onOpenRecruiterFastTrack,
  onOpenChat
}) {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        onClose(!isOpen);
      }
      if (e.key === 'Escape' && isOpen) {
        onClose(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'recruiter',
      title: '⚡ Recruiter 60-Second Fast-Track',
      subtitle: 'Executive candidate scorecard, verified marks & highlights',
      category: 'Recruiter Quick Actions',
      icon: Award,
      run: () => {
        onClose(false);
        onOpenRecruiterFastTrack();
      }
    },
    {
      id: 'yoga-sim',
      title: '🧘 Launch Yoga Recommendation Live Engine',
      subtitle: 'Interactive symptom recommendation simulator (Diploma Capstone)',
      category: 'Interactive Simulators',
      icon: Sparkles,
      run: () => {
        onClose(false);
        onOpenYogaSimulator();
      }
    },
    {
      id: 'attendance-sim',
      title: '📋 Launch Attendance Management Simulator',
      subtitle: 'Faculty portal simulator (Passion Software Solutions Internship)',
      category: 'Interactive Simulators',
      icon: Users,
      run: () => {
        onClose(false);
        onOpenAttendanceSimulator();
      }
    },
    {
      id: 'terminal',
      title: '💻 Open Developer Terminal Shell (~/nandini-terminal)',
      subtitle: 'Interactive retro CLI to query skills, bio, and run commands',
      category: 'Developer Tools',
      icon: Terminal,
      run: () => {
        onClose(false);
        onOpenTerminal();
      }
    },
    {
      id: 'ai-chat',
      title: '🤖 Ask Nandini AI Assistant',
      subtitle: 'Instant conversational answers to any portfolio question',
      category: 'AI Assistant',
      icon: Sparkles,
      run: () => {
        onClose(false);
        onOpenChat();
      }
    },
    {
      id: 'resume',
      title: '📄 Download Verified Resume PDF',
      subtitle: 'View updated Nandini_Borse_Resume.pdf',
      category: 'Quick Downloads',
      icon: FileDown,
      run: () => {
        window.open(portfolioData.personal.resumeUrl, '_blank');
        onClose(false);
      }
    },
    {
      id: 'codechef',
      title: '🏆 Open CodeChef Profile (rcp_cc_767)',
      subtitle: 'Competitive coding activity and problem solving',
      category: 'External Links',
      icon: Code2,
      run: () => {
        window.open(portfolioData.personal.socials.codechef, '_blank');
        onClose(false);
      }
    },
    {
      id: 'email',
      title: '📬 Copy Email Address (nandiniborse387@gmail.com)',
      subtitle: 'Copy email to clipboard for direct contact',
      category: 'Contact',
      icon: Mail,
      run: () => {
        navigator.clipboard.writeText(portfolioData.personal.email);
        alert('Email copied to clipboard: nandiniborse387@gmail.com');
        onClose(false);
      }
    }
  ];

  const filtered = actions.filter(a => 
    a.title.toLowerCase().includes(search.toLowerCase()) || 
    a.subtitle.toLowerCase().includes(search.toLowerCase()) ||
    a.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-indigo-600 shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Type a command, project, or question (e.g. Yoga, Terminal, Resume)..."
            className="flex-1 text-sm bg-transparent border-none outline-hidden placeholder:text-slate-400 font-sans"
            autoFocus
          />
          <button
            onClick={() => onClose(false)}
            className="p-1 text-slate-400 hover:text-slate-700 rounded-lg"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action Results */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-1 text-xs">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-slate-400">
              No matching commands found for "{search}"
            </div>
          ) : (
            filtered.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.run}
                  className="w-full p-3 rounded-xl flex items-center justify-between text-left hover:bg-slate-100/80 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
                        {item.title}
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono-code">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-slate-50 border-t border-slate-100 text-[11px] text-slate-400 font-mono-code flex items-center justify-between">
          <span>Navigate with mouse or keyboard</span>
          <span className="bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-600 shadow-2xs">
            ESC to close
          </span>
        </div>
      </div>
    </div>
  );
}
