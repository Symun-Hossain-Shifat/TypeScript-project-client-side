"use client";

import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Trendy Haat থেকে অর্ডার করার কতদিনের মধ্যে ডেলিভারি পাওয়া যাবে?",
    answer: "ঢাকার ভেতরে আমরা সাধারণত ২৪ থেকে ৪৮ ঘণ্টার মধ্যে ডেলিভারি নিশ্চিত করি। আর ঢাকার বাইরে দেশের যেকোনো প্রান্তে ৩ থেকে ৫ কার্যদিবসের মধ্যে প্রোডাক্ট পৌঁছে দেওয়া হয়।"
  },
  {
    question: "আপনাদের এখানে কি ক্যাশ অন ডেলিভারি (COD) সুবিধা আছে?",
    answer: "হ্যাঁ! কাস্টমারদের সর্বোচ্চ নিরাপত্তার কথা চিন্তা করে আমরা সারা বাংলাদেশে ক্যাশ অন ডেলিভারি সুবিধা দিচ্ছি। প্রোডাক্ট হাতে পেয়ে দেখে তারপর পেমেন্ট করতে পারবেন।"
  },
  {
    question: "প্রোডাক্টে কোনো সমস্যা থাকলে কি পরিবর্তন (Exchange) করা সম্ভব?",
    answer: "অবশ্যই। প্রোডাক্ট রিসিভ করার পর কোনো সাইজ ইস্যু বা ত্রুটি থাকলে ৭ দিনের মধ্যে আমাদের সাপোর্ট টিমে যোগাযোগ করে খুব সহজেই এক্সচেঞ্জ বা রিটার্ন করতে পারবেন।"
  },
  {
    question: "আপনাদের প্রোডাক্টগুলো কি ১০০% অরিজিনাল ও অথেন্টিক?",
    answer: "Trendy Haat-এ কোনো ডুপ্লিকেট বা কপি প্রোডাক্ট বিক্রি করা হয় না। আমরা সরাসরি টপ ব্র্যান্ডস এবং ভেরিফাইড সাপ্লায়ারদের থেকে প্রোডাক্ট সোর্স করি, তাই শতভাগ অথেন্টিসিটি নিয়ে নিশ্চিন্ত থাকতে পারেন।"
  },
  {
    question: "ডেলিভারি চার্জ কত?",
    answer: "সাধারণত ঢাকা সিটির ভেতরে ডেলিভারি চার্জ ৬০ টাকা এবং ঢাকা সিটির বাইরে সারা বাংলাদেশে ১২০ টাকা। তবে আমাদের বিভিন্ন অফার বা ক্যাম্পেইনে নির্দিষ্ট অর্ডারের ওপর ফ্রি ডেলিভারিও দেওয়া হয়ে থাকে।"
  }
];

export default function FAQSection(): React.JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="my-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="inline-block text-xs font-semibold tracking-wider text-teal-600 uppercase bg-teal-50 px-3 py-1 rounded-full mb-3">
          Have Questions?
        </span>
        <h2 className="text-[#0B2545] font-black text-3xl sm:text-4xl tracking-tight mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-[#4A6080] text-base leading-relaxed max-w-2xl mx-auto">
          Got questions about shipping, returns, or payments? We&apos;ve got you covered with quick answers to our shoppers&apos; most common inquiries.
        </p>
      </div>

      {/* FAQ Accordion List */}
      <div className="space-y-4">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-2xl overflow-hidden transition-all duration-300 hover:border-teal-100"
            >
              {/* Question Trigger */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 text-left font-bold text-[#0B2545] hover:text-teal-600 transition-colors duration-200 gap-4"
              >
                <span className="text-sm sm:text-base">{faq.question}</span>
                <span
                  className={`text-xl font-mono text-teal-500 transition-transform duration-300 transform ${
                    isOpen ? "rotate-45" : "rotate-0"
                  }`}
                >
                  ＋
                </span>
              </button>

              {/* Answer Panel */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-40 border-t border-slate-50" : "max-h-0"
                }`}
              >
                <p className="p-5 text-[#7A94B0] text-sm sm:text-base leading-relaxed bg-slate-50/50">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}