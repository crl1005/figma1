export default function Header() {
  return (
    <section
      id="header"
      className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/85 backdrop-blur-xl shadow-sm"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-16">
        <div>
          <a
            href="#top"
            className="text-2xl font-semibold tracking-tight text-slate-900"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Area
          </a>
          <p className="text-xs text-slate-500 mt-1">Regional clarity for every team</p>
        </div>

        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-600">
          {[
            { label: 'Benefits', href: '#benefits' },
            { label: 'Specifications', href: '#specifications' },
            { label: 'How-to', href: '#how-to' },
            { label: 'Contact', href: '#contact' }
          ].map((item) => (
            <li key={item.label}>
              <a href={item.href} className="hover:text-slate-900 transition-colors duration-200">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-200 hover:bg-emerald-800"
        >
          Learn More
          <span className="text-base leading-none">↗</span>
        </a>
      </div>
    </section>
  );
}
