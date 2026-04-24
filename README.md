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
- **Project Structure**: Component-based architecture with centralized content management in `src/data/content.ts`.

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

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

- `src/components/`: Reusable UI components (Navbar, Footer, SectionHeaders, etc.)
- `src/pages/`: Main page views (Home, Scope, Milestones, Downloads, About, Contact)
- `src/data/content.ts`: **Centralized file for updating website text, links, documents, and milestone marks.**
- `public/`: Static assets including the custom `favicon.svg`.

## 📧 Contact & Support

For enquiries, collaborations, or research information, the contact system is fully functional. 
- **Email**: [footprintlk.info@gmail.com](mailto:footprintlk.info@gmail.com)
- **Location**: Sri Lanka Institute of Information Technology (SLIIT)

## 📄 License

This is an academic research project conducted at the **Sri Lanka Institute of Information Technology (SLIIT)**. All rights reserved.

---
© 2026 FootprintLK Research Team
