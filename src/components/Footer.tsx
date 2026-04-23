import { Link, NavLink } from "react-router-dom";
import { navLinks } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="bg-slate-900 text-slate-300 mt-auto"
    >
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand & Mission */}
          <div className="flex flex-col items-start">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 mb-5 group"
              aria-label="FootprintLK Home"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-900/20">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="8" r="3" fill="white" />
                  <path d="M12 13c-4.5 0-7 2-7 3.5V18h14v-1.5c0-1.5-2.5-3.5-7-3.5z" fill="white" opacity="0.8" />
                  <path d="M19 6l-1 1M19 12l-1-1M21 9h-2" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
                </svg>
              </div>
              <span className="text-white font-bold text-lg tracking-tight group-hover:text-blue-400 transition-colors">
                Footprint<span className="text-blue-400">LK</span>
              </span>
            </Link>
            <p className="text-[0.9rem] text-slate-400 leading-relaxed max-w-xs mb-4">
              A Sri Lanka-focused privacy and OSINT research project helping citizens understand and manage their digital footprint.
            </p>
            <p className="text-xs text-slate-500 font-medium px-2.5 py-1 rounded-md bg-slate-800/50 border border-slate-700/50 inline-block">
              PDPA 2022 Principles
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:items-center">
            <div className="w-full max-w-[150px]">
              <h3 className="text-white text-sm font-bold mb-5 uppercase tracking-widest text-blue-500/80">Navigation</h3>
              <ul role="list" className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      end={link.path === "/"}
                      className={({ isActive }) =>
                        `text-sm transition-all duration-200 ${isActive
                          ? "text-blue-400 font-semibold translate-x-1 inline-block"
                          : "text-slate-400 hover:text-white hover:translate-x-1 inline-block"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Affiliation */}
          <div className="flex flex-col md:items-end md:text-right">
            <h3 className="text-white text-sm font-bold mb-5 uppercase tracking-widest text-blue-500/80">Affiliation</h3>
            <div className="space-y-4">
              <p className="text-[0.9rem] text-slate-400 leading-relaxed max-w-xs ml-auto">
                Faculty of Computing, Sri Lanka Institute of Information Technology (SLIIT).
              </p>
              <div className="pt-2">
                <a
                  href="https://www.sliit.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-slate-500 hover:text-blue-400 transition-colors border-b border-slate-700 pb-0.5"
                >
                  Visit SLIIT Official Site
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent mt-12 mb-8" />

        <div className="flex flex-col items-center gap-4">
          <p className="text-xs text-slate-500 font-medium">
            &copy; {year} FootprintLK Research Project. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
