import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import HeroIllustration from "../components/HeroIllustration";
import {
  homeWhyMatters,
  homeCapabilities,
  homeTOC,
} from "../data/content";

// Simple inline icons as SVG
const IconArrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCheck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0 mt-0.5">
    <circle cx="12" cy="12" r="10" fill="#dbeafe" />
    <path d="M8 12.5l3 3 5-5" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const capabilityIcons = [
  // Face
  <svg key="face" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="9" r="4" stroke="#2563eb" strokeWidth="1.8" />
    <path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" />
    <path d="M18 3l1-1M18 7h2M20 5l-1 1" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  // Social
  <svg key="social" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="5" cy="12" r="2.5" stroke="#2563eb" strokeWidth="1.8" />
    <circle cx="19" cy="6" r="2.5" stroke="#2563eb" strokeWidth="1.8" />
    <circle cx="19" cy="18" r="2.5" stroke="#2563eb" strokeWidth="1.8" />
    <path d="M7.5 10.5l9-3M7.5 13.5l9 3" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
  // Breach
  <svg key="breach" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 2L3 7v6c0 5 4 9 9 10 5-1 9-5 9-10V7L12 2z" stroke="#2563eb" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M12 8v4M12 16h.01" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
  </svg>,
  // Compliance
  <svg key="comp" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="#2563eb" strokeWidth="1.8" />
    <path d="M7 8h10M7 12h10M7 16h6" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" />
  </svg>,
];

