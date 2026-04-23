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
    content:
      "A comprehensive analysis of over 50 academic papers and industry reports focusing on Open Source Intelligence (OSINT) and privacy-preserving AI. Our survey highlights the evolution of facial recognition from traditional Eigenfaces to modern deep learning models like FaceNet and ArcFace. We also explored digital privacy frameworks such as GDPR and Sri Lanka's PDPA 2022, identifying how global standards can be localized for the South Asian digital ecosystem.",
    image: "/images/scope/literature_survey.png",
  },
  {
    id: "research-gap",
    title: "Research Gap",
    content:
      "Despite the proliferation of OSINT tools, a critical gap exists in localized identity intelligence. Existing systems struggle with non-Latin scripts (Sinhala/Tamil) and the specific cultural nuances of Sri Lankan social media usage. Furthermore, there is a distinct lack of citizen-centric tools that allow individuals to proactively monitor their own digital footprint, as most OSINT platforms are designed exclusively for law enforcement or corporate security.",
    image: "/images/scope/research_gap.png",
  },
  {
    id: "research-problem",
    title: "Research Problem",
    content:
      "Sri Lankan internet users are increasingly vulnerable to identity theft, impersonation, and unintentional PII leakage. The complexity of cross-platform identity correlation—compounded by the use of multiple language variants and transliterated names—makes it nearly impossible for an average citizen to know what information about them is publicly exposed. This research addresses the need for a unified, language-aware digital footprint intelligence system.",
    image: "/images/scope/research_problem.png",
  },
  {
    id: "research-objectives",
    title: "Research Objectives",
    content:
      "Our primary objectives include: (1) Developing a high-accuracy facial exposure detection pipeline using MTCNN and FaceNet. (2) Implementing a multilingual identity correlation engine supporting Sinhala-English transliteration. (3) Creating an automated privacy risk scoring mechanism based on PDPA 2022 guidelines. (4) Designing an intuitive citizen-facing dashboard for real-time digital footprint visualization and remediation.",
    image: "/images/scope/research_objectives.png",
  },
  {
    id: "methodology",
    title: "Methodology",
    content:
      "The research follows a design-science research methodology. We utilize a modular architecture consisting of: (a) Data Acquisition Layer for ethical OSINT collection. (b) Intelligence Layer utilizing FAISS for high-dimensional similarity search and custom NER models for PII extraction. (c) Compliance Layer for mapping detected exposures to legal clauses. The system is evaluated using precision-recall metrics and user-centric privacy perception surveys.",
    image: "/images/scope/methodology.png",
  },
  {
    id: "technologies",
    title: "Technologies Used",
    content:
      "The system is built on a modern full-stack architecture. The frontend uses React with Tailwind CSS for a premium user experience. The backend is powered by Python (FastAPI), leveraging TensorFlow and PyTorch for AI/ML tasks. We use MTCNN for face detection, FaceNet for embeddings, and FAISS for vector indexing. Data is managed through a combination of PostgreSQL for structured data and Redis for high-speed caching of transient OSINT signals.",
    image: "/images/scope/technologies_used.png",
  },
];

// ─── Milestones Page ─────────────────────────────────────────────────────────
export const milestones = [
  {
    id: "proposal",
    label: "Project Proposal",
    description:
      "The initial project proposal covers problem identification, scope definition, preliminary literature review, and high-level methodology. Presented to receive funding or get the project approved.",
    date: "September 2025",
    marks: 6,
  },
  {
    id: "pp1",
    label: "Progress Presentation I",
    description:
      "Progress Presentation I reviews the 50% completion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
    date: "January 2026",
    marks: 6,
  },
  {
    id: "pp2",
    label: "Progress Presentation II",
    description:
      "Progress Presentation II reviews the 90% completion status demonstration of the project which assesses the project as a whole.",
    date: "March 2026",
    marks: 18,
  },
  {
    id: "website",
    label: "Website Evaluation",
    description:
      "Website helps to promote the project and reveals all details related to the project.",
    date: "April 2026",
    marks: 2,
  },
  {
    id: "logbook",
    label: "Logbook Submission",
    description:
      "Status of the project is validated through the Logbook. This also includes Status documents 1 and 2.",
    date: "April 2026",
    marks: 3,
  },
  {
    id: "research-paper",
    label: "Research Paper",
    description:
      "Describes the contribution to existing knowledge, giving due recognition to all work that was referred to in making new knowledge.",
    date: "May 2026",
    marks: 10,
  },
  {
    id: "final-report",
    label: "Final Report",
    description:
      "Final Report evaluates the completed project done throughout the year.",
    date: "May 2026",
    marks: 19,
  },
  {
    id: "final-viva",
    label: "Final Presentation & Viva",
    description:
      "Oral defense and final demonstration before the examination panel covering all aspects of the research: design decisions, implementation challenges, evaluation results, and future work.",
    date: "May 2026",
    marks: 20,
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
    description: "Individual proposal documents of each component",
    link: "https://drive.google.com/drive/folders/1iKCJsuhjvI3_nLoxUYo0ZOiRcgwEnTLQ?usp=sharing", // TODO: Replace with Google Drive link for Proposal Document
  },
  {
    id: "checklist",
    title: "Check List Documents",
    description: "Preliminary Progress Review (PPR) Report",
    link: "https://drive.google.com/file/d/1ZCEwaxv5SGIGr9MZZjmAIqJ3PqPI1Hhv/view?usp=sharing", // TODO: Replace with Google Drive link for Check List Documents
  },
  {
    id: "final-doc",
    title: "Final Documents",
    description: "Individual and group final documents",
    link: "https://drive.google.com/drive/folders/1WD6tNv8xh7K1TFKQAykJNnBetxIkRu9w?usp=sharing", // TODO: Replace with Google Drive link for Final Documents
  },
];

