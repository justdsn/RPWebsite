import SectionHeader from "../components/SectionHeader";
import { teamMembers, supervisors } from "../data/content";

// LinkedIn icon SVG
const IconLinkedIn = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// Email icon SVG
const IconEmail = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

// Google Scholar icon SVG
const IconScholar = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.852 4.029c.148-.485.404-.925.742-1.289L12 6.5l6.406 5.74c.338.364.594.804.742 1.289L24 9.5 12 0z" />
  </svg>
);

function MemberCard({
  name,
  role,
  email,
  linkedin,
  scholar,
  image,
  faculty,
  department,
  university,
  initials,
  isSupervisor = false,
}: {
  name: string;
  role: string;
  email: string;
  linkedin?: string;
  scholar?: string;
  image: string;
  faculty: string;
  department: string;
  university: string;
  initials: string;
  isSupervisor?: boolean;
}) {
  // Fallback avatar colors based on initials
  const colors = [
    "bg-blue-100 text-blue-700",
    "bg-indigo-100 text-indigo-700",
    "bg-sky-100 text-sky-700",
    "bg-slate-100 text-slate-700",
  ];
  const colorIdx = initials.charCodeAt(0) % colors.length;
  const avatarColor = colors[colorIdx];

  return (
    <article
      className={`group relative flex flex-col gap-6 h-full p-8 rounded-[2rem] border transition-all duration-500 overflow-hidden ${
        isSupervisor 
          ? "bg-white/80 backdrop-blur-md border-blue-200/60 shadow-[0_15px_40px_-15px_rgba(37,99,235,0.15)] hover:shadow-[0_20px_50px_-15px_rgba(37,99,235,0.25)] hover:-translate-y-1" 
          : "bg-white border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-1 hover:border-slate-200"
      }`}
      aria-label={`${name}, ${role}`}
    >
      {/* Decorative gradient orb */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[40px] opacity-40 transition-opacity duration-500 group-hover:opacity-80 -z-10 ${
        isSupervisor ? "bg-blue-400" : "bg-indigo-300"
      }`} />

      {/* Photo or Initials Avatar */}
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div className="relative">
          {image && image !== "#" ? (
            <img
              src={image}
              alt={`Photo of ${name}`}
              className={`${isSupervisor ? "w-[120px] h-[120px]" : "w-[100px] h-[100px]"} rounded-[1.5rem] object-cover flex-shrink-0 border-4 border-white shadow-lg ring-1 ring-slate-100/50 group-hover:scale-105 transition-transform duration-500`}
            />
          ) : (
            <div
              aria-hidden="true"
              className={`${isSupervisor ? "w-[120px] h-[120px] text-4xl" : "w-[100px] h-[100px] text-3xl"} rounded-[1.5rem] flex items-center justify-center font-bold flex-shrink-0 border-4 border-white shadow-lg ring-1 ring-slate-100/50 ${avatarColor} group-hover:scale-105 transition-transform duration-500`}
            >
              {initials}
            </div>
          )}
        </div>

        <div className="min-w-0 text-center sm:text-left flex-1">
          <h3 className={`${isSupervisor ? "text-2xl" : "text-xl"} font-black text-slate-900 leading-tight tracking-tight`}>{name}</h3>
          <p className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 uppercase tracking-widest mt-2">{role}</p>
        </div>
      </div>

      {/* Academic Info */}
      <div className="text-[0.9rem] text-slate-600 space-y-2.5 border-t border-slate-100 pt-6 flex-grow font-medium">
        <p className="font-bold text-slate-800 leading-snug">{university}</p>
        <p className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 flex-shrink-0" /><span className="text-slate-500 font-semibold w-24 flex-shrink-0">Faculty</span> <span className="text-slate-800">{faculty}</span></p>
        <p className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 flex-shrink-0" /><span className="text-slate-500 font-semibold w-24 flex-shrink-0">Department</span> <span className="text-slate-800">{department}</span></p>
      </div>

      {/* Contact Links */}
      <div className="flex items-center justify-between gap-4 border-t border-slate-100 pt-5 mt-2">
        {/* Email */}
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 text-[13px] font-bold text-slate-500 hover:text-blue-600 transition-colors truncate px-3 py-1.5 -ml-3 rounded-lg hover:bg-blue-50/50"
          title={email}
          aria-label={`Send email to ${name}`}
        >
          <IconEmail />
          <span className="truncate">Email</span>
        </a>

        {/* Scholar/LinkedIn */}
        {scholar ? (
          <a
            href={scholar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-bold text-slate-500 hover:text-blue-600 transition-colors flex-shrink-0 px-3 py-1.5 -mr-3 rounded-lg hover:bg-blue-50/50"
            aria-label={`Google Scholar profile of ${name}`}
          >
            <IconScholar />
            Google Scholar
          </a>
        ) : linkedin && linkedin !== "#" ? (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-bold text-slate-500 hover:text-blue-600 transition-colors flex-shrink-0 px-3 py-1.5 -mr-3 rounded-lg hover:bg-blue-50/50"
            aria-label={`LinkedIn profile of ${name}`}
          >
            <IconLinkedIn />
            LinkedIn
          </a>
        ) : !scholar && (
          <span className="inline-flex items-center gap-2 text-[13px] font-bold text-slate-400 flex-shrink-0 px-3 py-1.5 -mr-3 cursor-not-allowed" title="Coming soon">
            <IconLinkedIn />
            LinkedIn
          </span>
        )}
      </div>
    </article>
  );
}

export default function About() {
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
        
        <div className="absolute top-0 right-1/4 w-[30rem] h-[30rem] bg-indigo-300/10 rounded-full blur-[100px] -z-10 mix-blend-multiply pointer-events-none" />

        <div className="container-main relative z-10 py-20 lg:py-28 text-center max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-slate-200/80 shadow-sm mb-6">
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-blue-600">
              The Team
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
            Meet the minds behind <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">FootprintLK</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium">
            A collaborative research project developed with a shared focus on digital privacy, OSINT, and citizen empowerment in Sri Lanka.
          </p>
        </div>
      </section>

      {/* Supervisors */}
      <section aria-labelledby="supervisors-heading" className="page-section bg-white">
        <div className="container-main">
          <h2
            id="supervisors-heading"
            className="text-xl font-extrabold text-slate-900 uppercase tracking-widest mb-10 text-center"
          >
            Supervisors
          </h2>
          <ul
            role="list"
            className="flex flex-wrap justify-center gap-8 mb-16"
          >
            {supervisors.map((sv) => (
              <li key={sv.id} className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(45%-2rem)] max-w-xl">
                <MemberCard
                  name={sv.name}
                  role={sv.role}
                  email={sv.email}
                  scholar={sv.scholar}
                  image={sv.image}
                  faculty={sv.faculty}
                  department={sv.department}
                  university={sv.university}
                  initials={sv.initials}
                  isSupervisor
                />
              </li>
            ))}
          </ul>

          <div className="divider mb-16" />

          {/* Group Members */}
          <h2
            id="team-heading"
            className="text-xl font-extrabold text-slate-900 uppercase tracking-widest mb-10 text-center"
          >
            Group Members
          </h2>
          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {teamMembers.map((member) => (
              <li key={member.id}>
                <MemberCard
                  name={member.name}
                  role={member.role}
                  email={member.email}
                  linkedin={member.linkedin}
                  image={member.image}
                  faculty={member.faculty}
                  department={member.department}
                  university={member.university}
                  initials={member.initials}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
