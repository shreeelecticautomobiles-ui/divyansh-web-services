
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Demos: React.FC = () => {
  const demos = [
    {
      type: "Education",
      title: "Divyansh Coaching",
      url: "https://divyansh-coaching-lvg6.vercel.app/",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1000",
    },
    {
      type: "Fitness",
      title: "Powerzone Gym",
      url: "https://powerzone-gym.vercel.app/",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000",
    },
    {
      type: "Lifestyle",
      title: "Wow Unisex Saloon",
      url: "https://wow-unisex-saloon.vercel.app/",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000",
    },
    {
      type: "Health",
      title: "Raj Health Clinic",
      url: "https://raj-health-clinic.vercel.app/",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000",
    },
    {
      type: "Dental",
      title: "Bhagwat Dental Clinic",
      url: "https://bhagwat-dental-clinic.vercel.app/",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000",
    },
    {
      type: "Automotive",
      title: "Shree Electric Automobiles",
      url: "https://shreeelectric.in/",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1000",
    }
  ];

  return (
    <div className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-24">
          <div className="max-w-xl">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter">Case Files<span className="text-blue-500">.</span></h1>
            <p className="text-xl text-zinc-500 font-medium">A curated showcase of our high-performance deployments.</p>
          </div>
          <div className="flex gap-4">
             <div className="px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-full text-[11px] font-black uppercase tracking-widest text-zinc-500">Total Deployments: 120+</div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {demos.map((demo, idx) => (
            <div key={idx} className="group relative bg-zinc-900/40 rounded-[40px] overflow-hidden border border-zinc-800/50 transition-all duration-700 hover:border-blue-500/50">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={demo.image} 
                  alt={demo.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-105 brightness-[0.7] group-hover:brightness-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                  <div>
                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] mb-3 block">{demo.type}</span>
                    <h3 className="text-3xl font-black text-white tracking-tight">{demo.title}</h3>
                  </div>
                  <a 
                    href={demo.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-2xl"
                  >
                    ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-40 p-16 md:p-24 bg-zinc-900/30 backdrop-blur-3xl border border-zinc-800 rounded-[64px] text-center overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tighter">Your project, next.</h2>
          <p className="text-xl text-zinc-500 mb-16 max-w-xl mx-auto font-medium leading-relaxed">Let's discuss how we can build your brand's digital legacy.</p>
          <a 
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
            className="inline-flex items-center gap-4 px-12 py-6 bg-blue-600 text-white rounded-3xl font-black text-xl hover:bg-blue-500 transition-all duration-500 hover:scale-105 shadow-2xl shadow-blue-600/20"
          >
            Initiate Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Demos;