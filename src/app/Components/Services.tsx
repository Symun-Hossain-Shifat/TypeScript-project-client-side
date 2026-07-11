import React from "react";

interface Service {
  icon: string;
  title: string;
  description: string;
  badge?: string;
}

const services: Service[] = [
  {
    icon: "⚡",
    title: "Fastest Delivery",
    description: "Get your products delivered straight to your doorstep across Bangladesh in record time.",
    badge: "Reliable"
  },
  {
    icon: "💵",
    title: "Cash on Delivery",
    description: "No credit card? No problem. Pay securely with cash only when you receive your package safely.",
  },
  {
    icon: "🔄",
    title: "7-Day Easy Return",
    description: "Not satisfied with your purchase? Return it within 7 days for a hassle-free refund or exchange.",
    badge: "Peace of Mind"
  },
  {
    icon: "🛡️",
    title: "100% Authentic Products",
    description: "We source our products directly from top brands and trusted suppliers to guarantee quality.",
  }
];

export default function ServicesSection(): React.JSX.Element {
  return (
    <section className="my-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block text-xs font-semibold tracking-wider text-teal-600 uppercase bg-teal-50 px-3 py-1 rounded-full mb-3">
          Why Shop With Us
        </span>
        <h2 className="text-[#0B2545] font-black text-3xl sm:text-4xl tracking-tight mb-4">
          Services That Make Your Shopping Seamless
        </h2>
        <p className="text-[#4A6080] text-base sm:text-lg leading-relaxed">
          At Trendy Haat, we prioritize your convenience and security. Enjoy top-notch services designed to give you the ultimate shopping experience.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="group relative bg-white border border-slate-100 hover:border-teal-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-start"
          >
            {/* Optional Badge */}
            {service.badge && (
              <span className="absolute top-4 right-4 bg-amber-50 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-100">
                {service.badge}
              </span>
            )}

            {/* Icon Container */}
            <div className="w-12 h-12 rounded-xl bg-teal-50 group-hover:bg-teal-600 flex items-center justify-center text-2xl transition-colors duration-300 mb-5">
              <span className="group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </span>
            </div>

            {/* Content */}
            <h3 className="text-[#0B2545] font-bold text-lg mb-2 group-hover:text-teal-600 transition-colors duration-300">
              {service.title}
            </h3>
            
            <p className="text-[#7A94B0] text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}