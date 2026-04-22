interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
}

export default function SectionHeader({
  tag,
  title,
  subtitle,
  align = "left",
  as: Tag = "h2",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center items-center" : "items-start";

  return (
    <div className={`section-header flex flex-col ${alignClass}`}>
      {tag && <span className="section-tag">{tag}</span>}
      <Tag
        className={`text-slate-900 font-bold leading-tight ${
          Tag === "h1"
            ? "text-3xl sm:text-4xl lg:text-5xl"
            : "text-2xl sm:text-3xl"
        }`}
      >
        {title}
      </Tag>
      {subtitle && (
        <p
          className={`mt-3 text-slate-500 text-base sm:text-lg leading-relaxed max-w-2xl ${
            align === "center" ? "text-center" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
