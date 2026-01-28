
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
      type: "Medical Clinic",
      title: "Raj Health Clinic",
      url: "https://raj-health-clinic.vercel.app/",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600",
      features: ["Doctor Schedules", "Service List", "Clinic Location Map"]
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
    <div className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Recent Projects</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at real websites we have built for local businesses. These are live examples of our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {demos.map((demo, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={demo.image} 
                  alt={demo.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-md">
                  {demo.type}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{demo.title}</h3>
                <ul className="text-sm text-gray-600 mb-8 space-y-2 flex-grow">
                  {demo.features.map(f => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="text-blue-500">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a 
                  href={demo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-lg hover:bg-blue-600 hover:text-white transition-colors duration-200"
                >
                  View Live Site
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-2xl p-8 md:p-12 text-center text-white shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Want a professional website like these?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            We can build a high-quality website for your business with custom branding and direct contact buttons.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I saw your recent projects and want a website for my business.`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white rounded-xl font-bold text-lg hover:bg-green-600 transition shadow-lg"
            >
              💬 Chat on WhatsApp
            </a>
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-xl font-bold text-lg hover:bg-gray-100 transition shadow-lg"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demos;
