import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Sparkles, RefreshCw } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

let msgIdCounter = 1;
const createMsgId = () => `msg_${++msgIdCounter}`;

export default function PortfolioChatbot({ isOpen: controlledIsOpen, onToggle }) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalOpen;
  
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);
  const messagesEndRef = useRef(null);

  const setIsOpen = (val) => {
    if (val) setHasUnread(false);
    if (onToggle) {
      onToggle(val);
    } else {
      setInternalOpen(val);
    }
  };

  const initialMessages = [
    {
      id: 'welcome',
      sender: 'bot',
      text: "👋 Hi there! I'm Nandini's Portfolio AI Assistant. You can ask me about her technical skills, projects, internship, education, or how to contact her!",
      timestamp: 'Just now'
    }
  ];

  const [messages, setMessages] = useState(initialMessages);

  const suggestedQuestions = [
    "What are Nandini's key skills?",
    "Tell me about the Yoga Recommendation project",
    "Where did she do her internship?",
    "What are her academic marks?",
    "How can I contact her?",
    "What is her CodeChef profile?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Knowledge base answering engine
  const generateAnswer = (query) => {
    const q = query.toLowerCase().trim();

    if (q.includes('skill') || q.includes('technolog') || q.includes('stack') || q.includes('language') || q.includes('tool')) {
      return `🛠️ **Nandini's Technical Skillset:**\n\n• **Languages:** Java, Python, C++, C, JavaScript\n• **Frameworks & Web:** Django, React.js, Node.js, Express.js, HTML5, CSS3, Tailwind CSS\n• **Core CS:** Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems (OS), Data Structures & Algorithms (DSA)\n• **Databases & Tools:** SQL, SQLite, MongoDB, Git, GitHub, VS Code\n\nShe specializes in building backend applications with **Python/Django** and object-oriented systems with **Java**!`;
    }

    if (q.includes('yoga') || q.includes('capstone') || q.includes('diploma project')) {
      return `🧘 **Yoga Recommendation System (Diploma Capstone Project):**\n\n• **Technologies:** Python, Django, HTML, CSS, SQLite, JavaScript\n• **Purpose:** Personalized health web app that analyzes user health conditions and symptoms to suggest targeted yoga poses (asanas), detailed guidelines, and precautions.\n• **Problem Solved:** Helps individuals practice safe, symptom-appropriate yoga routines.\n• Check it out in the **Featured Projects** section!`;
    }

    if (q.includes('intern') || q.includes('passion') || q.includes('experience') || q.includes('work') || q.includes('job')) {
      return `💼 **Internship Experience:**\n\n• **Role:** Diploma Intern (Python & Django)\n• **Company:** Passion Software Solutions, Jalgaon\n• **Duration:** 3 Months (Curriculum Internship)\n• **Key Achievement:** Developed a complete **Attendance Management System** web portal for faculty to log, calculate, and monitor student attendance dynamically.`;
    }

    if (q.includes('attendance')) {
      return `📋 **Attendance Management System Project:**\n\nBuilt during her 3-month internship at **Passion Software Solutions, Jalgaon** using **Django, HTML, CSS, JavaScript, and SQL**. It provides faculty authentication, automated percentage calculations, and dynamic attendance reporting!`;
    }

    if (q.includes('education') || q.includes('college') || q.includes('university') || q.includes('marks') || q.includes('score') || q.includes('gpa') || q.includes('percentage') || q.includes('polytechnic') || q.includes('school') || q.includes('10th') || q.includes('ssc')) {
      return `🎓 **Academic Credentials:**\n\n1. **B.Tech in IT Engineering:** R. C. Patel Institute of Technology (RCPIT), Shirpur (2026 – Present, Graduating Batch 2029)\n2. **Diploma in Computer Engineering:** SMDR Government Polytechnic Dhule (2023 – 2026) — Graduated with **88.65% (First Class with Distinction)**\n3. **SSC (10th Standard):** Maharashtra State Board — **91.00%** Outstanding Merit!`;
    }

    if (q.includes('codechef') || q.includes('competitive') || q.includes('coding') || q.includes('dsa') || q.includes('problem solving')) {
      return `🏆 **Competitive Programming & CodeChef:**\n\nNandini actively practices algorithms and Data Structures on CodeChef!\n• **CodeChef Handle:** [rcp_cc_767](https://www.codechef.com/users/rcp_cc_767)\n• She regularly solves problems in Java and Python to sharpen algorithmic thinking.`;
    }

    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach') || q.includes('hire') || q.includes('message') || q.includes('call') || q.includes('location')) {
      return `📬 **How to Contact Nandini:**\n\n• **Email:** [nandiniborse387@gmail.com](mailto:nandiniborse387@gmail.com)\n• **Phone:** (+91) 9657939636\n• **LinkedIn:** [linkedin.com/in/nandini-borse-38](https://www.linkedin.com/in/nandini-borse-38)\n• **GitHub:** [github.com/nandiniborse21](https://github.com/nandiniborse21)\n• **Location:** Shirpur / Dhule, Maharashtra (Open to remote & on-site internships!)\n\nYou can also use the contact form at the bottom of the page!`;
    }

    if (q.includes('resume') || q.includes('cv') || q.includes('download')) {
      return `📄 **Nandini's Resume:**\n\nYou can view and download her verified resume PDF right from the header or hero button, or click here: [Download Nandini_Borse_Resume.pdf](/Nandini_Borse_Resume.pdf).`;
    }

    if (q.includes('project') || q.includes('built') || q.includes('portfolio')) {
      return `🚀 **Featured Projects Overview:**\n\n1. **Yoga Recommendation System:** (Python, Django, SQLite) — Diploma Capstone project recommending personalized yoga poses based on user symptoms and health conditions.\n2. **Attendance Management System:** (Django, SQL) — Industry Internship Project at Passion Software Solutions for faculty attendance logging and automatic reporting.`;
    }

    if (q.includes('who is') || q.includes('about') || q.includes('nandini') || q.includes('intro')) {
      return `👋 **About Nandini Brijlal Borse:**\n\nNandini is an IT Engineering student at **R. C. Patel Institute of Technology, Shirpur**. She completed her Diploma in Computer Engineering from **SMDR GP Dhule with 88.65% distinction** and finished a 3-month Django internship at **Passion Software Solutions**. She is passionate about software engineering, Java, Python, and full-stack development!`;
    }

    // Default intelligent fallback
    return `Thank you for your question! Here are key areas you can explore about Nandini:\n\n• Her **Skills** (Java, Python, Django, React, SQL, DSA)\n• Her **Projects** (Yoga Recommendation System, Attendance Management System)\n• Her **Experience** (3-month Django internship at Passion Software Solutions)\n• Her **Academics** (88.65% Diploma Distinction & 91.00% SSC)\n• Her **Contact** (Email: nandiniborse387@gmail.com, Phone: +91 9657939636)\n\nTry clicking any suggestion chip below!`;
  };

  const handleSend = (textToSend = inputMessage) => {
    const text = textToSend.trim();
    if (!text) return;

    const userMsg = {
      id: createMsgId(),
      sender: 'user',
      text: text,
      timestamp: 'Just now'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const answer = generateAnswer(text);
      const botMsg = {
        id: createMsgId(),
        sender: 'bot',
        text: answer,
        timestamp: 'Just now'
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 400);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Trigger Pill */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-3 px-4 py-3 rounded-full bg-slate-900 text-white shadow-xl hover:shadow-2xl hover:bg-slate-800 transition-all hover:scale-105 border border-slate-700/60 cursor-pointer"
          aria-label="Open AI Assistant"
        >
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
              <Bot className="w-4 h-4" />
            </div>
            {hasUnread && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full animate-ping" />
            )}
            {hasUnread && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full" />
            )}
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-xs font-bold leading-tight flex items-center gap-1.5 font-heading">
              <span>Ask Nandini AI</span>
              <Sparkles className="w-3 h-3 text-amber-300" />
            </div>
            <div className="text-[10px] text-slate-300 font-mono-code">
              Instant Answers & Skills
            </div>
          </div>
        </button>
      )}

      {/* Expanded Chat Window */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[410px] h-[550px] max-h-[82vh] bg-white rounded-3xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 p-4 text-white flex items-center justify-between border-b border-slate-700/50">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={portfolioData.personal.profileImage}
                  alt="Nandini"
                  className="w-10 h-10 rounded-full object-cover border-2 border-indigo-400"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-slate-900 rounded-full" />
              </div>
              <div>
                <div className="text-sm font-bold flex items-center gap-1.5 font-heading">
                  <span>Nandini's Portfolio AI</span>
                  <span className="text-[10px] font-mono-code bg-indigo-500/30 text-indigo-200 px-2 py-0.5 rounded-full border border-indigo-400/30">
                    Live
                  </span>
                </div>
                <div className="text-[11px] text-slate-300 font-mono-code">
                  Answers based on verified portfolio
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setMessages(initialMessages)}
                className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
                title="Reset conversation"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 text-slate-300 hover:text-white rounded-lg hover:bg-slate-800/60 transition-colors"
                title="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/60 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 leading-relaxed shadow-2xs whitespace-pre-wrap ${
                    msg.sender === 'user'
                      ? 'bg-indigo-600 text-white rounded-tr-xs'
                      : 'bg-white text-slate-800 border border-slate-200/80 rounded-tl-xs'
                  }`}
                >
                  {msg.text}
                </div>

                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2.5 items-center">
                <div className="w-7 h-7 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-white border border-slate-200 rounded-2xl px-3.5 py-2 text-slate-400 flex items-center gap-1.5 shadow-2xs">
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.15s]" />
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.3s]" />
                  <span className="text-[11px] text-slate-400 ml-1">typing answer...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Quick Question Chips */}
          <div className="px-3 py-2 bg-white border-t border-slate-100 overflow-x-auto no-scrollbar">
            <div className="flex gap-1.5 whitespace-nowrap">
              {suggestedQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(q)}
                  className="px-2.5 py-1 text-[11px] bg-slate-100 hover:bg-indigo-50 hover:text-indigo-700 text-slate-600 rounded-full border border-slate-200 transition-colors shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything about skills, projects, contact..."
              className="flex-1 px-3.5 py-2.5 text-xs bg-slate-100/80 rounded-xl border border-slate-200 focus:outline-hidden focus:border-indigo-600 focus:bg-white transition-all"
            />
            <button
              onClick={() => handleSend()}
              disabled={!inputMessage.trim()}
              className="p-2.5 rounded-xl bg-slate-900 text-white hover:bg-indigo-600 disabled:opacity-40 disabled:hover:bg-slate-900 transition-colors shadow-xs"
              aria-label="Send query"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
