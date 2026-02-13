
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="py-24 px-4 bg-[#0b0b0b]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-white mb-6 tracking-tight">Our Solutions</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">Scale your business with our battle-tested website architectures.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 flex flex-col h-full hover:border-blue-500/50 transition-all group">
            <h2 className="text-2xl font-bold text-white mb-6">Digital Business Card</h2>
            <ul className="space-y-4 text-zinc-400 mb-10 flex-grow">
              <li className="flex items-center gap-3"><span className="text-blue-500 font-bold">✓</span> Mobile-optimized view</li>
              <li className="flex items-center gap-3"><span className="text-blue-500 font-bold">✓</span> WhatsApp integration</li>
              <li className="flex items-center gap-3"><span className="text-blue-500 font-bold">✓</span> Google Maps location</li>
              <li className="flex items-center gap-3"><span className="text-blue-500 font-bold">✓</span> Rapid 48-hour launch</li>
            </ul>
            <div className="pt-8 border-t border-zinc-800">
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I want to know about One-Page Website`}
                className="block w-full text-center py-4 bg-zinc-800 text-white rounded-xl font-bold hover:bg-zinc-700 border border-zinc-700 transition"
              >
                Inquire Now
              </a>
            </div>
          </div>

          {/* Service 2 */}
          <div className="bg-zinc-900 border-2 border-blue-600 rounded-2xl p-10 flex flex-col h-full relative shadow-[0_0_40px_rgba(37,99,235,0.1)]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-wider">PREMIUM REACH</div>
            <h2 className="text-2xl font-bold text-white mb-6">Full Business Suite</h2>
            <ul className="space-y-4 text-zinc-300 mb-10 flex-grow">
              <li className="flex items-center gap-3 font-semibold"><span className="text-blue-500 font-bold">✓</span> Multi-page Experience</li>
              <li className="flex items-center gap-3"><span className="text-blue-500 font-bold">✓</span> Portfolio/Service Gallery</li>
              <li className="flex items-center gap-3"><span className="text-blue-500 font-bold">✓</span> Enhanced SEO structure</li>
              <li className="flex items-center gap-3"><span className="text-blue-500 font-bold">✓</span> Analytics Tracking</li>
              <li className="flex items-center gap-3"><span className="text-blue-500 font-bold">✓</span> Dedicated Lead Support</li>
            </ul>
            <div className="pt-8 border-t border-zinc-800">
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I want to know about Multi-Page Website`}
                className="block w-full text-center py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] transition"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Service 3 */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 flex flex-col h-full hover:border-blue-500/50 transition-all">
            <h2 className="text-2xl font-bold text-white mb-6">Tech Foundation</h2>
            <ul className="space-y-4 text-zinc-400 mb-10 flex-grow">
              <li className="flex items-center gap-3"><span className="text-blue-500 font-bold">✓</span> Custom Domain (.com/.in)</li>
              <li className="flex items-center gap-3"><span className="text-blue-500 font-bold">✓</span> Business Email Setup</li>
              <li className="flex items-center gap-3"><span className="text-blue-500 font-bold">✓</span> SSL Security (HTTPS)</li>
              <li className="flex items-center gap-3"><span className="text-blue-500 font-bold">✓</span> Cloud Hosting Configuration</li>
              <li className="flex items-center gap-3"><span className="text-blue-500 font-bold">✓</span> Full Backend Access</li>
            </ul>
            <div className="pt-8 border-t border-zinc-800">
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I want to know about Domain and Setup`}
                className="block w-full text-center py-4 bg-zinc-800 text-white rounded-xl font-bold hover:bg-zinc-700 border border-zinc-700 transition"
              >
                Configure Setup
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;