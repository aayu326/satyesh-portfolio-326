import React from 'react';
import {
  MapPin,
  GraduationCap,
  Briefcase,
  Code2,
  CheckCircle2,
  Github,
  Linkedin,
  Mail,
  Instagram
} from 'lucide-react';

import {
  handleGlassMouseMove,
  handleGlassMouseLeave
} from '../utils/useGlassTilt';

import aboutPortrait from '../assets/about-portrait.jpg';

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mb-12">
          <div className="mono-text text-xs uppercase tracking-widest text-[#FF9A3D] mb-2 font-bold">
            02 &mdash; About
          </div>

          <h2 className="font-sora text-3xl sm:text-4xl font-extrabold text-[#F5F1EC] tracking-tight">
            Who I Am
          </h2>
        </div>

        {/* Two-Column Glass Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT — PHOTO */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              className="glass w-full max-w-md p-4 flex flex-col items-center justify-between cursor-pointer"
              onMouseMove={handleGlassMouseMove}
              onMouseLeave={handleGlassMouseLeave}
            >

              {/* Profile Image */}
              <div className="w-full aspect-square rounded-[14px] overflow-hidden bg-[#171310] relative shadow-inner">
                <img
                  src={aboutPortrait}
                  alt="Satyesh Kumar Singh"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Status Badge */}
              <div className="mt-4 w-full bg-white/5 border border-[#FF9A3D]/30 rounded-xl px-4 py-2.5 flex items-center justify-between text-xs">

                <div className="flex items-center gap-2 text-[#F5F1EC] font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#FF9A3D]" />
                  <span>Open for Opportunities</span>
                </div>

                <span className="font-mono text-[10px] text-[#FFC107] bg-[#FF5722]/20 px-2 py-0.5 rounded border border-[#FF5722]/30">
                 Freelancing
                </span>

              </div>
            </div>
          </div>

          {/* RIGHT — CONTENT */}
          <div className="lg:col-span-7">
            <div
              className="glass p-8 h-full flex flex-col justify-between space-y-6 cursor-pointer"
              onMouseMove={handleGlassMouseMove}
              onMouseLeave={handleGlassMouseLeave}
            >

              <div className="space-y-4">

                {/* Introduction */}
                <p className="text-lg font-medium text-[#F5F1EC] leading-relaxed">
                  I'm <span className="text-[#FF9A3D]">Satyesh Kumar Singh</span>,
                  a Computer Science Engineering student and web developer who
                  enjoys building responsive, interactive and practical web
                  applications.
                </p>

                {/* Education */}
                <p className="text-[#9A9088] text-sm leading-relaxed">
                  I am pursuing my B.Tech in Computer Science Engineering at
                  <span className="text-[#F5F1EC]"> Tula's Institute </span>
                  from 2022 to 2026. Alongside my academics, I have gained
                  practical experience through web development and full-stack
                  development internships.
                </p>

                {/* Experience & Skills */}
                <p className="text-[#9A9088] text-sm leading-relaxed">
                  My technical interests include
                  <span className="text-[#F5F1EC]">
                    {' '}HTML, CSS, JavaScript, React.js, PHP, Python, C++ and WordPress.
                  </span>
                  I enjoy creating clean user interfaces, responsive websites
                  and applications that provide a smooth user experience.
                </p>

                {/* Projects */}
                <p className="text-[#9A9088] text-sm leading-relaxed">
                  I have worked on projects including my personal portfolio,
                  the ACM Student Chapter website for Tula's Institute, and
                  <span className="text-[#F5F1EC]"> QRIFY </span>
                  — a restaurant solution that allows customers to scan a QR
                  code, view menus and order food directly from their phones.
                </p>

                {/* Achievements */}
                <p className="text-[#9A9088] text-sm leading-relaxed">
                  My work has also been recognised through achievements such as
                  winning <span className="text-[#FF9A3D]">1st Place</span> in
                  a technical event at IT UTSAV 3.0 and becoming
                  <span className="text-[#FF9A3D]"> 1st Runner-Up </span>
                  at Hackathon 2k25 for developing QRIFY.
                </p>

              </div>

              {/* Bottom Section */}
              <div className="pt-2 border-t border-white/10 space-y-4">

                {/* Info Badges */}
                <div className="flex flex-wrap gap-2.5">

                  <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-[#9A9088] hover:text-[#FF9A3D] text-xs px-4 py-1.5 rounded-full transition-colors font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#FF9A3D]" />
                    <span>Dehradun, India</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-[#9A9088] hover:text-[#FF9A3D] text-xs px-4 py-1.5 rounded-full transition-colors font-medium">
                    <GraduationCap className="w-3.5 h-3.5 text-[#FF5722]" />
                    <span>B.Tech CSE</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-[#9A9088] hover:text-[#FF9A3D] text-xs px-4 py-1.5 rounded-full transition-colors font-medium">
                    <Briefcase className="w-3.5 h-3.5 text-[#FFC107]" />
                    <span>Web Developer</span>
                  </span>

                  <span className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 text-[#9A9088] hover:text-[#FF9A3D] text-xs px-4 py-1.5 rounded-full transition-colors font-medium">
                    <Code2 className="w-3.5 h-3.5 text-[#FF9A3D]" />
                    <span>React.js</span>
                  </span>

                </div>

                {/* Social Links */}
                <div className="flex flex-wrap items-center gap-3 pt-1">

                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-[#F5F1EC] hover:text-[#FF9A3D] hover:border-[#FF9A3D] text-xs font-semibold px-4 py-2 rounded-xl transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-[#F5F1EC] hover:text-[#FF9A3D] hover:border-[#FF9A3D] text-xs font-semibold px-4 py-2 rounded-xl transition-all"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="mailto:satyeshwork326@gmail.com"
                    className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-[#F5F1EC] hover:text-[#FF9A3D] hover:border-[#FF9A3D] text-xs font-semibold px-4 py-2 rounded-xl transition-all"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email</span>
                  </a>

                  <a
                    href="https://www.instagram.com/aayu_326/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-[#F5F1EC] hover:text-[#FF9A3D] hover:border-[#FF9A3D] text-xs font-semibold px-4 py-2 rounded-xl transition-all"
                  >
                    <Instagram className="w-3.5 h-3.5" />
                    <span>Instagram</span>
                  </a>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
