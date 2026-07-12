import React from "react";

export default function CTASection(): React.JSX.Element {
  return (
    <section className="my-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Container with Modern Asymmetric Layout and Dual Tone Background */}
      <div className="relative bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl overflow-hidden shadow-xl py-12 px-6 sm:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Decorative Graphic Background Shapes */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full translate-x-1/4 translate-y-1/4 pointer-events-none" />

        {/* Left/Top Content Column */}
        <div className="lg:col-span-7 text-left z-10">
          <span className="inline-block text-xs font-bold tracking-wider text-amber-300 uppercase bg-white/10 px-3 py-1 rounded-full mb-4 border border-white/10">
            🚀 Ready to Upgrade Your Shopping?
          </span>
          
          <h2 className="text-white font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4 leading-tight">
            Shop Smarter, Faster, and Cheaper with Trendy Haat
          </h2>
          
          <p className="text-teal-100 text-sm sm:text-base leading-relaxed max-w-xl mb-6">
            Join thousands of smart shoppers across Bangladesh. Download our official mobile app today to unlock exclusive first-order coupons, personalized daily flash deals, and live order tracking.
          </p>
        </div>

        {/* Right/Bottom Action Column */}
        <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 justify-center lg:justify-end z-10 w-full">
          {/* Google Play Store Button */}
          <a
            href="#playstore"
            className="flex items-center gap-3 bg-white hover:bg-slate-50 text-[#0B2545] px-6 py-3 rounded-2xl shadow-md transition-all duration-200 group active:scale-95 w-full sm:w-auto"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform duration-200">🤖</span>
            <div className="text-left">
              <p className="text-[10px] text-[#7A94B0] uppercase font-semibold tracking-wider">Get it on</p>
              <p className="text-sm font-bold -mt-0.5">Google Play</p>
            </div>
          </a>

          {/* Apple App Store Button */}
          <a
            href="#appstore"
            className="flex items-center gap-3 bg-[#0B2545] hover:bg-[#0f315c] text-white px-6 py-3 rounded-2xl shadow-md transition-all duration-200 group active:scale-95 w-full sm:w-auto border border-white/5"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform duration-200">🍏</span>
            <div className="text-left">
              <p className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider">Download on the</p>
              <p className="text-sm font-bold -mt-0.5">App Store</p>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}