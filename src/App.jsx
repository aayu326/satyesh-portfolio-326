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

    handleHashOrPathChange();

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
          STICKY AI CHATBOT
          NO ORANGE BUTTON
          NO TOGGLE
          NO NEW TAB
      ===================================================== */}

      <div
        className="
          fixed
          right-5
          bottom-5

          z-[9998]

          w-[390px]
          max-w-[calc(100vw-24px)]

          h-[600px]
          max-h-[calc(100vh-40px)]

          overflow-hidden

          rounded-2xl

          border
          border-orange-400/20

          bg-[#0d0b0a]

          shadow-[0_20px_70px_rgba(0,0,0,0.65)]
        "
      >

        {/* ===================================================
            CHATBOT HEADER
        =================================================== */}

        <div
          className="
            flex
            h-14
            items-center
            justify-between

            border-b
            border-white/10

            bg-[#15110f]

            px-4
          "
        >

          <div className="flex items-center gap-3">

            {/* AI ICON */}

            <div
              className="
                flex
                h-9
                w-9
                items-center
                justify-center

                rounded-full

                bg-gradient-to-br
                from-[#ff5722]
                to-[#ff9a3d]

                shadow-lg
                shadow-orange-500/20
              "
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 fill-white"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 5.58 2 10c0 2.39 1.34 4.52 3.47 5.92L4.5 20l4.18-2.09c1.04.31 2.15.47 3.32.47 5.52 0 10-3.58 10-8.38C22 5.58 17.52 2 12 2zm-4 7h8v2H8V9zm0 4h5v2H8v-2z" />
              </svg>
            </div>


            {/* TITLE */}

            <div>
              <p className="text-sm font-semibold text-white">
                Satyesh AI
              </p>

              <p className="text-[11px] text-white/40">
                Ask me anything
              </p>
            </div>

          </div>

        </div>


        {/* ===================================================
            ACTUAL CHATBOT
        =================================================== */}

        <iframe
          src="https://satyesh-portfolio-chatbot.vercel.app/"
          title="Satyesh AI Chatbot"
          className="
            block
            h-[calc(100%-56px)]
            w-full

            border-0

            bg-white
          "
          loading="eager"
        />

      </div>


      {/* =====================================================
          MOBILE CHATBOT
      ===================================================== */}

      <style>
        {`
          @media (max-width: 640px) {
            .sticky-chatbot {
              right: 12px;
              bottom: 12px;
              width: calc(100vw - 24px);
              height: calc(100vh - 100px);
            }
          }
        `}
      </style>

    </div>
  );
}
