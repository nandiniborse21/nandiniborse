import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';

const COMMANDS = {
  help: `Available commands:
  • skills       - Display technical competencies & languages
  • projects     - List featured software projects
  • internship   - Details on 3-month Passion Software Solutions internship
  • education    - Display academic milestones & scores
  • codechef     - View competitive programming profile link
  • contact      - Show phone, email, and social profiles
  • whoami       - Display current session info
  • sudo hire    - Fast-track recruiter action!
  • clear        - Clear the terminal screen`,

  skills: `💻 TECHNICAL SKILLS & PROFICIENCIES:
  ===========================================
  [Languages]   Java (Proficient), Python (Proficient), C++, C, JavaScript
  [Frameworks]  Django Framework, React.js, Node.js, Express.js, HTML5, CSS3, Tailwind
  [Core CS]     OOP, DBMS, Operating Systems, Data Structures & Algorithms (DSA)
  [Databases]   SQL, SQLite, MongoDB
  [Toolchain]   Git, GitHub, VS Code, REST APIs`,

  projects: `🚀 FEATURED SOFTWARE PROJECTS:
  ===========================================
  1. Yoga Recommendation System (Diploma Capstone)
     - Tech: Python, Django, HTML, CSS, SQLite
     - Goal: Symptom-based targeted yoga asana recommendations
  
  2. Attendance Management System (Industry Internship)
     - Tech: Python, Django, HTML, CSS, JavaScript, SQL
     - Goal: Automated faculty attendance calculations & reporting`,

  internship: `💼 DIPLOMA INDUSTRY INTERNSHIP:
  ===========================================
  • Company: Passion Software Solutions, Jalgaon
  • Duration: 3 Months (Curriculum Internship)
  • Role: Diploma Intern (Python & Django)
  • Deliverable: Developed full-stack Attendance Management System for faculty`,

  education: `🎓 ACADEMIC BACKGROUND & MERIT:
  ===========================================
  1. B.Tech in IT Engineering: R C Patel Institute of Technology, Shirpur (2026 - Present)
  2. Diploma in Computer Engineering: SMDR GP Dhule | 88.65% (First Class with Distinction)
  3. SSC (10th Standard): Maharashtra State Board | 91.00% Academic Merit`,

  codechef: `🏆 COMPETITIVE PROGRAMMING:
  ===========================================
  • Handle: rcp_cc_767
  • Link: https://www.codechef.com/users/rcp_cc_767
  • Focus: Practicing Data Structures & algorithmic problem-solving daily`,

  contact: `📬 CONTACT INFORMATION:
  ===========================================
  • Email: nandiniborse387@gmail.com
  • Phone: (+91) 9657939636
  • LinkedIn: https://www.linkedin.com/in/nandini-borse-38
  • GitHub: https://github.com/nandiniborse21
  • Location: Shirpur / Dhule, Maharashtra, India`,

  whoami: `Visitor: Welcome to Nandini Borse's Developer Environment!
Role: Engineering Candidate & Full-Stack Developer
College: R C Patel Institute of Technology, Shirpur`,

  'sudo hire': `🎉 ACCESS GRANTED! 
You are fast-tracking a motivated, high-achieving IT Engineering candidate!
Next step: Reach out at nandiniborse387@gmail.com or (+91) 9657939636.`
};

export default function DeveloperTerminalModal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: `Nandini Borse [Version 1.0.0] - IT Engineering Interactive CLI
Type 'help' to view available system commands or click quick action buttons below.`
    }
  ]);
  const [commandInput, setCommandInput] = useState('');
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
        terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [isOpen, history]);

  if (!isOpen) return null;

  const handleCommand = (cmdToRun = commandInput) => {
    const raw = cmdToRun.trim().toLowerCase();
    if (!raw) return;

    if (raw === 'clear') {
      setHistory([]);
      setCommandInput('');
      return;
    }

    const output = COMMANDS[raw] || `zsh: command not found: ${raw}. Type 'help' for available commands.`;

    setHistory(prev => [
      ...prev,
      { type: 'user', text: raw },
      { type: 'output', text: output }
    ]);
    setCommandInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="bg-slate-950 text-slate-100 w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-800 overflow-hidden flex flex-col h-[520px] max-h-[85vh] animate-in zoom-in-95 duration-200 font-mono-code"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Titlebar */}
        <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
            </div>
            <span className="text-xs text-slate-400 font-medium ml-2">
              nandini@rcpit: ~/portfolio-terminal
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-indigo-400">
              Interactive Shell
            </span>
            <button onClick={onClose} className="p-1 hover:text-white rounded">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Command Pills */}
        <div className="bg-slate-900/50 px-4 py-2 border-b border-slate-800/80 overflow-x-auto no-scrollbar flex items-center gap-1.5 text-xs text-slate-400">
          <span className="text-[10px] uppercase font-bold text-slate-500 shrink-0">Quick Run:</span>
          {['help', 'skills', 'projects', 'internship', 'education', 'codechef', 'contact', 'sudo hire'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2.5 py-0.5 rounded bg-slate-800 hover:bg-indigo-600 hover:text-white text-[11px] text-slate-300 transition-colors shrink-0"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Console Log Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 text-xs leading-relaxed text-slate-300">
          {history.map((item, idx) => (
            <div key={idx} className="whitespace-pre-wrap">
              {item.type === 'user' ? (
                <div className="flex items-center gap-2 text-indigo-400 font-semibold">
                  <span className="text-emerald-400">nandini@rcpit:~$</span>
                  <span>{item.text}</span>
                </div>
              ) : (
                <div className={item.type === 'system' ? 'text-slate-400' : 'text-slate-200'}>
                  {item.text}
                </div>
              )}
            </div>
          ))}

          {/* Active Prompt Line */}
          <div className="flex items-center gap-2 text-slate-200 pt-1">
            <span className="text-emerald-400 shrink-0">nandini@rcpit:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={commandInput}
              onChange={(e) => setCommandInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-hidden text-indigo-300 font-mono-code text-xs caret-indigo-400"
              autoFocus
            />
          </div>

          <div ref={terminalEndRef} />
        </div>

        {/* Bottom hint */}
        <div className="px-4 py-2 bg-slate-900/60 border-t border-slate-800/80 text-[11px] text-slate-500 flex items-center justify-between">
          <span>Press <strong>Enter</strong> to run command • Type <strong>clear</strong> to reset</span>
          <button
            onClick={() => handleCommand('sudo hire')}
            className="text-emerald-400 hover:underline font-bold"
          >
            Run sudo hire ⚡
          </button>
        </div>
      </div>
    </div>
  );
}
