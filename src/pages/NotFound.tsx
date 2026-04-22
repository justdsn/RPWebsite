import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex flex-col items-center justify-center flex-1 px-5 py-24 text-center"
    >
      <div
        aria-hidden="true"
        className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-6"
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="#2563eb" strokeWidth="1.8" />
          <path d="M12 8v4M12 16h.01" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">404 — Page Not Found</p>
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
        This page does not exist
      </h1>
      <p className="text-slate-500 text-base max-w-md mb-8 leading-relaxed">
        The page you are looking for may have been moved or does not exist.
        Return to the homepage to continue exploring FootprintLK.
      </p>
      <Link to="/" className="btn-primary">
        Return to Home
      </Link>
    </main>
  );
}
