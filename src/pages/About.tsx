import SectionHeader from "../components/SectionHeader";
import { teamMembers, supervisors } from "../data/content";

function MemberCard({
  name,
  role,
  email,
  focus,
  initials,
  isSupervisor = false,
}: {
  name: string;
  role: string;
  email: string;
  focus?: string;
  initials: string;
  isSupervisor?: boolean;
}) {
  // Generate a consistent soft color based on initials
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
      className={`card flex flex-col items-start gap-4 ${isSupervisor ? "border-blue-200 bg-blue-50/30" : ""
        }`}
      aria-label={`${name}, ${role}`}
    >
      {/* Avatar */}
      <div
        aria-hidden="true"
        className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0 ${avatarColor}`}
      >
        {initials}
      </div>

      <div className="flex-1 min-w-0 w-full">
        <h3 className="text-[0.95rem] font-bold text-slate-900 mb-0.5">{name}</h3>
        <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-2">{role}</p>

        {focus && (
          <p className="text-sm text-slate-500 leading-relaxed mb-3">{focus}</p>
        )}

        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-blue-600 transition-colors break-all"
          aria-label={`Send email to ${name} at ${email}`}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-shrink-0">
            <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
            <path d="M2 7l10 7 10-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          {email}
        </a>
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
        <div className="container-main py-14 lg:py-20">
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
            className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6"
          >
            Supervisors
          </h2>
          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
          >
            {supervisors.map((sv) => (
              <li key={sv.id}>
                <MemberCard
                  name={sv.name}
                  role={sv.role}
                  email={sv.email}
                  initials={sv.initials}
                  isSupervisor
                />
              </li>
            ))}
          </ul>

          <div className="divider mb-16" />

          {/* Team members */}
          <h2
            id="team-heading"
            className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-6"
          >
            Research Team
          </h2>
          <ul
            role="list"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5"
          >
            {teamMembers.map((member) => (
              <li key={member.id}>
                <MemberCard
                  name={member.name}
                  role={member.role}
                  email={member.email}
                  focus={member.focus}
                  initials={member.initials}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Affiliations */}
      <section aria-labelledby="affiliations-heading" className="page-section bg-slate-50/60">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <h2
              id="affiliations-heading"
              className="text-xl font-bold text-slate-900 mb-4"
            >
              Affiliations
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              This project is conducted under the Faculty of Computing at the Sri Lanka Institute of Information Technology (SLIIT).
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
