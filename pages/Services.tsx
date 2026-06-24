import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="pt-[20px] md:pt-[20px] pb-16 md:pb-40 px-4 md:px-6 bg-[#0b0b0b] max-w-full overflow-x-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 md:mb-32 animate-fade-up px-2">
          <h1 className="text-[clamp(2.5rem,10vw,6rem)] md:text-9xl font-black tracking-tighter mb-6 md:mb-8 text-white uppercase">SOLUTIONS<span className="text-blue-500">.</span></h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">High-caliber digital architecture for businesses that refuse to look ordinary.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 w-full px-2 sm:px-0">
          <TierCard 
            title="Starter Website"
            price="3,999"
            desc="For businesses who just want to get online fast."
            features={["Single page website", "WhatsApp + Call buttons", "Fast loading website", "Delivered in 3 days", "Free hosting included"]}
          />
          <TierCard 
            title="Business Website"
            price="7,999"
            highlight={true}
            desc="For coaching institutes, academies, and local shops who want to get more inquiries."
            features={["4 to 6 Pages Structure", "WhatsApp integration on every page", "Google Maps + contact form", "Basic SEO & Google prominence", "Delivered in 5 to 7 days"]}
          />
          <TierCard 
            title="Premium Website"
            price="12,999"
            desc="For businesses who want a complete professional online presence."
            features={["7+ Pages custom layout", "Testimonials & Gallery pages", "Full SEO setup", "Designed to match your brand", "Delivered in 10 days"]}
          />
        </div>
      </div>
    </div>
  );
};

const TierCard = ({ title, price, desc, features, highlight = false }: any) => (
  <div className={`p-6 md:p-14 rounded-3xl md:rounded-[48px] border transition-all duration-500 relative flex flex-col w-full mx-auto ${
    highlight 
      ? 'bg-white text-black border-transparent scale-105 z-10 shadow-[0_40px_100px_rgba(255,255,255,0.05)]' 
      : 'bg-zinc-900/30 backdrop-blur-xl border-white/5 text-white hover:border-blue-500/50'
  }`}>
    {highlight && (
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-4 md:px-6 py-2 bg-blue-600 text-white text-[9px] md:text-[10px] font-black rounded-full uppercase tracking-[0.2em] md:tracking-[0.3em] shadow-xl">
        Industry Favorite
      </div>
    )}
    
    <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-2 md:mb-3 mt-2">{title}</h2>
    <p className={`text-xs md:text-sm mb-6 md:mb-12 font-semibold ${highlight ? 'text-zinc-500' : 'text-zinc-400'}`}>{desc}</p>
    
    <div className="flex items-baseline gap-2 mb-8 md:mb-16">
      <span className="text-4xl md:text-6xl font-black">{price !== 'Custom' && '₹'}{price}</span>
      <span className={`text-[9px] md:text-[10px] font-black uppercase tracking-widest ${highlight ? 'text-zinc-500' : 'text-zinc-400'}`}>One-Time Investment</span>
    </div>

    <ul className="space-y-4 md:space-y-6 flex-grow mb-8 md:mb-16 font-bold text-xs md:text-sm">
      {features.map((f: string) => (
        <li key={f} className="flex items-center gap-3 md:gap-4">
          <span className={`w-2 h-2 rounded-full ${highlight ? 'bg-blue-600' : 'bg-blue-500'}`}></span>
          {f}
        </li>
      ))}
    </ul>

    <a 
      href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I want to discuss the ${title} tier`}
      className={`block w-full text-center py-4 md:py-6 rounded-xl md:rounded-2xl font-black text-xs md:text-[13px] uppercase tracking-widest transition-all duration-300 cursor-pointer ${
        highlight 
          ? 'bg-black text-white hover:bg-zinc-800' 
          : 'bg-white text-black hover:bg-blue-600 hover:text-white'
      }`}
    >
      Reserve Project slot
    </a>
  </div>
);

export default Services;
