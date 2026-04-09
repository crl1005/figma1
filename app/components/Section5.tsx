const features = [
  {
    area: "Real-time regional dashboards",
    webSurge: { text: "Delayed updates", check: true },
    hyperView: { text: "No live insights", check: false },
  },
  {
    area: "Adaptive language support",
    webSurge: { text: "Basic translation", check: true },
    hyperView: { text: "Limited localization", check: false },
  },
  {
    area: "Scalable API-first architecture",
    webSurge: { text: "Legacy integrations", check: true },
    hyperView: { text: "Rigid workflows", check: false },
  },
  {
    area: "Automated alerts and workflows",
    webSurge: { text: "Manual review", check: false },
    hyperView: { text: "No automation", check: false },
  },
  {
    area: "Clear cost forecasting",
    webSurge: { text: "Hidden fees", check: false },
    hyperView: { text: "Unclear billing", check: false },
  },
  {
    area: "24/7 support coverage",
    webSurge: { text: "Limited service hours", check: false },
    hyperView: { text: "Email-only help", check: false },
  },
];

export default function Section5() {
  return (
    <section id="specifications" className="bg-slate-50 py-24 px-6 md:px-16">
      <div className="mx-auto max-w-6xl text-center mb-14">
        <p className="text-sm uppercase tracking-[0.32em] text-emerald-600 mb-4">Specifications</p>
        <h2 className="text-5xl font-serif text-slate-900 mb-5">Why teams choose Area.</h2>
        <p className="mx-auto max-w-2xl text-sm text-slate-500 leading-relaxed">
          Compare the experience that Area delivers versus legacy tools designed for old workflows.
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="grid grid-cols-3 gap-px bg-slate-200 text-center py-6 px-2">
          <div className="bg-white py-6 px-8 font-semibold text-slate-900">Area</div>
          <div className="bg-slate-50 py-6 px-8 text-slate-500">WebSurge</div>
          <div className="bg-slate-50 py-6 px-8 text-slate-500">HyperView</div>
        </div>

        {features.map((row, i) => (
          <div
            key={i}
            className={`grid grid-cols-3 gap-px ${i % 2 === 0 ? 'bg-slate-100' : 'bg-white'}`}
          >
            <div className="bg-white px-8 py-5 flex items-center gap-3 text-sm text-slate-700">
              <span className="text-emerald-600 font-bold">✓</span>
              {row.area}
            </div>
            <div className="bg-slate-50 px-8 py-5 flex items-center gap-3 text-sm text-slate-500">
              {row.webSurge.check ? (
                <span className="text-emerald-500 font-bold">✓</span>
              ) : (
                <span className="text-red-400 font-bold">✕</span>
              )}
              {row.webSurge.text}
            </div>
            <div className="bg-slate-50 px-8 py-5 flex items-center gap-3 text-sm text-slate-500">
              {row.hyperView.check ? (
                <span className="text-emerald-500 font-bold">✓</span>
              ) : (
                <span className="text-red-400 font-bold">✕</span>
              )}
              {row.hyperView.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
