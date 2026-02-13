
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Pricing: React.FC = () => {
  return (
    <div className="py-48 px-6 bg-[#0b0b0b]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-32 animate-fade-up">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-10 leading-none">PRICING<span className="text-blue-500">.</span></h1>
          <p className="text-zinc-500 text-xl md:text-2xl max-w-3xl mx-auto font-medium">Straightforward investment structure. No hidden fees. Just ROI-focused digital engineering.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mb-24">
          {/* Starter Plan */}
          <div className="bg-zinc-900/40 backdrop-blur-3xl border border-white/5 rounded-[60px] p-16 flex flex-col hover:border-blue-500/20 transition-all duration-700">
            <h2 className="text-3xl font-black text-white mb-4 tracking-tighter">Growth Core</h2>
            <div className="flex items-baseline gap-3 mb-10">
              <span className="text-6xl font-black text-white">₹2,000</span>
              <span className="text-zinc-600 font-black uppercase tracking-[0.2em] text-[10px]">Project Launch</span>
            </div>
            <ul className="space-y-6 mb-16 flex-grow text-zinc-400 font-medium text-lg">
              <li className="flex items-center gap-5">
                <span className="text-blue-500 font-black">✓</span> Optimized One-page Architecture
              </li>
              <li className="flex items-center gap-5">
                <span className="text-blue-500 font-black">✓</span> Lead-Gen Contact Actions
              </li>
              <li className="flex items-center gap-5">
                <span className="text-blue-500 font-black">✓</span> G-Maps Integration
              </li>
              <li className="flex items-center gap-5">
                <span className="text-blue-500 font-black">✓</span> Sub-1s Load Speed
              </li>
              <li className="flex items-center gap-5">
                <span className="text-blue-500 font-black">✓</span> 48h Strategic Deployment
              </li>
            </ul>
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I am interested in the Growth Core plan`}
              className="block w-full text-center py-7 bg-white text-black rounded-3xl font-black text-lg hover:bg-blue-600 hover:text-white transition-all duration-500"
            >
              Secure This Plan
            </a>
          </div>

          {/* Professional Plan */}
          <div className="bg-white border-none rounded-[60px] p-16 flex flex-col relative shadow-[0_50px_100px_rgba(59,130,246,0.15)] scale-105 z-10">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-black px-8 py-3 rounded-full uppercase tracking-[0.4em] shadow-2xl">
              Dominator Tier
            </div>
            <h2 className="text-3xl font-black text-black mb-4 tracking-tighter">Elite Ecosystem</h2>
            <div className="flex items-baseline gap-3 mb-10">
              <span className="text-6xl font-black text-black">₹4,000</span>
              <span className="text-zinc-400 font-black uppercase tracking-[0.2em] text-[10px]">Project Launch</span>
            </div>
            <ul className="space-y-6 mb-16 flex-grow text-zinc-600 font-bold text-lg">
              <li className="flex items-center gap-5">
                <span className="text-blue-600 font-black">✓</span> Multi-page Experience
              </li>
              <li className="flex items-center gap-5">
                <span className="text-blue-600 font-black">✓</span> Premium .com / .in Domain
              </li>
              <li className="flex items-center gap-5">
                <span className="text-blue-600 font-black">✓</span> Custom Brand Articulation
              </li>
              <li className="flex items-center gap-5">
                <span className="text-blue-600 font-black">✓</span> AES-256 SSL Encryption
              </li>
              <li className="flex items-center gap-5 text-blue-600">
                <span className="text-blue-600 font-black">✓</span> Advanced Local SEO Suite
              </li>
            </ul>
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I am interested in the Elite Ecosystem plan`}
              className="block w-full text-center py-7 bg-black text-white rounded-3xl font-black text-lg hover:bg-blue-600 transition-all duration-500 shadow-xl"
            >
              Claim Domain & Launch
            </a>
          </div>
        </div>

        <div className="glass rounded-[40px] p-12 text-center border border-white/10 max-w-4xl mx-auto">
          <h3 className="text-[10px] font-black mb-8 text-zinc-600 uppercase tracking-[0.5em]">The Security Protocol</h3>
          <p className="text-zinc-300 flex flex-col md:flex-row items-center justify-center gap-6 text-xl font-medium">
            <span className="bg-white/5 p-4 rounded-2xl border border-white/5">🛡️</span> 
            <span><strong>50% Retainer</strong> (On commencement) &nbsp;—&nbsp; <strong>50% Finalize</strong> (Post-deployment)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;