export default function Section2() {
  return (
    <section className="bg-slate-50 px-6 py-16 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-emerald-600 mb-3">Trusted by</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 max-w-2xl">
              Teams across industries rely on Area for smarter regional decisions.
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md">
            From logistics to marketing, our platform gives leaders the clarity they need to act quickly.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200 flex items-center justify-center">
            <svg width="40" height="32" viewBox="0 0 40 32" fill="none">
              <path d="M0 16 L16 0 L24 8 L16 16 L24 24 L40 8 L40 24 L24 32 L16 24 Z" fill="#6b7280"/>
            </svg>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200 flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="3" y="3" width="12" height="12" rx="3" fill="#6b7280"/>
              <rect x="17" y="3" width="12" height="12" rx="3" fill="#6b7280"/>
              <rect x="3" y="17" width="12" height="12" rx="3" fill="#6b7280"/>
              <rect x="17" y="17" width="12" height="12" rx="3" fill="#6b7280"/>
            </svg>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200 flex items-center justify-center">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="12" cy="12" r="8" fill="#6b7280"/>
              <circle cx="24" cy="12" r="8" fill="#6b7280"/>
              <circle cx="12" cy="24" r="8" fill="#6b7280"/>
              <circle cx="24" cy="24" r="8" fill="#6b7280"/>
            </svg>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200 flex items-center justify-center">
            <span className="text-base font-semibold text-slate-700 tracking-[0.24em]">BRANDCO</span>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-sm border border-slate-200 flex items-center justify-center">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-700">Global Labs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
