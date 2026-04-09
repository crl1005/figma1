const features = [
  {
    area: "Ultra-fast browsing",
    webSurge: { text: "Fast browsing", check: true },
    hyperView: { text: "Moderate speeds", check: false },
  },
  {
    area: "Advanced AI insights",
    webSurge: { text: "Basic AI recommendations", check: true },
    hyperView: { text: "No AI assistance", check: false },
  },
  {
    area: "Seamless integration",
    webSurge: { text: "Restricts customization", check: true },
    hyperView: { text: "Steep learning curve", check: false },
  },
  {
    area: "Advanced AI insights",
    webSurge: { text: "Basic AI insights", check: false },
    hyperView: { text: "No AI assistance", check: false },
  },
  {
    area: "Ultra-fast browsing",
    webSurge: { text: "Fast browsing", check: true },
    hyperView: { text: "Moderate speeds", check: false },
  },
  {
    area: "Full UTF-8 support",
    webSurge: { text: "Potential display errors", check: false },
    hyperView: { text: "Partial UTF-8 support", check: false },
  },
];

export default function Section4() {
  return (
    <section id="specifications" className="w-full bg-white py-24 px-4 flex flex-col items-center">
      {/* Header */}
      <p className="text-sm text-green-600 font-medium mb-4 tracking-wide">
        Specs
      </p>
      <h2 className="text-5xl font-serif text-center text-black mb-5">
        Why Choose Area?
      </h2>
      <p className="text-center text-gray-500 max-w-lg mb-10 text-sm leading-relaxed">
        You need a solution that keeps up. That's why we developed Area. A
        developer-friendly approach to streamline your business.
      </p>
      <button className="mb-20 px-7 py-3 rounded-full bg-green-100 text-green-800 text-sm font-medium hover:bg-green-200 transition-colors">
        Discover More
      </button>

      {/* Table */}
      <div className="w-full max-w-4xl">
        {/* Column Headers */}
        <div className="grid grid-cols-3 mb-0">
          {/* Area header — white card */}
          <div className="bg-white border border-gray-200 rounded-t-2xl py-6 px-8 flex items-center justify-center">
            <span className="text-xl font-bold text-black">Area</span>
          </div>
          <div className="py-6 px-8 flex items-center justify-center border-b border-gray-200">
            <span className="text-xl text-gray-400">WebSurge</span>
          </div>
          <div className="py-6 px-8 flex items-center justify-center border-b border-gray-200">
            <span className="text-xl text-gray-400">HyperView</span>
          </div>
        </div>

        {/* Rows */}
        {features.map((row, i) => (
          <div key={i} className="grid grid-cols-3">
            {/* Area column */}
            <div
              className={`bg-white border-l border-r border-gray-200 px-8 py-5 flex items-center gap-2 text-sm text-gray-700 ${
                i === features.length - 1 ? "border-b rounded-b-2xl" : ""
              }`}
            >
              <span className="text-green-600 font-bold">✓</span>
              {row.area}
            </div>

            {/* WebSurge column */}
            <div className="px-8 py-5 flex items-center gap-2 text-sm text-gray-500 border-b border-gray-100">
              {row.webSurge.check ? (
                <span className="text-green-500 font-bold">✓</span>
              ) : (
                <span className="text-red-400 font-bold">✕</span>
              )}
              <span className="font-mono">{row.webSurge.text}</span>
            </div>

            {/* HyperView column */}
            <div className="px-8 py-5 flex items-center gap-2 text-sm text-gray-500 border-b border-gray-100">
              <span className="text-red-400 font-bold">✕</span>
              <span className="font-mono">{row.hyperView.text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
