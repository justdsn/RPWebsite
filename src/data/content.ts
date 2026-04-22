// ─── Navigation ───────────────────────────────────────────────────────────────
export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Scope", path: "/scope" },
  { label: "Milestones", path: "/milestones" },
  { label: "Downloads", path: "/downloads" },
  { label: "About Us", path: "/about" },
  { label: "Contact Us", path: "/contact" },
];

// ─── Home Page ────────────────────────────────────────────────────────────────
export const homeWhyMatters = [
  {
    title: "Impersonation & Identity Theft",
    description:
      "Sri Lankan users face growing risks of fake profiles and identity misuse across local and international platforms.",
  },
  {
    title: "PII Leakage Exposure",
    description:
      "Personal information published or shared online is often discoverable beyond the user's awareness through OSINT techniques.",
  },
  {
    title: "Phishing & Social Engineering",
    description:
      "Publicly visible data points are routinely harvested and used to craft targeted phishing and social engineering attacks.",
  },
  {
    title: "Multilingual Identity Reality",
    description:
      "Sri Lankan names exist in Sinhala script, English transliterations, and romanized variants. Standard tools miss cross-variant matches.",
  },
];

export const homeCapabilities = [
  {
    id: "facial",
    label: "01",
    title: "Facial Exposure Detection",
    description:
      "Detect and match faces across public web sources using MTCNN, FaceNet embeddings, and FAISS similarity search, with privacy-first data handling.",
    tag: "OSINT + Privacy Research",
  },
  {
    id: "social",
    label: "02",
    title: "Social Media Footprint Analysis",
    description:
      "Collect and analyze public social media data for impersonation signals, PII exposure, username correlation, and NER, with Sinhala/English transliteration support.",
    tag: "OSINT Analysis",
  },
  {
    id: "breach",
    label: "03",
    title: "Data Breach Analysis",
    description:
      "Check whether identifiers appear in known breach datasets. Framed as awareness and education, not as a surveillance tool.",
    tag: "Awareness Tool",
  },
  {
    id: "compliance",
    label: "04",
    title: "Privacy Compliance Advisor",
    description:
      "Maps detected scenarios to Sri Lanka privacy-related legislation, explains applicable clauses, and provides actionable recommendations.",
    tag: "PDPA 2022-Aware",
  },
];

export const homeTOC = [
  { label: "Research Scope", path: "/scope", description: "Domain, methodology, and technologies" },
  { label: "Project Milestones", path: "/milestones", description: "Assessment timeline and deliverables" },
  { label: "Downloads", path: "/downloads", description: "Documents and presentation slides" },
];

// ─── Scope Page ───────────────────────────────────────────────────────────────
export const scopeSections = [
  {
    id: "literature-survey",
    title: "Literature Survey",
    placeholder:
      "This section will present a comprehensive review of existing literature on OSINT methodologies, digital privacy frameworks, facial recognition systems, and social media analysis techniques, with particular attention to studies relevant to South Asian and Sri Lankan contexts. Content will be added here.",
  },
  {
    id: "research-gap",
    title: "Research Gap",
    placeholder:
      "This section identifies the specific gaps in existing tools and research: the absence of Sri Lanka-specific OSINT privacy tools, lack of Sinhala/English transliteration support in identity analysis, and the disconnect between technical OSINT capabilities and public-facing privacy awareness tools. Content will be added here.",
  },
  {
    id: "research-problem",
    title: "Research Problem",
    placeholder:
      "Sri Lankan internet users lack access to tools that proactively surface their publicly exposed personal information in a privacy-respecting, language-aware, and regulation-aligned manner. This research addresses that problem by designing and evaluating a citizen-facing digital footprint intelligence system. Content will be added here.",
  },
  {
    id: "research-objectives",
    title: "Research Objectives",
    placeholder:
      "The research objectives will be listed here as a structured set of measurable goals, covering facial exposure detection accuracy, social media correlation effectiveness, breach identification scope, and compliance mapping completeness. Content will be added here.",
  },
  {
    id: "methodology",
    title: "Methodology",
    placeholder:
      "This section will describe the end-to-end research methodology: data collection strategies, facial recognition pipeline design, NLP-based social analysis, breach dataset integration approach, compliance mapping logic, and the evaluation framework used to assess system performance. Content will be added here.",
  },
  {
    id: "technologies",
    title: "Technologies Used",
    placeholder:
      "This section will present a structured grid of technologies across categories: ML/AI frameworks (MTCNN, FaceNet, FAISS), NLP tools, web scraping infrastructure, backend services, frontend frameworks, and privacy-preserving storage approaches. Content will be added here.",
  },
];

