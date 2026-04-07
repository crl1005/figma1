export default function Section2() {
  return (
    <section className="bg-white px-16 pt-16 pb-8">
      <p className="text-sm text-gray-400 mb-8">Trusted by:</p>
      <div className="flex flex-wrap items-center justify-between gap-8">
        <div className="flex items-center gap-2 text-gray-300">
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
            <path d="M0 16 L16 0 L24 8 L16 16 L24 24 L40 8 L40 24 L24 32 L16 24 Z" fill="#c8c8c8"/>
          </svg>
        </div>
        <div className="flex items-center gap-2 text-gray-300">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="2" y="2" width="7" height="7" rx="1" fill="#c8c8c8"/>
            <rect x="11" y="2" width="7" height="7" rx="1" fill="#c8c8c8"/>
            <rect x="2" y="11" width="7" height="7" rx="1" fill="#c8c8c8"/>
            <rect x="11" y="11" width="7" height="7" rx="1" fill="#c8c8c8"/>
          </svg>
          <span className="text-base font-semibold text-gray-300">Logoipsum</span>
        </div>
        <div className="text-gray-300">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="12" cy="12" r="8" fill="#c8c8c8"/>
            <circle cx="24" cy="12" r="8" fill="#c8c8c8"/>
            <circle cx="12" cy="24" r="8" fill="#c8c8c8"/>
            <circle cx="24" cy="24" r="8" fill="#c8c8c8"/>
          </svg>
        </div>
        <span className="text-xl font-light tracking-widest text-gray-300">Logoipsum</span>
        <span className="text-lg font-bold tracking-widest text-gray-300" style={{ letterSpacing: "0.15em" }}>
          LOGO<span className="font-light">IPSUM</span>™
        </span>
        <span className="border border-gray-300 text-gray-300 text-sm px-4 py-1.5 rounded-full">logoipsum</span>
      </div>
    </section>
  );
}
