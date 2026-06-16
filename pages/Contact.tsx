
import React, { useState } from 'react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch("https://formspree.io/f/xyzabc123", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again or WhatsApp me directly.");
      }
    } catch (err) {
      setError("Failed to send. Please try again or WhatsApp me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="py-40 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-start">
          <div className="animate-fade-up">
            <h1 className="text-6xl md:text-[80px] lg:text-[100px] font-black tracking-tighter mb-12 leading-[0.9] text-white uppercase font-sans">
              GET YOUR <br/> <span className="text-blue-500">WEBSITE STARTED.</span>
            </h1>
            <p className="text-xl text-zinc-500 mb-24 font-medium leading-relaxed max-w-md">
              Fill the form below or WhatsApp me directly. I'll reply within a few hours.
            </p>

            <div className="space-y-20">
              <div className="group">
                <h3 className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.5em] mb-6">Call Me</h3>
                <a href="tel:+919305972687" className="text-4xl md:text-5xl font-black text-white hover:text-blue-500 transition-colors tracking-tighter">
                  +91 93059 72687
                </a>
              </div>
              
              <div className="group">
                <h3 className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.5em] mb-6">WhatsApp</h3>
                <a href="https://wa.me/919305972687" className="text-4xl md:text-5xl font-black text-white hover:text-blue-500 transition-colors tracking-tighter">
                  WhatsApp Chat
                </a>
              </div>

              <div className="group">
                <h3 className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.5em] mb-6">Location</h3>
                <p className="text-3xl font-black text-zinc-200 tracking-tighter">{BUSINESS_INFO.location}</p>
              </div>
            </div>
          </div>

          <div className="p-16 md:p-20 bg-zinc-900/30 backdrop-blur-3xl border border-white/5 rounded-[60px] shadow-3xl">
            <h2 className="text-4xl font-black text-white mb-16 tracking-tight">Tell Me About Your Business</h2>
            
            {isSubmitted ? (
              <div className="p-10 bg-emerald-500/10 border border-emerald-500/20 rounded-[32px] text-center text-emerald-400 font-bold text-xl leading-relaxed animate-fade-up">
                Thank you! I'll WhatsApp you within a few hours.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-zinc-600 uppercase tracking-widest ml-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    placeholder="Your Full Name"
                    className="w-full bg-black/40 px-8 py-6 border border-white/5 rounded-[20px] text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-zinc-800 font-semibold"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-zinc-600 uppercase tracking-widest ml-1">Your WhatsApp Number</label>
                  <input 
                    type="tel" 
                    name="whatsapp_number"
                    required
                    placeholder="Contact Number"
                    className="w-full bg-black/40 px-8 py-6 border border-white/5 rounded-[20px] text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-zinc-800 font-semibold"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-black text-zinc-600 uppercase tracking-widest ml-1">Tell me about your business and what you need</label>
                  <textarea 
                    rows={4}
                    name="message"
                    required
                    placeholder="Example: I run a coaching institute in Delhi and need a website with 5 pages, WhatsApp button, and course details"
                    className="w-full bg-black/40 px-8 py-6 border border-white/5 rounded-[20px] text-white focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder:text-zinc-800 font-semibold"
                  ></textarea>
                </div>
                
                {error && (
                  <p className="text-red-400 text-sm font-semibold">{error}</p>
                )}

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-7 bg-white text-black font-black rounded-[24px] text-lg hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-2xl active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send on WhatsApp"}
                </button>
              </form>
            )}

            {/* Direct WhatsApp Action Button underneath the form */}
            <div className="mt-8 pt-8 border-t border-white/5">
              <a 
                href="https://wa.me/919305972687?text=Hi%20Divyansh%2C%20I%20want%20a%20website%20for%20my%20business"
                target="_blank"
                rel="noreferrer"
                className="block w-full text-center py-6 bg-emerald-600/10 hover:bg-emerald-600/20 text-emerald-400 border border-emerald-500/20 rounded-[24px] font-black text-base transition-all duration-300 active:scale-95"
              >
                Or WhatsApp Me Directly →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;