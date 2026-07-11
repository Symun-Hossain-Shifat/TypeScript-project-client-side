import React from "react";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
  tag: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Anika Rahman",
    role: "Regular Shopper",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
    rating: 5,
    comment: "Trendy Haat থেকে কুর্তি আর একটা ব্যাগ অর্ডার করেছিলাম। ঢাকার বাইরে ৩ দিনেই ডেলিভারি পেয়েছি! কাপড়ের কোয়ালিটি এককথায় অসাধারণ ছিল।",
    tag: "Fashion"
  },
  {
    name: "Tanvir Ahmed",
    role: "Tech Enthusiast",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
    rating: 5,
    comment: "অনলাইনে গ্যাজেট কিনতে সবসময় একটু ভয় কাজ করে। কিন্তু এদের ক্যাশ অন ডেলিভারি সুবিধা থাকায় অর্ডার করি। প্রোডাক্ট ১০০% অরিজিনাল ছিল।",
    tag: "Gadget"
  },
  {
    name: "Nusrat Jahan",
    role: "Verified Buyer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
    rating: 4,
    comment: "সাইজ একটু ছোট হওয়াতে রিটার্ন করতে হয়েছিল। ওদের কাস্টমার সাপোর্ট টিম খুবই হেল্পফুল, খুব দ্রুত এক্সচেঞ্জ করে নতুন সাইজ পাঠিয়ে দিয়েছে।",
    tag: "Easy Return"
  }
];

export default function TestimonialsSection(): React.JSX.Element {
  return (
    <section className="my-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="inline-block text-xs font-semibold tracking-wider text-teal-600 uppercase bg-teal-50 px-3 py-1 rounded-full mb-3">
          Customer Stories
        </span>
        <h2 className="text-[#0B2545] font-black text-3xl sm:text-4xl tracking-tight mb-4">
          What Our Happy Shoppers Say
        </h2>
        <p className="text-[#4A6080] text-base sm:text-lg leading-relaxed">
          Don&apos;t just take our word for it. Here is the love and feedback we receive from thousands of customers across the country.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
          >
            {/* Decorative Quote Icon */}
            <span className="absolute top-6 right-6 text-slate-100 text-6xl font-serif pointer-events-none group-hover:text-teal-50 transition-colors duration-300">
              &ldquo;
            </span>

            <div>
              {/* Star Rating */}
              <div className="flex gap-1 mb-4 text-amber-500">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <span key={i} className="text-lg">★</span>
                ))}
              </div>

              {/* Comment */}
              <p className="text-[#4A6080] text-sm leading-relaxed mb-6 italic relative z-10">
                &ldquo;{item.comment}&rdquo;
              </p>
            </div>

            {/* User Info & Profile */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-11 h-11 rounded-full object-cover border-2 border-teal-50"
              />
              <div>
                <h4 className="text-[#0B2545] font-bold text-sm">
                  {item.name}
                </h4>
                <p className="text-[#7A94B0] text-xs">
                  {item.role}
                </p>
              </div>
              
              {/* Product Category Tag */}
              <span className="ml-auto bg-slate-50 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded-md">
                {item.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}