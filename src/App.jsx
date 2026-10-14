import React, { useState } from 'react';
import FrontPage from './components/FrontPage';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioChatbot from './components/PortfolioChatbot';
import CommandPalette from './components/CommandPalette';
import YogaSimulatorModal from './components/YogaSimulatorModal';
import AttendanceSimulatorModal from './components/AttendanceSimulatorModal';
import DeveloperTerminalModal from './components/DeveloperTerminalModal';
import RecruiterFastTrackModal from './components/RecruiterFastTrackModal';

function App() {
  const [view, setView] = useState('front');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isYogaSimulatorOpen, setIsYogaSimulatorOpen] = useState(false);
  const [isAttendanceSimulatorOpen, setIsAttendanceSimulatorOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isRecruiterModalOpen, setIsRecruiterModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 selection:bg-indigo-600 selection:text-white flex flex-col font-sans">
      {view === 'front' ? (
        <FrontPage 
          onEnter={() => setView('main')} 
          onOpenChat={() => {
            setView('main');
            setIsChatOpen(true);
          }}
          onOpenRecruiterFastTrack={() => setIsRecruiterModalOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />
      ) : (
        <>
          {/* Main Editorial Navigation */}
          <Navbar 
            onBackToFrontPage={() => setView('front')}
            onOpenRecruiterFastTrack={() => setIsRecruiterModalOpen(true)}
            onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
            onOpenTerminal={() => setIsTerminalOpen(true)}
          />

          {/* Main Portfolio Content Flow */}
          <main className="flex-1 animate-fade-in">
            <Hero 
              onOpenRecruiterFastTrack={() => setIsRecruiterModalOpen(true)} 
            />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Projects 
              onOpenYogaSimulator={() => setIsYogaSimulatorOpen(true)}
              onOpenAttendanceSimulator={() => setIsAttendanceSimulatorOpen(true)}
            />
            <Achievements />
            <Contact />
          </main>

          {/* Main Footer */}
          <Footer />
        </>
      )}

      {/* Persistent AI Chatbot Assistant */}
      <PortfolioChatbot 
        isOpen={isChatOpen} 
        onToggle={setIsChatOpen} 
      />

      {/* Command Palette (Ctrl+K or trigger) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={setIsCommandPaletteOpen}
        onOpenYogaSimulator={() => setIsYogaSimulatorOpen(true)}
        onOpenAttendanceSimulator={() => setIsAttendanceSimulatorOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenRecruiterFastTrack={() => setIsRecruiterModalOpen(true)}
        onOpenChat={() => {
          if (view === 'front') setView('main');
          setIsChatOpen(true);
        }}
      />

      {/* Interactive In-Browser Simulators */}
      <YogaSimulatorModal 
        isOpen={isYogaSimulatorOpen} 
        onClose={() => setIsYogaSimulatorOpen(false)} 
      />

      <AttendanceSimulatorModal 
        isOpen={isAttendanceSimulatorOpen} 
        onClose={() => setIsAttendanceSimulatorOpen(false)} 
      />

      {/* Developer Terminal Interactive Shell */}
      <DeveloperTerminalModal 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
      />

      {/* Recruiter 60-Second Fast-Track Scorecard */}
      <RecruiterFastTrackModal 
        isOpen={isRecruiterModalOpen} 
        onClose={() => setIsRecruiterModalOpen(false)} 
      />
    </div>
  );
}

export default App;
