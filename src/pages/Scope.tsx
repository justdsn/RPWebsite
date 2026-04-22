import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { scopeSections } from "../data/content";

const IconChevron = ({ open }: { open: boolean }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s ease" }}
  >
    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Scope() {
  const [openId, setOpenId] = useState<string | null>(scopeSections[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <main id="main-content">
      {/* Page header */}
      <section
        aria-label="Page header"
        className="page-header-bg border-b border-slate-100"
      >
        <div className="container-main py-14 lg:py-20">
          <SectionHeader
            tag="Research Scope"
            title="Project Scope"
            subtitle="A structured overview of the research scope for FootprintLK — covering literature, objectives, methodology, and technologies. Content will be expanded as the project progresses."
            as="h1"
          />
        </div>
      </section>

      {/* Accordion sections */}
      <section aria-label="Scope sections" className="page-section bg-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <div
              className="flex flex-col gap-2"
              role="list"
              aria-label="Research scope accordion"
            >
              {scopeSections.map((section, idx) => {
                const isOpen = openId === section.id;
                const panelId = `panel-${section.id}`;
                const btnId = `btn-${section.id}`;

                return (
                  <div
                    key={section.id}
                    role="listitem"
                    className={`border rounded-xl overflow-hidden transition-all duration-200 ${isOpen
                        ? "border-blue-200 shadow-sm"
                        : "border-slate-200 hover:border-blue-100"
                      }`}
                  >
                    <h2>
                      <button
                        id={btnId}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => toggle(section.id)}
                        className={`w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors ${isOpen
                            ? "bg-blue-50 text-blue-800"
                            : "bg-white text-slate-800 hover:bg-slate-50"
                          }`}
                      >
                        <span className="flex items-center gap-3">
                          <span
                            className={`text-xs font-bold mono flex-shrink-0 w-6 text-right ${isOpen ? "text-blue-500" : "text-slate-400"
                              }`}
                          >
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="font-semibold text-[0.95rem]">
                            {section.title}
                          </span>
                        </span>
                        <span
                          className={`flex-shrink-0 ${isOpen ? "text-blue-600" : "text-slate-400"
                            }`}
                        >
                          <IconChevron open={isOpen} />
                        </span>
                      </button>
                    </h2>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={btnId}
                      hidden={!isOpen}
                      className="px-5 pb-5 pt-4 bg-white"
                    >
                      <p className="text-sm text-slate-500 leading-7 mb-5">
                        {section.placeholder}
                      </p>
                      {/* Content placeholder area */}
                      <div className="rounded-lg border border-dashed border-slate-200 bg-slate-50 px-4 py-6 text-center">
                        <p className="text-xs text-slate-400 font-medium">
                          Content will be added here
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
