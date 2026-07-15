"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function LoginPage(): React.JSX.Element {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   const { data, error } = await authClient.signIn.email({
    email: email , // required
    password: password , // required
    rememberMe: true,
    callbackURL: "/",
});
console.log(data , error)
if (data?.user) {
    toast.success("Login Successful 🎉");
    redirect('/')
  } 
  if (error) {
    toast.error(`Login Failed! ${error.message}`);
  }
    // console.log("Logging in with:", { email, password });
  };

  return (
    <section className="min-h-screen my-10 grid grid-cols-1 lg:grid-cols-12 bg-slate-50/50">
      
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
            Welcome Back to Your Ultimate Marketplace!
          </h1>
          <p className="text-slate-300 text-sm leading-relaxed">
            Log in to access your customized dashboard, track your active orders, and explore exclusive flash deals curated just for you.
          </p>
        </div>

        {/* Mini Footer Notice */}
        <div className="relative z-10 text-xs text-slate-400">
          &copy; {new Date().getFullYear()} Trendy Haat. All rights reserved.
        </div>
      </div>

      {/* Right Column: Actual Login Form Container */}
      <div className="lg:col-span-7 flex flex-col justify-center px-4 sm:px-12 lg:px-20 py-12">
        <div className="max-w-md w-full mx-auto">
          
          {/* Mobile Only Logo */}
          <div className="lg:hidden text-[#0B2545] font-black text-2xl tracking-tight flex items-center gap-2 mb-8 justify-center">
            🛍️ <span className="text-teal-600">Trendy</span> Haat
          </div>

          {/* Form Header */}
          <div className="mb-8 text-center lg:text-left">
            <h2 className="text-[#0B2545] font-black text-2xl sm:text-3xl tracking-tight mb-2">
              Sign In to Your Account
            </h2>
            <p className="text-[#7A94B0] text-sm">
              New to Trendy Haat?{" "}
              <Link href="/signup" className="text-teal-600 font-bold hover:underline">
                Create an account
              </Link>
            </p>
          </div>


          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-slate-200"></div>
            <span className="px-3 text-xs text-[#7A94B0] font-medium uppercase bg-transparent">Or with email</span>
            <div className="flex-1 border-t border-slate-200"></div>
          </div>

          {/* Form Credentials */}
          <form  className="space-y-5" onSubmit={handleLogin}>
            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold text-[#0B2545] uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full bg-white border border-slate-200 focus:border-teal-500 text-slate-800 placeholder-slate-400 text-sm rounded-xl px-4 py-3.5 outline-none transition-all"
              />
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-[#0B2545] uppercase tracking-wider">
                  Password
                </label>
                <a href="#forgot" className="text-xs font-semibold text-teal-600 hover:underline">
                  Forgot password?
                </a>
              </div>
              
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white border border-slate-200 focus:border-teal-500 text-slate-800 placeholder-slate-400 text-sm rounded-xl pl-4 pr-11 py-3.5 outline-none transition-all"
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

            {/* Remember Me Box */}
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="w-4 h-4 text-teal-600 border-slate-300 rounded focus:ring-teal-500 focus:ring-2 cursor-pointer"
              />
              <label htmlFor="remember-me" className="ml-2 text-xs font-medium text-[#4A6080] cursor-pointer select-none">
                Remember me for 30 days
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700 active:scale-95 text-white font-bold text-sm py-4 rounded-xl transition-all shadow-md shadow-teal-700/10 mt-2"
            >
              Sign In
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}