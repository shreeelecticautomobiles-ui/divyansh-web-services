
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="py-40 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          <div className="animate-fade-up">
            <h1 className="text-6xl md:text-[120px] font-black tracking-tighter mb-12 leading-[0.8] text-white">
              CONNECT <br/> <span className="text-blue-500">ENGINEERING.</span>
            </h1>
            <p className="text-xl text-zinc-500 mb-24 font-medium leading-relaxed max-w-md">We value direct communication. Skip the sales teams. Talk to the engineers building your future.</p>

            <div className="space-y-20">
              <div className="group">
                <h3 className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.5em] mb-6">Voice / Direct</h3>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-4xl md:text-5xl font-black text-white hover:text-blue-500 transition-colors tracking-tighter">{BUSINESS_INFO.phone}</a>
              </div>
              
              <div className="group">
                <h3 className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.5em] mb-6">Messenger / Quick</h3>
                <a href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} className="text-4xl md:text-5xl font-black text-white hover:text-blue-500 transition-colors tracking-tighter">WhatsApp Chat</a>
              </div>

              <div className="group">
                <h3 className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.5em] mb-6">Global Hub</h3>
                <p className="text-3xl font-black text-zinc-200 tracking-tighter">{BUSINESS_INFO.location}</p>
              </div>
            </div>
          </div>

          <div className="p-16 md:p-20 bg-zinc-900/30 backdrop-blur-3xl border border-white/5 rounded-[60px] shadow-3xl">
            <h2 className="text-4xl font-black text-white mb-16 tracking-tight">Project Inquiry</h2>
            <form className="space-y-10">
              <div className="space-y-3">
                <label className="text-[11px] font-black text-zinc-600 uppercase tracking-widest ml-1">Identity</label>
                <input 
                  type="text" 
                  placeholder="Your Full Name"
                  className="w-full bg-black/40 px-8 py-6 border border-white/5 rounded-[20px] text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-zinc-800 font-semibold"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black text-zinc-600 uppercase tracking-widest ml-1">Reach</label>
                <input 
                  type="tel" 
                  placeholder="Contact Number"
                  className="w-full bg-black/40 px-8 py-6 border border-white/5 rounded-[20px] text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-zinc-800 font-semibold"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-black text-zinc-600 uppercase tracking-widest ml-1">The Vision</label>
                <textarea 
                  rows={4}
                  placeholder="Describe your project brief..."
                  className="w-full bg-black/40 px-8 py-6 border border-white/5 rounded-[20px] text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-zinc-800 font-semibold"
                ></textarea>
              </div>
              <button 
                type="button"
                onClick={() => alert("Strategic inquiry successfully dispatched. Expected response: < 2 hours.")}
                className="w-full py-7 bg-white text-black font-black rounded-[24px] text-lg hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-2xl active:scale-95"
              >
                Send Strategic Brief
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;