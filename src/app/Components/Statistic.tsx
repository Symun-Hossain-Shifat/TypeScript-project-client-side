import React from "react";

interface StatItem {
  value: string;
  title: string;
  description: string;
  icon: string;
}

const statItems: StatItem[] = [
  {
    icon: "👥",
    value: "150K+",
    title: "Active Users",
    description: "Shoppers trust us monthly for their lifestyle and daily tech needs.",
  },
  {
    icon: "📦",
    value: "500K+",
    title: "Orders Delivered",
    description: "Successfully shipped across all 64 districts of Bangladesh.",
  },
  {
    icon: "🏪",
    value: "1,200+",
    title: "Local Merchants",
    description: "Empowering local businesses and entrepreneurs nationwide.",
  },
  {
    icon: "⭐",
    value: "4.9/5",
    title: "Customer Rating",
    description: "Based on thousands of certified reviews on Play Store & Facebook.",
  },
];

export default function StatisticsSection(): React.JSX.Element {
  return (
    <section className="relative my-20 py-16 overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 bg-slate-50/70 -z-10" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-teal-50/50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-1 text-left">
            <span className="text-xs font-semibold tracking-wider text-teal-600 uppercase bg-teal-50 px-3 py-1 rounded-full">
              Our Milestones
            </span>
            <h2 className="text-[#0B2545] font-black text-3xl sm:text-4xl tracking-tight mt-3 mb-4 leading-tight">
              Numbers That Speak For Our Trust
            </h2>
            <p className="text-[#4A6080] text-sm sm:text-base leading-relaxed">
              In a very short time, Trendy Haat has become one of Bangladesh&apos;s fastest-growing digital marketplaces. We connect reliable local sellers with smart shoppers.
            </p>
          </div>

          {/* Right Column: Stats Grid (2x2 Layout) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {statItems.map((item) => (
              <div 
                key={item.title} 
                className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex items-start gap-4"
              >
                {/* Minimal Icon Indicator */}
                <div className="text-2xl p-3 bg-slate-50 rounded-xl text-teal-600">
                  {item.icon}
                </div>

                {/* Stat Content */}
                <div>
                  <h3 className="text-[#0B2545] font-black text-3xl tracking-tight mb-1">
                    {item.value}
                  </h3>
                  <h4 className="text-teal-600 font-bold text-sm mb-2">
                    {item.title}
                  </h4>
                  <p className="text-[#7A94B0] text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}