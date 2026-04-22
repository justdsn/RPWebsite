import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { navLinks } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setOpen(false);
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80"
          : "bg-white/90 backdrop-blur-sm border-b border-slate-100"
      }`}
    >
      <div className="container-main">
        <nav
          aria-label="Main navigation"
          className="flex items-center justify-between h-16"
          onKeyDown={handleKeyDown}
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            aria-label="FootprintLK - Home"
            onClick={() => setOpen(false)}
          >
            <div
              aria-hidden="true"
              className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-800 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="8" r="3" fill="white" />
                <path
                  d="M12 13c-4.5 0-7 2-7 3.5V18h14v-1.5c0-1.5-2.5-3.5-7-3.5z"
                  fill="white"
                  opacity="0.8"
                />
                <path
                  d="M19 6l-1 1M19 12l-1-1M21 9h-2"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity="0.7"
                />
              </svg>
            </div>
            <span className="text-[0.95rem] font-bold tracking-tight text-slate-800 group-hover:text-blue-700 transition-colors">
              Footprint<span className="text-blue-700">LK</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul
            role="list"
            className="hidden md:flex items-center gap-6"
          >
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `nav-link${isActive ? " active" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-md text-slate-700 hover:bg-slate-100 transition-colors gap-1.5"
          >
            <span
              className={`block h-0.5 w-5 bg-current transition-all duration-200 ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-all duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-all duration-200 ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        role="navigation"
        aria-label="Mobile navigation"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 border-t border-slate-100" : "max-h-0"
        }`}
      >
        <div className="bg-white px-5 py-3">
          <ul role="list" className="flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-2.5 px-3 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? "text-blue-700 bg-blue-50"
                        : "text-slate-700 hover:text-blue-700 hover:bg-slate-50"
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
    </header>
  );
}
