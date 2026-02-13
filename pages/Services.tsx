
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-32">
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter">Solutions<span className="text-blue-500">.</span></h1>
          <p className="text-xl text-zinc-500 max-w-xl mx-auto font-medium">High-end architecture tailored for local business dominance.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <ServiceTier 
            title="Essential"
            price="2,000"
            desc="One-page power for emerging businesses."
            features={["Fast-track 48h launch", "Mobile optimization", "WhatsApp integration", "Google Maps setup"]}
          />
          <ServiceTier 
            title="Professional"
            price="4,000"
            highlight={true}
            desc="The industry standard for established clinics."
            features={["Multi-page architecture", "Premium .com/.in domain", "Custom Branding", "Advanced SEO suite", "Cloud Hosting"]}
          />
          <ServiceTier 
            title="Enterprise"
            price="Custom"
            desc="Tailored solutions for complex retail."
            features={["Inventory systems", "E-commerce engine", "On-site consulting", "Dedicated support line", "API Integrations"]}
          />
        </div>
      </div>
    </div>
  );
};

const ServiceTier = ({ title, price, desc, features, highlight = false }: any) => (
  <div className={`relative p-12 rounded-[40px] border transition-all duration-500 flex flex-col ${
    highlight 
      ? 'bg-white text-black border-transparent scale-105 z-10 shadow-[0_40px_100px_rgba(255,255,255,0.05)]' 
      : 'bg-zinc-900/40 backdrop-blur-xl border-zinc-800 text-white hover:border-blue-500/50'
  }`}>
    {highlight && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-blue-600 text-white text-[10px] font-black rounded-full uppercase tracking-widest shadow-xl">
        Most Requested
      </div>
    )}
    <h2 className="text-2xl font-black tracking-tight mb-2">{title}</h2>
    <p className={`text-sm mb-10 ${highlight ? 'text-zinc-600' : 'text-zinc-500'} font-medium`}>{desc}</p>
    
    <div className="flex items-baseline gap-2 mb-12">
      <span className="text-5xl font-black">{price !== 'Custom' && '₹'}{price}</span>
      <span className={`text-[11px] font-bold uppercase tracking-widest ${highlight ? 'text-zinc-400' : 'text-zinc-600'}`}>One-Time</span>
    </div>

    <ul className="space-y-6 flex-grow mb-16">
      {features.map((f: string) => (
        <li key={f} className="flex items-center gap-4 text-sm font-semibold">
          <span className={`w-1.5 h-1.5 rounded-full ${highlight ? 'bg-blue-600' : 'bg-blue-500'}`}></span>
          {f}
        </li>
      ))}
    </ul>

    <a 
      href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I am interested in the ${title} package`}
      className={`block w-full text-center py-5 rounded-2xl font-black text-sm transition-all active:scale-95 ${
        highlight 
          ? 'bg-black text-white hover:bg-zinc-800' 
          : 'bg-white text-black hover:bg-blue-500 hover:text-white'
      }`}
    >
      Reserve Now
    </a>
  </div>
);

export default Services;