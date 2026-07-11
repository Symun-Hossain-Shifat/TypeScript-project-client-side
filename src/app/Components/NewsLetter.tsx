import React from "react";

export default function NewsletterSection(): React.JSX.Element {
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Handle newsletter subscription logic here
//   };

  return (
    <section className="my-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Container with a premium deep dark-blue and teal accent blend */}
      <div className="relative bg-[#0B2545] rounded-3xl px-6 py-12 sm:p-16 overflow-hidden shadow-xl">
        
        {/* Decorative Background Glows */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          {/* Badge */}
          <span className="inline-block text-xs font-bold tracking-wider text-amber-400 uppercase bg-amber-500/10 px-3 py-1 rounded-full mb-4 border border-amber-500/20">
            🤫 Members Only
          </span>

          {/* Heading */}
          <h2 className="text-white font-black text-3xl sm:text-4xl tracking-tight mb-4">
            Don&apos;t Miss Our Flash Deals!
          </h2>

          {/* Description */}
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            Subscribe to the **Trendy Haat** newsletter today. Get early access to discount coupons, upcoming lifestyle trends, and premium product launches straight to your inbox.
          </p>

          {/* Subscription Form */}
          <form  className="sm:flex items-center gap-3 max-w-md mx-auto">
            <div className="w-full relative mb-3 sm:mb-0">
              <span className="absolute inset-y-0 left-4 flex items-center text-slate-400 text-sm pointer-events-none">
                ✉️
              </span>
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="w-full bg-white/5 border border-white/10 focus:border-teal-400 focus:bg-white/10 text-white placeholder-slate-400 text-sm rounded-full pl-11 pr-4 py-3.5 outline-none transition-all duration-200"
              />
            </div>
            
            <button
              type="submit"
              className="w-full sm:w-auto bg-teal-500 hover:bg-teal-600 active:scale-95 text-white font-bold text-sm px-6 py-3.5 rounded-full transition-all whitespace-nowrap shadow-md shadow-teal-900/20"
            >
              Subscribe Now
            </button>
          </form>

          {/* Privacy Note */}
          <p className="text-slate-400 text-[11px] mt-4">
            We respect your privacy. Unsubscribe at any time. No spam, promised!
          </p>
        </div>
      </div>
    </section>
  );
}