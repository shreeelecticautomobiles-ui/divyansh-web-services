
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Pricing: React.FC = () => {
  return (
    <div className="py-24 px-4 bg-[#0b0b0b]">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-white mb-6">Investment Structure</h1>
          <p className="text-xl text-zinc-400">One-time payment. Lifetime value. Pure business growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {/* Starter Plan */}
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-12 flex flex-col hover:border-zinc-700 transition">
            <h2 className="text-2xl font-bold text-white mb-4">Core Launch</h2>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-black text-white">₹2,000</span>
              <span className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Full Project</span>
            </div>
            <ul className="space-y-5 mb-12 flex-grow text-zinc-400 font-medium">
              <li className="flex items-center gap-4">
                <span className="text-blue-500 font-black">✓</span> One-page Master Design
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-500 font-black">✓</span> WhatsApp & Call Action
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-500 font-black">✓</span> Google Maps Ecosystem
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-500 font-black">✓</span> Mobile Speed Optimization
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-500 font-black">✓</span> 48-hour Deployment
              </li>
            </ul>
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I want to start with the ₹2000 plan`}
              className="block w-full text-center py-5 bg-zinc-800 text-white rounded-xl font-black hover:bg-zinc-700 border border-zinc-700 transition"
            >
              Select Core
            </a>
          </div>

          {/* Professional Plan */}
          <div className="bg-zinc-900 border-2 border-blue-600 rounded-3xl p-12 flex flex-col relative shadow-[0_0_50px_rgba(37,99,235,0.2)]">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-5 py-2 rounded-full uppercase tracking-[0.2em]">
              High Impact
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Market Leader</h2>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-5xl font-black text-white">₹4,000</span>
              <span className="text-zinc-400 font-bold uppercase tracking-widest text-xs">Full Project</span>
            </div>
            <ul className="space-y-5 mb-12 flex-grow text-zinc-300 font-medium">
              <li className="flex items-center gap-4">
                <span className="text-blue-500 font-black">✓</span> Multi-page Architecture
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-500 font-black">✓</span> Custom Branding Elements
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-500 font-black">✓</span> Professional .in / .com Domain
              </li>
              <li className="flex items-center gap-4">
                <span className="text-blue-500 font-black">✓</span> Premium SSL Encryption
              </li>
              <li className="flex items-center gap-4 font-bold text-white">
                <span className="text-blue-500 font-black">✓</span> Enhanced SEO Visibility
              </li>
            </ul>
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I want to start with the Professional ₹4000 plan`}
              className="block w-full text-center py-5 bg-blue-600 text-white rounded-xl font-black hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.4)] transition"
            >
              Select Leader
            </a>
          </div>
        </div>

        <div className="bg-zinc-900/80 rounded-2xl p-8 border border-zinc-800 text-center">
          <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-widest text-xs opacity-60">Simplified Escrow</h3>
          <p className="text-zinc-300 flex flex-col md:flex-row items-center justify-center gap-3 text-lg">
            <span className="text-3xl">🛡️</span> 
            <span><strong>50% Commencement</strong> — <strong>50% Satisfaction</strong> (After Live Deployment)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;