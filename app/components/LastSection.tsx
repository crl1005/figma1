export default function Footer() {
  return (
    <>
      {/* Connect With Us Section */}
      <section id="contact" className="w-full bg-white py-24 px-8 flex flex-col items-center text-center">
        <h2 className="text-6xl font-serif text-black mb-6">Connect with us</h2>
        <p className="text-gray-400 max-w-md mb-10 text-sm leading-relaxed">
          Schedule a quick call to learn how Area can turn your regional data
          into a powerful advantage.
        </p>
        <button className="w-full max-w-xl py-4 rounded-full bg-[#3b4a2a] text-white text-sm font-medium hover:bg-[#2e3a20] transition-colors flex items-center justify-center gap-2">
          Learn More <span>↗</span>
        </button>
      </section>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-gray-200">
        {/* Nav Links */}
        <div className="px-8 py-6 flex gap-8">
          <a href="#benefits" className="text-sm text-black font-medium hover:text-gray-500 transition-colors">Benefits</a>
          <a href="#specifications" className="text-sm text-black font-medium hover:text-gray-500 transition-colors">Specifications</a>
          <a href="#how-to" className="text-sm text-black font-medium hover:text-gray-500 transition-colors">How-to</a>
        </div>

        {/* Bottom Row */}
        <div className="px-8 py-6 flex items-end justify-between border-t border-gray-100">
          {/* Logo + Copyright */}
          <div className="flex items-end gap-4">
            {/* Walking figure icon */}
            <svg width="24" height="48" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="6" r="3" stroke="black" strokeWidth="1.5"/>
              <line x1="12" y1="9" x2="12" y2="24" stroke="black" strokeWidth="1.5"/>
              <line x1="12" y1="16" x2="6" y2="22" stroke="black" strokeWidth="1.5"/>
              <line x1="12" y1="16" x2="18" y2="22" stroke="black" strokeWidth="1.5"/>
              <line x1="12" y1="24" x2="7" y2="36" stroke="black" strokeWidth="1.5"/>
              <line x1="12" y1="24" x2="17" y2="36" stroke="black" strokeWidth="1.5"/>
            </svg>
            <p className="text-xs text-gray-400 font-mono mb-1">© Area. 2025</p>
          </div>
          <p className="text-xs text-gray-400 font-mono">All Rights Reserved</p>
        </div>
      </footer>

      {/* Dark green bottom bar */}
      <div className="w-full h-4 bg-[#3b4a2a]" />
    </>
  );
}