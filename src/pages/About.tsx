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
      className={`card flex flex-col gap-5 h-full ${isSupervisor ? "border-blue-200 bg-blue-50/30 p-8" : "p-6"}`}
      aria-label={`${name}, ${role}`}
    >
      {/* Photo or Initials Avatar */}
      <div className="flex items-center gap-5">
        {image && image !== "#" ? (
          <img
            src={image}
            alt={`Photo of ${name}`}
            className={`${isSupervisor ? "w-20 h-20" : "w-16 h-16"} rounded-xl object-cover flex-shrink-0 border border-slate-200 shadow-sm`}
          />
        ) : (
          <div
            aria-hidden="true"
            className={`${isSupervisor ? "w-20 h-20 text-xl" : "w-16 h-16 text-lg"} rounded-xl flex items-center justify-center font-bold flex-shrink-0 ${avatarColor}`}
          >
            {initials}
          </div>
        )}

        <div className="min-w-0">
          <h3 className={`${isSupervisor ? "text-lg" : "text-[1rem]"} font-bold text-slate-900 leading-tight`}>{name}</h3>
          <p className={`${isSupervisor ? "text-sm" : "text-xs"} font-semibold text-blue-600 uppercase tracking-wide mt-1`}>{role}</p>
        </div>
      </div>

      {/* Academic Info */}
      <div className={`${isSupervisor ? "text-[0.9rem]" : "text-[0.85rem]"} text-slate-500 space-y-1.5 border-t border-slate-100 pt-4 flex-grow`}>
        <p className="font-medium text-slate-800">{university}</p>
        <p><span className="font-medium text-slate-700">Faculty:</span> {faculty}</p>
        <p><span className="font-medium text-slate-700">Department:</span> {department}</p>
      </div>

      {/* Contact Links - Parallel layout */}
      <div className="flex items-center justify-between gap-4 border-t border-slate-100 pt-4">
        {/* Email */}
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors truncate"
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
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors flex-shrink-0"
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
            className="inline-flex items-center gap-2 text-xs font-medium text-slate-500 hover:text-blue-600 transition-colors flex-shrink-0"
            aria-label={`LinkedIn profile of ${name}`}
          >
            <IconLinkedIn />
            LinkedIn
          </a>
        ) : !scholar && (
          <span className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 flex-shrink-0" title="Coming soon">
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
      {/* Page header */}
      <section
        aria-label="Page header"
        className="page-header-bg border-b border-slate-100"
      >
        <div className="container-main py-14 lg:py-20 text-center">
          <SectionHeader
            tag="About Us"
            title="The team behind FootprintLK"
            subtitle="FootprintLK is a collaborative research project developed by a group of undergraduate researchers with a shared focus on digital privacy, OSINT, and citizen empowerment in Sri Lanka."
            as="h1"
          />
        </div>
      </section>

      {/* Supervisors */}
      <section aria-labelledby="supervisors-heading" className="page-section bg-white">
        <div className="container-main">
          <h2
            id="supervisors-heading"
            className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-10 text-center"
          >
            Supervisors
          </h2>
          <ul
            role="list"
            className="flex flex-wrap justify-center gap-8 mb-20"
          >
            {supervisors.map((sv) => (
              <li key={sv.id} className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(40%-2rem)] max-w-lg">
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

          <div className="divider mb-20" />

          {/* Group Members */}
          <h2
            id="team-heading"
            className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-10 text-center"
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
