import SectionHeader from "../components/SectionHeader";
import { scopeSections } from "../data/content";

export default function Scope() {
  return (
    <main id="main-content" className="bg-slate-50 min-h-screen">
      {/* Page header */}
      <section
        aria-label="Page header"
        className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-indigo-600/5 -z-10" />
        <div className="container-main">
          <SectionHeader
            tag="Strategic Blueprint"
            title="Project Scope"
            subtitle="Defining the boundaries, objectives, and methodologies of our digital footprint research."
            as="h1"
            className="text-center"
          />
        </div>
      </section>

      {/* Scope sections details */}
      <section aria-label="Scope details" className="pb-24 lg:pb-32">
        <div className="container-main">
          <div className="grid grid-cols-1 gap-12 lg:gap-20">
            {scopeSections.map((section, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={section.id}
                  className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image Container */}
                  <div className="w-full lg:w-1/2 group">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-blue-200/50 group-hover:-translate-y-2">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                      <img
                        src={section.image}
                        alt={`${section.title} Illustration`}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-px w-12 bg-blue-600/30" />
                      <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                        Section {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    
                    <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                      {section.title}
                    </h2>
                    
                    <div className="prose prose-slate max-w-none">
                      <p className="text-slate-600 leading-relaxed text-sm lg:text-[15px]">
                        {section.content}
                      </p>
                    </div>

                    <div className="pt-4 flex flex-wrap gap-3">
                      {/* Decorative chips or tags could go here */}
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-500 shadow-sm">
                        Research Focus
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-500 shadow-sm">
                        Domain Specific
                      </span>
                    </div>
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
