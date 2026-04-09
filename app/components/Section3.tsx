export default function Section3() {
  const benefits = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18" />
          <path d="M4.5 6h15" />
          <path d="M4.5 18h15" />
        </svg>
      ),
      title: 'Amplify insights',
      body: 'Unlock data-driven decisions with clear analytics and strategic regional visibility.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
          <path d="M2 12h20" />
          <path d="M12 2v20" />
        </svg>
      ),
      title: 'Control your global presence',
      body: 'Operate with confidence across markets using one central platform for every location.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 19l6-6 6 6" />
          <path d="M6 12l6-6 6 6" />
        </svg>
      ),
      title: 'Remove language barriers',
      body: 'Localize content, insights, and workflows so every regional team can move faster.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 17l6-6 4 4 6-6" />
        </svg>
      ),
      title: 'Visualize growth',
      body: 'Show stakeholders what matters with crisp reports and compelling dashboards.',
    },
  ];

  return (
    <section id="benefits" className="bg-white px-6 py-20 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.32em] font-mono text-emerald-600 mb-4">Benefits</p>
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 leading-tight" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
            Tools built for fast, confident regional decisions.
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-500">
            Area gives you powerful reporting, localized insights, and an intuitive dashboard for every team.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((feature, i) => (
            <div key={i} className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{feature.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-700/20 transition hover:bg-emerald-800"
          >
            Start your free tour
          </a>
        </div>
      </div>
    </section>
  );
}
