# FootprintLK - Privacy-First Digital Footprint Intelligence

FootprintLK is a premium, Sri Lanka-focused research project designed to help citizens understand and manage their digital footprint. By leveraging OSINT (Open Source Intelligence) techniques and AI-driven analysis, the system identifies publicly exposed personal information and provides actionable privacy recommendations aligned with the **Sri Lanka Personal Data Protection Act (PDPA) No. 9 of 2022**.

## 🎨 Premium UI Experience

The project features a **Strategic Architect** design aesthetic, moving away from generic templates to a bespoke, professional UI.
- **Glassmorphic Components**: High-end depth with backdrop blurs and subtle shadow work.
- **Architectural Grid Layouts**: Clean, tech-forward backgrounds with ambient glows.
- **Responsive & Dynamic**: Optimized for all devices with smooth transitions and hover effects.
- **Custom Branding**: Features a unique digital footprint SVG favicon and a unified color palette of deep blue and indigo.

## 🚀 Key Features

- **Facial Exposure Detection**: Uses MTCNN and FaceNet to match faces across public web sources and detect identity exposure.
- **Social Media Analysis**: Analyzes public social media data for impersonation signals and PII leakage, with specific support for Sinhala/English transliteration variants.
- **Data Breach Intelligence**: Correlates user identifiers with known global and local data breach datasets.
- **Privacy Compliance Advisor**: Automatically maps detected risks to specific clauses of the SL PDPA 2022 and provides mitigation steps.

## 🛠️ Technology Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS 4.0
- **Icons**: Lucide React + Custom SVG Brand Assets
- **Hosting**: Firebase Hosting (Project: `footprintlk-70a33`)
- **Project Structure**: Component-based architecture with centralized content management in `src/data/content.ts`.

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Firebase CLI (`npm install -g firebase-tools`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/justdsn/RPWebsite.git
   cd RPWebsite
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```
RPWebsite/
├── public/                  # Static assets (favicon.svg, etc.)
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Footer.tsx
│   │   ├── HeroIllustration.tsx
│   │   ├── Layout.tsx
│   │   ├── Navbar.tsx
│   │   └── SectionHeader.tsx
│   ├── pages/               # Main page views
│   │   ├── Home.tsx
│   │   ├── Scope.tsx
│   │   ├── Milestones.tsx
│   │   ├── Downloads.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── NotFound.tsx
│   ├── data/
│   │   └── content.ts       # ⭐ Centralized content — edit text, links & milestones here
│   ├── firebase.ts          # Firebase app initialization
│   ├── App.tsx
│   └── main.tsx
├── firebase.json            # Firebase Hosting config
├── .firebaserc              # Firebase project & hosting target config
├── vite.config.ts
└── package.json
```

> **To update website content** (text, document links, milestone status), edit only `src/data/content.ts`.

## 📧 Contact & Support

For enquiries, collaborations, or research information, the contact system is fully functional.
- **Email**: [footprintlk.info@gmail.com](mailto:footprintlk.info@gmail.com)
- **Location**: Sri Lanka Institute of Information Technology (SLIIT)

## 🌐 Hosting & Deployment

The website is hosted on **Firebase Hosting** and live at:
**[https://footprintlk-rp.web.app](https://footprintlk-rp.web.app)**

| Setting | Value |
|---|---|
| Firebase Project | `footprintlk-70a33` |
| Hosting Site | `footprintlk-rp` |
| Live URL | https://footprintlk-rp.web.app |

### Deployment Steps

1. **Install Firebase Tools** (first time only):
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase** (first time only):
   ```bash
   firebase login
   ```

3. **Build & Deploy**:
   ```bash
   npm run deploy
   ```
   *This runs `vite build` followed by `firebase deploy`.*

### Firebase Hosting Target

The project uses a named hosting target (`rp`) mapped to the `footprintlk-rp` site. This is configured in:
- **`firebase.json`** — `"target": "rp"`
- **`.firebaserc`** — maps target `rp` → site `footprintlk-rp`

## 📄 License

This is an academic research project conducted at the **Sri Lanka Institute of Information Technology (SLIIT)**. All rights reserved.

---
© 2026 FootprintLK Research Team
