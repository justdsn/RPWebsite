import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { milestones } from "../data/content";

const IconCalendar = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
    <rect x="3" y="4" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconStar = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="flex-shrink-0">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function Milestones() {
  const [selected, setSelected] = useState<string>("");

  const current = milestones.find((m) => m.id === selected) || null;
  const totalMarks = milestones.reduce((sum, m) => sum + m.marks, 0);

  return (
    <main id="main-content">
      {/* Page header */}
      <section
        aria-label="Page header"
        className="page-header-bg border-b border-slate-100"
      >
        <div className="container-main py-14 lg:py-20">
          <SectionHeader
            tag="Project Milestones"
            title="Assessments & Deliverables"
            subtitle="A chronological overview of all research project assessments, deliverables, and their allocated marks."
            as="h1"
          />
        </div>
      </section>

      <section aria-label="Milestone details" className="page-section bg-white">
        <div className="container-main">
          
          {/* ── Horizontal Timeline Overview ── */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-extrabold text-slate-900 uppercase tracking-widest">
                Timeline Overview
              </h2>
              <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
                Total: <span className="text-slate-800 font-bold">{totalMarks} marks</span>
              </span>
            </div>

            <div className="relative overflow-x-auto pb-8 pt-4 scrollbar-hide">
              <div className="min-w-[900px] flex justify-between relative px-8">
                {/* Connecting Line */}
                <div className="absolute top-3.5 left-16 right-16 h-1 bg-blue-100 -z-10 rounded-full" />

                {milestones.map((m) => {
                  const isSelected = selected === m.id;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setSelected(m.id === selected ? "" : m.id)}
                      className="relative flex flex-col items-center w-32 group outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
                      aria-pressed={isSelected}
                      aria-label={`Select ${m.label}`}
                    >
                      {/* Node Dot */}
                      <div
                        className={`w-8 h-8 rounded-full border-4 mb-4 transition-all duration-300 z-10 flex items-center justify-center ${
                          isSelected
                            ? "bg-blue-600 border-blue-200 scale-125 shadow-lg shadow-blue-300/50"
                            : "bg-white border-blue-400 group-hover:border-blue-600 group-hover:scale-110 shadow-sm"
                        }`}
                      >
                        {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-white block" />}
                      </div>
                      
                      {/* Text */}
                      <div className="text-center">
                        <p className={`text-xs font-bold uppercase tracking-wider mb-1.5 transition-colors ${
                          isSelected ? "text-blue-600" : "text-slate-400 group-hover:text-blue-500"
                        }`}>
                          {m.date}
                        </p>
                        <p className={`text-[0.85rem] font-semibold leading-tight transition-colors ${
                          isSelected ? "text-slate-900" : "text-slate-600 group-hover:text-slate-800"
                        }`}>
                          {m.label}
                        </p>
                        <p className={`text-xs font-bold mt-1.5 flex justify-center items-center gap-1 transition-colors ${
                          isSelected ? "text-blue-600" : "text-slate-400"
                        }`}>
                           <IconStar /> {m.marks}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mb-16">
            {/* Dropdown */}
            <div className="mb-6">
              <label
                htmlFor="milestone-select"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Quick view — select an assessment
              </label>
              <div className="relative">
                <select
                  id="milestone-select"
                  value={selected}
                  onChange={(e) => setSelected(e.target.value)}
                  className="w-full appearance-none bg-white border border-slate-300 text-slate-800 rounded-lg px-4 py-3 pr-10 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer transition"
                  aria-label="Choose an assessment to view details"
                >
                  <option value="">-- Choose an assessment --</option>
                  {milestones.map((m) => (
                    <option key={m.id} value={m.id}>
                      {m.label} — {m.date}
                    </option>
                  ))}
                </select>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Detail panel */}
            {current ? (
              <article
                aria-label={`Details for ${current.label}`}
                className="card border-blue-200 bg-blue-50/40 shadow-md transition-all animate-fade-in"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                  <div>
                    <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                      <IconCalendar />
                      {current.date}
                    </p>
                    <h2 className="text-2xl font-bold text-slate-900 leading-tight">{current.label}</h2>
                  </div>
                  <div className="flex items-center gap-1.5 bg-blue-700 text-white text-sm font-bold px-3.5 py-1.5 rounded-lg flex-shrink-0 shadow-sm">
                    <IconStar />
                    {current.marks} marks
                  </div>
                </div>
                {current.description && (
                  <div className="bg-white rounded-lg p-4 border border-blue-100 shadow-sm mt-4">
                    <p className="text-sm text-slate-700 leading-7">{current.description}</p>
                  </div>
                )}
              </article>
            ) : (
              <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-6 py-12 text-center transition-all">
                <div
                  aria-hidden="true"
                  className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mx-auto mb-4"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="4" width="18" height="18" rx="3" stroke="#2563eb" strokeWidth="1.8" />
                    <path d="M3 9h18M8 2v4M16 2v4" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </div>
                <p className="text-sm font-semibold text-slate-600 mb-1">Select an assessment</p>
                <p className="text-sm text-slate-400">
                  Click a milestone on the timeline or choose from the dropdown above to view assessment details.
                </p>
              </div>
            )}
          </div>
          
        </div>
      </section>
    </main>
  );
}
