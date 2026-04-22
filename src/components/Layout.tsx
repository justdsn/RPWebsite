import { useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Per-route meta configuration
const routeMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "FootprintLK - Privacy-First Digital Footprint Intelligence",
    description:
      "FootprintLK is a Sri Lanka-focused privacy and OSINT research project helping citizens understand their digital footprint, detect exposure, and take action.",
  },
  "/scope": {
    title: "Research Scope - FootprintLK",
    description:
      "Domain, methodology, research gap, objectives, and technologies for the FootprintLK OSINT privacy research project.",
  },
  "/milestones": {
    title: "Project Milestones - FootprintLK",
    description:
      "Assessment timeline, deliverables, and milestone details for the FootprintLK research project.",
  },
  "/downloads": {
    title: "Downloads - FootprintLK",
    description:
      "Download project documents and presentation slides from the FootprintLK research project.",
  },
  "/about": {
    title: "About Us - FootprintLK",
    description:
      "Meet the research team and supervisors behind the FootprintLK privacy and OSINT research project.",
  },
  "/contact": {
    title: "Contact Us - FootprintLK",
    description:
      "Get in touch with the FootprintLK research team for enquiries, academic collaboration, or general questions.",
  },
};

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = routeMeta[pathname] || routeMeta["/"];

    // Update title
    document.title = meta.title;

    // Update description
    let descEl = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (descEl) {
      descEl.setAttribute("content", meta.description);
    }

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Skip to main content for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-blue-700 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar />

      {/* Main content padded below sticky navbar */}
      <div className="flex-1 flex flex-col pt-16">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