// ─── Milestones Page ─────────────────────────────────────────────────────────
export const milestones = [
  {
    id: "proposal",
    label: "Project Proposal",
    description:
      "The initial project proposal covers problem identification, scope definition, preliminary literature review, and high-level methodology. Submitted to the research supervisor for formal approval.",
    date: "March 2025",
    marks: "TBD",
    status: "Submitted",
  },
  {
    id: "pp1",
    label: "Progress Presentation 1",
    description:
      "First progress presentation demonstrates early-stage implementation of the facial exposure detection module and the social media data collection pipeline. Evaluated by the panel.",
    date: "May 2025",
    marks: "TBD",
    status: "Completed",
  },
  {
    id: "pp2",
    label: "Progress Presentation 2",
    description:
      "Second progress presentation covers the integrated system prototype including data breach analysis, compliance advisor mapping, and initial transliteration module. Evaluated by the panel.",
    date: "August 2025",
    marks: "TBD",
    status: "Upcoming",
  },
  {
    id: "final",
    label: "Final Assessment",
    description:
      "Comprehensive evaluation of the complete FootprintLK system. Includes written report, live demonstration, system performance metrics, and full documentation package submission.",
    date: "November 2025",
    marks: "TBD",
    status: "Upcoming",
  },
  {
    id: "viva",
    label: "Viva",
    description:
      "Oral defense before the examination panel covering all aspects of the research: design decisions, implementation challenges, evaluation results, and future work recommendations.",
    date: "December 2025",
    marks: "TBD",
    status: "Upcoming",
  },
];

// ─── Downloads Page ───────────────────────────────────────────────────────────
// HOW TO UPDATE: Replace the placeholder "#" links below with your Google Drive
// sharing links. Use the format: "https://drive.google.com/file/d/YOUR_FILE_ID/view"
// Make sure the Drive files are set to "Anyone with the link can view".

export const documents = [
  {
    id: "charter",
    title: "Project Charter",
    description: "Formal project initiation document defining scope, objectives, and stakeholder responsibilities.",
    link: "#", // TODO: Replace with Google Drive link for Project Charter
  },
  {
    id: "proposal-doc",
    title: "Proposal Document",
    description: "Individual proposal documents of each component.",
    link: "https://drive.google.com/drive/folders/1iKCJsuhjvI3_nLoxUYo0ZOiRcgwEnTLQ?usp=sharing", // TODO: Replace with Google Drive link for Proposal Document
  },
  {
    id: "checklist",
    title: "Check List Documents",
    description: "Milestone checklists and deliverable tracking documents.",
    link: "#", // TODO: Replace with Google Drive link for Check List Documents
  },
  {
    id: "final-doc",
    title: "Final Documents",
    description: "Complete research report, appendices, and supporting documentation.",
    link: "#", // TODO: Replace with Google Drive link for Final Documents
  },
];

export const presentations = [
  {
    id: "proposal-slides",
    title: "Proposal Presentation",
    description: "Slides presented at the Project Proposal milestone assessment.",
    link: "#", // TODO: Replace with Google Drive link for Proposal Presentation
  },
  {
    id: "pp1-slides",
    title: "Progress Presentation 1",
    description: "Slides from the first progress review presented to the panel.",
    link: "#", // TODO: Replace with Google Drive link for Progress Presentation 1
  },
  {
    id: "pp2-slides",
    title: "Progress Presentation 2",
    description: "Slides from the second progress review covering the integrated prototype.",
    link: "#", // TODO: Replace with Google Drive link for Progress Presentation 2
  },
  {
    id: "final-slides",
    title: "Final Presentation",
    description: "Slides used during the final assessment and system demonstration.",
    link: "#", // TODO: Replace with Google Drive link for Final Presentation
  },
];

// ─── About Page ───────────────────────────────────────────────────────────────
export const teamMembers = [
  {
    id: "m1",
    name: "Team Member One",
    role: "Team Member",
    email: "member1@example.ac.lk",
    focus: "Facial Exposure Detection & ML Pipeline",
    initials: "T1",
  },
  {
    id: "m2",
    name: "Team Member Two",
    role: "Team Member",
    email: "member2@example.ac.lk",
    focus: "Social Media OSINT & NLP Analysis",
    initials: "T2",
  },
  {
    id: "m3",
    name: "Team Member Three",
    role: "Team Member",
    email: "member3@example.ac.lk",
    focus: "Data Breach Analysis & Backend Systems",
    initials: "T3",
  },
  {
    id: "m4",
    name: "Team Member Four",
    role: "Team Member",
    email: "member4@example.ac.lk",
    focus: "Privacy Compliance Advisor & Frontend",
    initials: "T4",
  },
];

export const supervisors = [
  {
    id: "sv1",
    name: "Supervisor Name",
    role: "Project Supervisor",
    email: "supervisor@example.ac.lk",
    initials: "SV",
  },
  {
    id: "sv2",
    name: "Co-Supervisor Name",
    role: "Co-Supervisor",
    email: "cosupervisor@example.ac.lk",
    initials: "CS",
  },
];

// ─── Contact Page ─────────────────────────────────────────────────────────────
export const contactDetails = [
  {
    type: "phone",
    label: "Primary Contact",
    value: "+94 XX XXX XXXX",
  },
  {
    type: "phone",
    label: "Secondary Contact",
    value: "+94 XX XXX XXXX",
  },
  {
    type: "email",
    label: "Research Enquiries",
    value: "research@footprintlk.example.ac.lk",
  },
  {
    type: "email",
    label: "General Contact",
    value: "info@footprintlk.example.ac.lk",
  },
];
