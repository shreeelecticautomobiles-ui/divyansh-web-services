
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Demos: React.FC = () => {
  const demos = [
    {
      type: "EDUCATION",
      title: "English Journey Institute",
      url: "https://englishjourneyinstitute.in/",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1200",
      tag: "✅ Real Client · Education"
    },
    {
      type: "EDUCATION",
      title: "Skill Mentor Academy",
      url: "https://skillmentoracademy.com/",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
      tag: "✅ Real Client · Education"
    },
    {
      type: "AUTOMOBILES",
      title: "Shree Electric Automobiles",
      url: "https://shreeelectric.in/",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200",
      tag: "✅ Real Client · Automobiles"
    },
    {
      type: "HEALTHCARE",
      title: "Bhagwat Dental Clinic",
      url: "https://bhagwat-dental-clinic.vercel.app/",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200",
      tag: "✅ Real Client · Healthcare"
    },
    {
      type: "FITNESS",
      title: "Powerzone Gym",
      url: "https://powerzone-gym.vercel.app/",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200",
      tag: "Sample Design · Fitness"
    },
    {
      type: "HEALTHCARE",
      title: "Raj Health Clinic",
      url: "https://raj-health-clinic.vercel.app/",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1200",
      tag: "Sample Design · Healthcare"
    },
    {
      type: "SALOON",
      title: "Wow Unisex Saloon",
      url: "https://wow-unisex-saloon.vercel.app/",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1200",
      tag: "Sample Design · Saloon"
    }
  ];

  return (
    <div className="pt-[20px] md:pt-[20px] pb-16 md:pb-40 px-4 md:px-6 max-w-full overflow-x-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-24 animate-fade-up px-2">
          <h1 className="text-[clamp(2.5rem,10vw,6rem)] md:text-9xl font-black tracking-tighter mb-6 leading-none text-white uppercase">
            OUR WORK<span className="text-blue-500">.</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-2xl font-semibold mb-6 leading-relaxed">
            2 real client websites delivered in Delhi. Additional designs shown as samples.
          </p>
          <p className="text-zinc-400 text-sm font-semibold">
            👇 Click on any project below to view the live website
          </p>
        </div>

        {/* Demos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {demos.map((demo, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <a 
                href={demo.url} 
                target="_blank" 
                rel="noreferrer"
                aria-label={`View live demo website for ${demo.title}`}
                className="group relative block bg-zinc-900 rounded-[32px] md:rounded-[48px] overflow-hidden border-2 border-white/5 transition-all duration-500 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Highlight Tag */}
                {demo.tag && (
                  <div className={`absolute top-6 left-6 z-20 px-4 py-2 text-xs md:text-sm font-black rounded-full shadow-lg ${
                    demo.tag.includes('✅ Real Client') 
                      ? 'bg-emerald-600 text-white' 
                      : 'bg-zinc-800/95 text-zinc-300 border border-white/10 backdrop-blur-md'
                  }`}>
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

                  <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8 flex justify-between items-end transition-transform duration-500 group-hover:-translate-y-2">
                    <div>
                      <span className="text-[9px] md:text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] md:tracking-[0.4em] mb-1 md:mb-2 block">{demo.type}</span>
                      <h3 className="text-xl md:text-4xl font-black text-white tracking-tighter leading-tight">{demo.title}</h3>
                    </div>
                  </div>
                </div>

                {/* Visible Action Button for Mobile & Desktop Clarity */}
                <div className="p-4 md:p-8 bg-zinc-950/50 flex flex-col gap-4">
                  <div className="w-full py-4 md:py-5 bg-blue-600 text-white text-center font-black text-lg md:text-xl rounded-xl md:rounded-2xl transition-colors hover:bg-blue-500 shadow-lg shadow-blue-600/20">
                    View Live Demo
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 md:mt-32 p-6 md:p-24 bg-zinc-900 border border-white/5 rounded-3xl md:rounded-[64px] text-center relative overflow-hidden px-4 md:px-6">
          <h2 className="text-[clamp(1.8rem,8vw,4rem)] md:text-7xl font-black text-white mb-6 md:mb-8 tracking-tighter leading-none">WANT A WEBSITE <br className="hidden md:block"/> LIKE THESE?</h2>
          <p className="text-base md:text-xl text-zinc-400 mb-8 md:mb-12 max-w-xl mx-auto font-medium px-2">Get a professional, mobile-friendly website deployed in just 48 hours.</p>
          <div className="w-full max-w-md mx-auto">
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
              className="w-full inline-flex items-center justify-center gap-4 px-8 py-4 md:py-6 bg-blue-600 text-white rounded-xl md:rounded-2xl font-black text-lg md:text-2xl hover:bg-blue-500 transition-all duration-300 shadow-2xl shadow-blue-600/30 hover:scale-105"
            >
              Start Your Website Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demos;