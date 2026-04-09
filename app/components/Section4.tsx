export default function Section4() {
  const highlights = [
    { num: '01', title: 'Spot trends in seconds', body: 'See the key metrics that matter most without sifting through endless tables.' },
    { num: '02', title: 'Keep teams aligned', body: 'Share a single source of truth for every region and every meeting.' },
    { num: '03', title: 'Engage with visuals', body: 'Interactive dashboards make every presentation easier to follow.' },
    { num: '04', title: 'Track your global snapshot', body: 'Keep an eye on the entire operation from one elegant control room.' },
  ];

  return (
    <section className="bg-white px-6 py-20 md:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl overflow-hidden mb-16 shadow-sm border border-slate-200">
          <img
            src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80"
            alt="Colorful mountain landscape"
            className="w-full h-72 object-cover md:h-96"
          />
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-10 flex flex-col justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-emerald-600 mb-4">Visual clarity</p>
                <h2
                  className="text-4xl md:text-5xl font-bold text-slate-900 mb-5 leading-tight"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  See the big picture, then act with precision.
                </h2>
                <p className="text-sm text-slate-500 mb-10 leading-relaxed">
                  Area turns your data into clear, elegant visuals so your team can make confident decisions fast.
                </p>
                <div className="space-y-4">
                  {highlights.map((item) => (
                    <div key={item.num} className="flex gap-5">
                      <span className="text-sm font-mono text-emerald-700">{item.num}</span>
                      <div>
                        <p className="text-base font-semibold text-slate-900 mb-1">{item.title}</p>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10">
                <a
                  href="#specifications"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-700/20 transition hover:bg-emerald-800"
                >
                  Discover More
                </a>
              </div>
            </div>

            <div className="relative overflow-hidden bg-gradient-to-br from-emerald-100 to-slate-100">
              <img
                src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=80"
                alt="Abstract product display"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
