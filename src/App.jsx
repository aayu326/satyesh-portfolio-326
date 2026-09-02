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

  // =========================================================
  // CASE STUDY ROUTING
  // Supports:
  // #projects/rentbro
  // /projects/rentbro
  // =========================================================

  useEffect(() => {
    const handleHashOrPathChange = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;

      if (hash.startsWith('#projects/')) {
        const slug = hash.replace('#projects/', '').trim();

        if (slug) {
          setActiveCaseStudySlug(slug);
        }
      } else if (path.startsWith('/projects/')) {
        const slug = path.replace('/projects/', '').trim();

        if (slug) {
          setActiveCaseStudySlug(slug);
        }
      }
    };

    // Run once when page loads
    handleHashOrPathChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashOrPathChange);

    return () => {
      window.removeEventListener('hashchange', handleHashOrPathChange);
    };
  }, []);

  // =========================================================
  // OPEN CASE STUDY
  // =========================================================

  const handleOpenCaseStudySlug = (slug) => {
    setActiveCaseStudySlug(slug);
    window.location.hash = `projects/${slug}`;
  };

  // =========================================================
  // BACK TO PROJECTS
  // =========================================================

  const handleBackToProjects = () => {
    setActiveCaseStudySlug(null);
    window.location.hash = 'projects';
  };

  // =========================================================
  // OPEN CHATBOT
  // =========================================================

  const handleOpenChatbot = () => {
    window.open(
      'https://satyesh-portfolio-chatbot.vercel.app/',
      '_blank',
      'noopener,noreferrer'
    );
  };

  // =========================================================
  // PAGE
  // =========================================================

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-[#f2f2f0] font-sans selection:bg-white/20 selection:text-[#f2f2f0] relative">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <Navbar />


      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

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

          <Projects
            onOpenCaseStudySlug={handleOpenCaseStudySlug}
          />

          <Experience />

          <Contact />
        </main>
      )}


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />


      {/* =====================================================
          AI CHATBOT BUTTON
          Directly opens chatbot in a new tab
      ===================================================== */}

      <button
        type="button"
        onClick={handleOpenChatbot}
        aria-label="Open AI chatbot"
        title="Ask my AI assistant"
        className="
          group
          fixed
          right-6
          bottom-[92px]
          z-[9999]

          flex
          h-14
          w-14
          items-center
          justify-center

          rounded-full

          bg-gradient-to-br
          from-[#ff5722]
          to-[#ff9a3d]

          text-white

          shadow-lg
          shadow-orange-500/30

          transition-all
          duration-300

          hover:scale-110
          hover:shadow-orange-500/50

          active:scale-95
        "
      >

        {/* =================================================
            TOOLTIP
        ================================================= */}

        <span
          className="
            pointer-events-none
            absolute
            right-[68px]

            whitespace-nowrap

            rounded-lg

            border
            border-orange-400/20

            bg-[#181310]

            px-3
            py-2

            text-xs
            font-medium
            text-[#f5f1ec]

            opacity-0

            shadow-lg

            translate-x-2

            transition-all
            duration-200

            group-hover:translate-x-0
            group-hover:opacity-100
          "
        >
          Ask my AI
        </span>


        {/* =================================================
            CHATBOT ICON
        ================================================= */}

        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7 fill-white"
          aria-hidden="true"
        >
          <path d="M12 2C6.48 2 2 5.58 2 10c0 2.39 1.34 4.52 3.47 5.92L4.5 20l4.18-2.09c1.04.31 2.15.47 3.32.47 5.52 0 10-3.58 10-8.38C22 5.58 17.52 2 12 2zm-4 7h8v2H8V9zm0 4h5v2H8v-2z" />
        </svg>

      </button>

    </div>
  );
}
