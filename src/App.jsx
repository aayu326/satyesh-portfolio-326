import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Services from './components/Services';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudyView from './components/CaseStudyView';

export default function App() {
  const [activeCaseStudySlug, setActiveCaseStudySlug] = useState(null);
  const [chatbotOpen, setChatbotOpen] = useState(false);

  // Sync with location hash or path
  useEffect(() => {
    const handleHashOrPathChange = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;

      if (hash.startsWith('#projects/')) {
        const slug = hash.replace('#projects/', '').trim();
        if (slug) setActiveCaseStudySlug(slug);
      } else if (path.startsWith('/projects/')) {
        const slug = path.replace('/projects/', '').trim();
        if (slug) setActiveCaseStudySlug(slug);
      }
    };

    handleHashOrPathChange();

    window.addEventListener('hashchange', handleHashOrPathChange);

    return () => {
      window.removeEventListener('hashchange', handleHashOrPathChange);
    };
  }, []);

  const handleOpenCaseStudySlug = (slug) => {
    setActiveCaseStudySlug(slug);
    window.location.hash = `projects/${slug}`;
  };

  const handleBackToProjects = () => {
    setActiveCaseStudySlug(null);
    window.location.hash = 'projects';
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f2f2f0] font-sans selection:bg-white/20 selection:text-[#f2f2f0] relative">

      {/* Single Unified Navbar */}
      <Navbar />

      {activeCaseStudySlug ? (
        <CaseStudyView
          projectSlug={activeCaseStudySlug}
          onBack={handleBackToProjects}
          onNavigateSlug={handleOpenCaseStudySlug}
        />
      ) : (
        <main>
          <Hero />
          <About />
          <Services />
          <TechStack />
          <Projects onOpenCaseStudySlug={handleOpenCaseStudySlug} />
          <Experience />
          <Contact />
        </main>
      )}

      <Footer />

      {/* =========================
          AI CHATBOT
      ========================= */}

      {/* Chatbot Window */}
      {chatbotOpen && (
        <div className="fixed right-6 bottom-36 z-[9998] w-[390px] max-w-[calc(100vw-32px)] h-[600px] max-h-[calc(100vh-180px)] overflow-hidden rounded-2xl border border-orange-400/20 bg-[#0d0b0a] shadow-2xl shadow-black/60">

          {/* Chatbot Header */}
          <div className="flex h-12 items-center justify-between border-b border-white/10 bg-[#15110f] px-4">

            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[#ff5722] to-[#ff9a3d]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-white"
                >
                  <path d="M12 2C6.48 2 2 5.58 2 10c0 2.39 1.34 4.52 3.47 5.92L4.5 20l4.18-2.09c1.04.31 2.15.47 3.32.47 5.52 0 10-3.58 10-8.38C22 5.58 17.52 2 12 2zm-4 7h8v2H8V9zm0 4h5v2H8v-2z" />
                </svg>
              </div>

              <span className="text-sm font-semibold text-[#f5f1ec]">
                AI Assistant
              </span>
            </div>

            <button
              type="button"
              onClick={() => setChatbotOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition hover:bg-white/10 hover:text-white"
              aria-label="Close chatbot"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-none stroke-current"
                strokeWidth="2"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

          </div>

          {/* Chatbot */}
          <iframe
            src="https://satyesh-portfolio-chatbot.vercel.app/"
            title="Satyesh Kumar Singh AI Assistant"
            className="h-[calc(100%-48px)] w-full border-0"
            loading="lazy"
          />
        </div>
      )}

      {/* Chatbot Floating Button */}
      <button
        type="button"
        onClick={() => setChatbotOpen((prev) => !prev)}
        className="group fixed right-6 bottom-[92px] z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#ff5722] to-[#ff9a3d] text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-110 hover:shadow-orange-500/50"
        aria-label={chatbotOpen ? 'Close AI chatbot' : 'Open AI chatbot'}
        aria-expanded={chatbotOpen}
      >

        {/* Tooltip */}
        <span className="pointer-events-none absolute right-[68px] whitespace-nowrap rounded-lg border border-orange-400/20 bg-[#181310] px-3 py-2 text-xs font-medium text-[#f5f1ec] opacity-0 shadow-lg transition-all duration-200 group-hover:opacity-100">
          {chatbotOpen ? 'Close assistant' : 'Ask my AI'}
        </span>

        {chatbotOpen ? (
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-none stroke-current"
            strokeWidth="2"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-white"
          >
            <path d="M12 2C6.48 2 2 5.58 2 10c0 2.39 1.34 4.52 3.47 5.92L4.5 20l4.18-2.09c1.04.31 2.15.47 3.32.47 5.52 0 10-3.58 10-8.38C22 5.58 17.52 2 12 2zm-4 7h8v2H8V9zm0 4h5v2H8v-2z" />
          </svg>
        )}

      </button>

    </div>
  );
}
