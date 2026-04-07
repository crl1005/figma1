export default function Section4() {
  const rows = [
    ['Ultra-fast browsing', 'Fast browsing', 'Moderate speeds'],
    ['Advanced AI insights', 'Basic AI recommendations', 'No AI assistance'],
    ['Seamless integration', 'Restricts customization', 'Steep learning curve'],
    ['Advanced AI insights', 'Basic AI insights', 'No AI assistance'],
    ['Ultra-fast browsing', 'Fast browsing', 'Moderate speeds'],
    ['Full UTF-8 support', 'Potential display errors', 'Partial UTF-8 support'],
  ];

  return (
    <section className="bg-white px-16 pb-24">
      <div className="border border-dashed border-blue-300 rounded-2xl overflow-hidden p-12">
        <p className="text-xs font-mono text-center mb-4" style={{ color: "#6b7c45" }}>Specs</p>
        <h2
          className="text-5xl md:text-6xl font-bold text-gray-900 text-center mb-4 leading-tight"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Why Choose Area?
        </h2>
        <p className="text-sm text-gray-400 text-center mb-4">
          You need a solution that keeps up. That's why we developed Area. A developer-friendly approach to streamline your business.
        </p>

        <div className="flex justify-center mb-12">
          <a
            href="#"
            className="inline-block text-sm font-medium px-5 py-2.5 rounded-full transition-opacity hover:opacity-80"
            style={{ backgroundColor: "#d6e4b8", color: "#3a4e1a" }}
          >
            Discover More
          </a>
        </div>

        <div className="border border-gray-200 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 border-b border-gray-200">
            <div className="px-8 py-5 border-r border-gray-200">
              <span className="text-base font-semibold text-gray-900">Area</span>
            </div>
            <div className="px-8 py-5 border-r border-gray-200">
              <span className="text-base font-medium text-gray-400">WebSurge</span>
            </div>
            <div className="px-8 py-5">
              <span className="text-base font-medium text-gray-400">HyperView</span>
            </div>
          </div>

          {rows.map((row, i) => (
            <div key={i} className={`grid grid-cols-3 ${i < rows.length - 1 ? 'border-b border-gray-100' : ''}`}>
              {row.map((cell, j) => (
                <div key={j} className={`px-8 py-5 flex items-center gap-2 text-sm ${j < 2 ? 'border-r border-gray-100' : ''}`}>
                  {j === 0 ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7l3.5 3.5L12 3" stroke="#6b7c45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-gray-700">{cell}</span>
                    </>
                  ) : j === 1 ? (
                    <>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7l3.5 3.5L12 3" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-gray-400">{cell}</span>
                    </>
                  ) : (
                    <>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 2l10 10M12 2L2 12" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <span className="text-gray-400">{cell}</span>
                    </>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
