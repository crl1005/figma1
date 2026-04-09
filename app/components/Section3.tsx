export default function Section3() {
  const benefits = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 3H6a3 3 0 00-3 3v12a3 3 0 003 3h12a3 3 0 003-3V6a3 3 0 00-3-3z"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
      ),
      title: 'Amplify Insights',
      body: 'Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/>
        </svg>
      ),
      title: 'Control Your Global Presence',
      body: 'Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
        </svg>
      ),
      title: 'Remove Language Barriers',
      body: 'Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.',
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
          <polyline points="16 7 22 7 22 13"/>
        </svg>
      ),
      title: 'Visualize Growth',
      body: 'Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.',
    },
  ];

  return (
    <section id="benefits" className="bg-white px-16 pt-16 pb-20">
      <p className="text-xs font-mono mb-6" style={{ color: "#6b7c45" }}>Benefits</p>
      <h2
        className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 leading-tight"
        style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
      >
        We've cracked the code.
      </h2>
      <p className="text-sm text-gray-400 mb-12">Area provides real insights, without the data overload.</p>
      <div className="border-t border-gray-200 mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {benefits.map((feature, i) => (
          <div key={i} className="flex flex-col gap-3">
            <div className="text-gray-800">{feature.icon}</div>
            <h3 className="text-sm font-semibold text-gray-900">{feature.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{feature.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
