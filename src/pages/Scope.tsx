import SectionHeader from "../components/SectionHeader";
import { scopeSections } from "../data/content";

export default function Scope() {
  return (
    <main id="main-content">
      {/* Page header */}
      <section
        aria-label="Page header"
        className="page-header-bg border-b border-slate-100"
      >
        <div className="container-main py-0 lg:py-20">
          <SectionHeader
            tag="Research Scope"
            title="Project Scope"
            subtitle="A structured overview of the project scope for FootprintLK"
            as="h1"
          />
        </div>
      </section>

      {/* Scope sections details */}
      <section aria-label="Scope details" className="page-section bg-slate-50 py-16 lg:py-24">
        <div className="container-main">
          <div className="max-w-5xl mx-auto space-y-16">
            {scopeSections.map((section, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={section.id}
                  className={`flex flex-col md:flex-row gap-8 lg:gap-12 items-center bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-md ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="w-full md:w-5/12 lg:w-1/2 h-64 md:h-auto min-h-[250px] lg:min-h-[350px] bg-gradient-to-br from-blue-50 to-indigo-50/50 flex items-center justify-center p-8 relative">
                    <img 
                      src="/images/scope_illustration.png" 
                      alt={`${section.title} Illustration`} 
                      className="w-full h-full object-contain max-w-[280px] lg:max-w-[320px] drop-shadow-xl transition-transform duration-500 hover:scale-105" 
                    />
                  </div>
                  
                  <div className="w-full md:w-7/12 lg:w-1/2 p-8 md:p-10 lg:p-12">
                    <div className="flex flex-col items-start gap-4 mb-6">
                      <span className="text-sm font-bold font-mono text-blue-600 bg-blue-100/60 px-4 py-1.5 rounded-full border border-blue-200">
                        Section {String(idx + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-800 tracking-tight">
                        {section.title}
                      </h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-xs lg:text-sm">
                      {section.placeholder}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
