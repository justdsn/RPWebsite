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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              to="/"
              className="inline-flex items-center gap-2.5 mb-4 group"
              aria-label="FootprintLK Home"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="8" r="3" fill="white" />
                  <path d="M12 13c-4.5 0-7 2-7 3.5V18h14v-1.5c0-1.5-2.5-3.5-7-3.5z" fill="white" opacity="0.8" />
                  <path d="M19 6l-1 1M19 12l-1-1M21 9h-2" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
                </svg>
              </div>
              <span className="text-white font-bold text-[0.95rem] tracking-tight group-hover:text-blue-400 transition-colors">
                Footprint<span className="text-blue-400">LK</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              A Sri Lanka-focused privacy and OSINT research project helping citizens understand and manage their digital footprint.
            </p>
            <p className="text-xs text-slate-500 mt-4">
              Designed with PDPA 2022 principles in mind.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-4 tracking-wide">Quick Links</h3>
            <ul role="list" className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    className={({ isActive }) =>
                      `text-sm transition-colors ${isActive ? "text-blue-400" : "text-slate-400 hover:text-slate-200"
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

        <div className="divider mt-10 mb-6" style={{ background: "rgba(148,163,184,0.15)" }} />

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-xs text-slate-500">
            &copy; {year} FootprintLK
          </p>
        </div>
      </div>
    </footer>
  );
}
