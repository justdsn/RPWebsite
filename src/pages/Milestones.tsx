import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { milestones } from "../data/content";

const IconCalendar = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
    <rect x="3" y="4" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconMark = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export default function Milestones() {
  const [selected, setSelected] = useState<string>("");

  const current = milestones.find((m) => m.id === selected) || null;

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
            subtitle="Select an assessment from the dropdown to view its description, scheduled date, and marks allocated"
            as="h1"
          />
        </div>
      </section>

      <section aria-label="Milestone details" className="page-section bg-white">
        <div className="container-main">
          <div className="max-w-2xl mx-auto">
            {/* Dropdown */}
            <div className="mb-8">
              <label
                htmlFor="milestone-select"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                Select an assessment
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
                      {m.label}
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
                className="card border-blue-200 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                  <h2 className="text-xl font-bold text-slate-900">{current.label}</h2>
                </div>

                <p className="text-sm text-slate-600 leading-7 mb-6">
                  {current.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wide mb-1.5">
                      <IconCalendar />
                      Scheduled Date
                    </div>
                    <p className="text-slate-800 font-semibold text-sm">{current.date}</p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5">
                    <div className="flex items-center gap-2 text-slate-500 text-xs font-semibold uppercase tracking-wide mb-1.5">
                      <IconMark />
                      Marks Allocated
                    </div>
                    <p className="text-slate-800 font-semibold text-sm">{current.marks}</p>
                  </div>
                </div>
              </article>
            ) : (
              <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 px-6 py-12 text-center">
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
                  Choose from the dropdown above to view assessment details.
                </p>
              </div>
            )}

            {/* Timeline overview */}
            <div className="mt-12">
              <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-5">
                All Assessments
              </h2>
              <ol role="list" className="relative border-l border-blue-100 ml-2 flex flex-col gap-0">
                {milestones.map((m) => (
                  <li key={m.id} className="ml-6 pb-8 last:pb-0 relative">
                    <button
                      onClick={() => setSelected(m.id)}
                      aria-current={selected === m.id ? "true" : undefined}
                      aria-label={`View details for ${m.label}`}
                      className={`absolute -left-9 top-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        selected === m.id
                          ? "bg-blue-700 border-blue-700 scale-110"
                          : "bg-white border-slate-300 hover:border-blue-300"
                      }`}
                    >
                    </button>

                    <button
                      onClick={() => setSelected(m.id)}
                      className={`text-left group transition-all block w-full`}
                      aria-label={`Select ${m.label}`}
                    >
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <span
                          className={`text-[0.9rem] font-semibold transition-colors ${
                            selected === m.id ? "text-blue-700" : "text-slate-800 group-hover:text-blue-700"
                          }`}
                        >
                          {m.label}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400">{m.date}</p>
                    </button>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
