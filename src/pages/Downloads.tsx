import { useState } from "react";
import SectionHeader from "../components/SectionHeader";
import { documents, presentations } from "../data/content";

type TabId = "documents" | "presentations";

const IconDoc = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8L14 2z"
      stroke="#2563eb"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const IconSlides = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2" y="3" width="20" height="15" rx="2" stroke="#2563eb" strokeWidth="1.8" />
    <path d="M12 18v3M9 21h6M8 9l3 3 5-5" stroke="#2563eb" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconDownload = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M12 3v12M8 11l4 4 4-4M3 21h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

type DocItem = {
  id: string;
  title: string;
  description: string;
  link: string;
};

function DocListItem({ item }: { item: DocItem }) {
  return (
    <li className="flex flex-col sm:flex-row items-start justify-between gap-4 py-5 px-6 border border-slate-100 bg-white hover:bg-slate-50/50 hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-0.5 hover:border-blue-200 transition-all duration-300 rounded-2xl mb-4 group">
      <div className="flex-1 min-w-0">
        <h3 className="text-[1.05rem] font-bold text-slate-800 mb-1.5 group-hover:text-blue-600 transition-colors">{item.title}</h3>
        <p className="text-[0.95rem] text-slate-500 leading-relaxed font-medium">{item.description}</p>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0 sm:pt-1 w-full sm:w-auto">
        {/* Download button */}
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-semibold py-2.5 px-5 rounded-xl hover:bg-blue-600 hover:shadow-md transition-colors active:scale-95"
          aria-label={`Download ${item.title}`}
        >
          <IconDownload />
          Download
        </a>
      </div>
    </li>
  );
}

export default function Downloads() {
  const [activeTab, setActiveTab] = useState<TabId>("documents");

  const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
    { id: "documents", label: "Documents", icon: <IconDoc /> },
    { id: "presentations", label: "Presentations", icon: <IconSlides /> },
  ];

  const items = activeTab === "documents" ? documents : presentations;

  return (
    <main id="main-content">
      {/* Premium Page Header */}
      <section
        aria-label="Page header"
        className="relative overflow-hidden bg-[#FAFAFA] border-b border-slate-200/60"
      >
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_100%_at_50%_0%,#000_20%,transparent_100%)]"></div>
        </div>
        
        <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-indigo-300/10 rounded-full blur-[100px] -z-10 mix-blend-multiply pointer-events-none" />

        <div className="container-main relative z-10 py-20 lg:py-28 text-center max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-sm mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-600">
              Resources
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">Downloads</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
            Access and download project documents, presentation slides, and other related resources.
          </p>
        </div>
      </section>

      <section aria-label="Downloads list" className="page-section bg-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            {/* Tabs */}
            <div
              role="tablist"
              aria-label="Download categories"
              className="flex justify-center gap-2 mb-10 p-1.5 bg-slate-100/80 backdrop-blur-md rounded-2xl w-full max-w-md mx-auto shadow-inner"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={activeTab === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold rounded-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-white text-blue-700 shadow-sm border border-slate-200/50"
                      : "text-slate-500 hover:text-slate-800 hover:bg-slate-200/50"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Panel */}
            {tabs.map((tab) => (
              <div
                key={tab.id}
                id={`panel-${tab.id}`}
                role="tabpanel"
                aria-labelledby={`tab-${tab.id}`}
                hidden={activeTab !== tab.id}
              >
                <ul role="list" aria-label={tab.label}>
                  {items.map((item) => (
                    <DocListItem key={item.id} item={item as DocItem} />
                  ))}
                </ul>
              </div>
            ))}


          </div>
        </div>
      </section>
    </main>
  );
}