export const presentations = [
  {
    id: "proposal-slides",
    title: "Proposal Presentation",
    description: "Slides presented at the project proposal presentation.",
    link: "#", // TODO: Replace with Google Drive link for Proposal Presentation
  },
  {
    id: "pp1-slides",
    title: "Progress Presentation 1",
    description: "First progress review presented to the panel.",
    link: "https://drive.google.com/file/d/1nvqJJMnVfa9luYqpxbnVwaHRWvsD2SjI/view?usp=sharing", // TODO: Replace with Google Drive link for Progress Presentation 1
  },
  {
    id: "pp2-slides",
    title: "Progress Presentation 2",
    description: "Second progress review covering the integrated prototype.",
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
// HOW TO UPDATE:
// - Replace image: "#" with the path to the member's photo, e.g. "/images/member1.jpg"
//   (put images inside the /public/images/ folder)
// - Replace linkedin: "#" with the full LinkedIn profile URL
export const teamMembers = [
  {
    id: "m1",
    name: "Disanayaka S.D.P.N.",
    role: "Group Leader",
    email: "nethsara11d@gmail.com",
    linkedin: "https://www.linkedin.com/in/nethsara-disanayaka/", // TODO: Replace with LinkedIn profile URL
    image: "/images/m1.jpg",   // TODO: Replace with photo path, e.g. "/images/member1.jpg"
    university: "Sri Lanka Institute of Information Technology",
    faculty: "Faculty of Computing",
    department: "Computer Systems Engineering",
    initials: "T1",
  },
  {
    id: "m2",
    name: "Nanayakkara K.A.D.D.S.",
    role: "Group Member",
    email: "dhanuka1222@gmail.com",
    linkedin: "https://www.linkedin.com/in/dhanukasn/", // TODO: Replace with LinkedIn profile URL
    image: "/images/m2.jpg",   // TODO: Replace with photo path, e.g. "/images/member2.jpg"
    university: "Sri Lanka Institute of Information Technology",
    faculty: "Faculty of Computing",
    department: "Computer Systems Engineering",
    initials: "T2",
  },
  {
    id: "m3",
    name: "Jayasena J.G.A.R.H.U.",
    role: "Group Member",
    email: "ruwanharsha2001@gmail.com",
    linkedin: "https://www.linkedin.com/in/ruwantha-harshamal/", // TODO: Replace with LinkedIn profile URL
    image: "/images/m3.jpg",   // TODO: Replace with photo path, e.g. "/images/member3.jpg"
    university: "Sri Lanka Institute of Information Technology",
    faculty: "Faculty of Computing",
    department: "Computer Systems Engineering",
    initials: "T3",
  },
  {
    id: "m4",
    name: "Wijesinghe R.P.D.K.N.",
    role: "Group Member",
    email: "kosalawi36@gmail.com",
    linkedin: "https://www.linkedin.com/in/kosala-wijesinghe/", // TODO: Replace with LinkedIn profile URL
    image: "/images/m4.jpg",   // TODO: Replace with photo path, e.g. "/images/member4.jpg"
    university: "Sri Lanka Institute of Information Technology",
    faculty: "Faculty of Computing",
    department: "Computer Systems Engineering",
    initials: "T4",
  },
];

export const supervisors = [
  {
    id: "sv1",
    name: "Mr. Kavinga Yapa Abeywardhena",
    role: "Project Supervisor",
    email: "kavinga.y@sliit.lk",
    scholar: "https://scholar.google.com/citations?hl=en&user=BxgvLN4AAAAJ",
    image: "/images/supervisor.jpg",   // TODO: Replace with photo path, e.g. "/images/supervisor1.jpg"
    university: "Sri Lanka Institute of Information Technology",
    faculty: "Faculty of Computing",
    department: "Computer Systems Engineering",
    initials: "SV",
  },
  {
    id: "sv2",
    name: "Mr. Kanishka Yapa",
    role: "Co-Supervisor",
    email: "kanishka.y@sliit.lk",
    scholar: "https://scholar.google.com/citations?hl=en&user=qwFemTwAAAAJ",
    image: "/images/cosupervisor.jpg",   // TODO: Replace with photo path, e.g. "/images/supervisor2.jpg"
    university: "Sri Lanka Institute of Information Technology",
    faculty: "Faculty of Computing",
    department: "Computer Systems Engineering",
    initials: "CS",
  },
];

// ─── Contact Page ─────────────────────────────────────────────────────────────
export const contactDetails = [
  {
    type: "email",
    label: "General Enquiries",
    value: "footprintlk.info@gmail.com",
  },
];
