export default function MainSection() {
  return (
    <section id="top" className="relative min-h-screen bg-white overflow-hidden font-sans pt-20">
      {/* Background decorative blobs */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/4 w-44 h-80 rounded-3xl"
        style={{ backgroundColor: "#6b7c45" }}
      />
      <div
        className="absolute right-0 top-1/2 translate-y-8 w-44 h-80 rounded-3xl"
        style={{ backgroundColor: "#8a9e5b" }}
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-16 pb-0">
        <h1
          className="text-8xl md:text-9xl font-bold leading-none tracking-tight text-gray-900 mb-16"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Browse everything.
        </h1>

        {/* Device Mockup */}
        <div className="relative w-full max-w-3xl mx-auto">
          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl border-4"
            style={{ borderColor: "#2a2a3a", backgroundColor: "#1a1a2e" }}
          >
            <div
              className="relative overflow-hidden"
              style={{
                background: "linear-gradient(160deg, #6b8f5e 0%, #4a6e3e 40%, #2d5a2d 100%)",
                minHeight: "340px",
              }}
            >
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex items-center gap-2 text-white/70 text-xs">
                  <span>Reports</span><span>›</span>
                  <span className="text-white font-medium">Overview</span>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-baseline gap-3">
                    <span className="text-white font-bold" style={{ fontSize: "2.5rem", lineHeight: 1 }}>
                      78%
                    </span>
                    <span className="text-white/80 text-sm font-medium">Efficiency Improvements</span>
                  </div>
                  <div className="bg-white/20 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
                    All Regions (33) ▾
                  </div>
                </div>
                <div className="flex justify-between text-white/50 text-xs mt-4 px-1">
                  {['2021', '2022', '2023', '2024'].map((y) => <span key={y}>{y}</span>)}
                </div>
                <div className="flex items-end justify-around gap-1 mt-2 h-28 px-2">
                  {[30,50,25,65,40,80,55,90,45,70,35,85,60,95,50,75].map((h, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div className="w-1.5 rounded-full bg-white/80" style={{ height: `${h}%` }} />
                      <div className="w-2 h-2 rounded-sm bg-white/90" />
                    </div>
                  ))}
                </div>
                <svg className="absolute bottom-10 left-0 w-full" height="60" viewBox="0 0 600 60" preserveAspectRatio="none">
                  <polyline points="0,45 80,38 160,42 240,30 320,35 400,20 480,25 600,10" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeDasharray="4 3"/>
                </svg>
              </div>
            </div>
          </div>
          <div className="h-4 rounded-b-3xl mx-4" style={{ backgroundColor: "#2a2a3a" }} />
        </div>
      </div>
                  

    </section>
  );
}
