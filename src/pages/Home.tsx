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
      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section
        aria-label="Project introduction"
        className="relative hero-bg overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 60% 40%, rgba(219,234,254,0.45) 0%, transparent 70%)",
          }}
        />
        <div className="container-main relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center py-20 lg:py-28">
            {/* Text */}
            <div>
              <span className="section-tag" aria-label="Category">
                Privacy + OSINT Research - Sri Lanka
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mt-4 mb-6">
                FootprintLK:{" "}
                <span className="text-blue-700">Privacy-first</span> digital
                footprint intelligence for Sri Lankan users
              </h1>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
                Sri Lanka's rapid social media growth exposes citizens to identity
                theft, impersonation, phishing, and PII leakage, often without
                their awareness. FootprintLK is a research-driven system designed
                to surface what is publicly exposed and help users understand their
                digital footprint.
              </p>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
                Built with PDPA 2022 principles in mind and designed to handle
                Sinhala, English, and romanized transliteration variants, closing
                a critical gap for Sri Lankan identity analysis.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/scope" className="btn-primary">
                  Explore Scope
                  <IconArrow />
                </Link>
                <Link to="/downloads" className="btn-secondary">
                  View Downloads
                  <IconArrow />
                </Link>
              </div>
              {/* PDPA note */}

            </div>

            {/* Illustration */}
            <div aria-hidden="true" className="hidden lg:flex justify-center items-center">
              <HeroIllustration />
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
