import SectionHeader from "../components/SectionHeader";
import { scopeSections } from "../data/content";
import { Layers, Activity, Globe, Shield, Scale, Users, Database, Eye, ScanFace, Languages, FileCheck, LayoutDashboard, ShieldAlert, Search } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Layers, Activity, Globe, Shield, Scale, Users, Database, Eye, ScanFace, Languages, FileCheck, LayoutDashboard, ShieldAlert, Search
};

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
            {scopeSections.map((section: any, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={section.id}
                  className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Image Container */}
                  {section.image && (
                    <div className="w-full lg:w-1/2 group">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-blue-200/50 group-hover:-translate-y-2">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                        <img
                          src={section.image}
                          alt={`${section.title} Illustration`}
                          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      {section.id === "methodology" && (
                        <p className="mt-4 text-center text-sm font-semibold text-slate-500 italic">
                          Highlevel System Architecture of FootprintLK
                        </p>
                      )}
                    </div>
                  )}

                  {/* Content Container */}
                  <div className={`w-full ${section.image ? "lg:w-1/2" : ""} space-y-6`}>

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
                      {section.content && (
                        <div className="text-slate-600 leading-relaxed text-sm lg:text-[15px] text-justify mb-6">
                          {section.content.split("<br>").map((paragraph: string, pIdx: number) => (
                            <p key={pIdx} className={pIdx > 0 ? "mt-4" : ""}>
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )}

                      {section.mainObjective && (
                        <div className="mb-10 relative overflow-hidden bg-white border border-blue-100 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 lg:p-8">
                          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-blue-500 to-indigo-600"></div>
                          <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
                          <div className="relative z-10 flex flex-col gap-3">
                            <div className="flex items-center gap-2">
                              <Shield className="text-blue-600" size={24} />
                              <h3 className="text-blue-900 font-extrabold text-xl m-0">Main Objective</h3>
                            </div>
                            <p className="text-slate-700 leading-relaxed text-[15px] font-medium text-justify m-0">
                              {section.mainObjective}
                            </p>
                          </div>
                        </div>
                      )}
                      
                      {section.points && section.mainObjective && (
                         <h3 className="text-slate-800 font-bold text-lg mb-4">Specific Objectives</h3>
                      )}

                      {section.subSections && (
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {section.subSections.map((sub: any, i: number) => {
                            const Icon = iconMap[sub.icon] || Layers;
                            return (
                              <div key={i} className="flex gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100 items-start hover:shadow-md transition-shadow">
                                <div className="mt-1 bg-blue-50 p-2 rounded-lg text-blue-600 shrink-0">
                                  <Icon size={18} />
                                </div>
                                <div>
                                  <h4 className="text-sm font-bold text-slate-800 mb-1">{sub.title}</h4>
                                  <p className="text-xs text-slate-600 leading-relaxed text-justify">{sub.text}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {section.points && (
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {section.points.map((point: any, i: number) => {
                            const Icon = iconMap[point.icon] || FileCheck;
                            return (
                              <div key={i} className="flex gap-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100 items-center hover:shadow-md transition-shadow">
                                <div className="bg-indigo-50 p-2 rounded-lg text-indigo-600 shrink-0">
                                  <Icon size={20} />
                                </div>
                                <p className="text-sm text-slate-700 font-medium leading-tight">{point.text}</p>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {section.solution && (
                        <div className="mt-10 relative overflow-hidden bg-gradient-to-br from-indigo-50/80 via-white to-blue-50/80 border border-indigo-100/60 rounded-2xl shadow-sm p-6 lg:p-8">
                          <div className="absolute right-0 bottom-0 w-32 h-32 bg-indigo-100/50 rounded-full blur-2xl"></div>
                          <div className="relative z-10 flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                              <div className="bg-indigo-600 p-2 rounded-xl text-white shadow-md">
                                <Layers size={20} />
                              </div>
                              <h3 className="text-indigo-900 font-extrabold text-xl m-0">Proposed Solution</h3>
                            </div>
                            <div className="text-slate-700 leading-relaxed text-[15px] text-justify m-0">
                              {section.solution.split("<br>").map((paragraph: string, pIdx: number) => (
                                <p key={pIdx} className={pIdx > 0 ? "mt-4" : ""}>
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
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
