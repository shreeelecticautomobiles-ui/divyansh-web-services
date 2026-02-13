
import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9]">Talk to<br/><span className="text-blue-500">Engineering.</span></h1>
            <p className="text-xl text-zinc-500 mb-20 font-medium leading-relaxed max-w-md">We avoid middle-men. Talk directly to the team building your future.</p>

            <div className="space-y-16">
              <ContactInfo label="Voice Support" value={BUSINESS_INFO.phone} href={`tel:${BUSINESS_INFO.phone}`} />
              <ContactInfo label="Instant Message" value="WhatsApp Messenger" href={`https://wa.me/${BUSINESS_INFO.whatsapp}`} />
              <ContactInfo label="Headquarters" value={BUSINESS_INFO.location} href="#" />
            </div>
          </div>

          <div className="p-12 md:p-16 bg-zinc-900/30 backdrop-blur-3xl border border-zinc-800 rounded-[48px] shadow-3xl">
            <h2 className="text-3xl font-bold text-white mb-12 tracking-tight">Project Inquiry</h2>
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest ml-1">Identity</label>
                <input 
                  type="text" 
                  placeholder="Your Full Name"
                  className="w-full bg-black/40 px-6 py-5 border border-zinc-800 rounded-2xl text-white focus:ring-1 focus:ring-blue-500 outline-none transition placeholder:text-zinc-800"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest ml-1">Contact</label>
                <input 
                  type="tel" 
                  placeholder="Phone or WhatsApp Number"
                  className="w-full bg-black/40 px-6 py-5 border border-zinc-800 rounded-2xl text-white focus:ring-1 focus:ring-blue-500 outline-none transition placeholder:text-zinc-800"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest ml-1">Brief</label>
                <textarea 
                  rows={4}
                  placeholder="Describe your vision..."
                  className="w-full bg-black/40 px-6 py-5 border border-zinc-800 rounded-2xl text-white focus:ring-1 focus:ring-blue-500 outline-none transition placeholder:text-zinc-800"
                ></textarea>
              </div>
              <button 
                type="button"
                onClick={() => alert("Strategic inquiry sent. We will respond within 2 hours.")}
                className="w-full py-6 bg-white text-black font-black rounded-3xl hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-xl active:scale-95"
              >
                Send Strategic Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactInfo = ({ label, value, href }: any) => (
  <div className="group">
    <h3 className="text-[10px] font-black text-zinc-700 uppercase tracking-widest mb-3">{label}</h3>
    <a href={href} className="text-3xl font-black text-white hover:text-blue-500 transition-colors tracking-tight">{value}</a>
  </div>
);

export default Contact;