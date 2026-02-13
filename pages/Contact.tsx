
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry received. A specialist will reach out to you within 2 hours.");
  };

  return (
    <div className="py-24 px-4 bg-[#0b0b0b]">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Details */}
          <div>
            <h1 className="text-5xl font-black text-white mb-8 tracking-tight">Get In Touch.</h1>
            <p className="text-xl text-zinc-400 mb-16 font-medium leading-relaxed">
              We operate with high availability. Reach out via your preferred channel for an immediate response.
            </p>

            <div className="space-y-12">
              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-zinc-900 text-blue-500 rounded-2xl flex items-center justify-center text-2xl border border-zinc-800 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl">
                  📞
                </div>
                <div>
                  <h3 className="font-bold text-white uppercase tracking-widest text-xs opacity-60 mb-1">Direct Line</h3>
                  <a href={`tel:${BUSINESS_INFO.phone}`} className="text-blue-500 text-2xl hover:text-blue-400 font-black transition-colors">{BUSINESS_INFO.phone}</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-zinc-900 text-green-500 rounded-2xl flex items-center justify-center text-2xl border border-zinc-800 group-hover:bg-green-600 group-hover:text-white transition-all shadow-xl">
                  💬
                </div>
                <div>
                  <h3 className="font-bold text-white uppercase tracking-widest text-xs opacity-60 mb-1">WhatsApp Fast-Track</h3>
                  <a 
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`} 
                    className="text-green-500 text-2xl hover:text-green-400 font-black transition-colors"
                  >
                    Open Messenger
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-16 h-16 bg-zinc-900 text-zinc-400 rounded-2xl flex items-center justify-center text-2xl border border-zinc-800 group-hover:bg-zinc-700 group-hover:text-white transition-all shadow-xl">
                  📍
                </div>
                <div>
                  <h3 className="font-bold text-white uppercase tracking-widest text-xs opacity-60 mb-1">Base of Operations</h3>
                  <p className="text-zinc-200 text-xl font-bold">{BUSINESS_INFO.location} & NCR</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-10 bg-zinc-900 rounded-3xl border border-zinc-800 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 text-8xl grayscale">🇮🇳</div>
              <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Regional Availability:</h3>
              <p className="text-zinc-400 leading-relaxed relative z-10 font-medium">
                Active deployments across <span className="text-white">Delhi, Noida, Gurgaon, & Ghaziabad</span>. On-site consultations available for high-scale retail projects.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900/50 p-10 md:p-14 rounded-3xl border border-zinc-800 shadow-3xl">
            <h2 className="text-3xl font-bold text-white mb-10 tracking-tight">Project Inquiry.</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-zinc-950 px-6 py-5 border border-zinc-800 rounded-xl text-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none placeholder:text-zinc-700 transition"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Contact Number</label>
                <input 
                  type="tel" 
                  required
                  placeholder="e.g. +91 93059 72687"
                  className="w-full bg-zinc-950 px-6 py-5 border border-zinc-800 rounded-xl text-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none placeholder:text-zinc-700 transition"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Venture Type</label>
                <select className="w-full bg-zinc-950 px-6 py-5 border border-zinc-800 rounded-xl text-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none appearance-none transition cursor-pointer">
                  <option className="bg-zinc-900">Coaching / Educational</option>
                  <option className="bg-zinc-900">Medical / Clinic</option>
                  <option className="bg-zinc-900">Automotive Showroom</option>
                  <option className="bg-zinc-900">Retail Store</option>
                  <option className="bg-zinc-900">Service Professional</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest ml-1">Strategic Goals</label>
                <textarea 
                  rows={4}
                  placeholder="Describe your vision for the website..."
                  className="w-full bg-zinc-950 px-6 py-5 border border-zinc-800 rounded-xl text-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none placeholder:text-zinc-700 transition"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full py-5 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-500 transition shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:scale-[1.02] transform active:scale-95"
              >
                Submit Project Brief
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;