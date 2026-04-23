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
            {current && (
              <article
                aria-label={`Details for ${current.label}`}
                className="card border-blue-200 bg-blue-50/30 shadow-sm animate-fade-in"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                  <div>
                    <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                      <IconCalendar />
                      {current.date}
                    </p>
                    <h2 className="text-xl font-bold text-slate-900">{current.label}</h2>
                  </div>
                  <div className="flex items-center gap-1.5 bg-blue-700 text-white text-sm font-bold px-3 py-1.5 rounded-lg flex-shrink-0">
                    <IconStar />
                    {current.marks} marks
                  </div>
                </div>
                {current.description && (
                  <p className="text-sm text-slate-600 leading-7">{current.description}</p>
                )}
              </article>
            )}
          </div>

          {/* ── Timeline ── */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-xl font-extrabold text-slate-900 uppercase tracking-widest">
                Timeline
              </h2>
              <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-lg">
                Total: <span className="text-slate-800 font-bold">{totalMarks} marks</span>
              </span>
            </div>

            {/* Desktop: alternating sides. Mobile: all left-aligned */}
            <div className="relative">
              {/* Centre spine */}
              <div
                aria-hidden="true"
                className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 -translate-x-1/2"
              />
              {/* Mobile spine */}
              <div
                aria-hidden="true"
                className="md:hidden absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200"
              />

              <ol role="list" className="flex flex-col gap-10">
                {milestones.map((m, idx) => {
                  const isRight = idx % 2 === 0;
                  const isSelected = selected === m.id;

                  return (
                    <li key={m.id} className="relative md:grid md:grid-cols-2 md:gap-12">
                      {/* ── Dot on the spine ── */}
                      <button
                        onClick={() => setSelected(m.id === selected ? "" : m.id)}
                        aria-pressed={isSelected}
                        aria-label={`${isSelected ? "Deselect" : "Select"} ${m.label}`}
                        className={`
                          hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
                          w-5 h-5 rounded-full border-2 items-center justify-center transition-all duration-200
                          ${isSelected
                            ? "bg-blue-700 border-blue-700 scale-125 shadow-lg shadow-blue-300"
                            : "bg-white border-blue-400 hover:border-blue-700 hover:scale-110"
                          }
                        `}
                      >
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-white block" />
                        )}
                      </button>

                      {/* Mobile dot */}
                      <button
                        onClick={() => setSelected(m.id === selected ? "" : m.id)}
                        aria-pressed={isSelected}
                        aria-label={`${isSelected ? "Deselect" : "Select"} ${m.label}`}
                        className={`
                          md:hidden absolute left-5 top-6 -translate-x-1/2 z-10
                          w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-200
                          ${isSelected
                            ? "bg-blue-700 border-blue-700 scale-125 shadow-md shadow-blue-200"
                            : "bg-white border-blue-400 hover:border-blue-600"
                          }
                        `}
                      />

                      {/* Left side (even) or right side (odd) on desktop */}
                      {/* On mobile everything is a single left-offset column */}
                      <div
                        className={`
                          pl-10 md:pl-0
                          ${isRight
                            ? "md:col-start-1 md:text-right md:pr-10"
                            : "md:col-start-2 md:text-left md:pl-10"
                          }
                        `}
                      >
                        <article
                          onClick={() => setSelected(m.id === selected ? "" : m.id)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => e.key === "Enter" && setSelected(m.id === selected ? "" : m.id)}
                          aria-pressed={isSelected}
                          aria-label={`${m.label}, ${m.date}, ${m.marks} marks`}
                          className={`
                            cursor-pointer rounded-2xl border p-5 transition-all duration-200 group
                            ${isSelected
                              ? "border-blue-300 bg-blue-50 shadow-md shadow-blue-100"
                              : "border-slate-200 bg-white hover:border-blue-200 hover:shadow-sm hover:bg-slate-50/50"
                            }
                          `}
                        >
                          {/* Date */}
                          <p className={`
                            text-xs font-bold uppercase tracking-widest mb-1.5 flex items-center gap-1.5 flex-wrap
                            ${isRight ? "md:justify-end" : "md:justify-start"}
                            ${isSelected ? "text-blue-600" : "text-slate-400 group-hover:text-blue-400"}
                          `}>
                            <IconCalendar />
                            {m.date}
                          </p>

                          {/* Title + marks */}
                          <div className={`flex items-start gap-3 flex-wrap ${isRight ? "md:flex-row-reverse" : ""}`}>
                            <h3 className={`
                              text-[1rem] font-bold flex-1 leading-snug
                              ${isSelected ? "text-blue-800" : "text-slate-900 group-hover:text-blue-800"}
                            `}>
                              {m.label}
                            </h3>
                            <span className={`
                              flex-shrink-0 flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-lg
                              ${isSelected
                                ? "bg-blue-700 text-white"
                                : "bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700"
                              }
                            `}>
                              <IconStar />
                              {m.marks}
                            </span>
                          </div>

                          {/* Description */}
                          {m.description && (
                            <p className={`
                              text-xs leading-6 mt-2
                              ${isSelected ? "text-blue-700" : "text-slate-500"}
                            `}>
                              {m.description}
                            </p>
                          )}
                        </article>
                      </div>

                      {/* Empty cell for the other side on desktop */}
                      {isRight
                        ? <div className="hidden md:block md:col-start-2" />
                        : <div className="hidden md:block md:col-start-1" />
                      }
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
