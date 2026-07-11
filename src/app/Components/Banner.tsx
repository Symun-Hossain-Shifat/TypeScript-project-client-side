import Image from "next/image";
import Banner from "@/assets/logo.png";

interface Stat {
  num: string;
  label: string;
}

const stats: Stat[] = [
  {
    num: "15K+",
    label: "Happy Customers",
  },
  {
    num: "5K+",
    label: "Curated Products",
  },
  {
    num: "4.8★",
    label: "Store Rating",
  },
];

export default async function BannerPage(): Promise<React.JSX.Element> {
  return (
    <section className="relative overflow-hidden my-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full -translate-y-1/2 translate-x-1/3 -z-10" />
      <div className="absolute bottom-0 left-1/4 w-40 h-40 bg-amber-50 rounded-full translate-y-1/3 -z-10" />

      {/* Main Container with Updated E-commerce Gradient */}
      <div className="bg-gradient-to-br from-teal-50/50 via-slate-50 to-amber-50/50 border border-teal-100/60 rounded-3xl px-6 sm:px-12 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side: Content */}
        <div className="flex flex-col items-start z-10">
          <span className="inline-flex items-center gap-2 bg-teal-100/70 text-teal-800 text-xs font-medium px-3 py-1.5 rounded-full border border-teal-200 mb-5">
            ✨ Trendy Haat App is Here!
          </span>

          <h1 className="text-[#0B2545] font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] mb-5">
            Discover & Shop{" "}
            <span className="text-teal-600">Premium Products</span> with
            Trendy Haat
          </h1>

          <p className="text-[#4A6080] text-base sm:text-lg max-w-md mb-8 leading-relaxed">
            Explore thousands of trendy, high-quality, and everyday essential
            products curated just for you. Discover, shop, and save on your
            favorite items with absolute trust.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-10">
            <button className="bg-teal-600 hover:bg-teal-700 active:scale-95 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-sm transition-all">
              🛍️ Shop Now
            </button>

            <button className="bg-white hover:bg-gray-50 active:scale-95 text-[#0B2545] border border-gray-200 font-medium text-sm px-6 py-3.5 rounded-full transition-all">
              📲 Download App
            </button>
          </div>

          {/* Stats Section */}
          <div className="flex gap-8 pt-6 border-t border-teal-100 w-full">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-[#0B2545] font-bold text-xl">
                  {stat.num}
                </p>
                <p className="text-[#7A94B0] text-xs mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image and Floating Cards */}
        <div className="relative flex justify-center items-center z-10">
          <div className="relative w-full max-w-sm">
            <Image
              src={Banner}
              alt="Trendy Haat Banner"
              width={500}
              height={500}
              priority
              className="rounded-2xl w-full h-auto object-cover"
            />

            {/* Top Floating Card: Order Notification */}
            <div className="absolute -top-4 -right-4 sm:right-0 bg-white border border-teal-50 rounded-xl px-3 py-2 flex items-center gap-2 shadow-md">
              <span className="text-xl">📦</span>
              <div>
                <p className="text-[#0B2545] text-xs font-semibold">
                  New Order
                </p>
                <p className="text-[#7A94B0] text-[10px]">
                  Just shipped to Dhaka
                </p>
              </div>
            </div>

            {/* Bottom Floating Card: Discount/Offer */}
            <div className="absolute -bottom-4 -left-4 sm:left-0 bg-white border border-amber-100 rounded-xl px-3 py-2 flex items-center gap-2 shadow-md">
              <span className="text-xl">🔥</span>
              <div>
                <p className="text-[#0B2545] text-xs font-semibold">
                  Up to 50% Off
                </p>
                <p className="text-amber-600 text-[10px] font-medium">
                  Flash Deal Active
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}