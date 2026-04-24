export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 420 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Illustration of digital privacy and data protection concepts"
      role="img"
      className="w-full max-w-md mx-auto"
    >
      {/* Background grid */}
      <defs>
        <pattern id="grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
          <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#dbeafe" strokeWidth="0.8" />
        </pattern>
        <linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#eff6ff" />
          <stop offset="100%" stopColor="#dbeafe" />
        </linearGradient>
        <linearGradient id="blueGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="shieldGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
      </defs>

      {/* Grid bg */}
      <rect width="420" height="340" fill="url(#grid)" opacity="0.6" />

      {/* Central shield */}
      <g transform="translate(175, 60)">
        <path
          d="M35 0 L70 14 L70 42 C70 62 52 76 35 82 C18 76 0 62 0 42 L0 14 Z"
          fill="url(#shieldGrad)"
          opacity="0.95"
        />
        <path
          d="M35 0 L70 14 L70 42 C70 62 52 76 35 82 C18 76 0 62 0 42 L0 14 Z"
          fill="none"
          stroke="#93c5fd"
          strokeWidth="1.5"
          opacity="0.5"
        />
        {/* Lock icon */}
        <rect x="22" y="38" width="26" height="20" rx="3" fill="white" opacity="0.95" />
        <path
          d="M27 38 L27 32 C27 26.5 43 26.5 43 32 L43 38"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="35" cy="47" r="3" fill="#1d4ed8" />
        <rect x="34" y="47" width="2" height="5" rx="1" fill="#1d4ed8" />
      </g>

      {/* Left card — Face detection */}
      <g transform="translate(20, 100)">
        <rect width="120" height="90" rx="10" fill="white" stroke="#dbeafe" strokeWidth="1.5" />
        <rect width="120" height="26" rx="10" fill="#eff6ff" />
        <rect y="16" width="120" height="10" fill="#eff6ff" />
        <text x="10" y="18" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#1d4ed8">Face Detection</text>
        {/* Face silhouette */}
        <circle cx="35" cy="62" r="14" fill="#dbeafe" />
        <circle cx="35" cy="56" r="7" fill="#bfdbfe" />
        <ellipse cx="35" cy="74" rx="10" ry="5" fill="#bfdbfe" />
        {/* Scan lines */}
        <line x1="55" y1="48" x2="110" y2="48" stroke="#e0f2fe" strokeWidth="1.5" />
        <line x1="55" y1="56" x2="100" y2="56" stroke="#bfdbfe" strokeWidth="1.5" />
        <line x1="55" y1="64" x2="95" y2="64" stroke="#e0f2fe" strokeWidth="1.5" />
        <line x1="55" y1="72" x2="105" y2="72" stroke="#bfdbfe" strokeWidth="1.5" />
        {/* Corner brackets */}
        <path d="M22 44 L22 40 L26 40" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M48 44 L48 40 L44 40" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M22 80 L22 84 L26 84" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" fill="none" />
        <path d="M48 80 L48 84 L44 84" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      </g>

      {/* Right card — Data nodes */}
      <g transform="translate(280, 100)">
        <rect width="120" height="90" rx="10" fill="white" stroke="#dbeafe" strokeWidth="1.5" />
        <rect width="120" height="26" rx="10" fill="#eff6ff" />
        <rect y="16" width="120" height="10" fill="#eff6ff" />
        <text x="10" y="18" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#1d4ed8">Data Analysis</text>
        {/* Network dots */}
        <circle cx="25" cy="60" r="6" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1" />
        <circle cx="60" cy="45" r="8" fill="#bfdbfe" stroke="#60a5fa" strokeWidth="1.5" />
        <circle cx="95" cy="60" r="6" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1" />
        <circle cx="45" cy="76" r="5" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
        <circle cx="78" cy="76" r="5" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
        {/* Lines between nodes */}
        <line x1="25" y1="60" x2="60" y2="45" stroke="#bfdbfe" strokeWidth="1" />
        <line x1="60" y1="45" x2="95" y2="60" stroke="#bfdbfe" strokeWidth="1" />
        <line x1="25" y1="60" x2="45" y2="76" stroke="#dbeafe" strokeWidth="1" />
        <line x1="95" y1="60" x2="78" y2="76" stroke="#dbeafe" strokeWidth="1" />
        <line x1="45" y1="76" x2="78" y2="76" stroke="#dbeafe" strokeWidth="1" />
        <line x1="60" y1="45" x2="45" y2="76" stroke="#dbeafe" strokeWidth="1" />
      </g>

      {/* Bottom left card — Sri Lanka */}
      <g transform="translate(20, 220)">
        <rect width="120" height="80" rx="10" fill="white" stroke="#dbeafe" strokeWidth="1.5" />
        <rect width="120" height="26" rx="10" fill="#eff6ff" />
        <rect y="16" width="120" height="10" fill="#eff6ff" />
        <text x="10" y="18" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#1d4ed8">LK Context</text>
        <text x="10" y="46" fontFamily="Inter, sans-serif" fontSize="8" fill="#64748b">Sinhala / English</text>
        <text x="10" y="58" fontFamily="Inter, sans-serif" fontSize="8" fill="#94a3b8">Transliteration</text>
        <rect x="85" y="38" width="24" height="8" rx="4" fill="#dbeafe" />
        <rect x="85" y="50" width="18" height="8" rx="4" fill="#eff6ff" />
        <rect x="85" y="62" width="22" height="8" rx="4" fill="#dbeafe" />
      </g>

      {/* Bottom right card — compliance */}
      <g transform="translate(280, 220)">
        <rect width="120" height="80" rx="10" fill="white" stroke="#dbeafe" strokeWidth="1.5" />
        <rect width="120" height="26" rx="10" fill="#eff6ff" />
        <rect y="16" width="120" height="10" fill="#eff6ff" />
        <text x="10" y="18" fontFamily="Inter, sans-serif" fontSize="9" fontWeight="600" fill="#1d4ed8">Compliance</text>
        {/* bars */}
        <rect x="10" y="34" width="60" height="6" rx="3" fill="#bfdbfe" />
        <rect x="10" y="34" width="42" height="6" rx="3" fill="#2563eb" />
        <rect x="10" y="46" width="60" height="6" rx="3" fill="#bfdbfe" />
        <rect x="10" y="46" width="28" height="6" rx="3" fill="#3b82f6" />
        <rect x="10" y="58" width="60" height="6" rx="3" fill="#bfdbfe" />
        <rect x="10" y="58" width="50" height="6" rx="3" fill="#1d4ed8" />
        <text x="10" y="74" fontFamily="Inter, sans-serif" fontSize="7.5" fill="#94a3b8">Acts 1–6 Mapping</text>
      </g>

      {/* Connector lines from shield to cards */}
      <line x1="175" y1="130" x2="140" y2="145" stroke="#bfdbfe" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="245" y1="130" x2="280" y2="145" stroke="#bfdbfe" strokeWidth="1.5" strokeDasharray="4 3" />
      <line x1="210" y1="148" x2="80" y2="220" stroke="#dbeafe" strokeWidth="1" strokeDasharray="4 4" />
      <line x1="210" y1="148" x2="340" y2="220" stroke="#dbeafe" strokeWidth="1" strokeDasharray="4 4" />

      {/* Floating accent dots */}
      <circle cx="160" cy="280" r="4" fill="#bfdbfe" opacity="0.6" />
      <circle cx="260" cy="290" r="3" fill="#93c5fd" opacity="0.5" />
      <circle cx="210" cy="310" r="5" fill="#dbeafe" opacity="0.7" />
      <circle cx="140" cy="50" r="3" fill="#93c5fd" opacity="0.4" />
      <circle cx="280" cy="55" r="4" fill="#bfdbfe" opacity="0.4" />
    </svg>
  );
}
