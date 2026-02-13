
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Demos: React.FC = () => {
  const demos = [
    {
      type: "Coaching Center",
      title: "Divyansh Coaching",
      url: "https://divyansh-coaching-lvg6.vercel.app/",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600",
      features: ["Course Management", "Teacher Profiles", "Direct WhatsApp Inquiry"]
    },
    {
      type: "Fitness Center",
      title: "Powerzone Gym",
      url: "https://powerzone-gym.vercel.app/",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600",
      features: ["Membership Plans", "Trainer Showcases", "Facility Gallery"]
    },
    {
      type: "Saloon & Spa",
      title: "Wow Unisex Saloon",
      url: "https://wow-unisex-saloon.vercel.app/",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=600",
      features: ["Service Pricing", "Special Offers", "Style Gallery"]
    },
    {
      type: "Medical Clinic",
      title: "Raj Health Clinic",
      url: "https://raj-health-clinic.vercel.app/",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600",
      features: ["Doctor Schedules", "Service List", "Clinic Location Map"]
    },
    {
      type: "Dental Clinic",
      title: "Bhagwat Dental Clinic",
      url: "https://bhagwat-dental-clinic.vercel.app/",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600",
      features: ["Appointment Requests", "Service Gallery", "Expert Dental Care Info"]
    },
    {
      type: "EV Showroom",
      title: "Shree Electric Automobiles",
      url: "https://shreeelectric.in/",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=600",
      features: ["Vehicle Catalog", "Finance Options", "Test Drive Booking"]
    }
  ];

  return (
    <div className="py-24 px-4 bg-[#0b0b0b]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-extrabold text-white mb-6">Our Masterpieces</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Live digital storefronts that are currently driving growth for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {demos.map((demo, idx) => (
            <div key={idx} className="bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 flex flex-col group hover:border-blue-500/50 transition-all">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={demo.image} 
                  alt={demo.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-[0.8] group-hover:brightness-100" 
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  {demo.type}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{demo.title}</h3>
                <ul className="text-sm text-zinc-400 mb-8 space-y-3 flex-grow">
                  {demo.features.map(f => (
                    <li key={f} className="flex items-center gap-3">
                      <span className="text-blue-500 font-bold">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a 
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-4 bg-zinc-800 text-white font-extrabold rounded-xl border border-zinc-700 hover:bg-zinc-700 transition active:scale-95"
                >
                  Explore Site
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-3xl p-10 md:p-20 text-center text-white shadow-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Ready for your digital transformation?</h2>
            <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto font-medium">
              Join the elite league of local businesses that lead with professional digital assets.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I saw your recent projects and want a website for my business.`}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-green-500 text-white rounded-xl font-black text-lg hover:bg-green-600 transition hover:scale-105 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
              >
                💬 WhatsApp Discussion
              </a>
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-blue-800 rounded-xl font-black text-lg hover:bg-zinc-100 transition hover:scale-105 shadow-xl"
              >
                📞 Direct Phone Line
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demos;