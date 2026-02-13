
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="py-24 px-4 bg-[#0b0b0b]">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-black text-white mb-10 tracking-tight">Our Philosophy.</h1>
        
        <div className="prose prose-invert prose-lg text-zinc-400 space-y-8 max-w-none font-medium">
          <p className="text-xl leading-relaxed">
            Divyansh Web Services was born in the heart of Delhi with a singular mission: to provide <span className="text-white font-bold">tier-1 digital infrastructure</span> to the local businesses that form the backbone of our economy.
          </p>
          <p>
            We eliminate the technical noise. Most small business owners are tired of complex contracts and exorbitant recurring fees. We offer a clean break: professional design, one-time payment, and zero-hassle delivery.
          </p>
          
          <div className="bg-zinc-900 p-10 rounded-3xl border border-zinc-800 my-16 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-8 tracking-tight">The Three Pillars of Our Service:</h3>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <span className="bg-blue-600/10 text-blue-500 p-2 rounded-lg flex-shrink-0">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </span>
                <span><strong className="text-white">Radical Speed:</strong> 48 hours isn't a goal; it's our standard. We build with precision and velocity.</span>
              </li>
              <li className="flex gap-4">
                <span className="bg-blue-600/10 text-blue-500 p-2 rounded-lg flex-shrink-0">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0011.69 11m4.39 4.39a10.014 10.014 0 01-4.39-4.39M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </span>
                <span><strong className="text-white">Local Synergy:</strong> Being in Delhi means we can sit down and discuss your vision over a cup of chai. We aren't just an agency; we're your neighbors.</span>
              </li>
              <li className="flex gap-4">
                <span className="bg-blue-600/10 text-blue-500 p-2 rounded-lg flex-shrink-0">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </span>
                <span><strong className="text-white">Zero Complexity:</strong> You don't need to know HTML, SEO, or DNS. We handle the code; you handle the customers.</span>
              </li>
            </ul>
          </div>

          <p className="text-lg">
            We don't believe in "finished" projects. We believe in <span className="text-white">enduring partnerships</span>. When you grow, our reputation grows with you.
          </p>
          
          <div className="pt-16 border-t border-zinc-900">
            <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Connect with the Lead Engineer.</h3>
            <p className="mb-10 text-zinc-400">Discussion is the first step toward your new digital reality.</p>
            <div className="flex flex-col sm:flex-row gap-6">
               <a 
                href={`tel:${BUSINESS_INFO.phone}`} 
                className="px-10 py-5 bg-zinc-900 text-white rounded-xl font-black shadow-lg hover:bg-zinc-800 transition border border-zinc-800 flex items-center justify-center gap-3"
              >
                📞 Voice Call
              </a>
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`} 
                className="px-10 py-5 bg-blue-600 text-white rounded-xl font-black shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:bg-blue-500 transition flex items-center justify-center gap-3"
              >
                💬 WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;