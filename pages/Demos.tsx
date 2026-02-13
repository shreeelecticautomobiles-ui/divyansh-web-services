
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Demos: React.FC = () => {
  const demos = [
    {
      type: "EDUCATION",
      title: "Divyansh Coaching",
      url: "https://divyansh-coaching-lvg6.vercel.app/",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200",
    },
    {
      type: "FITNESS",
      title: "Powerzone Gym",
      url: "https://powerzone-gym.vercel.app/",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
    },
    {
      type: "LIFESTYLE",
      title: "Wow Unisex Saloon",
      url: "https://wow-unisex-saloon.vercel.app/",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200",
    },
    {
      type: "HEALTHCARE",
      title: "Raj Health Clinic",
      url: "https://raj-health-clinic.vercel.app/",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
    },
    {
      type: "DENTAL",
      title: "Bhagwat Dental Clinic",
      url: "https://bhagwat-dental-clinic.vercel.app/",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200",
    },
    {
      type: "AUTOMOTIVE",
      title: "Shree Electric Automobiles",
      url: "https://shreeelectric.in/",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200",
    }
  ];

  return (
    <div className="py-40 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32 animate-fade-up">
          <div className="max-w-xl">
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-none">THE ARCHIVE<span className="text-blue-500">.</span></h1>
            <p className="text-zinc-500 text-xl font-medium leading-relaxed">Evidence of our commitment to digital excellence. No templates, just pure custom engineering.</p>
          </div>
          <div className="px-8 py-4 bg-zinc-900 border border-white/5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">
            Total Live Projects: 120+
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {demos.map((demo, idx) => (
            <div key={idx} className="group relative bg-zinc-900 rounded-[48px] overflow-hidden border border-white/5 transition-all duration-700 hover:border-blue-500/50 hover:-translate-y-4">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={demo.image} 
                  alt={demo.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 grayscale-[40%] group-hover:grayscale-0 brightness-[0.6] group-hover:brightness-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                
                <div className="absolute bottom-12 left-12 right-12 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.5em] mb-4 block">{demo.type}</span>
                    <h3 className="text-4xl font-black text-white tracking-tighter">{demo.title}</h3>
                  </div>
                  <a 
                    href={demo.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-black text-3xl transition-all duration-500 hover:bg-blue-600 hover:text-white group-hover:rotate-45 shadow-2xl"
                  >
                    ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-40 p-24 bg-zinc-900/40 backdrop-blur-3xl border border-white/5 rounded-[64px] text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-40"></div>
          <h2 className="text-5xl md:text-8xl font-black text-white mb-12 tracking-tighter leading-none">NEXT LEVEL?</h2>
          <p className="text-xl text-zinc-500 mb-20 max-w-xl mx-auto font-medium">Your business deserves the agency standard. Let's discuss your deployment.</p>
          <a 
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
            className="inline-flex items-center gap-6 px-14 py-7 bg-blue-600 text-white rounded-[20px] font-black text-2xl hover:bg-blue-500 transition-all duration-500 shadow-2xl shadow-blue-600/30"
          >
            Start Project Discussion
          </a>
        </div>
      </div>
    </div>
  );
};

export default Demos;