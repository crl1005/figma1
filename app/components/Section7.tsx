const steps = [
  {
    number: "01",
    title: "Get Started",
    description: "With our intuitive setup, you're up and running in minutes.",
  },
  {
    number: "02",
    title: "Customize and Configure",
    description: "Adapt Area to your specific requirements and preferences.",
  },
  {
    number: "03",
    title: "Grow Your Business",
    description: "Make informed decisions to exceed your goals.",
  },
];

export default function Section7() {
  return (
    <section id="how-to" className="w-full bg-white py-16 px-8">
      <div className="max-w-4xl mx-auto">

        {/* Top Row — Title + Button */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-4xl font-serif text-black">Map Your Success</h2>
          <a href="#contact" className="px-6 py-2.5 rounded-full bg-green-100 text-green-800 text-sm font-medium hover:bg-green-200 transition-colors">
            Discover More
          </a>
        </div>

        {/* Divider */}
        <hr className="border-gray-200 mb-10" />

        {/* Steps */}
        <div className="grid grid-cols-3 gap-12 mb-16">
          {steps.map((step) => (
            <div key={step.number}>
              <p className="text-6xl font-light text-gray-300 mb-6">
                {step.number}
              </p>
              <hr className="border-gray-200 mb-4" />
              <p className="text-sm font-semibold text-black mb-2">
                {step.title}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Full-width Image */}
        <div className="rounded-2xl overflow-hidden w-full h-[420px]">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
            alt="Aerial view of green hills"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}