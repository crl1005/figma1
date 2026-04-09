export default function Section4() {
  const highlights = [
    { num: '01', title: 'Spot Trends in Seconds:', body: 'No more digging through numbers.' },
    { num: '02', title: 'Get Everyone on the Same Page:', body: 'Share easy-to-understand reports with your team.' },
    { num: '03', title: 'Make Presentations Pop:', body: 'Interactive maps and dashboards keep your audience engaged.' },
    { num: '04', title: 'Your Global Snapshot:', body: 'Get a quick, clear overview of your entire operation.' },
  ];

  return (
    <section className="bg-white px-16 pb-24">
      <div className="rounded-2xl overflow-hidden mb-16 w-full h-60 md:h-72">
        <img
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&q=80"
          alt="Colorful mountain landscape"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="border border-dashed border-blue-300 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-10 flex flex-col justify-between">
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                See the Big Picture
              </h2>
              <p className="text-sm text-gray-400 mb-10 leading-relaxed">
                Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.
              </p>
              <div className="flex flex-col divide-y divide-gray-100">
                {highlights.map((item) => (
                  <div key={item.num} className="flex gap-6 py-4">
                    <span className="text-xs text-gray-300 w-6 shrink-0 pt-0.5 font-mono">{item.num}</span>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      <span className="font-semibold text-gray-800">{item.title}</span> {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10">
              <a
                href="#specifications"
                className="inline-block text-sm font-medium px-5 py-2.5 rounded-full transition-opacity hover:opacity-80"
                style={{ backgroundColor: "#d6e4b8", color: "#3a4e1a" }}
              >
                Discover More
              </a>
            </div>
          </div>

          <div
            className="flex items-end justify-center overflow-hidden rounded-r-2xl"
            style={{ backgroundColor: "#e8dfc8", minHeight: "420px" }}
          >
            <img
              src="https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&q=80"
              alt="Abstract product display"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
