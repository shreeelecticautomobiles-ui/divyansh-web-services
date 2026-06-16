import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Pricing: React.FC = () => {
  return (
    <div className="pt-[80px] md:pt-[90px] pb-16 md:pb-48 px-4 md:px-6 bg-[#0b0b0b] max-w-full overflow-x-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 md:mb-32 animate-fade-up px-2">
          <h1 className="text-[clamp(2.5rem,10vw,6rem)] md:text-9xl font-black tracking-tighter mb-6 md:mb-10 leading-none text-white uppercase">PRICING<span className="text-blue-500">.</span></h1>
          <p className="text-zinc-500 text-lg md:text-2xl max-w-3xl mx-auto font-medium">
            Straightforward investment structure. No hidden fees. Just websites that get you more customers.
          </p>
        </div>

        {/* 3 Package Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-16 md:mb-24 items-stretch w-full px-2 sm:px-0">
          
          {/* Starter Plan */}
          <div className="bg-zinc-900/40 backdrop-blur-3xl border border-white/5 rounded-3xl md:rounded-[48px] p-6 md:p-12 flex flex-col hover:border-blue-500/20 transition-all duration-700 relative w-full mx-auto">
            <h2 className="text-xl md:text-2xl font-black text-white mb-2 tracking-tighter">Package 1 — Starter Website</h2>
            <p className="text-xs md:text-sm text-zinc-500 mb-6 font-semibold">For businesses who just want to get online fast.</p>
            
            <div className="flex flex-col gap-2 mb-6 md:mb-8">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl md:text-5xl font-black text-white">₹3,999</span>
                <span className="text-zinc-650 font-extrabold uppercase tracking-[0.2em] text-[10px]">One-Time</span>
              </div>
              <p className="text-xs text-red-400 font-semibold leading-snug">
                Domain not included — costs ₹500–₹800/year separately
              </p>
            </div>

            <ul className="space-y-4 mb-8 md:mb-12 flex-grow text-zinc-400 font-medium text-sm md:text-base">
              <li className="flex items-center gap-4">
                <span className="text-blue-500 font-black">✓</span> Single page website
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-500 font-black">✓</span> WhatsApp + Call buttons
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-500 font-black">✓</span> Google Maps location
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-500 font-black">✓</span> Mobile friendly
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-500 font-black">✓</span> Delivered in 3 days
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-500 font-black">✓</span> Free hosting included
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-500 font-black">✓</span> Fast loading website
              </li>
            </ul>

            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I am interested in Package 1 — Starter Website (₹3,999)`}
              className="block w-full text-center py-4 md:py-5 bg-white text-black rounded-xl md:rounded-2xl font-black text-base hover:bg-blue-600 hover:text-white transition-all duration-500 mt-auto"
            >
              Secure This Plan
            </a>
          </div>

          {/* Business Plan (Most Popular) */}
          <div className="bg-white border-2 border-blue-600 rounded-3xl md:rounded-[48px] p-6 md:p-12 flex flex-col relative shadow-[0_50px_100px_rgba(59,130,246,0.15)] lg:scale-105 z-10 w-full mx-auto my-4 lg:my-0">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[9px] md:text-[10px] font-black px-4 md:px-6 py-2 md:py-2.5 rounded-full uppercase tracking-[0.2em] md:tracking-[0.3em] shadow-2xl">
              ⭐ Most Popular
            </div>
            
            <h2 className="text-xl md:text-2xl font-black text-black mb-2 tracking-tighter mt-2">Package 2 — Business Website</h2>
            <p className="text-xs md:text-sm text-zinc-500 mb-6 font-semibold">For coaching institutes, academies, and local shops who want to get more inquiries.</p>
            
            <div className="flex flex-col gap-2 mb-6 md:mb-8">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl md:text-5xl font-black text-black">₹7,999</span>
                <span className="text-zinc-600 font-extrabold uppercase tracking-[0.2em] text-[10px]">One-Time</span>
              </div>
              <p className="text-xs text-red-650 font-bold leading-snug">
                Domain not included — costs ₹500–₹800/year separately
              </p>
            </div>

            <ul className="space-y-4 mb-8 md:mb-12 flex-grow text-zinc-700 font-bold text-sm md:text-base">
              <li className="flex items-center gap-4">
                <span className="text-blue-600 font-black">✓</span> 4 to 6 pages (Home, About, Courses, Gallery, Contact)
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-600 font-black">✓</span> WhatsApp integration on every page
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-600 font-black">✓</span> Google Maps + contact form
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-600 font-black">✓</span> Mobile friendly
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-600 font-black">✓</span> Basic SEO so you show up on Google
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-600 font-black">✓</span> Free hosting included
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-600 font-black">✓</span> Delivered in 5 to 7 days
              </li>
              <li className="flex items-center gap-4 text-blue-600">
                <span className="text-blue-600 font-black">✓</span> Secure website (HTTPS)
              </li>
              <li className="flex items-center gap-4 text-blue-600">
                <span className="text-blue-600 font-black">✓</span> Designed to match your brand
              </li>
            </ul>

            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I am interested in Package 2 — Business Website (₹7,999)`}
              className="block w-full text-center py-4 md:py-5 bg-black text-white rounded-xl md:rounded-2xl font-black text-base hover:bg-blue-600 transition-all duration-500 shadow-xl mt-auto"
            >
              Claim This Plan
            </a>
          </div>

          {/* Premium Plan */}
          <div className="bg-zinc-900/40 backdrop-blur-3xl border border-white/5 rounded-3xl md:rounded-[48px] p-6 md:p-12 flex flex-col hover:border-blue-500/20 transition-all duration-700 relative w-full mx-auto">
            <h2 className="text-xl md:text-2xl font-black text-white mb-2 tracking-tighter">Package 3 — Premium Website</h2>
            <p className="text-xs md:text-sm text-zinc-500 mb-6 font-semibold">For businesses who want a complete professional online presence.</p>
            
            <div className="flex flex-col gap-2 mb-6 md:mb-8">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl md:text-5xl font-black text-white">₹12,999</span>
                <span className="text-zinc-650 font-extrabold uppercase tracking-[0.2em] text-[10px]">One-Time</span>
              </div>
              <p className="text-xs text-red-400 font-semibold leading-snug">
                Domain not included — costs ₹500–₹800/year separately
              </p>
            </div>

            <ul className="space-y-4 mb-8 md:mb-12 flex-grow text-zinc-400 font-medium text-sm md:text-base">
              <li className="flex items-center gap-4">
                <span className="text-blue-500 font-black">✓</span> 7+ pages with full content
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-500 font-black">✓</span> Faculty/team section
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-500 font-black">✓</span> Testimonials page
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-500 font-black">✓</span> Gallery page
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-500 font-black">✓</span> Full SEO setup
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-500 font-black">✓</span> WhatsApp + phone + email integration
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-500 font-black">✓</span> Free hosting included
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-500 font-black">✓</span> Delivered in 10 days
              </li>
              <li className="flex items-center gap-4 text-blue-400">
                <span className="text-blue-400 font-black">✓</span> Secure website (HTTPS)
              </li>
              <li className="flex items-center gap-4 text-blue-400">
                <span className="text-blue-400 font-black">✓</span> Designed to match your brand
              </li>
            </ul>

            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I am interested in Package 3 — Premium Website (₹12,999)`}
              className="block w-full text-center py-4 md:py-5 bg-white text-black rounded-xl md:rounded-2xl font-black text-base hover:bg-blue-600 hover:text-white transition-all duration-500 mt-auto"
            >
              Secure This Plan
            </a>
          </div>

        </div>

        {/* Domain Information Notice */}
        <div className="glass rounded-2xl md:rounded-[32px] p-6 md:p-10 border border-blue-500/30 max-w-4xl mx-auto mb-10 md:mb-16 text-center shadow-[0_20px_50px_rgba(59,130,246,0.1)] relative overflow-hidden w-full px-4">
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>
          <h4 className="text-lg md:text-xl font-bold text-white mb-3">About Domain &amp; Hosting</h4>
          <p className="text-zinc-300 text-base md:text-lg leading-relaxed font-medium">
            &ldquo;Hosting is completely free. You only need a domain name (like <span className="text-blue-400">yourbusiness.in</span>) which costs ₹500&ndash;₹1,000/year. We help you get it set up.&rdquo;
          </p>
        </div>

        {/* Security & Retainer protocol */}
        <div className="glass rounded-2xl md:rounded-[40px] p-6 md:p-12 text-center border border-white/10 max-w-4xl mx-auto w-full px-4">
          <h3 className="text-[10px] font-black mb-6 md:mb-8 text-zinc-650 uppercase tracking-[0.4em] md:tracking-[0.5em]">The Payment Terms</h3>
          <p className="text-zinc-300 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 text-lg md:text-xl font-medium">
            <span className="bg-white/5 p-3 md:p-4 rounded-xl md:rounded-2xl border border-white/5">🛡️</span> 
            <span className="leading-relaxed"><strong>50% payment before we start</strong> <br className="md:hidden"/>— <br className="md:hidden"/> <strong>50% payment after your website is ready</strong></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
