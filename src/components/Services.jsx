import React, { useState } from 'react';

export default function Services() {
  const [selectedServiceTitle, setSelectedServiceTitle] = useState(null);

  const serviceOfferings = [
    {
      title: "BUSINESS WEBSITES",
      desc: "Professional · Responsive · Business-Focused"
    },
    {
      title: "FULL WEBSITE SETUP",
      desc: "Domain · Hosting · Deployment · Email · Integrations"
    },
    {
      title: "REACT DEVELOPMENT",
      desc: "Modern · Scalable · Interactive React Applications"
    },
    {
      title: "AI CHATBOTS",
      desc: "AI-Powered · Conversational · Business Automation"
    },
    {
      title: "E-COMMERCE",
      desc: "Modern Online Stores · Products · Web Experiences"
    },
    {
      title: "WEBSITE MAINTENANCE",
      desc: "Updates · Bug Fixes · Improvements · Support"
    },
    {
      title: "SEO & PERFORMANCE",
      desc: "Technical SEO · Responsive Design · Performance"
    },
    {
      title: "CUSTOM WEB SOLUTIONS",
      desc: "Custom Development · Business Requirements · Solutions"
    },
  ];

  const handleServiceClick = (title) => {
    setSelectedServiceTitle(
      selectedServiceTitle === title ? null : title
    );
  };

  const isPaused = selectedServiceTitle !== null;

  return (
    <section
      id="services"
      className="py-20 relative bg-[#0f0f0f] border-y border-[#f2f2f0]/15 overflow-hidden text-[#f2f2f0]"
    >

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 mb-8 flex items-center justify-between">

        <div>
          <div className="mono-text text-xs uppercase tracking-widest text-[#8a8a8a] font-bold">
            03 &mdash; Services
          </div>

          <h2 className="font-sora text-2xl sm:text-3xl font-extrabold text-[#efeee9] mt-2">
            What I Can Build For You
          </h2>
        </div>

        {selectedServiceTitle && (
          <button
            onClick={() => setSelectedServiceTitle(null)}
            className="hidden sm:block font-mono text-xs text-[#efeee9] hover:text-[#8a8a8a] transition-colors cursor-pointer"
          >
            [Selected: {selectedServiceTitle} &bull; Click to Resume]
          </button>
        )}

      </div>

      {/* Marquee */}
      <div className="w-full overflow-hidden select-none py-6 bg-[#161616] group">

        <div
          className="animate-marquee-left group-hover:[animation-play-state:paused] flex items-center whitespace-nowrap"
          style={{
            animationPlayState: isPaused ? 'paused' : undefined
          }}
        >

          {[...serviceOfferings, ...serviceOfferings].map(
            (service, idx) => {

              const isSelected =
                selectedServiceTitle === service.title;

              return (
                <div
                  key={idx}
                  onClick={() =>
                    handleServiceClick(service.title)
                  }
                  className="flex items-center flex-shrink-0 cursor-pointer group/item transition-all duration-300"
                >

                  {/* Service */}
                  <div className="flex flex-col px-8 sm:px-12">

                    <span
                      className={`
                        font-sora
                        text-xl
                        sm:text-3xl
                        font-extrabold
                        tracking-tight
                        transition-colors
                        duration-300
                        ${
                          isSelected
                            ? 'text-[#efeee9]'
                            : 'text-[#8a8a8a] group-hover/item:text-[#efeee9]'
                        }
                      `}
                    >
                      {service.title}
                    </span>

                    <span
                      className={`
                        font-mono
                        text-xs
                        transition-colors
                        duration-300
                        mt-1
                        ${
                          isSelected
                            ? 'text-[#f2f2f0]'
                            : 'text-[#8a8a8a]/70 group-hover/item:text-[#f2f2f0]'
                        }
                      `}
                    >
                      {service.desc}
                    </span>

                  </div>

                  {/* Separator */}
                  <span className="text-[#8a8a8a] font-mono text-2xl select-none">
                    &bull;
                  </span>

                </div>
              );
            }
          )}

        </div>
      </div>

      {/* Mobile Resume */}
      {selectedServiceTitle && (
        <div className="sm:hidden text-center mt-5">
          <button
            onClick={() => setSelectedServiceTitle(null)}
            className="font-mono text-[10px] text-[#8a8a8a] hover:text-[#efeee9] transition-colors"
          >
            [ {selectedServiceTitle} — Click to Resume Scrolling ]
          </button>
        </div>
      )}

    </section>
  );
}