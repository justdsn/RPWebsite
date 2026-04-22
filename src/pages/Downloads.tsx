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
  status: "available" | "pending";
  link: string | null;
};

function DocListItem({ item }: { item: DocItem }) {
  return (
    <li className="flex items-start justify-between gap-4 py-4 border-b border-slate-100 last:border-0 group">
      <div className="flex-1 min-w-0">
        <h3 className="text-[0.9rem] font-semibold text-slate-800 mb-0.5">{item.title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
      </div>
      <div className="flex items-center gap-3 flex-shrink-0 pt-0.5">
        <span
          className={`status-pill ${
            item.status === "available" ? "status-available" : "status-pending"
          }`}
          aria-label={`Status: ${item.status === "available" ? "Available" : "Pending"}`}
        >
          <span
            aria-hidden="true"
            className={`inline-block w-1.5 h-1.5 rounded-full ${
              item.status === "available" ? "bg-green-500" : "bg-yellow-500"
            }`}
          />
          {item.status === "available" ? "Available" : "Pending"}
        </span>

        {item.status === "available" && item.link ? (
          <a
            href={item.link}
            className="btn-primary py-1.5 px-3 text-xs"
            download
            aria-label={`Download ${item.title}`}
          >
            <IconDownload />
            Download
          </a>
        ) : (
          <span className="text-xs text-slate-400 font-medium">Coming soon</span>
        )}
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
      {/* Page header */}
      <section
        aria-label="Page header"
        className="page-header-bg border-b border-slate-100"
      >
        <div className="container-main py-14 lg:py-20">
          <SectionHeader
            tag="Downloads"
            title="Project documents and slides"
            subtitle="Access project documents and presentation slides. Files are published as milestones are completed."
            as="h1"
          />
        </div>
      </section>

      <section aria-label="Downloads list" className="page-section bg-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            {/* Tabs */}
            <div
              role="tablist"
              aria-label="Download categories"
              className="flex gap-2 border-b border-slate-200 mb-8"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  id={`tab-${tab.id}`}
                  aria-selected={activeTab === tab.id}
                  aria-controls={`panel-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 -mb-px transition-colors ${
                    activeTab === tab.id
                      ? "border-blue-600 text-blue-700"
                      : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
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
