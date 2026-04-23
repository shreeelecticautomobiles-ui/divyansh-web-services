
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Demos: React.FC = () => {
  const demos = [
    {
      type: "EDUCATION",
      title: "Divyansh Coaching",
      url: "https://divyansh-coaching-lvg6.vercel.app/",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200",
      tag: "⭐ Best for Coaching Institutes",
      highlight: true
    },
    {
      type: "BUSINESS",
      title: "Shree Electric Automobiles",
      url: "https://shreeelectric.in/",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200",
      tag: "Perfect Business Website",
      highlight: true
    },
    {
      type: "FITNESS",
      title: "Powerzone Gym",
      url: "https://powerzone-gym.vercel.app/",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
      tag: "Modern Gym/Fitness Design",
      highlight: true
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
      type: "LIFESTYLE",
      title: "Wow Unisex Saloon",
      url: "https://wow-unisex-saloon.vercel.app/",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200",
    },
    {
      type: "MARKETING",
      title: "Divyansh Ads",
      url: "https://divyanshads.in/",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    }
  ];

  return (
    <div className="py-24 md:py-40 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24 animate-fade-up">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-none text-white">
            WEBSITE SAMPLES <br className="hidden md:block" />
            <span className="text-blue-500">(CLICK TO VIEW)</span>
          </h1>
          <p className="text-zinc-400 text-xl md:text-2xl font-semibold mb-12">
            👇 Click on any demo below to view the full website
          </p>
          
          {/* Quick Access for Coaching */}
          <div className="mb-12">
            <a 
              href={demos[0].url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-4 px-10 py-5 bg-green-600 hover:bg-green-500 text-white rounded-2xl font-black text-xl md:text-2xl transition-all duration-300 shadow-xl shadow-green-600/20 hover:scale-105"
            >
              🏫 For Coaching Institutes – Click here
            </a>
          </div>
        </div>

        {/* Demos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {demos.map((demo, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <a 
                href={demo.url} 
                target="_blank" 
                rel="noreferrer"
                className="group relative block bg-zinc-900 rounded-[32px] md:rounded-[48px] overflow-hidden border-2 border-white/5 transition-all duration-500 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Highlight Tag */}
                {demo.tag && (
                  <div className="absolute top-6 left-6 z-20 px-4 py-2 bg-blue-600 text-white text-xs md:text-sm font-black rounded-full shadow-lg">
                    {demo.tag}
                  </div>
                )}

                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={demo.image} 
                    alt={demo.title} 
                    className="w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-110 brightness-[0.7] group-hover:brightness-100" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 transition-opacity group-hover:opacity-60"></div>
                  
                  {/* Action Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                     <div className="px-8 py-4 bg-white text-black font-black text-xl rounded-2xl transform scale-90 group-hover:scale-100 transition-transform">
                        Open Website ↗
                     </div>
                  </div>

                  <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end transition-transform duration-500 group-hover:-translate-y-2">
                    <div>
                      <span className="text-[10px] font-black text-blue-400 uppercase tracking-[0.4em] mb-2 block">{demo.type}</span>
                      <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter leading-tight">{demo.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Visible Action Button for Mobile & Desktop Clarity */}
                <div className="p-8 bg-zinc-950/50 flex flex-col gap-4">
                  <div className="w-full py-5 bg-blue-600 text-white text-center font-black text-xl rounded-2xl transition-colors hover:bg-blue-500 shadow-lg shadow-blue-600/20">
                    View Live Demo
                  </div>
                </div>
              </a>
              
              {/* Direct Link text */}
              <div className="px-4">
                <a 
                  href={demo.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="text-zinc-500 hover:text-blue-500 font-medium break-all transition-colors inline-flex items-center gap-2"
                >
                  🔗 Live Link: <span className="underline">{demo.url}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 p-12 md:p-24 bg-zinc-900 border border-white/5 rounded-[40px] md:rounded-[64px] text-center relative overflow-hidden">
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">WANT A WEBSITE <br/> LIKE THESE?</h2>
          <p className="text-lg md:text-xl text-zinc-500 mb-12 max-w-xl mx-auto font-medium">Get a professional, mobile-friendly website deployed in just 48 hours.</p>
          <a 
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
            className="inline-flex items-center gap-6 px-12 py-6 bg-blue-600 text-white rounded-2xl font-black text-xl md:text-2xl hover:bg-blue-500 transition-all duration-300 shadow-2xl shadow-blue-600/30 hover:scale-105"
          >
            Start Your Website Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Demos;