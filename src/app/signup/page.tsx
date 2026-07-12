"use client";

import { authClient } from "@/lib/auth-client";

import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function SignupPage(): React.JSX.Element {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    imageLink: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log("Registering User with:", formData); 
    const { data, error } = await authClient.signUp.email({
    name: formData.name , // required
    email: formData.email , // required
    password: formData.password , // required
    image: formData.imageLink ,
    callbackURL: "/",
});
console.log("Data:", data);
console.log("Error:", error);
if (data?.user) {
    toast.success("Registration Successful 🎉");
    redirect('/')
  } 
  if (error) {
    toast.error(`Registration Failed! ${error.message}`);
  }
  };

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-12 bg-slate-50/50">
      
      {/* Left Column: Visual Branding Sidebar (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:col-span-5 bg-[#0B2545] p-12 flex-col justify-between relative overflow-hidden">
        {/* Abstract Glow Effects */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
        
        {/* Brand Identity */}
        <div className="relative z-10">
          <div className="text-white font-black text-2xl tracking-tight flex items-center gap-2">
            🛍️ <span className="text-teal-400">Trendy</span> Haat
          </div>
        </div>

        {/* Motivational Copy */}
        <div className="relative z-10 max-w-sm mb-12">
          <h1 className="text-white text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-4">
            Join the Smartest Shopping Community!
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            Create an account today to unlock personalized recommendations, track your shopping cart, and get instant access to live flash deals.
          </p>
        </div>

        {/* Mini Footer Notice */}
        <div className="relative z-10 text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Trendy Haat. All rights reserved.
        </div>
      </div>

      {/* Right Column: Signup Form Container */}
      <div className="lg:col-span-7 flex flex-col justify-center px-4 sm:px-12 lg:px-20 py-12">
        <div className="max-w-md w-full mx-auto">
          
          {/* Mobile Only Logo */}
          <div className="lg:hidden text-[#0B2545] font-black text-2xl tracking-tight flex items-center gap-2 mb-6 justify-center">
            🛍️ <span className="text-teal-600">Trendy</span> Haat
          </div>

          {/* Form Header */}
          <div className="mb-6 text-center lg:text-left">
            <h2 className="text-[#0B2545] font-black text-2xl sm:text-3xl tracking-tight mb-2">
              Create Your Account
            </h2>
            <p className="text-[#7A94B0] text-sm">
              Already have an account?{" "}
              <Link href="/signin" className="text-teal-600 font-bold hover:underline">
                Sign In
              </Link>
            </p>
          </div>

          {/* Form Fields */}
          <form onSubmit={handleSignup} className="space-y-4">
            
            {/* Name Field */}
            <div>
              <label className="block text-xs font-bold text-[#0B2545] uppercase tracking-wider mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full bg-white border border-slate-200 focus:border-teal-500 text-slate-800 placeholder-slate-400 text-sm rounded-xl px-4 py-3 outline-none transition-all"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold text-[#0B2545] uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full bg-white border border-slate-200 focus:border-teal-500 text-slate-800 placeholder-slate-400 text-sm rounded-xl px-4 py-3 outline-none transition-all"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-bold text-[#0B2545] uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-white border border-slate-200 focus:border-teal-500 text-slate-800 placeholder-slate-400 text-sm rounded-xl pl-4 pr-11 py-3 outline-none transition-all"
                />
                
                {/* Toggle Password Visibility */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-slate-600 text-sm select-none"
                >
                  {showPassword ? "👁️" : "🙈"}
                </button>
              </div>
            </div>

            {/* Profile Image Link Field */}
            <div>
              <label className="block text-xs font-bold text-[#0B2545] uppercase tracking-wider mb-1.5">
                Profile Image URL
              </label>
              <input
                type="url"
                name="imageLink"
                value={formData.imageLink}
                onChange={handleChange}
                placeholder="https://example.com/avatar.jpg"
                className="w-full bg-white border border-slate-200 focus:border-teal-500 text-slate-800 placeholder-slate-400 text-sm rounded-xl px-4 py-3 outline-none transition-all"
              />
              <p className="text-[#7A94B0] text-[11px] mt-1">
                Provide a direct link to your photo (optional)
              </p>
            </div>

            {/* Terms and Conditions Box */}
            <div className="flex items-start mt-2">
              <input
                id="terms"
                type="checkbox"
                required
                className="w-4 h-4 text-teal-600 border-slate-300 rounded focus:ring-teal-500 focus:ring-2 mt-0.5 cursor-pointer"
              />
              <label htmlFor="terms" className="ml-2 text-xs font-medium text-[#4A6080] leading-tight cursor-pointer select-none">
                I agree to the Trendy Haat{" "}
                <a href="#terms" className="text-teal-600 font-semibold hover:underline">Terms of Service</a>{" "}
                and{" "}
                <a href="#privacy" className="text-teal-600 font-semibold hover:underline">Privacy Policy</a>.
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 active:scale-95 text-white font-bold text-sm py-3.5 rounded-xl transition-all shadow-md shadow-teal-700/10 mt-4"
            >
              Sign Up
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}