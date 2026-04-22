# FootprintLK - Privacy-First Digital Footprint Intelligence

FootprintLK is a Sri Lanka-focused research project designed to help citizens understand and manage their digital footprint. By leveraging OSINT (Open Source Intelligence) techniques and AI-driven analysis, the system identifies publicly exposed personal information and provides actionable privacy recommendations aligned with the **Sri Lanka Personal Data Protection Act (PDPA) No. 9 of 2022**.

## 🚀 Key Features

- **Facial Exposure Detection**: Uses MTCNN and FaceNet to match faces across public web sources and detect identity exposure.
- **Social Media Analysis**: Analyzes public social media data for impersonation signals and PII leakage, with specific support for Sinhala/English transliteration variants.
- **Data Breach Intelligence**: Correlates user identifiers with known global and local data breach datasets.
- **Privacy Compliance Advisor**: Automatically maps detected risks to specific clauses of the SL PDPA 2022 and provides mitigation steps.

## 🛠️ Technology Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS 4.0
- **Routing**: React Router 7
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

4. Build for production:
   ```bash
   npm run build
   ```

## 📂 Project Structure

- `src/components/`: Reusable UI components (Navbar, Footer, SectionHeaders, etc.)
- `src/pages/`: Main page views (Home, Scope, Milestones, Downloads, About, Contact)
- `src/data/content.ts`: **Centralized file for updating website text, links, and documents.**
- `src/index.css`: Global styles and Tailwind configuration.

## 📄 License

This is an academic research project conducted at the **Sri Lanka Institute of Information Technology (SLIIT)**. All rights reserved.

---
© 2026 FootprintLK Research Team
