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
      "A comprehensive review of existing literature shows that the digital privacy landscape is currently highly fragmented. Most existing solutions are designed to address single aspects of privacy exposure, such as data breach detection, social media analysis, or facial recognition, rather than offering a holistic and integrated perspective. For instance, platforms like HaveIBeenPwned provide valuable breach data but lack the contextual analysis needed to understand how that data impacts a user's overall digital footprint. Similarly, OSINT tools like Maltego and Sherlock offer powerful data collection capabilities but are often too complex for non-technical users to interpret effectively. <br>Furthermore, many research-level models for facial recognition and NLP are not user-friendly and often raise significant privacy concerns themselves by requiring data to be processed on external servers. There is also a notable absence of regional focus in these tools; most are optimized for Western naming conventions and English-centric datasets. This leaves a significant portion of the global population, particularly in regions like Sri Lanka, without localized tools that understand their language, transliteration nuances, and unique digital usage patterns. <br>Finally, the bridge between technical detection and legal compliance remains underdeveloped. While advanced detection mechanisms exist, they rarely provide users with actionable guidance that maps their exposure to specific legal frameworks or rights. This fragmentation prevents individuals from obtaining a clear, unified understanding of their digital risks, highlighting a critical need for integrated systems that combine multi-modal detection with localized, accessible advisory services.",
  },
  {
    id: "research-gap",
    title: "Research Gap",
    content:
      "The primary research gap identified in this study is the lack of a unified, user-centric platform that integrates multiple dimensions of digital privacy exposure into a single, cohesive ecosystem. Current solutions operate in isolated silos, meaning a user must consult multiple disparate platforms to understand their risks across breaches, social media, and image exposure. There is no existing framework that effectively correlates these multi-modal data points to generate a unified privacy risk score or a comprehensive 'digital footprint' profile for the user. <br>Another significant gap is the lack of localization for the Sri Lankan context. Existing privacy tools fail to support Sinhala language processing, local naming conventions, and region-specific data sources. This inaccuracy in processing local data leads to a higher rate of false negatives or missed exposures for Sri Lankan users. Additionally, there is a clear absence of automated, explainable legal guidance within these platforms. Most tools provide raw technical data without explaining how those findings relate to local regulations, such as the Sri Lankan Personal Data Protection Act (PDPA) No. 9 of 2022. <br>Furthermore, the architectural approach to privacy in many existing tools is often contradictory, as they frequently store sensitive biometric or personal information on external servers during the analysis process. This creates an additional layer of risk for the user. Therefore, there is a clear research need for a privacy-first, locally adapted solution that not only detects multi-source privacy exposures but also translates them into actionable, legally grounded insights through a zero-persistence analysis pipeline.",
  },
  {
    id: "research-problem",
    title: "Research Problem",
    content: "The research addresses several critical issues in the current digital landscape regarding user privacy and exposure:",
    subSections: [
      { title: "Fragmentation of Privacy Detection Systems", text: "Existing privacy-related tools operate in silos, where each system focuses on a single aspect such as data breach detection, social media analysis, facial recognition, or legal compliance. This lack of integration prevents users from obtaining a comprehensive understanding of their overall digital privacy exposure. As a result, individuals must rely on multiple platforms, leading to inefficiency and incomplete risk assessment.", icon: "Layers" },
      { title: "Absence of Localization for Sri Lankan Context", text: "Existing tools are not designed to handle region-specific challenges such as Sinhala language processing, transliteration of names, and local social media usage patterns. This significantly reduces the accuracy and effectiveness of privacy detection for Sri Lankan users, leaving a large portion of the population underserved.", icon: "Globe" },
      { title: "Limited Support for Non-Technical Users", text: "Most OSINT and cybersecurity tools require a certain level of technical expertise to operate and interpret results. Non-expert users struggle to understand complex outputs, limiting the accessibility and usability of these systems for the general public.", icon: "Users" },
      { title: "Lack of Automated and Reliable Legal Guidance", text: "Although privacy laws such as the Personal Data Protection Act exist, current tools do not effectively map detected privacy risks to specific legal provisions. Users are often unaware of their rights or the legal actions they can take, and existing AI-based solutions lack verifiable and jurisdiction-specific legal accuracy.", icon: "Scale" },
      { title: "Privacy Risks in Existing Privacy Tools", text: "Ironically, many privacy detection platforms introduce additional risks by storing sensitive user data, including personal identifiers and biometric information, on external servers. This contradicts the purpose of privacy protection and raises ethical concerns regarding data handling and security.", icon: "ShieldAlert" },
      { title: "Inability to Correlate Multi-Source Data", text: "Current systems do not effectively correlate data from different sources (breaches, social media, images) to generate a unified insight. This prevents accurate identification of complex threats such as impersonation, identity theft, or combined exposure risks.", icon: "Database" }
    ],
    solution: "To address the identified research problems, FootprintLK proposes the development of an integrated, multi-modal privacy exposure detection platform tailored for Sri Lankan users. The system combines data breach detection, social media OSINT analysis, facial exposure recognition, and automated legal compliance advisory into a unified architecture. It introduces context-aware risk scoring to quantify the severity of privacy exposures and employs Sinhala language support to improve localization and accuracy. <br>The platform is designed with a user-friendly interface to ensure accessibility for non-technical users, while a privacy-first approach ensures that sensitive data is processed securely without long-term storage. Additionally, an NLP-driven legal engine maps detected risks to relevant Sri Lankan laws, providing clear, actionable guidance. This holistic approach enables users to understand, assess, and respond to their digital privacy risks effectively."
  },
  {
    id: "research-objectives",
    title: "Research Objectives",
    content: "",
    mainObjective: "To design and develop a comprehensive, multi-modal privacy exposure detection and compliance advisory platform tailored for Sri Lankan users.",
    points: [
      { text: "To develop a data breach detection module that identifies and analyzes exposed credentials and personal data from surface web, paste sites, and dark web sources.", icon: "Search" },
      { text: "To implement a social media analysis system capable of detecting PII exposure and identifying impersonation accounts across multiple platforms.", icon: "Globe" },
      { text: "To design and integrate a Sinhala-to-English transliteration mechanism to improve the accuracy of user identification in social media OSINT.", icon: "Languages" },
      { text: "To build a facial exposure detection pipeline that identifies unauthorized usage of user images across publicly available web sources.", icon: "ScanFace" },
      { text: "To ensure privacy preservation by processing sensitive data in-memory and avoiding long-term storage of personally identifiable or biometric information.", icon: "Shield" },
      { text: "To create a risk scoring mechanism that evaluates and quantifies overall privacy exposure using multiple weighted factors.", icon: "Activity" },
      { text: "To provide clear, user-friendly, and actionable recommendations based on identified risks and legal mappings.", icon: "FileCheck" },
      { text: "To design an intuitive web-based dashboard that presents privacy exposure insights in a simple and understandable format for non-technical users.", icon: "LayoutDashboard" }
    ]
  },
  {
    id: "methodology",
    title: "Methodology",
    content:
      "The proposed system follows a multi-module, microservices-based architecture that integrates data breach detection, social media exposure analysis, facial image detection, and legal compliance advisory into a unified pipeline. Data is collected from multiple sources such as public web repositories, social media platforms, and image datasets, followed by preprocessing techniques including deduplication and normalization. A hybrid approach combining rule-based methods and natural language processing is used to extract personally identifiable information (PII), while machine learning techniques are applied for risk scoring and classification. Social media analysis incorporates Sinhala transliteration and fuzzy matching to improve detection accuracy, and facial recognition is performed using deep learning models for feature extraction and similarity matching. <br>The outputs from all modules are aggregated and processed through an NLP-driven legal advisory engine that maps detected exposures to relevant Sri Lankan laws and generates actionable recommendations. The entire system is designed with a privacy-first approach, ensuring minimal data retention and secure processing, while delivering results through a user-friendly web-based dashboard.",
    image: "/images/scope/methodology.png",
  },
  {
    id: "technologies",
    title: "Technologies Used",
    techStack: [
      {
        category: "Frontend, Backend & Infrastructure",
        items: [
          { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
          { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
          { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
          { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
          { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
          { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
          { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" },
        ]
      },
      {
        category: "AI, Machine Learning & Data Processing",
        items: [
          { name: "spaCy", logo: "https://cdn.simpleicons.org/spacy" },
          { name: "SBERT", logo: "https://cdn.simpleicons.org/huggingface" },
          { name: "Regex", logo: "" },
          { name: "MTCNN", logo: "" },
          { name: "FaceNet", logo: "" },
          { name: "FAISS", logo: "https://cdn.simpleicons.org/meta" },
          { name: "DBSCAN", logo: "" },
        ]
      },
      {
        category: "Data Collection & Storage",
        items: [
          { name: "Playwright", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" },
          { name: "Indic NLP Library", logo: "" },
          { name: "SQLite", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
        ]
      }
    ]
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
    link: "https://drive.google.com/file/d/1nvqJJMnVfa9luYqpxbnVwaHRWvsD2SjI/view?usp=sharing", // TODO: Replace with Google Drive link for Proposal Presentation
  },
  {
    id: "pp1-slides",
    title: "Progress Presentation 1",
    description: "First progress review presented to the panel.",
    link: "https://drive.google.com/file/d/1TRkVJ7yxC_9q0DfekgIiAd1f1wdKwbMW/view?usp=sharing", // TODO: Replace with Google Drive link for Progress Presentation 1
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
