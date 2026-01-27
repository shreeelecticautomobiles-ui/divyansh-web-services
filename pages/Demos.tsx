
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Demos: React.FC = () => {
  const demos = [
    {
      type: "Coaching Center",
      title: "Success Academy Demo",
      image: "https://picsum.photos/seed/coaching/600/400",
      features: ["Course Details", "Student Reviews", "Call to Action"]
    },
    {
      type: "Medical Clinic",
      title: "City Health Clinic Demo",
      image: "https://picsum.photos/seed/clinic/600/400",
      features: ["Doctor Info", "Service List", "Map Location"]
    },
    {
      type: "EV Showroom",
      title: "Eco Motors Showroom Demo",
      image: "https://picsum.photos/seed/ev/600/400",
      features: ["Model Showcase", "WhatsApp Inquiry", "Photo Gallery"]
    }
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sample Demo Websites</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a look at how your business website could look. These are sample layouts we can customize for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {demos.map((demo, idx) => (
            <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 group hover:shadow-lg transition">
              <div className="relative aspect-video">
                <img src={demo.image} alt={demo.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {demo.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{demo.title}</h3>
                <ul className="text-sm text-gray-600 mb-6 space-y-1">
                  {demo.features.map(f => <li key={f}>• {f}</li>)}
                </ul>
                <button 
                  onClick={() => alert("This is a placeholder for the demo site view. In a real scenario, this would link to a sub-domain demo.")}
                  className="w-full py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-lg group-hover:bg-blue-600 group-hover:text-white transition"
                >
                  View Demo
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center">
          <p className="text-blue-800 font-medium mb-4">
            "These are sample demo websites. Your website will be created using your own business name, details, and location."
          </p>
          <a 
            href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=I saw the demos and want to discuss my website.`}
            className="inline-block px-8 py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition"
          >
            Get Your Own Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default Demos;