export default function Home() {
  return (
    <main id="main-content">
      {/* ─── Premium Hero ─────────────────────────────────────────────── */}
      <section
        aria-label="Project introduction"
        className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#FAFAFA]"
      >
        {/* Modern grid background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)]"></div>
        </div>

        {/* Ambient Blur Glows */}
        <div className="absolute top-0 right-0 lg:right-1/4 w-[30rem] lg:w-[45rem] h-[30rem] lg:h-[45rem] bg-blue-300/20 rounded-full blur-[100px] -z-10 mix-blend-multiply pointer-events-none" />
        <div className="absolute bottom-0 left-0 lg:left-1/4 w-[25rem] lg:w-[35rem] h-[25rem] lg:h-[35rem] bg-indigo-300/20 rounded-full blur-[100px] -z-10 mix-blend-multiply pointer-events-none" />

        <div className="container-main relative z-10 pt-24 pb-16 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start pt-10 lg:pt-0">
              

              {/* Bold Typography */}
              <h1 className="text-[2.5rem] sm:text-5xl lg:text-[4.2rem] font-black text-slate-900 leading-[1.05] tracking-tight mb-6">
                Uncover your <br className="hidden sm:block" />
                <span className="relative inline-block mt-2">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 transform -skew-y-2 rounded-lg -z-10"></span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">digital footprint</span>
                </span>
              </h1>
              
              {/* Refined Paragraph */}
              <p className="text-slate-600 text-[1.05rem] sm:text-xl leading-relaxed mb-10 max-w-[90%] lg:max-w-xl font-medium">
                FootprintLK empowers Sri Lankan citizens with a unified intelligence system to detect, analyze, and mitigate personal exposure across breaches, social media, and facial data.
              </p>

              {/* Sophisticated Actions */}
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link 
                  to="/scope" 
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-[1.25rem] overflow-hidden font-semibold transition-all duration-300 hover:shadow-[0_15px_30px_-10px_rgba(15,23,42,0.4)] hover:-translate-y-0.5 active:scale-95"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Platform Scope
                    <IconArrow />
                  </span>
                </Link>
                
                <Link 
                  to="/downloads" 
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/80 backdrop-blur-sm text-slate-700 border border-slate-200/80 rounded-[1.25rem] font-semibold transition-all duration-300 hover:bg-white hover:border-slate-300 hover:text-slate-900 hover:-translate-y-0.5 hover:shadow-[0_10px_20px_-10px_rgba(0,0,0,0.05)] active:scale-95"
                >
                  View Downloads
                </Link>
              </div>

            </div>

            {/* Right Visuals - 3D/Glassmorphic Frame */}
            <div aria-hidden="true" className="lg:col-span-5 hidden lg:flex justify-end items-center relative" style={{ perspective: '1000px' }}>
               <div className="relative w-full max-w-lg aspect-[4/3] sm:aspect-square transform-gpu transition-all duration-700 hover:rotate-y-[-5deg] hover:rotate-x-[2deg]">
                 
                 {/* Deep offset shadow / decorative layer */}
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-[2.5rem] transform rotate-3 translate-x-4 translate-y-4 blur-sm -z-20 transition-transform duration-700" />
                 
                 {/* Solid architectural layer */}
                 <div className="absolute inset-0 bg-white rounded-[2.5rem] shadow-2xl -z-10" />

                 {/* Main glass container */}
                 <div className="relative w-full h-full bg-gradient-to-b from-white/60 to-white/90 backdrop-blur-2xl rounded-[2.5rem] border border-white/80 shadow-[inset_0_1px_1px_rgba(255,255,255,1)] flex justify-center items-center overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(219,234,254,0.5),transparent_50%)]" />
                    <HeroIllustration />
                 </div>

                 {/* Floating UI Elements */}
                 <div className="absolute top-8 -left-8 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100/50 flex items-center gap-3 transition-transform hover:-translate-y-2 duration-300 cursor-default">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 text-white rounded-xl flex items-center justify-center shadow-inner">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <div className="flex flex-col pr-2">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Exposure</span>
                      <span className="text-[13px] font-bold text-slate-800 leading-none">Mitigated</span>
                    </div>
                 </div>

                 <div className="absolute bottom-10 -right-6 bg-white/90 backdrop-blur-md p-3.5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100/50 flex items-center gap-3 transition-transform hover:-translate-y-2 duration-300 cursor-default">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-xl flex items-center justify-center shadow-inner">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                    </div>
                    <div className="flex flex-col pr-2">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">OSINT AI</span>
                      <span className="text-[13px] font-bold text-slate-800 leading-none">Scanning</span>
                    </div>
                 </div>
                 
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Why This Matters ─────────────────────────────────── */}
      <section aria-labelledby="why-heading" className="page-section bg-white">
        <div className="container-main">
          <SectionHeader
            tag="Context"
            title="Why this matters in Sri Lanka"
            subtitle="The digital landscape has changed faster than public awareness, leaving ordinary citizens exposed in ways they may not recognize."
          />
          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {homeWhyMatters.map((item) => (
              <li key={item.title} className="card flex gap-4">
                <IconCheck />
                <div>
                  <h3 className="text-sm font-semibold text-slate-800 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="divider" />

      {/* ─── Capabilities ─────────────────────────────────────── */}
      <section aria-labelledby="capabilities-heading" className="page-section bg-slate-50/60">
        <div className="container-main">
          <SectionHeader
            tag="System Overview"
            title="What FootprintLK includes"
            subtitle="Four integrated capabilities built for Sri Lankan users, from facial exposure detection to legal compliance guidance."
          />
          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {homeCapabilities.map((cap, idx) => (
              <li key={cap.id} className="card">
                <div className="flex items-start gap-4">
                  <div
                    aria-hidden="true"
                    className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0"
                  >
                    {capabilityIcons[idx]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <span className="text-[0.7rem] font-bold text-blue-400 mono">{cap.label}</span>
                      <span className="section-tag" style={{ marginBottom: 0, fontSize: "0.65rem" }}>
                        {cap.tag}
                      </span>
                    </div>
                    <h3 className="text-[0.95rem] font-semibold text-slate-800 mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="divider" />

      {/* ─── Mini TOC ─────────────────────────────────────────── */}
      <section aria-labelledby="toc-heading" className="page-section bg-white">
        <div className="container-main">
          <div className="max-w-2xl">
            <SectionHeader
              tag="Navigation"
              title="Explore the project"
              subtitle="Key sections of the FootprintLK research site. Start wherever is most relevant to you."
            />
          </div>
          <nav aria-label="Page directory">
            <ul role="list" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {homeTOC.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="card flex flex-col gap-2 group no-underline"
                  >
                    <span className="text-[0.95rem] font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">
                      {item.label}
                    </span>
                    <span className="text-sm text-slate-500">{item.description}</span>
                    <span className="flex items-center gap-1 text-blue-600 text-sm font-medium mt-1">
                      Go to page
                      <IconArrow />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>
    </main>
  );
}
