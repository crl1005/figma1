import Image from "next/image";

export default function Section6() {
  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-0 items-center border-t border-gray-200 pt-8">
        
        {/* Left — Image */}
        <div className="rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1578898886225-c7c894047899?w=600&q=80"
            alt="Stacked stones"
            className="w-full h-[460px] object-cover rounded-2xl"
          />
        </div>

        {/* Right — Quote */}
        <div className="pl-16 flex flex-col justify-center h-full">
          <blockquote className="text-3xl font-serif text-black leading-snug mb-10">
            "I was skeptical, but Area has completely transformed the way I
            manage my business. The data visualizations are so clear and
            intuitive, and the platform is so easy to use. I can't imagine
            running my company without it."
          </blockquote>
          <div>
            <p className="text-sm font-semibold text-black mb-1">John Smith</p>
            <p className="text-sm text-green-600 font-mono">Head of Data</p>
          </div>
        </div>

      </div>
    </section>
  );
}