export default function Header() {
  return (
    <section
      id="header"
      className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm border-b border-slate-200"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-16">
        <a
          href="#top"
          className="text-2xl font-semibold tracking-tight"
          style={{ fontFamily: "Georgia, serif", color: "#1a1a1a" }}
        >
          Area
        </a>

        <ul className="hidden md:flex items-center gap-10 text-sm font-medium text-gray-600">
          {[
            { label: 'Benefits', href: '#benefits' },
            { label: 'Specifications', href: '#specifications' },
            { label: 'How-to', href: '#how-to' },
            { label: 'Contact Us', href: '#contact' }
          ].map((item) => (
            <li key={item.label}>
              <a href={item.href} className="hover:text-gray-900 transition-colors duration-200">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="flex items-center gap-1 text-sm font-semibold text-white px-5 py-2.5 rounded-full transition-opacity duration-200 hover:opacity-90"
          style={{ backgroundColor: "#4a5e2a" }}
        >
          Learn More
          <span className="text-base leading-none">↗</span>
        </a>
      </div>
    </section>
  );
}
